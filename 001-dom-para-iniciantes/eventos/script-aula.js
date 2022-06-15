// const img = document.querySelector("img");

// img.addEventListener('click', function() {
//   console.log ('clicou')
// })

// ===========================

// function callback(event) {
//   console.log(event);
// }
// img.addEventListener('click', callback)

// ============================

// const animaisLista = document.querySelector(".animais-lista");

// function callbackLista(event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
// }

// animaisLista.addEventListener("click", callbackLista);

// console.log(animaisLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   // event.preventDefault();
//   console.log(this);
//   console.log(event.currentTarget);
// }

// linkExterno.addEventListener("click", handleLinkExterno);

//===================================

// const h1 = document.querySelector("h1");

// function handleEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)

// function handleEvent(event) {
//   if (event.key === "f") {
//     document.body.classList.toggle("azul");
//     window.alert("funciona");
//   }
// }

// window.addEventListener("keydown", handleEvent);

//==================================

const imgs = document.querySelectorAll('img')

function c(e) {
  console.log(e.target.getAttribute('src'))
}

imgs.forEach((img) => {
  img.addEventListener('click', c)
})
