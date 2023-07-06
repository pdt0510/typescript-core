// export interface AccountInfo {
// 	routingNumber: number;
// 	bankNumber: number;
// }

// 5ms01ss
export interface AccountInfo<TRouteNumber, TBankNumber> {
	routingNumber: TRouteNumber;
	bankNumber: TBankNumber;
}

export interface DepositWithdrawal {
	deposit(amount: number): void;
	withdrawal(amount: number): void;
}

export interface AccountSettings {
	id: number;
	title: string;
	balance: number;
	interestRate?: number;
	accountInfo?: AccountInfo<string, number>; //5ms01ss
}

// 6ms40ss
export interface Account extends AccountSettings, DepositWithdrawal {}
