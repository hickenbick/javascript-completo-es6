// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 29;
var idadeFamiliar = 35;

if (minhaIdade < idadeFamiliar){
  console.log("é maior");
} else if (minhaIdade === idadeFamiliar) {
  console.log("idade igual");
} else {
  console.log ("é menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// Resultado = 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = 'Andre'; True
// var idade = 28; True
// var possuiDoutorado = false; False
// var empregoFuturo; False
// var dinheiroNaConta = 0; False

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log (`A china possui ${china - brasil} milhões de habitantes a mais que o Brasil`)

// ou

if(brasil > china){
  console.log("O Brasil tem mais habitantes do que a China");
} else if (brasil === china){
  console.log("O brasil tem a mesma quantidade de habitantes que a china");
} else {
  console.log("O Brasil tem menos habitantes do que a China");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

false

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Cão