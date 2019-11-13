# CURSO DE JS ES6 essencial

## Introdução
* Os dados a seguir são anotações referentes às aulas que assisti nos cursos oferecidos durante a Bootscamp nov/2019 da Digital Innovation One, portanto, não se trata de um artigo, são apenas anotações que porerão ser utilizadas para revisões futuras.

## Bloco 1

### História
* Lançado em 1995
* Criado por Brendan Eich na Netscap
* ECMAScript - ECMAScript é uma especificação de linguagem script criada pela Ecma International, utilizada por linguagens como: ActionScript, JScript e Javascript.
* TC39 - desenvolve e mantém padrões para o ECMAScript
* Fluxo de propostas:
	* Stage 0: strawman - submete-se um formulário de contribuição por um colaborador cadastrado.
	* Stage 1: proposal (escolha do campeão)
	* Stage 2: draft (descrição formal e semântica da funcionalidade)
	* Stage 3: candidate (especificação deve estar completa)
	* Stage 4: finished 

### Conceitos
* Linguagem interpretada (código executado de cima para baixo)
* Liguagem de tipagem fraca e dinânima (aceita soma entre dois tipos de variáveis)
* Typescript - para boa prática de programação; tipagens; é um superset.
* Semelhante ao typescript com relação a verificar tipagem, mas não é um superset;
* Funções de primeira classe - É possível atribuir funções a variáveis, retornar funções de outras funções e passar funções como parâmetro para outras funções.
* Closure - capacidade de uma função "lembrar" do ambiente em que foi criada; Com a inclusão do let e const, agora tem-se o escopo global, de função e de bloco.
* Curryng - Pega função com n parâmentros e retorna uma função com apenas um parâmetro
```
//Considerando que o primeiro parâmetro é sempre o mesmo
function soma(a){
	return function(b){
		return a + b;
	}
}

const soma2 = soma(2);
soma2(5);
soma2(3);
```
* Hoisting (elevar) - Muito comum em js. Mesmo que a função seja criada abaixo de onde ela é chamada, mesmo assim vai funcionar; Hoisting de variavel eleva apenas sua criação, não sua atribuição (nesse caso o valor da variável é undefined, porém o script sabe que ela existe). Hoisting ou içamento é a capacidade do JavaScript elevar a criação de variáveis e funções ao topo do escopo de suas criações. Existem dois tipos de Hoisting: hoisting de variável e hoisting de função.

* Imutabilidade - Em vez de adicionar valor de um array (por exemplo), criamos uma novo array e concatenamos com o anterior.
```
var user = ["j", "b"];
var user2 = [...user, "a", "d"];
```

### Tipos e variáveis
* var - foi o primeiro. Esse tipo não respeita escopo de bloco
* let
* const

### Escopo
```
//escopo global
{
//escopo de bloco
}

function teste(){
	//escopo de função
}
``` 

### Mais
```
(() => {
	console.log("Arrow function")
})();//execução imediata
```

## Bloco 2

### Tipos de variáveis
* string, number, boolean, null, undefined, symbol, Object, function e array

	* string
	```
	'Texto'.length //tamanho da string
	'Texto'.split('x') //delimita a string separando por x
	'Texto'.replace('Text', 'txet') //Muda a primeira parte pela segunda
	'Texto'.slice(-1) //pega a última letra
	'Texto'.substr(0, 2) //substring que começa da primeira letra até duas letras à frente
	```

	* number
	```
	const meunumero = 12.4032
	meunumero.toFixed(2) //apenas duas casas decimais
	parseInt(meunumero) //converte para inteiro
	```

	* object
	```
	let user = {
		name: 'Michel'
	};
	user.name = "Rodrigo";

	user.lastName = "Nunes"; //criando a propriedade lastName
	delete user.name; //deleta a propriedade

	Object.keys(user); //retorna as chaves
	Object.values(user); //retorna os valores
	Object.entries(user); //retorna um array de arrays com chaves e valores

	Object.assign({}, user, {age: 27}); //criando um novo objeto com as propriedades do anterior + propriedade age

	Object.freeze(user) //congela o objeto para alterações

	Object.seal(user) //Não permite que crie nem delete propriedade, mas pode alterar os calores
	```

	* symbol
	```
	//cria variáveis com valores únicos. Por mais que, aparentemente, duas variáveis tenham valores iguais, se forem symbols, eles não serão iguais.

	const v = Symbol('nome');
	const v2 = Symbol('nome');

	//v não é igual a v2
	//Não aparecem nos Object.keys() nem nos Object.values()
	```

	* functions
		* arrow function
		```
		const arrowFn = () => 'Code here';
		//para o caso de mais coisas dentro da função:
		const arrowFn2 = () => {
			//adiciona as outras coisas
			return 'Code here';	
		}
		
		```
		* funções comuns
		```
		function fn(){
			return 'Code here';
		}
		//é possível adicionar propriedades
		fn.prop = 'Functions também são objetos';
		```

	* arrays
	```
	var a = ['um', 'dois', 'tres'];

	//Iterar
	ar.forEach(person => {
		console.log(person.name);
	});

	//Iterar com posição
	ar.forEach((person, index) => {
		console.log(person.name);
		console.log(index);
	});

	//Filtrar a busca
	const mens = ar.filter(person => person.gender === gender.MAN);

	//Somatorio das idades
	const totalAge = person.reduce((age, person) => {
		age += person.age;
		return age;
	}, 0); //O zero indica que a nova variável será um number

	//é possível encadear o filter e o reduce para retornar a soma das idades dos indivíduos com idade par (por exemplo)
	```

### Operadores
* Aritméticos
	* Operador binário
	```
	3 + 1
	```
	* Operador unário
	```
	x++
	```
* Atribuição
	```
	x = y
	```
* Comparação
	```
	==
	!=
	!==
	=== //compara até o tipo de variável
	>
	<
	>=
	<=
	```
* Condicional
	```
	condição ? valorSeVerdadeiro : valorSeFalso
	true ? "escreve 1" : "escreve 2" //Saída é escreve 1
	```
* Lógicos
	```
	var v = true && false //e
	var v = true || false //ou
	```
* Spread
	```
	var partes = ["ombro", "joelho"]; 
	var corpo = ["cabeça", ...partes, "pés"];
	```
* Outros
	```
	var coisa = ["juarez", "colher", "jujuba"]; 
	
	"juarez" in coisa[0]; //saber se juarez está em coisa
	
	var c = {a:"1", b:"2", d:"3"};
	b in c; //saber se a chave b está em c
	```

### Estruturas condicionais
```
if(condicao){
	// código
} else {
	// outro código
}

switch(variavel) {
	case 'valor':
		//faz alguma coisa
	break;
	case 'outro valor':
		//faz alguma outra coisa
	break;
	default
		//É tipo o else do if
		break;
}
```	

### Estruturas de repetição
```
for(valor inicial; valor final; incremento){
	//código
}

for(let i in arr){
	//mostra as posições
}

for(let i of arr){
	//mostra os valores dentro do array
}

while(condição){
	//roda enquanto a condição for verdadeira
}

do{
	//executa o bloco antes de verificar a condição
}while(condição);
```	

## Bloco 3

### Orientação a Objetos
* Herança
	* quando uma classe herda atributos e/ou métodos e funções de outra classe.
	```
	__proto__ 
	```
	* proto aponta para prototype e o prototype é criado a partir de um contrutor
	* quando chamamos o new, um novo objeto é criado com os atributos do construtor, herdando Foo.prototype
	```
	Animal.call(this, 4); //permite passar um contexto

	function Animal(quantPatas){
		this.quantPatas = quantPatas;
	}

	function Cachorro(morde){
		Animal.call(this, 4); //Herda a função animal
		this.morde = morde;
	}

	String.prototype.split = function() {//código novo} //o prototype muda ou adiciona as propriedades de uma função, mesmo que seja nativa.
	```
	* Classes - simplificação de herança de protótipos
	```
	class Animal {
		constructor(quantPatas){
			this.quantPatas = 4;
		}
	}

	class Cachorro extends Animal{
		constructor(morde){
			super(4);
			this.morde = morde;
		}
	}
	```

* Não há modificadores de acesso ainda no JS
	* É interessante criar funções get e set dos atributos

* Encapsulamento
	```
	var name = initialName;

	Object.defineProperty(this, 'name', {
		get: function(){
			return name;
		},
		set: function(value){
			name = values
		}
	});
	```

* static - permite acessar métodos ou atributos sem instanciar as classes.

### Design Patterns
* São soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não é um framework, mas sim uma definição de alto nível de como um problema comum pode ser solucionado.
* A Patter Language - em 1978, por Christopher Alexander, Sara Ishikawa e Murray Silvestein. Livro que listou 253 tipos de problemas/desafios de projetos.
* Patterne: Nome, exemplo, contexto, problema e solução.
* Tipos: criação, estrutural e comportamental. (dado pela Gang of Four)
	* abstract facture, builder, ... (criação)
	* adapter, bridgt, ... (estrutural)
	* Chain of responsibility, state, visitor, ...
* Patterns mais utilizados:
	* Factory - Não usa o new
	```
	function Pessoa(coisacao){
		return {
			name : "coiso",
			lastname : "outro",
			...coiso
		}
	}
	const p = Pessoa(coisacao);
	```
	* Singleton - criar uma instancia e retorná-la sempre que for executada (jQuery é um padrão muito conhecido)
	```
	function single(){
		if(!single.instance)
			return single.instance = this;

		return single.instance;
	}
	```
	* Decorator - recebe outra função como parâmetro e estende seu comportamento
	```
	@readonly //o @ diz que é decorator
	```
	* Observer - mantém uma coleção de objetos e notifica todos eles quando acontece alguma mudança.
	```
	subscribe(){
		//code
	}
	unsubscribe(){
		//code
	}
	notify(){
		//code
	}
	```
	* Module - organizar o código sem precisar expor uma variável local.
	```
	class Person {
		constructor(name){
			this.name = name;
		}
	}

	export default Person;

	//para utiliza temos
	import Person from './moduls/person';
	```

## Bloco 4
	
### Arrays
```
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const persons = Array.of(1, 2, 3);
const arr2 = Array(3); //array com 3 posições vazias
const arr2 = Array(3, 2); //vetor [3, 2]
//Armazena as divs em um array
const divs = document.querySelectorAll('div');
const arr = Array.from(divs);
```
* Inserir elementos
```
push('elemento');//insere o elemento no final e retorna o tamanho do array depois da inserção.
unshift('elemento') //insere no começo e retorna o tamanho do array

pop() //remove o último elemento do array e retorna o item removido
shift() //remove no início e retorna o elemento removido

const frutas = ['limao', 'laranja'];
const outras = ['acerola'];
const alimentos = frutas.concat(outras); //faz um merge entre os dois arrays
const alimentos = frutas.slice(0, 2); //fatia e retorna pra um novo array
const alimentos = frutas.slice(2); //pega a partir do indice 2
const alimentos = frutas.slice(-2); //pega de forma inversa
const alimentos = frutas.splice(2); //remove a partir do indice indicado e retorna esses itens
const alimentos = frutas.splice(0,0,'banana'); //a partir do índice 0 não remove nada e adiciona a fruta banana
```

* Iterar elemento de um array
```
const arr = [1,2,3,4,5];
arr.forEach((value, index) => console.log(value, index));

//map retorna um novo array
const a = arr.map(value => value * 2);

//flat retorna um array que seja a concatenação de todos os subarray desse array de acordo com a profundidade indicada. Faz isso de forma recursiva
const arr = [1,2,3,[4,5]];
arr.flat() //retorna [1,2,3,4,5]. A profundidade por padrão é 1.

//flatMap é a junção do flat com o map

//keys retorna um array iterator com todas as chaves de iteração do array
arr.keys();
arrIterator.next();

//values retorna um array iterator com todos os valores de iteração do array
arr.values();
arrIterator.next();

//também é possível com o entries
```

* Buscar elemento
```
//Eles percorrem o array
arr.find(value => value > 2) //retorna o primeiro item que é maior que 2

arr.findIndex(value => value > 2) //retorna o índice do primeiro item que é maior que 2

arr.filter(value => value > 2) //retorna todos os elemento que o valor é maior que 2

arr.indexOf('elemento')//retorna o primeiro índice em que o elemento pode ser encontrado no array

arr.lastIndexOf('elemento')//retorna a última ocorrência em que o elemento pode ser encontrado no array

arr.includes(1) //retorna verdadeiro se houver esse valor no array

arr.some(value => value%2 === 0) //tem algum número par? retorna true ou false

array.every(value => value%2===0) //todos os números são pares?

array.sort((current, next) ==> current.elemento - next.elemento) //ordena o array de acordo com a função de ordenação

array.reverse() //inverte o array

array.join('-') // retorna uma string do tipo 1-2-3-4-5

array.reduce((total, value) => total += value, 0); //o total é o valor a ser retornado, o value é o valor corrente, o parâmetro 0 indica que o return será um inteiro.
```

## Conclusão
* Encontrei algumas dificuldades para o aprendizado do blobo 3; Durante a execução da atividade avaliativa no bloco 4, havia muito ruído no meu ambiente, o que atrapalhou bastante a concentração, onde não consegui a nota esperada. Porém, em um segundo momento realizei a atividade novamente e consegui acertar os 100%.

