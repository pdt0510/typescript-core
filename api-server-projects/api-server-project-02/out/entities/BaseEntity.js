"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityFactory = void 0;
require("reflect-metadata");
class EntityFactory {
    // 2ms40ss
    static fromPersistenceObject(obj, type) {
        let output = new type(); //xx11
        const persistedProperties = Reflect.getMetadata('entity:properties', output) || [];
        const idProperty = Reflect.getMetadata('entity:id', output);
        const props = Object.keys(obj);
        console.log('fromPersistenceObject Fn ---------------');
        console.log('persistedProperties ---', persistedProperties);
        console.log('output 1 ---', output); //instance of Person class
        console.log('idProperty ---', idProperty);
        console.log('props ---', props);
        for (const prop of props) {
            if (persistedProperties.includes(prop) || prop == idProperty) {
                output[prop] = obj[prop];
                console.log('output 2 ---', output);
            }
            else {
                throw new Error('Property not defined in class.');
            }
        }
        console.log('output result ---', output);
        return output;
    }
}
exports.EntityFactory = EntityFactory;
class BaseEntity {
    // 3ms41ss
    getPersistenceObject() {
        let output = {};
        const persistedProperties = Reflect.getMetadata('entity:properties', this);
        const idProperty = Reflect.getMetadata('entity:id', this);
        output[idProperty] = this[idProperty];
        console.log('getPersistenceObject Fn ---------------');
        console.log('output ---', output);
        console.log('persistedProperties ---', persistedProperties);
        console.log('this ---', this); //Person class
        console.log('idProperty ---', idProperty);
        for (const prop of persistedProperties) {
            if (this[prop]) {
                output[prop] = this[prop];
            }
        }
        console.log('output result ---', output);
        return output;
    }
}
exports.default = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map