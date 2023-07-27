"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = exports.persist = exports.entity = void 0;
require("reflect-metadata");
// 32ss
function entity(name) {
    return function (constructor) {
        console.log('constructor ---', constructor); //class Person extends...
        Reflect.defineMetadata('entity:name', name, constructor); //xx13
    };
}
exports.entity = entity;
// 1m17ss
function persist(target, propertyKey) {
    // 2ms40ss
    let objectProperties = Reflect.getMetadata('entity:properties', target) || [];
    // xx9
    console.log('persist fn ---------------');
    console.log('target ---', target); //BaseEntity
    console.log('propertyKey ---', propertyKey); //get a property field related 'persist'
    console.log('objectProperties ---', objectProperties); //get all Person properties related 'persist'
    //comparing
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        console.log('objectProperties 2 ---', objectProperties);
        Reflect.defineMetadata('entity:properties', objectProperties, target); //2ms40ss
    }
}
exports.persist = persist;
// 1m45ss
function id(target, propertyKey) {
    console.log('id Fn ------------');
    console.log('target ---', target);
    console.log('propertyKey ---', propertyKey);
    Reflect.defineMetadata('entity:id', propertyKey, target); //2ms40ss
}
exports.id = id;
//# sourceMappingURL=entity.js.map