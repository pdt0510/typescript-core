import 'reflect-metadata';

export type EntityTypeInstance<T> = new (...args: any[]) => T;

export class EntityFactory {
	static fromPersistenceObject<T extends IEntity>(obj: Object, type: EntityTypeInstance<T>): T {
		let output = new type();
		const persistedProperties: string[] =
			Reflect.getMetadata('entityTai:ClassProperties', output) || []; //xx10
		const idProperty = Reflect.getMetadata('entityTai:id', output); //xx10
		const props = Object.keys(obj);

		for (const prop of props) {
			if (persistedProperties.includes(prop) || prop == idProperty) {
				output[prop] = obj[prop];
			} else {
				throw new Error('Property not defined in class.');
			}
		}
		return output;
	}
}

export interface IEntity {
	getPersistenceObject(): any;
}

export default class BaseEntity implements IEntity {
	getPersistenceObject(): any {
		let output = {};
		const persistedProperties = Reflect.getMetadata('entityTai:ClassProperties', this); //xx10
		const idProperty = Reflect.getMetadata('entityTai:id', this); //xx10, xx12
		output[idProperty] = this[idProperty];

		for (const prop of persistedProperties) {
			if (this[prop]) {
				output[prop] = this[prop];
			}
		}
		return output;
	}
}
