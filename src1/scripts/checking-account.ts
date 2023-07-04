//checking-account2
export class CheckingAccount {
	private _balance = 0;

	// 2ms22ss
	constructor(public title: string) {
		this.title = title;
	}

	get balance() {
		return this._balance;
	}

	set balance(val: number) {
		this._balance = val;
	}

	deposit(amount: number) {
		return (this._balance += amount);
	}

	withdrawal(amount: number) {
		return (this._balance -= amount);
	}
}
