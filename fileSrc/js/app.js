const startGame = () => {
    let playerName = 'Phan Duc Tai';
    logPlayer(playerName);
    const megEle = document.getElementById('messages');
    megEle.innerHTML = '<h1>Welcome to multiMath</h1>';
};
const logPlayer = (name) => {
    console.log('logPlayer ---', name);
};
let someVal;
someVal = 'PDT';
someVal = 123;
let basicStr2;
basicStr2 = 'Phan 123';
let basicStr3;
basicStr3 = 'Phan 983';
basicStr3 = 123;
basicStr3 = null;
basicStr3 = undefined;
let val = 5;
let val2 = 7;
let fixedString = val.toFixed(4);
console.log('fixedString ---', fixedString);
let fixedString2 = val2.toFixed(4);
console.log('fixedString2 ---', fixedString2);
let fixedString3 = val.toFixed(4);
console.log('fixedString3 ---', fixedString3);
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map