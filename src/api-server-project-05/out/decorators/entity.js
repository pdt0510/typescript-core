"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = exports.persist = exports.entity = void 0;
require("reflect-metadata");
function entity(name) {
    return function (constructor) {
        Reflect.defineMetadata('entityTai:name', name, constructor); //xx10, xx12
    };
}
exports.entity = entity;
function persist(target, propertyKey) {
    let objectProperties = Reflect.getMetadata('entityTai:ClassProperties', target) || []; //xx10
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        Reflect.defineMetadata('entityTai:ClassProperties', objectProperties, target); //xx10
    }
}
exports.persist = persist;
function id(target, propertyKey) {
    Reflect.defineMetadata('entityTai:id', propertyKey, target); //xx10, xx12
}
exports.id = id;
//# sourceMappingURL=entity.js.map