// 1m03ss
export function getInputValue(elementID: string): string {
	const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
	return inputElement.value;
}

export function logger(meg: string): void {
	console.log(meg);
}
