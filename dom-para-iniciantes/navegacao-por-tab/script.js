const menuFotos = document.querySelectorAll(".js-menu-fotos li");
const tabContent = document.querySelectorAll(".js-tab-content section");

function ativarTab(index) {
  tabContent.forEach((p) => {
    p.classList.remove('ativo')
  })
  tabContent[index].classList.add('ativo');
}

