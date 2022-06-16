// function Carro(marcaAtribuida, anoAtribuido, precoAtribuido) {
//   this.marca = marcaAtribuida;
//   this.ano = anoAtribuido
//   this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', '1995', 'R$ 2000,00');
// const fiat = new Carro('Fiat', '2005', 'R$ 3000,00' );

// function Carro2(marca, precoInicial) {
//   this.taxa = 1.2;
//   this.precoFinal = precoInicial * this.taxa;
//   this.marca = marca;
// }
// const mazda = new Carro2('Mazda', 1000)
// console.log(mazda)

// const hundai = new Carro2('Hundai', 2000)
// console.log(hundai)

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     this.element().classList.add('ativar')
//   }
// }

// function Dom(seletor) {
//   this.element = function() {
//     return document.querySelector(seletor);
//   }
//   this.ativar = function() {
//     this.element().classList.add('ativar')
//   }
// }

// const li = new Dom('li')
// li.ativar()
// const ul = new Dom('ul')
// ul.ativar()


// function Dom(seletor) {
//   this.element = function() {
//     return document.querySelector(seletor)
//   }
//   this.ativar = function() {
//     this.element().classList.add('ativar')
//   }
// }

// const li = new Dom('li')
// li.ativar()

// function Dom(seletor) {
//   this.element = function() {
//     return document.querySelector(seletor)
//   }
//   this.ativar = function() {
//     this.element().classList.add('ativar')
//   }
// }

// const li = new Dom('li')
// li.ativar()
// const ul = new Dom('ul')
// ul.ativar()

