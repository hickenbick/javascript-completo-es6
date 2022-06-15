// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Rodrigo",
  sobrenome: "Hickenbick",
  idade: 29,
  genero: "Masculino",
  formacaoAcademica: "Técnico completo",
};
console.log(dadosPessoais.nome);
console.log(dadosPessoais.idade);
console.log(dadosPessoais.genero);
console.log(dadosPessoais.formacaoAcademica);

// Crie um método no objeto anterior, que mostre o seu nome completo

var dadosPessoais = {
  nome: "Rodrigo",
  sobrenome: "Hickenbick",
  idade: 29,
  genero: "Masculino",
  formacaoAcademica: "Técnico completo",
  nomeCompleto: `${dadosPessoais.nome} ${dadosPessoais.sobrenome}`,
};
console.log(dadosPessoais.nomeCompleto);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
  preco: 3000,
};
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: "10 anos",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "fazer nada";
    }
  },
}
console.log(cachorro.latir("homem"));
console.log(cachorro.latir("mulher"));
