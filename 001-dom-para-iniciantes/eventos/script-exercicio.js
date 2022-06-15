// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll("a[href^='#']")

function handle(e) {
  console.log(e.target)
  e.preventDefault()
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  e.currentTarget.classList.toggle('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handle)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *')

function handle(e) {
  console.log(e.currentTarget)
}
body.forEach((element) => {
  element.addEventListener('click', handle)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handle(e) {
  e.currentTarget.remove()
}
body.forEach((element) => {
  element.addEventListener('click', handle)
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function clickT(e) {
  console.log(e.key);
  if (e.key === "t") {
    console.log("funciona");
    document.documentElement.classList.toggle('textomaior')
  }
}
window.addEventListener("keydown", clickT);
