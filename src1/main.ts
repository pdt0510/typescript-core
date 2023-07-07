//main2, 14ss
function shortenArray<T>(data: Array<T>, amontToShorten: number): Array<T> {
	return data.splice(amontToShorten, data.length);
}

// 1m41ss
let stringArr: string[] = ['TEsst', 'Cpp', 'Typescript', 'Js', 'html-css'];
// shortenArray<string>(stringArr, 2); //2ms14ss
// shortenArray(stringArr, 2); //2ms25ss

//2ms47ss
let fewerLangs: Array<string> = shortenArray(stringArr, 2);
console.log('fewerLangs ---', fewerLangs);

// 3ms31ss, not safety because of the number arr
let numberArr: number[] = [1, 2, 3];
let fewerLangs3 = shortenArray(numberArr, 1);

let fewerLangs4 = shortenArray<string>(stringArr, 2); //4ms04ss
console.log('fewerLangs4 ---', fewerLangs4);
