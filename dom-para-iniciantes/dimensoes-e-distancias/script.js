// AULA ======================================

// const listaAnimais = document.querySelector('.animais-lista');

// const listaAnimaisHeight = listaAnimais.scrollHeight;
// const listaAnimaisWidth = listaAnimais.scrollWidth;
// const listaAnimaisTopDistance = listaAnimais.offsetTop;
// const listaAnimaisLeftDistance = listaAnimais.offsetLeft;

// console.log(listaAnimaisHeight);
// console.log(listaAnimaisWidth);
// console.log(listaAnimaisTopDistance);
// console.log(listaAnimaisLeftDistance);


// const primeiroh2 = document.querySelector('h2');
// const rect = primeiroh2.getBoundingClientRect();
// console.log(rect);

// const smallscreen = window.matchMedia('(max-width:600px)');
// if (smallscreen.matches === true) {
//   console.log("A tela é menor do que 600px")
// } else {
//   console.log("A tela é maior do que 600px")
// }



// EXERCÍCIOS ======================================

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);


// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll('img');
imagens.forEach((imagem){
  console.log(imagem.offsetWidth)
})


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

