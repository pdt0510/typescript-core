import validator from 'validator'; // 32ss
import 'reflect-metadata';

// 1m59ss, xx8
type ValidationFunction = (
	target: any,
	propertyKey: string,
	validatorOptions?: any,
) => string | void;

// 2ms18ss
interface ValidationRule {
	validationOptions?: any;
	validator: ValidationFunction; //xx14 - 3
}

// 5ms33ss
export function validate(object: any) {
	console.log('validate ---------------');
	const keys = Reflect.getMetadata('validation:properties', object) as string[];
	let errorMap = {};
	console.log('keys ---', keys);

	if (!keys || !Array.isArray(keys)) {
		return errorMap;
	}

	for (const key of keys) {
		const rules: ValidationRule[] = Reflect.getMetadata(
			'validation:rules',
			object,
			key,
		) as ValidationRule[];

		console.log('rules ---', rules);

		if (!Array.isArray(rules)) {
			continue;
		}

		for (const rule of rules) {
			const errorMessage = rule.validator(object, key, rule.validationOptions); //xx14 - 1
			if (errorMessage) {
				errorMap[key] = errorMap[key] || [];
				errorMap[key].push(errorMessage);
			}
		}
	}

	console.log('errorMap ---', errorMap);
	return errorMap;
}

//2ms30ss
export function isEmail(target: any, propertyKey: string) {
	addValidation(target, propertyKey, emailValidatior); //44ms23ss
}

export function required(target: any, propertyKey: string) {
	addValidation(target, propertyKey, requiredValidatior);
}

//2ms55ss
export function length(minimum: Number, maximum: Number) {
	const options = {
		minimum: minimum,
		maximum: maximum,
	};
	return function (target: any, propertyKey: string) {
		addValidation(target, propertyKey, lengthValidator, options);
	};
}

//3ms06ss,
export function isPhone(target: any, propertyKey: string) {
	addValidation(target, propertyKey, phoneValidator);
}

//3ms06ss
export function isInteger(minimum: Number, maximum: Number) {
	const options = {
		minimum: minimum,
		maximum: maximum,
	};
	return function (target: any, propertyKey: string) {
		addValidation(target, propertyKey, integerValidator, options);
	};
}

// 3ms13ss
function addValidation(
	target: any,
	propertyKey: string,
	validator: ValidationFunction,
	validationOptions?: any,
) {
	// Make sure we have the list of all properties for the object
	let objectProperties: string[] = Reflect.getMetadata('validation:properties', target) || []; //xx15

	console.log('target ---', target); //BaseEntity -> Person class
	console.log('propertyKey ---', propertyKey); //class's prop
	console.log('objectProperties 1 ---', objectProperties);

	if (!objectProperties.includes(propertyKey)) {
		objectProperties.push(propertyKey);
		console.log('objectProperties 2 ---', objectProperties);
		Reflect.defineMetadata('validation:properties', objectProperties, target);
	}

	// Make sure we capture validation rule
	let validators: ValidationRule[] =
		Reflect.getMetadata('validation:rules', target, propertyKey) || [];

	console.log('validators ---', validators); //lengthValidator, requiredValidatior, integerValidator...

	let validationRule = {
		validator: validator,
		validationOptions: validationOptions,
	};

	validators.push(validationRule); //xx14 - 2
	console.log('validators 2 ---', validators);
	Reflect.defineMetadata('validation:rules', validators, target, propertyKey);
}

// VALIDATOR FUNCTIONS, 44ms23ss
function emailValidatior(target: any, propertyKey: string): string | void {
	let value = target[propertyKey];
	if (value == null) {
		return;
	}
	const isValid = validator.isEmail(value);
	if (!isValid) {
		return `Property ${propertyKey} must be a valid email.`;
	}
	return;
}

function requiredValidatior(target: any, propertyKey: string): string | void {
	let value = target[propertyKey];
	if (value) {
		return;
	}
	return `Property ${propertyKey} is required.`;
}

function integerValidator(target: any, propertyKey: string, validatorOptions: any): string | void {
	const value = target[propertyKey];
	if (value == null) {
		return;
	}
	const errorMessage = `Property ${propertyKey} must be an integer between ${validatorOptions.minimum} and ${validatorOptions.maximum}`;
	if (!Number.isInteger(value)) {
		return errorMessage;
	}
	if (value <= validatorOptions.maximum && value >= validatorOptions.minimum) {
		return;
	}
	return errorMessage;
}

// 2ms55ss
function lengthValidator(target: any, propertyKey: string, validatorOptions: any): string | void {
	const options = {
		min: validatorOptions.minimum,
		max: validatorOptions.maximum,
	};
	const isValid = validator.isLength(target[propertyKey] + '', options);
	if (!isValid) {
		return `Property ${propertyKey} must be a string between ${validatorOptions.minimum} and ${validatorOptions.maximum} in length`;
	}
	return;
}

function phoneValidator(target: any, propertyKey, validationOptions: any): string | void {
	let value = target[propertyKey];
	if (value == null) {
		return;
	}
	const isValid = validator.isMobilePhone(value);
	if (!isValid) {
		return `Property ${propertyKey} must be a valid phone number.`;
	}
	return;
}
