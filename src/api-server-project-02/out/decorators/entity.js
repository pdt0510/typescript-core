"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = exports.persist = exports.entity = void 0;
require("reflect-metadata");
function entity(name) {
    return function (constructor) {
        console.log('constructor ---', constructor); //class Person extends...
        Reflect.defineMetadata('entity:name', name, constructor); //32ss, xx13
    };
}
exports.entity = entity;
// 1m17ss
function persist(target, propertyKey) {
    let objectProperties = Reflect.getMetadata('entity:properties', target) || [];
    // xx9
    console.log('target ---', target); // -> BaseEntity
    console.log('propertyKey ---', propertyKey); // -> a single property field from Person
    console.log('objectProperties ---', objectProperties); //get existed Person all properties
    //comparing
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        console.log('objectProperties 2 ---', objectProperties);
        Reflect.defineMetadata('entity:properties', objectProperties, target);
    }
}
exports.persist = persist;
// 1m45ss
function id(target, propertyKey) {
    // xx9
    console.log('target ---', target);
    console.log('propertyKey ---', propertyKey);
    Reflect.defineMetadata('entity:id', propertyKey, target);
}
exports.id = id;
//# sourceMappingURL=entity.js.map