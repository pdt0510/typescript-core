const startGame = () => {
	let playerName: string = 'Phan Duc Tai';
	logPlayer(playerName);

	const megEle = document.getElementById('messages');
	megEle!.innerHTML = '<h1>Welcome to multiMath</h1>';
};

const logPlayer = (name) => {
	console.log('logPlayer ---', name);
};

//before/after having 'strictNullChecks' 11ss, 1m01ss,
let someVal: string | number;
someVal = 'PDT';
someVal = 123;
// someVal = true // err
// someVal = null; //err by strictNullChecks
// someVal = undefined; //err by strictNullChecks

let basicStr2: string;
// basicStr2 = null; //err by strictNullChecks
// basicStr2 = undefined; //err by strictNullChecks
basicStr2 = 'Phan 123';

// 2ms06ss
let basicStr3: string | number | null | undefined;
basicStr3 = 'Phan 983';
basicStr3 = 123;
basicStr3 = null;
basicStr3 = undefined;

// 01ss
let val: any = 5;
let val2: unknown = 7;

let fixedString: string = (<number>val).toFixed(4);
console.log('fixedString ---', fixedString);

let fixedString2: string = (val2 as number).toFixed(4);
console.log('fixedString2 ---', fixedString2);

// 1m16ss
let fixedString3: string = (val as number).toFixed(4);
console.log('fixedString3 ---', fixedString3);

document.getElementById('startGame')!.addEventListener('click', startGame);
