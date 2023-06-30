class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
const startGame = () => {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(-5, playerName);
    postScore(80, playerName);
};
document.getElementById('startGame').addEventListener('click', startGame);
function postScore(score, playerName = 'MultiMath Player') {
    let logger;
    if (score < 0)
        logger = logError;
    else
        logger = logMessage;
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
const logPlayer = (name = 'MultiMath Player') => {
    console.log(`New game starting for player: ${name}`);
};
const logMessage = (meg) => {
    console.log(meg);
};
const logError = (meg) => {
    console.log(meg);
};
const firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log('firstPlayer ---', firstPlayer.formatName());
//# sourceMappingURL=app.js.map