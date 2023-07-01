"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const player_1 = require("./player");
const helpers = require("./utility");
let newGame;
document.getElementById('startGame').addEventListener('click', () => {
    const player = new player_1.Player();
    player.name = helpers.getInputValue('playername');
    const problemCount = Number(helpers.getInputValue('problemCount'));
    const factor = Number(helpers.getInputValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map