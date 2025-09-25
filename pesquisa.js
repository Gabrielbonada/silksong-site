const pages = [
  { name: "mapa", file: "mapas.html" },
  { name: "brasões", file: "Brasoes.html" },
  { name: "brasão do ceifador", file: "Brasaoceifador.html" },
  { name: "brasão do andarilho", file: "brasaoandarilho.html" },
  { name: "brasão do arquiteto", file: "brasaoarquiteto.html" },
  { name: "brasão da besta", file: "brasaodabesta.html" },
  { name: "brasão da bruxa", file: "brasaodabruxa.html" },
  { name: "brasão do xamã", file: "brasaoxama.html" },
  { name: "asa do pântano", file: "Asa_do_pantano.html" },
  { name: "besta alada", file: "Besta_voadora.html" },
  { name: "carmellita", file:"Carmellita.html" },
  { name: "comedor de sinos", file:"comedor_de_sino.html" },
  { name: "caveira tirana", file: "Caveira_Tirana.html" },
  { name: "irmã de lasca", file: "irma_de_lasca.html" },
  { name: "lace", file: "lace.html" },
  { name: "mãe musgo", file: "Mae_musgo.html" },
  { name: "mãe da ninhada", file: "mae_da_ninhada.html" },
  { name: "Besta Alada", file: "Besta_voadora.html" },
  { name: "Ultima Juiza", file: "ultimo_julgamento.html" },
];

// =========================
// FUNÇÃO PARA NORMALIZAR STRINGS (remover acentos)
// =========================
function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


// =========================
// PESQUISA COM DEBOUNCE
// =========================
const searchInput = document.getElementById("searchInput");
let debounceTimer;

if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = normalize(searchInput.value.trim());
      const resultsDiv = document.getElementById("results");
      if (resultsDiv) resultsDiv.innerHTML = "";

      if (query.length < 3) return;

      const found = pages.find(p => normalize(p.name) === query) || pages.find(p => normalize(p.name).includes(query));

      if (found) {
        window.location.href = found.file;
      } else if (resultsDiv) {
        const p = document.createElement("p");
        p.textContent = "Nenhum resultado encontrado...";
        resultsDiv.appendChild(p);
      }
    }, 1300);
  });
}

// =========================
// LIMPAR PESQUISA AO VOLTAR
// =========================
function limparPesquisa() {
  if (searchInput) searchInput.value = "";
  const resultsDiv = document.getElementById("results");
  if (resultsDiv) resultsDiv.innerHTML = "";
}
window.addEventListener("pageshow", limparPesquisa);
