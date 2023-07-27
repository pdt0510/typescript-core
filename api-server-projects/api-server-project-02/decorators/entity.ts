import 'reflect-metadata';

// 32ss,xx6
export function entity(name: string) {
	return function (constructor: Function) {
		console.log('constructor ---', constructor); //class Person extends...
		Reflect.defineMetadata('entity:name', name, constructor); //xx13
	};
}

// 1m17ss
export function persist(target: any, propertyKey: string) {
	// 2ms40ss
	let objectProperties: string[] = Reflect.getMetadata('entity:properties', target) || [];

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

// 1m45ss
export function id(target: any, propertyKey: string) {
	console.log('id Fn ------------');
	console.log('target ---', target);
	console.log('propertyKey ---', propertyKey);
	Reflect.defineMetadata('entity:id', propertyKey, target); //2ms40ss
}
