"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRoute = void 0;
function logRoute(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        let req = args[0];
        let res = args[1];
        original.apply(this, args);
        if (req != undefined && res != undefined) {
            console.log(`Request info ---\nip: ${req.ip}; \nToday: [${new Date().toISOString()}]; \nhostname: ${req.hostname}; \noriginalUrl:  ${req.originalUrl}; \nmethod: ${req.method}; \nstatusCode: ${res.statusCode}; \nstatusMessage:  ${res.statusMessage}; \nHTTP/: ${req.httpVersion}`);
            if (['PUT', 'POST'].indexOf(req.method) > -1) {
                console.log(`\nPut/Post BODY: ${JSON.stringify(req.body)}`);
            }
        }
    };
}
exports.logRoute = logRoute;
//# sourceMappingURL=log.js.map