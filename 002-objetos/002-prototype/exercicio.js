// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const rodrigo = new Pessoa('Rodrigo', 'Hickenbick', 29)

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome} ${this.idade}`
}

console.log(rodrigo.nomeCompleto())


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// console.log(document.constructor.name)
// console.log(NodeList.constructor.name)
// console.log(HTMLAllCollection.constructor.name)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name)
console.log(li.click.name)
console.log(li.innerText.name)
console.log(li.value.name)
console.log(li)

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;