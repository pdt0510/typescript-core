"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = exports.persist = exports.entity = void 0;
require("reflect-metadata");
function entity(name) {
    return function (constructor) {
        Reflect.defineMetadata('entityTai:name', name, constructor);
    };
}
exports.entity = entity;
function persist(target, propertyKey) {
    console.log('persist fn ------------'); //xx9
    let objectProperties = Reflect.getMetadata('entityTai:ClassProperties', target) || [];
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        Reflect.defineMetadata('entityTai:ClassProperties', objectProperties, target);
    }
}
exports.persist = persist;
function id(target, propertyKey) {
    Reflect.defineMetadata('entityTai:id', propertyKey, target);
}
exports.id = id;
//# sourceMappingURL=entity.js.map