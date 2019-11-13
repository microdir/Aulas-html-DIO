(() => {
	this.name = "michel";
	const getNameArrowFn = () => this.name;

	const user = {
		name: 'Nome do objeto',
		getNameArrowFn
	}

	testes(user.getNameArrowFn());
})();