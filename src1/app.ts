// 1m53ss, a decorator factory
function logClass(message: string): ClassDecorator {
	console.log(`${message} evaluated`);
	return function (constructor: Function): void {
		console.log(`${message} called`);
	};
}

// 2ms50ss
function logProperty(message: string): PropertyDecorator {
	console.log(`${message} evaluated`);
	return function (target: Object, propertyKey: string): void {
		console.log(`${message} called`);
	};
}

// 3ms28ss
function logMethod(message: string): MethodDecorator {
	console.log(`${message} evaluated`);
	return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
		console.log(`${message} called`);
	};
}

//3ms46ss
function logParameter(message: string): ParameterDecorator {
	console.log(`${message} evaluated`);
	return function (target: Object, propertyKey: string, parameterIndex: number): void {
		console.log(`${message} called`);
	};
}

// 1m19ss, 1m53ss
@logClass('Class Decorator')
class Person {
	private _directReports: Person[];

	// 2ms50ss
	@logProperty('Property Decorator')
	public emailAddress: string;

	constructor(public firstName: string, public lastName: string) {
		this._directReports = [];
	}

	// 3ms28ss, 3ms46ss
	@logMethod('Method Decorator')
	@logMethod('Method Decorator 2') //4ms34ss
	public addDirectReport(@logParameter('Parameter Decorator') person: Person) {
		this._directReports.push(person);
	}
}

const person = new Person('David', 'Tucker');
