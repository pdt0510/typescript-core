"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const EntityRouter_1 = __importDefault(require("./EntityRouter"));
class APIServer {
    constructor() {
        this._app = express_1.default();
        // Set port
        this._app.set('port', process.env.PORT || 3000);
        // Add Middleware
        this.configureMiddleware();
    }
    get app() {
        return this._app;
    }
    get server() {
        return this._server;
    }
    configureMiddleware() {
        // Setup body parsing - required for POST requests
        this._app.use(body_parser_1.default.json());
        this._app.use(body_parser_1.default.urlencoded({ extended: true }));
        const objForTest = {
            firstName: 'David',
            lastName: 'Tucker',
            email: 'PDT123@gmail.com',
            age: 38,
            mobileNumber: '+123123',
            department: 'IT',
        };
        // Setup CORS
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
            res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization');
            next();
        });
    }
    // 6ms28ss
    addEntity(clazzEntryPoint) {
        const name = Reflect.getMetadata('entity:name', clazzEntryPoint);
        console.log('name ---', name); //people, ...
        console.log('clazz ---', clazzEntryPoint); //class Person extends BaseEntity, ...
        //auto generate routes
        let entityRouter = new EntityRouter_1.default(name, clazzEntryPoint);
        //apply routes from 'localhost/people'
        this._app.use(`/${name}`, entityRouter.router);
    }
    start() {
        // Start the server instance
        this._server = this._app.listen(this._app.get('port'), () => {
            console.log('Server is running on port: http://localhost:' + this._app.get('port'));
        });
    }
}
exports.default = APIServer;
//# sourceMappingURL=APIServer.js.map