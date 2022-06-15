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
