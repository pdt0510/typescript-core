//2ms24ss
import { Game } from './game';
import { Player } from './player';
import * as helpers from './utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
	const player: Player = new Player();
	player.name = helpers.getInputValue('playername');

	const problemCount: number = Number(helpers.getInputValue('problemCount'));
	const factor: number = Number(helpers.getInputValue('factor'));

	newGame = new Game(player, problemCount, factor);
	newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
	newGame.calculateScore();
});
