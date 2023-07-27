"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = require("../app");
// 3ms32ss
function auth(requiredRole) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const req = args[0];
            const res = args[1];
            const entity = req.baseUrl.replace('/', '');
            console.log('req.baseUrl ---', req.baseUrl);
            console.log('entity ---', entity); //people
            console.log('req.headers ---', req.headers);
            const authHeader = req.headers.authorization;
            // Did user pass in authentication
            if (!authHeader) {
                res.status(403).send('Not Authorized');
                return;
            }
            // Is this a valid user with a valid password
            if (!isValidUser(authHeader)) {
                res.status(403).send('Invalid User');
                return;
            }
            // Does user possess the correct role
            if (!doesUserHavePermissions(entity, requiredRole, authHeader)) {
                res.status(403).send('User Does Not Have Permission');
                return;
            }
            original.apply(this, args);
        };
    };
}
exports.auth = auth;
// 1m52ss
function getUserDetails(authHeader) {
    const base64Auth = (authHeader || '').split(' ')[1] || '';
    console.log('authHeader ---', authHeader);
    const strauth = Buffer.from(base64Auth, 'base64').toString(); //Basic ZGF2aWQ6bXlwYXNzd29yZA==
    console.log('strauth ---', strauth); //username:password
    const splitIndex = strauth.indexOf(':');
    const username = strauth.substring(0, splitIndex);
    const password = strauth.substring(splitIndex + 1);
    return {
        username: username,
        password: password,
    };
}
// 2ms31ss
function isValidUser(authHeader) {
    const details = getUserDetails(authHeader);
    const users = app_1.db.getData(`/users`);
    console.log('users, typeof ---', users, typeof users);
    if (!users.hasOwnProperty(details.username)) {
        return false;
    }
    if (users[details.username].password !== details.password) {
        return false;
    }
    return true;
}
// 2ms59ss
function doesUserHavePermissions(entityName, requiredRole, authHeader) {
    const users = app_1.db.getData(`/users`);
    const details = getUserDetails(authHeader);
    const userRoles = users[details.username].permissions[entityName];
    if (!userRoles) {
        return false;
    }
    console.log('userRoles ---', userRoles);
    console.log('requiredRole ---', requiredRole);
    console.log('userRoles.indexOf(requiredRole) ---', userRoles.indexOf(requiredRole));
    if (userRoles && userRoles.indexOf(requiredRole) > -1) {
        return true;
    }
    return false;
}
//# sourceMappingURL=authentication.js.map