const startGame = () => {
	const megEle = document.getElementById('messages');
	megEle!.innerHTML = '<h1>Welcome to multiMath - bundle.js file</h1>';
};

document.getElementById('startGame')!.addEventListener('click', startGame);
