import { BankAccount } from './bank-account';
import { DepositWithdrawal, Account } from './interfaces';

//6ms58ss
export class ATM implements DepositWithdrawal {
	// constructor(private account: BankAccount) {}
	constructor(private account: Account) {} //6ms58ss

	deposit(amount: number) {
		this.account.deposit(amount);
	}

	withdrawal(amount: number) {
		this.account.withdrawal(amount);
	}
}
