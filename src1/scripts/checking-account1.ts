//checking-account1
export class CheckingAccount {
	// Fields, 5ms09ss
	private _balance = 0; //private is Fields; Properties is _balance
	title: string;

	//Properties
	get balance() {
		return this._balance;
	}

	set balance(val: number) {
		this._balance = val;
	}

	//Func
	deposit(amount: number) {
		return (this._balance += amount);
	}

	withdrawal(amount: number) {
		return (this._balance -= amount);
	}
}
