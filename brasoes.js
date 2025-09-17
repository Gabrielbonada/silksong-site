
function abrirModal(id) {
  document.getElementById(id).classList.add("ativo");
}

function fecharModal(id) {
  document.getElementById(id).classList.remove("ativo");
}

// Fechar clicando no fundo
window.addEventListener("click", function(e) {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("ativo");
  }
});

