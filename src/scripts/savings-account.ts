import { BankAccount } from './bank-account';
import { AccountType } from './enums';

export class SavingsAccount extends BankAccount {
	private _interestRate: number;
	accountType = AccountType.Savings; //3ms49ss

	constructor(accountSettings: any) {
		super(accountSettings);
		this._interestRate = accountSettings.interestRate;

		// Simulate interest over time
		setInterval(() => {
			this.addInterest();
		}, 60000);
	}

	// 4ms38ss
	getAccountInfo() {
		return {};
	}

	// 08ss
	deposit(amount: number) {
		console.log('deposit overriding in SavingsAccount ---');
		let newAmount = amount + amount * (this._interestRate / 100);
		this.balance += newAmount;
	}

	private addInterest() {
		this.balance = this.balance + this.balance * (this._interestRate / 100);
	}
}
