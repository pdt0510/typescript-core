import { CheckingAccount } from './scripts/checking-account';
import { Renderer } from './scripts/renderer';

class Main {
	checkingAccount: CheckingAccount;

	constructor() {
		// Create CheckingAccount instance,
		this.checkingAccount = new CheckingAccount('PDT Doe Checking CTOR 2223'); //2ms22ss
		// this.checkingAccount = new CheckingAccount();
		// this.checkingAccount.title = 'Jane Doe Checking';
		this.renderAccount();
	}

	renderAccount() {
		const html = `
                <h3>Checking Account</h3>
                <br />
                <span class="label">Owner:</span> ${this.checkingAccount.title}
                <br />
                <span class="label">Balance:</span> $${this.checkingAccount.balance.toFixed(2)}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false)">Withdrawal</button>&nbsp;
            `;
		Renderer.render(html); //1m12ss
	}

	depositWithDrawal(deposit: boolean) {
		let amountInput: HTMLInputElement = document.querySelector('#depositWithdrawalAmount');
		let amount = +amountInput.value;
		if (deposit) {
			this.checkingAccount.deposit(amount);
		} else {
			this.checkingAccount.withdrawal(amount);
		}
		this.renderAccount();
	}
}

// Create main object and add handlers for it, 1m12ss
Renderer.viewTemplate = document.querySelector('#viewTemplate');
const main = new Main();
// const renderer = new Renderer(document.querySelector('#viewTemplate'));
// const main = new Main(renderer);

// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
(<any>window).main = main;
