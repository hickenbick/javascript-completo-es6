// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.

// Solução longa:
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
if (possuiCarro && possuiCasa){
    darCredito = "Crédito Autorizado";
    console.log(darCredito);
} else {
  console.log("Crédito não Autorizado")
}

//Solução Curta
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? "Crédito autorizado" : "Crédito recusado";
console.log(darCredito);


