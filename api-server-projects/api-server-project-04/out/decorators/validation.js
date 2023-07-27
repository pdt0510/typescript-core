"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteger = exports.isPhone = exports.length = exports.required = exports.isEmail = exports.validate = void 0;
const validator_1 = __importDefault(require("validator")); // 32ss
require("reflect-metadata");
// 5ms33ss
function validate(object) {
    const keys = Reflect.getMetadata('validation:properties', object);
    let errorMap = {};
    console.log('validate fn ---------------');
    console.log('object keys ---', keys);
    if (!keys || !Array.isArray(keys)) {
        return errorMap;
    }
    for (const key of keys) {
        const rules = Reflect.getMetadata('validation:rules', object, key);
        if (!Array.isArray(rules)) {
            continue;
        }
        for (const rule of rules) {
            const errorMessage = rule.validator(object, key, rule === null || rule === void 0 ? void 0 : rule.validationOptions);
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
exports.validate = validate;
//2ms30ss
function isEmail(target, propertyKey) {
    console.log('isEmail fn ------------');
    console.log('target, propertyKey ------------', target, propertyKey);
    addValidation(target, propertyKey, emailValidatior); //4ms23ss
}
exports.isEmail = isEmail;
function required(target, propertyKey) {
    console.log('required fn ------------'); //xx9
    console.log('target, propertyKey ------------', target, propertyKey);
    addValidation(target, propertyKey, requiredValidatior);
}
exports.required = required;
//2ms55ss
function length(minimum, maximum) {
    console.log('length fn ------------'); //xx9
    const options = {
        minimum: minimum,
        maximum: maximum,
    };
    return function (target, propertyKey) {
        addValidation(target, propertyKey, lengthValidator, options);
    };
}
exports.length = length;
//3ms06ss,
function isPhone(target, propertyKey) {
    addValidation(target, propertyKey, phoneValidator);
}
exports.isPhone = isPhone;
//2ms55ss, 3ms06ss
function isInteger(minimum, maximum) {
    const options = {
        minimum: minimum,
        maximum: maximum,
    };
    return function (target, propertyKey) {
        addValidation(target, propertyKey, integerValidator, options);
    };
}
exports.isInteger = isInteger;
// 3ms13ss
function addValidation(target, propertyKey, validator, //4ms23ss
validationOptions) {
    let objectProperties = Reflect.getMetadata('validation:properties', target) || [];
    console.log('addValidation Fn ------------'); //xx9
    // console.log('target ---', target); //BaseEntity
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey); //get a new metadata list, xx3
        console.log('objectProperties ---', objectProperties);
        Reflect.defineMetadata('validation:properties', objectProperties, target); //define/store for new ones
    }
    // Make sure we capture validation rule;, 4ms09ss
    let validators = Reflect.getMetadata('validation:rules', target, propertyKey) || [];
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
function emailValidatior(target, propertyKey) {
    let value = target[propertyKey];
    if (value == null) {
        return;
    }
    const isValid = validator_1.default.isEmail(value); //4ms23ss
    if (!isValid) {
        return `Property ${propertyKey} must be a valid email.`;
    }
    return;
}
function requiredValidatior(target, propertyKey) {
    let value = target[propertyKey];
    if (value) {
        return;
    }
    return `Property ${propertyKey} is required.`;
}
function integerValidator(target, propertyKey, validatorOptions) {
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
function lengthValidator(target, propertyKey, validatorOptions) {
    const options = {
        min: validatorOptions.minimum,
        max: validatorOptions.maximum,
    };
    const isValid = validator_1.default.isLength(target[propertyKey] + '', options);
    if (!isValid) {
        return `Property ${propertyKey} must be a string between ${validatorOptions.minimum} and ${validatorOptions.maximum} in length`;
    }
    return;
}
function phoneValidator(target, propertyKey, validationOptions) {
    let value = target[propertyKey];
    if (value == null) {
        return;
    }
    const isValid = validator_1.default.isMobilePhone(value);
    if (!isValid) {
        return `Property ${propertyKey} must be a valid phone number.`;
    }
    return;
}
//# sourceMappingURL=validation.js.map