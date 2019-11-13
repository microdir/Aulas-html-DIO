# CURSO DE Funções avançadas do ES6

## Introdução
* Os dados a seguir são anotações referentes às aulas que assisti nos cursos oferecidos durante a Bootscamp nov/2019 da Digital Innovation One, portanto, não se trata de um artigo, são apenas anotações que porerão ser utilizadas para revisões futuras.

## Bloco 1

### Arrow Functions
```
//Funções comuns
function log(parametro){
	return parametro * 2;
}

var log = log(parametro){
	return parametro * 2;
}

//Arrow Functions
//São anônimas: só podem ser atribuídas a alguma variável ou passar como um parâmetro de uma função
() => {
	
}

var sum = (a, b) => a + b; //return implícito
var sum = a => a + 7; //para apenas um argumento

var createObj = () => ({ teste: 123 }); //Objetos literais

```
* Não é possível usar como função construtora
* Não possuem a propriedade de hoisting, ou seja, não há elevação de sua criação. É preciso criá-la antes da chamada.
* bind(this) fixa o contexto da função antes da arrow function, pois a arrow function já tem o contexto do bloco que o envolve.

### Default Functions Arguments
* Quando realiza-se uma operação entre um número e um undefined, o return é um not a number NaN. Normalmente acontece quando deixamos de passar um dos parâmetros de uma função. Muitos programadores utilizavam o seguinte para tratar:
```
function mult(a, b){
	b = b || 1;
	return a * b;
}
mult(5);
//Nesse caso, se o usuário escrever mult(5, 0), o programa vai entender como 1, já que antes o 0 é convertido em false.
```
* A maneira correta agora é passar um valor padrão para o caso da não atribuição por parte do usuário:
```
function mult(a = 1, b = 1){
	return a * b;
}
mult(5);
```
* Lazy evaluation - Se deixar de passar um valor, um dos argumentos será randômica
```
function randomNumber(){
	return Math.random() * 10;
}
function mult(a, b = randomNumber()){
	return a * b;
}
mult(5);
```

### Enhanced Object Literals
```
var prop1 = "DIO"
var obj = {
	prop1 : prop1
};
//Já que o objeto tem o mesmo nome da variável (short hand)
var obj = {
	prop1
};
//Também funciona para funções
function coiso(a){
	return a;
}

var obj = {
	coiso
};

//Ou também
var obj = {
	sum(a,b){
		return a+b;
	}
};
```






























## Bloco 2

## Bloco 3

## Bloco 4
