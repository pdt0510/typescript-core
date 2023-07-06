import { BankAccount } from './bank-account';
import { AccountType } from './enums';
import { AccountSettings, AccountInfo } from './interfaces';

export class SavingsAccount extends BankAccount {
	private _interestRate: number;
	accountType = AccountType.Savings;

	// 4ms27ss
	// constructor(accountSettings: any) {
	constructor(accountSettings: AccountSettings) {
		super(accountSettings);
		this._interestRate = accountSettings.interestRate;

		// Simulate interest over time
		setInterval(() => {
			this.addInterest();
		}, 60000);
	}

	deposit(amount: number) {
		let newAmount = amount + amount * (this._interestRate / 100);
		this.balance += newAmount;
	}

	private addInterest() {
		this.balance = this.balance + this.balance * (this._interestRate / 100);
	}
}