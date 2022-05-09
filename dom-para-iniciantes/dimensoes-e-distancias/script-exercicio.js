// Verifique a distância da primeira imagem
// em relação ao topo da página

const animaisLista = document.querySelector(".animais-lista");
animaisListaTop = animaisLista.offsetTop;
console.log(
  `A primeira imagem possui ${animaisListaTop}px de distância em relação ao topo`,
);

// Retorne a soma da largura de todas as imagens
// function somaImagens() {
//   const imagens = document.querySelectorAll("img");
//   let soma = 0;
//   imagens.forEach((imagem) => {
//     soma += imagem.offsetWidth
//   });
//   console.log(soma)
// }
// window.onload = function () {
//   somaImagens()
// };

function verificarImagem() {
  const imagens = document.querySelectorAll("img");
  var soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  verificarImagem();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, "possui acessibilidade");
  } else {
    console.log(link, "Não possui acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");
const small = window.matchMedia("(max-width: 720px)");
if (small.matches) {
  menu.classList.add("mobile-menu");
} else {
  console.log("Tela maior que 720px");
}
