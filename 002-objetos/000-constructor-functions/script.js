function Carro(marcaAtribuida, anoAtribuido, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.ano = anoAtribuido
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', '1995', 'R$ 2000,00');
const fiat = new Carro('Fiat', '2005', 'R$ 3000,00' );

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('mazda', 5000)
console.log(mazda)
