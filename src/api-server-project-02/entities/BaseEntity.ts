import 'reflect-metadata';

//xx8, xx11
export type EntityTypeInstance<T> = new (...args: any[]) => T;

export class EntityFactory {
	// 2ms40ss
	static fromPersistenceObject<T extends IEntity>(obj: Object, type: EntityTypeInstance<T>): T {
		let output = new type(); //xx11
		const persistedProperties: string[] = Reflect.getMetadata('entity:properties', output) || [];
		const idProperty = Reflect.getMetadata('entity:id', output);
		const props = Object.keys(obj);

		console.log('from fromPersistenceObject ---------------');
		console.log('persistedProperties ---', persistedProperties);
		console.log('output 1 ---', output);
		console.log('idProperty ---', idProperty);
		console.log('props ---', props);

		for (const prop of props) {
			if (persistedProperties.includes(prop) || prop == idProperty) {
				output[prop] = obj[prop];
				console.log('output 2 ---', output);
			} else {
				throw new Error('Property not defined in class.');
			}
		}
		console.log('output result ---', output);
		return output;
	}
}

export interface IEntity {
	getPersistenceObject(): any;
}

export default class BaseEntity implements IEntity {
	// 3ms41ss
	getPersistenceObject(): any {
		let output = {};
		const persistedProperties = Reflect.getMetadata('entity:properties', this);
		const idProperty = Reflect.getMetadata('entity:id', this);
		output[idProperty] = this[idProperty];

		console.log('from getPersistenceObject ---------------');
		console.log('output ---', output);
		console.log('persistedProperties ---', persistedProperties);
		console.log('this ---', this);
		console.log('idProperty ---', idProperty);

		for (const prop of persistedProperties) {
			if (this[prop]) {
				output[prop] = this[prop];
			}
		}
		return output;
	}
}
