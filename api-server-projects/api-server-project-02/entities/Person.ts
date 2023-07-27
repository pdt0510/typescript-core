import BaseEntity from './BaseEntity';
import { id, persist, entity } from '../decorators/index';

@entity('people') // 2ms13ss, xx6
export default class Person extends BaseEntity {
	@id //2ms13ss
	id: string;

	@persist //2ms13ss
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
