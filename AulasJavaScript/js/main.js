function init(){
	const exemplo = 'A frase';

	return function(){
		console.log('Chamei a função 1: '+ exemplo +'.');
	}
}

const initFn1 = init();