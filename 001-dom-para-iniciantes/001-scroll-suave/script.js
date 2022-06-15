// navegação por tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
        console.log("ClassLists reiniciados");
      });
      tabContent[index].classList.add("ativo");
      console.log("Foi Ativada a aba " + index);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// accordion
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.toggle("ativo");

    function activeAccordion(event) {
      console.log("Título do accordion list clicado.");
      this.nextElementSibling.classList.toggle("ativo");
      this.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// scroll suave
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.4;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();

// animação do scroll

const sections = document.querySelectorAll(".js-scroll");
const window60 = (window.innerHeight  *0.6)
console.log(window60)

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = (section.getBoundingClientRect().top - window60);
    if(sectionTop < 0) {
      section.classList.add('ativo')
    }
  });
}

window.addEventListener("scroll", animaScroll);
