import 'reflect-metadata';

export function entity(name: string) {
	return function (constructor: Function) {
		Reflect.defineMetadata('entityTai:name', name, constructor);
	};
}

export function persist(target: any, propertyKey: string) {
	console.log('persist fn ------------'); //xx9
	let objectProperties: string[] = Reflect.getMetadata('entityTai:ClassProperties', target) || [];

	if (!objectProperties.includes(propertyKey)) {
		objectProperties.push(propertyKey);
		Reflect.defineMetadata('entityTai:ClassProperties', objectProperties, target);
	}
}

export function id(target: any, propertyKey: string) {
	Reflect.defineMetadata('entityTai:id', propertyKey, target);
}
