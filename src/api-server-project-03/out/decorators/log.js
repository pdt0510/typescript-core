"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRoute = exports.logRoute2 = void 0;
function logRoute2() {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value; //1m27ss
        descriptor.value = function (...args) {
            let req = args[0]; //1m09ss
            let res = args[1];
            console.log('req ---', req);
            console.log('res ---', res);
            original.apply(this, args); //1m37ss
            console.log('original ---', original);
            // 1m46ss
            console.log(`${req.ip} [${new Date().toISOString()}] ${req.hostname} ${req.originalUrl} ${req.method} ${res.statusCode} ${res.statusMessage} HTTP/${req.httpVersion}`);
            if (['PUT', 'POST'].indexOf(req.method) > -1) {
                console.log(`\tBODY: ${JSON.stringify(req.body)}`);
            }
        };
    };
}
exports.logRoute2 = logRoute2;
// 38ss
function logRoute(target, propertyKey, descriptor) {
    const original = descriptor.value; //1m27ss
    // console.log('original ---', original);
    descriptor.value = function (...args) {
        let req = args[0]; //1m09ss
        let res = args[1];
        original.apply(this, args); //1m37ss
        // 1m46ss, xx7
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