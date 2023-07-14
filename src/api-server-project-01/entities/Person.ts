import BaseEntity from './BaseEntity';

// 2ms09ss
export default class Person extends BaseEntity {
	id: string;

	firstName: string;

	lastName: string;

	email: string;

	department: string;

	mobileNumber: string;

	age: number;
}
