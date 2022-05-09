let animaisLista = document.querySelector('.copy')

let animaisLeft = animaisLista.offsetLeft
// console.log(animaisLeft)

const tituloLeft = document.querySelector('h2')
const h2Left = tituloLeft.offsetLeft
const rect = tituloLeft.getBoundingClientRect();

console.log(rect)

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
)

if (rect.top < 0) {
  console.log('passou do elemento')
}

const small = window.matchMedia('(max-width: 600px)')
if (small.matches == true) {
  console.log('A tela é menor do que 600px')
} else {
  console.log('A tela é maior que 600px')
}