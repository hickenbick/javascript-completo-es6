const titulo = document.querySelector('.titulo')
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')
const faqTitulo = document.querySelector('.faq .titulo')
const mapa = document.querySelector('.mapa')
const contato = document.querySelector('.contato')
const contatoTitulo = document.querySelector('.contato .titulo')

faq.removeChild(faqTitulo)

//========================

const novoh1 = document.createElement('h1')
console.log(novoh1)
novoh1.innerText = 'Título Mapa'
novoh1.classList.add('titulo')
mapa.appendChild(novoh1)
contato.insertBefore(novoh1 ,mapa)

//=============================

const h1 = document.querySelector("h1");
const contato = document.querySelector(".contato");
const contatoTitulo = document.querySelector('.contato .titulo')
const novoh1 = h1.cloneNode(true);

contato.insertBefore(novoh1, contatoTitulo);
