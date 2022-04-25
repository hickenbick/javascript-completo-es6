var pessoa = {
  nome: "Rodrigo",
  sobrenome: "Hickenbick",
  idade: 29,
  escolaridade: "Nível técnico concluído",
};
console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.escolaridade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
