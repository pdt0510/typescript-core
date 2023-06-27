const startGame = () => {
	const megEle = document.getElementById('messages');
	megEle!.innerHTML = 'Welcome to multiMath - yyyy';
};

document.getElementById('startGame')!.addEventListener('click', startGame);
