import BaseEntity from './BaseEntity';
import { id, persist, entity } from '../decorators/index';

@entity('people') //xx6
export default class Person extends BaseEntity {
	@id
	id: string;

	@persist
	firstName: string;

	@persist
	lastName: string;

	@persist
	email: string;

	@persist
	department: string;

	@persist
	mobileNumber: string;

	@persist
	age: number;
}
