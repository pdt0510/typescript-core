import validator from 'validator'; // 32ss
import 'reflect-metadata';

// 1m59ss,
type ValidationFunction = (
	target: any,
	propertyKey: string,
	validatorOptions?: any,
) => string | void;

// 2ms18ss
interface ValidationRule {
	validationOptions?: any;
	validator: ValidationFunction;
}

// 5ms33ss
export function validate(object: any) {
	const keys = Reflect.getMetadata('validation:properties', object) as string[];
	let errorMap = {};

	console.log('validate fn ---------------');
	console.log('object keys ---', keys);

	if (!keys || !Array.isArray(keys)) {
		return errorMap;
	}

	for (const key of keys) {
		const rules: ValidationRule[] = Reflect.getMetadata(
			'validation:rules',
			object,
			key,
		) as ValidationRule[];

		if (!Array.isArray(rules)) {
			continue;
		}

		for (const rule of rules) {
			const errorMessage = rule.validator(object, key, rule?.validationOptions);

			//create keys-values to obj
			if (errorMessage) {
				errorMap[key] = errorMap[key] || []; //dùng [] vì 1 field có thể có nhiều errs
				errorMap[key].push(errorMessage);
				// return errorMap; //xx14
			}
		}
	}

	console.log('errorMap ---', errorMap);
	return errorMap;
}

//2ms30ss
export function isEmail(target: any, propertyKey: string) {
	console.log('isEmail fn ------------');
	console.log('target, propertyKey ------------', target, propertyKey);
	addValidation(target, propertyKey, emailValidatior); //4ms23ss
}

export function required(target: any, propertyKey: string) {
	console.log('required fn ------------'); //xx9
	console.log('target, propertyKey ------------', target, propertyKey);
	addValidation(target, propertyKey, requiredValidatior);
}

//2ms55ss
export function length(minimum: Number, maximum: Number) {
	console.log('length fn ------------'); //xx9
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

//2ms55ss, 3ms06ss
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
	validator: ValidationFunction, //4ms23ss
	validationOptions?: any,
) {
	let objectProperties: string[] = Reflect.getMetadata('validation:properties', target) || [];

	console.log('addValidation Fn ------------'); //xx9
	// console.log('target ---', target); //BaseEntity

	if (!objectProperties.includes(propertyKey)) {
		objectProperties.push(propertyKey); //get a new metadata list, xx3
		console.log('objectProperties ---', objectProperties);
		Reflect.defineMetadata('validation:properties', objectProperties, target); //define/store for new ones
	}

	// Make sure we capture validation rule;, 4ms09ss
	let validators: ValidationRule[] =
		Reflect.getMetadata('validation:rules', target, propertyKey) || [];
	console.log(`get validators ---`, validators);

	let validationRule = {
		validator: validator,
		validationOptions: validationOptions,
	};

	validators.push(validationRule); //xx3
	console.log(`validators pushed - '${propertyKey}', then defined for next ---`, validators);
	Reflect.defineMetadata('validation:rules', validators, target, propertyKey);
}

// VALIDATOR FUNCTIONS, 4ms23ss
function emailValidatior(target: any, propertyKey: string): string | void {
	let value = target[propertyKey];
	if (value == null) {
		return;
	}
	const isValid = validator.isEmail(value); //4ms23ss
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
	console.log('integerValidator fn ---');
	console.log('target ---', target);
	console.log('target[propertyKey] ---', target[propertyKey]);

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
