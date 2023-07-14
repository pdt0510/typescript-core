import 'reflect-metadata';

export function entity(name: string) {
	return function (constructor: Function) {
		console.log('constructor ---', constructor); //class Person extends...
		Reflect.defineMetadata('entity:name', name, constructor); //32ss, xx13,
	};
}

// 1m17ss
export function persist(target: any, propertyKey: string) {
	let objectProperties: string[] = Reflect.getMetadata('entity:properties', target) || [];

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

// 1m45ss
export function id(target: any, propertyKey: string) {
	// xx9
	console.log('target ---', target);
	console.log('propertyKey ---', propertyKey);
	Reflect.defineMetadata('entity:id', propertyKey, target);
}
