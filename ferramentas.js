const items = document.querySelectorAll('.item');
const modal = document.getElementById('modal');
const modalNome = document.getElementById('modal-nome');
const modalDescricao = document.getElementById('modal-descricao');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('closeBtn');

items.forEach(item => {
  item.addEventListener('click', () => {
    modalNome.textContent = item.dataset.nome;
    modalDescricao.textContent = item.dataset.descricao;
    modalImg.src = item.dataset.img;
    abrirModal('modal');
  });
});

closeBtn.addEventListener('click', () => {
  fecharModal('modal');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    fecharModal('modal');
  }
});

function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
  document.body.style.overflow = "hidden"; // trava rolagem
}

function fecharModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300);
  document.body.style.overflow = ""; // libera rolagem
}
