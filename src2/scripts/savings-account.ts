import { BankAccount } from './bank-account';
import { AccountType } from './enums';

// 4ms10ss
export class SavingsAccount extends BankAccount {
	private _interestRate: number;
	accountType = AccountType.Savings; //4ms27ss

	constructor(accountSettings: any) {
		super(accountSettings); //5ms28ss
		this._interestRate = accountSettings.interestRate;

		// Simulate interest over time
		setInterval(() => {
			this.addInterest();
		}, 60000);
	}

	getAccountInfo() {
		return {};
	}

	deposit(amount: number) {
		let newAmount = amount + amount * (this._interestRate / 100);
		this.balance += newAmount;
	}

	private addInterest() {
		this.balance = this.balance + this.balance * (this._interestRate / 100);
	}
}
