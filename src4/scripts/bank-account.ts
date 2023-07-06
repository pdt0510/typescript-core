import { AccountType } from './enums';
import { Account, AccountSettings, AccountInfo } from './interfaces';
import { Constants } from './constants';

// 3ms26ss
export abstract class BankAccount implements Account {
	abstract accountType: AccountType;
	private _balance = 0;
	id: number;
	title: string;

	// 4ms27ss
	// constructor(accountSettings: any) {
	constructor(accountSettings: AccountSettings) {
		this.id = accountSettings.id;
		this.title = accountSettings.title;
		this.balance = accountSettings.balance;
	}

	deposit(amount: number) {
		this.balance += amount;
	}

	withdrawal(amount: number) {
		this.balance -= amount;
	}

	// 5ms27ss
	getAccountInfo(): AccountInfo<string, number> {
		return {
			routingNumber: Constants.ROUTING_NUMBER,
			bankNumber: Constants.BANK_NUMBER,
		};
	}

	get balance() {
		return this._balance;
	}

	set balance(val: number) {
		if (val >= 0) {
			this._balance = val;
		} else {
			throw Error('Balance cannot be negative!');
		}
	}
}
