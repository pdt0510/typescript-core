const startGame = () => {
	let playerName: string | undefined = getInputValue('playername');
	logPlayer(playerName);

	postScore(-5, playerName);
	postScore(80, playerName);
};

document.getElementById('startGame')!.addEventListener('click', startGame);

// 04ss
function postScore(score: number, playerName: string = 'MultiMath Player'): void {
	let logger: (value: string) => void; //1m23ss

	if (score < 0) logger = logError;
	else logger = logMessage2;

	const scoreElement: HTMLElement | null = document.getElementById('postedScores');
	scoreElement!.innerText = `${score} - ${playerName}`;
	logger(`Score: ${score}`);
}

function getInputValue(elementID: string): string | undefined {
	const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID); //1m35ss

	if (inputElement.value === '') {
		return undefined;
	} else {
		return inputElement.value;
	}
}

const logPlayer = (name: string = 'MultiMath Player') => {
	console.log(`New game starting for player: ${name}`);
};

const logMessage = (meg: string): void => {
	console.log(meg);
};

const logError = (meg: string): void => {
	console.log(meg);
};
logError('This is a error message');

// 20ss
// const userInfo = (name, age: any, address: unknown, birthdate: string) => {
const userInfo = (name: string, age: any, address: unknown, birthdate: string) => {
	console.log('userInfo ---', name, age, address, birthdate);
};

let playerName = 'Phan Duc Tai'; // 20ss
userInfo(playerName, 20, 'Q12', '10/05/1992');

// 01ss
const greetingFn = (name: string, greeting: string = 'Good morning !'): void => {
	// const greetingFn = (greeting: string = 'Good morning !', name: string): void => {
	console.log(`${greeting}, ${name}`);
};

greetingFn('Phan DT');
greetingFn('Phan DT', 'Good afternoon !');

//02ss
const logMessage2 = (meg: string): void => {
	console.log(meg);
};
logMessage2('This is a message from arrow fn');
