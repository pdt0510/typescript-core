// app2
const startGame = () => {
	const megEle = document.getElementById('messages');
	megEle!.innerHTML = 'Welcome to multiMath - 44444'; //4ms50ss
	// megEle.innerHTML = 'Welcome to multiMath - 44444';
};

document.getElementById('startGame')!.addEventListener('click', startGame); //4ms50ss
// document.getElementById('startGame').addEventListener('click', startGame);
