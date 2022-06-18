// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

// ==================================

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", "20");
const maria = new Pessoa("Maria", "25");
const bruno = new Pessoa("Bruno", "15");

console.log(joao.andar());
console.log(maria.andar());
console.log(bruno.andar());

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

// function Dom(seletor) {
//   const elementList = document.querySelectorAll(seletor);
//   this.elements = elementList;
// }
// const li = new Dom('li')
// console.log(li.elements)

// const ul = new Dom('ul')
// console.log(ul.elements)

// function Dom(seletor) {
//   elementList = document.querySelectorAll(seletor);
//   this.elements =  elementList;
//   this.addClass = function(classe) {
//     elementList.forEach(function(e) {
//       e.classList.add(classe)
//     })
//   }
// }

// const li = new Dom('li')
// console.log(li.addClass('ativo'))

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach(function (e) {
      e.classList.add(classe);
    });
  };
  this.removeClass = function(classe) {
    elementList.forEach((e) => {
      e.classList.remove(classe)
    })
  }
}
const li = new Dom('li')
// li.addClass('ativo')
// li.removeClass('ativo')


