const startGame = () => {
	let playerName: string | undefined = getInputValue('playername');
	logPlayer(playerName);

	postScore(-5, playerName);
	postScore(80, playerName);
};

document.getElementById('startGame')!.addEventListener('click', startGame);

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
	let logger: (value: string) => void;

	if (score < 0) logger = logError;
	else logger = logMessage;

	const scoreElement: HTMLElement | null = document.getElementById('postedScores');
	scoreElement!.innerText = `${score} - ${playerName}`;
	logger(`Score: ${score}`);
}

function getInputValue(elementID: string): string | undefined {
	const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

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

// 3ms39ss
let myResult: Result = {
	playName: 'Marie',
	score: 5,
	problemCount: 5,
	factor: 7,
};

let player: Person = {
	name: 'Daniel',
	formatName: () => 'Dan',
};
