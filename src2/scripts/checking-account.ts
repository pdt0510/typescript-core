import { BankAccount } from './bank-account';
import { AccountType } from './enums';

// 3ms11ss
export class CheckingAccount extends BankAccount {
	constructor(accountSettings: any) {
		super(accountSettings); // 5ms48ss
	}
}
