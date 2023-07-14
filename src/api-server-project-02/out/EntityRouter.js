"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const uuid = __importStar(require("uuid"));
const express_1 = __importDefault(require("express"));
const BaseEntity_1 = require("./entities/BaseEntity");
class EntityRouter {
    // 6ms28ss
    constructor(className, classRef) {
        this.className = className;
        this.classRef = classRef;
        console.log('nameClass ---', className);
        this._router = express_1.default.Router();
        this.addEntityRoutes();
    }
    get router() {
        return this._router;
    }
    addEntityRoutes() {
        // CREATE, xx6
        this._router.post('/', (req, res) => {
            this.createEntity(req, res);
        });
        // READ all, xx6
        this._router.get('/', (req, res) => {
            this.fetchAllEntities(req, res);
        });
        // READ one
        this._router.get('/:id', (req, res) => {
            this.fetchEntity(req, res);
        });
        // UPDATE
        this._router.put('/:id', (req, res) => {
            this.updateEntity(req, res);
        });
        // DELETE
        this._router.delete('/:id', (req, res) => {
            this.deleteEntity(req, res);
        });
    }
    fetchAllEntities(req, res) {
        let data = {};
        data = app_1.db.getData(`/${this.className}`);
        res.json(data);
    }
    fetchEntity(req, res) {
        let data = {};
        data = app_1.db.getData(`/${this.className}/${req.params.id}`);
        res.json(data);
    }
    // 4ms14ss
    createEntity(req, res) {
        console.log('this.classRef ---', this.classRef);
        let newEntity = BaseEntity_1.EntityFactory.fromPersistenceObject(req.body, this.classRef);
        console.log('newEntity ---', newEntity);
        const idProperty = Reflect.getMetadata('entity:id', newEntity);
        newEntity[idProperty] = uuid.v4();
        app_1.db.push(`/${this.className}/${newEntity[idProperty]}`, newEntity.getPersistenceObject()); //POST new obj
        res.status(200).json(newEntity); //return new obj to client
    }
    // 5ms45ss
    updateEntity(req, res) {
        // checking the entity exist with ID
        let data = {};
        try {
            data = app_1.db.getData(`/${this.className}/${req.params.id}`);
        }
        catch (err) {
            res.status(404).json({ error: 'Object does not exist' });
            return;
        }
        // Update Object with new values
        let updatedData = req.body;
        let updatedObj = BaseEntity_1.EntityFactory.fromPersistenceObject(data, this.classRef);
        const propKeys = Object.keys(updatedData);
        for (const propKey of propKeys) {
            updatedObj[propKey] = updatedData[propKey];
        }
        // Save and Return data
        app_1.db.push(`/${this.className}/${req.params.id}`, updatedData, false);
        data = app_1.db.getData(`/${this.className}/${req.params.id}`);
        res.json(data);
    }
    deleteEntity(req, res) {
        app_1.db.delete(`/${this.className}/${req.params.id}`);
        res.json({});
    }
}
exports.default = EntityRouter;
//# sourceMappingURL=EntityRouter.js.map