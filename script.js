const menuTrigger = document.getElementById("menuTrigger");
const menu = document.querySelector(".menu");

menuTrigger.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});


// Atualiza o ano atual no footer

const anoAtual =
  new Date().getFullYear();


document.getElementById(
  "ano-atual"
).textContent =
  anoAtual;