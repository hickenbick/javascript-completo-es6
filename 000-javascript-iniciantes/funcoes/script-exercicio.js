// Crie uma função para verificar se um valor é Truthy
function isTrue(x) {
  if (!!x === true) {
    return "Verdadeiro!";
  } else {
    return "Falso!";
  }
}
console.log(isTrue("Teste"));

// ou simplificando sem lógica ou console.log

function issTrue(y) {
  return !!y;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}
console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Rodrigo", "Hickenbick"));

// Crie uma função que verifica se um número é par
function isEven(numero) {
  if (numero % 2 === 0) {
    return "Essa caralha é par";
  } else {
    return "esse arrombado é ímpar";
  }
}
console.log(isEven(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function kindof(info) {
  return typeof info;
}
console.log(kindof(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log ("Hello Motherfucker");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);

// // Crie uma função para verificar se um valor é Truthy
// function falseTrue(x) {
//   if (!!x == true) {
//     return "verdadeiro!";
//   } else {
//     return "falso!";
//   }
// }
// console.log(falseTrue(""));

// // Crie uma função matemática que retorne o perímetro de um quadrado
// // lembrando: perímetro é a soma dos quatro lados do quadrado
// function perimetroQuadrado(lado) {
//   return lado * 4;
// }
// console.log(perimetroQuadrado(5));

// // Crie uma função que retorne o seu nome completo
// // ela deve possuir os parâmetros: nome e sobrenome
// function nomeSobrenome(nome, sobrenome) {
//   nomeSobrenome = nome + " " + sobrenome;
//   return nomeSobrenome;
// }
// console.log(nomeSobrenome("José Carlos", "Hickenbick"));

// // Crie uma função que verifica se um número é par

// function parImpar(n) {
//   if (n % 2 == 0) {
//     return "é par!";
//   } else {
//     return "é impar!";
//   }
// }
// console.log(parImpar(11));

// // Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)
// function tipoDeDado(dado) {
//   tipoDeDado = typeof dado;
//   return tipoDeDado;
// }
// console.log(tipoDeDado("Rodrigo"));

// // addEventListener é uma função nativa do JavaScript
// // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// // utilize essa função para mostrar no console o seu nome completo
// // quando o evento 'scroll' ocorrer.
// addEventListener('scroll', function() {
//   console.log('Rodrigo Hickenbick');
// });

// // // Corrija o erro abaixo
// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
