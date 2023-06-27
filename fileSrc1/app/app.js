// 25ss
var startGame = function () {
    var megEle = document.getElementById('messages');
    // megEle!.innerHTML = 'Welcome to multiMath - 123123'; //4ms50ss
    megEle.innerHTML = 'Welcome to multiMath - 123123';
};
// document.getElementById('startGame')!.addEventListener('click', startGame); //4ms50ss
document.getElementById('startGame').addEventListener('click', startGame);
