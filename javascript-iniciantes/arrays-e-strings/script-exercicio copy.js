var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: "10 anos",
  latir(pessoa) {
    if (pessoa === "homem") {
    return "latir"; 
    } else {
      return "nada";
    }
      }