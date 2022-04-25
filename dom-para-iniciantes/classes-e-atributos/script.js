// AULA ======================================

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');

if(menu.classList.contains('teste')) {
  menu.classList.add('possui-teste')
} else {
  menu.classList.add('não-possui-teste')
}

menu.className = menu.className + ' vermelho'
menu.className += ' verde'

console.log(menu.className)

console.log(animais.attributes);

const img = document.querySelector('img');
img.setAttribute('alt', 'Novo alt adicionado');
console.log(img);

// EXERCICIO ======================================


// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove('ativo');
})
itensMenu[2].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
const possuiAlt = img.hasAttribute('alt');
console.log(img, possuiAlt);
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://hickenbick.github.io/')
