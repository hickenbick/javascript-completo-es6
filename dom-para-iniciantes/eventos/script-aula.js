const img = document.querySelector('img')

// img.addEventListener('click', function() {
//   console.log ('clicou')
// })

// ===========================

function callback(event) {
  console.log(event)
}
// img.addEventListener('click', callback)

// ============================

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
  console.log(event.currentTarget)
  console.log(event.target)
}

animaisLista.addEventListener('click', callbackLista)

console.log(animaisLista);


const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
  // event.preventDefault();
  console.log(this)
  console.log(event.currentTarget)
}

linkExterno.addEventListener('click', handleLinkExterno);
