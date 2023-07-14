import 'reflect-metadata';

export function entity(name: string) {
	return function (constructor: Function) {
		Reflect.defineMetadata('entityTai:name', name, constructor); //xx10, xx12
	};
}

export function persist(target: any, propertyKey: string) {
	let objectProperties: string[] = Reflect.getMetadata('entityTai:ClassProperties', target) || []; //xx10

	if (!objectProperties.includes(propertyKey)) {
		objectProperties.push(propertyKey);
		Reflect.defineMetadata('entityTai:ClassProperties', objectProperties, target); //xx10
	}
}

export function id(target: any, propertyKey: string) {
	Reflect.defineMetadata('entityTai:id', propertyKey, target); //xx10, xx12
}
