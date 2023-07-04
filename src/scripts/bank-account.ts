import { AccountType } from './enums';

// 2ms50ss
export abstract class BankAccount {
	private _balance = 0;
	id: number;
	title: string;
	abstract accountType: AccountType; //3ms49ss

	constructor(accountSettings: any) {
		this.id = accountSettings.id;
		this.title = accountSettings.title;
		this.balance = accountSettings.balance;
	}

	// 7ms44ss
	deposit(amount: number) {
		console.log('BankAccount deposit ---');
		this.balance += amount;
	}

	// 7ms44ss
	withdrawal(amount: number) {
		this.balance -= amount;
	}

	abstract getAccountInfo(): any; //4ms38ss

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
