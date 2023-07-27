import BaseEntity from './BaseEntity';
import { required, length, isEmail, isInteger, isPhone, entity, persist, id } from '../decorators'; //32ss

@entity('people')
export default class Person extends BaseEntity {
	@id
	id: string;

	@persist
	@required
	@length(3, 100)
	firstName: string; //xx9

	@persist
	@required
	@length(3, 100)
	lastName: string;

	@persist
	@required
	@isEmail
	email: string; //xx9;

	@persist
	department: string;

	@persist
	@required
	@isPhone
	mobileNumber: string;

	@persist
	@required
	@isInteger(1, 120)
	age: number;
}
