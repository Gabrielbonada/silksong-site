// =========================
// DADOS
// =========================
const chefes = [
  { nome: "Mãe Musgo", arquivo: "Mae_musgo.html", imagem: "/assets/Boss/Mae_musgo.webp", descricao: "Criatura selvagem e ancestral coberta de musgo, ataca com investidas brutais e invocações da floresta.", delay: 0 },
  { nome: "Lace", arquivo: "lace.html", imagem: "/assets/Boss/Lace.webp", descricao: "Espadachim elegante e rival ágil de Hornet, mestre em estocadas rápidas, contagens e fintas", delay: 200 },
  { nome: "Ultimo julgamento", arquivo: "Ultimo_julgamento.html", imagem: "/assets/Boss/Ultimo_julgamento.webp", descricao: "Guardiã flamejante do Portão da Cidadela, mestre em ataques com sino e chamas.", delay: 400 },
  { nome: "Karmellita", arquivo: "Carmellita.html", imagem: "/assets/Boss/Carmellita.webp", descricao: "Rainha teatral e feroz, ataca com saltos precisos e lâminas giratórias em meio a uma plateia vibrante.", delay: 600 },
  { nome: "Caveira Tirana", arquivo: "Caveira_Tirana.html", imagem: "/assets/Boss/Caveira_tirana.png", descricao: "Tirano esquelético implacável, golpeia com ataques pesados e domina o campo de batalha com força bruta.", delay: 800 },
  { nome: "Irmã de lasca", arquivo: "irma_de_lasca.html", imagem: "/assets/Boss/Irma_de_lasca.png", descricao: "Uma raiz com tentáculos, flutua em combate e utiliza ataques rápidos e saltos acentuados.", delay: 0 },
  { nome: "Asa do Pântano", arquivo: "Asa_do_pantano.html", imagem: "/assets/Boss/Asa_do_pantano.png", descricao: "asa do pantano espreitou as torres de Greymoor, banqueteando-se com os peregrinos.", delay: 200 },
  { nome: "Besta Voadora", arquivo: "Besta_voadora.html", imagem: "/assets/Boss/Besta_voadora.png", descricao: "irritada com um corpo pesado e máscara rígida espessa.", delay: 400 },
  { nome: "Comedor de sinos", arquivo: "comedor_De_sino.html", imagem: "/assets/Boss/comedor_de_sino.png", descricao: "Centopéia há muito adormecida, acordada e enfurecida pelo colapso em ruínas de Pharloom. ", delay: 600 },
  { nome: "Mãe da ninhada", arquivo: "mae_da_ninhada.html", imagem: "/assets/Boss/mae_da_ninhada.png", descricao: "Matriarca louca da Laje raramente vista fora de seu labirinto. Dela são criados todos os carcereiros.", delay: 800 },
  { nome: "Grande mãe de seda", arquivo: "grande_mae_de_seda.html", imagem: "/assets/Boss/grande_mae.png", descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.", delay: 0 },
  { nome: "Besta do sino", arquivo: "besta_do_sino.html", imagem: "/assets/Boss/besta_do_sino.png", descricao: "Este aliou-se a mim, seja como agradecimento por sua salvação ou respeito por alguém julgado como igual.", delay: 200 },
  { nome: "dançarinos mecanicos", arquivo: "dancarinos.html", imagem: "/assets/Boss/dancarinos.png", descricao: "Autômatos de construção impecável, dando as boas-vindas aos participantes em sua câmara ", delay: 400 },
  { nome: "Pai dos craws", arquivo: "paicraw.html", imagem: "/assets/Boss/paicraw.png", descricao: "Senhor e justiça dos craws de Pharloom. Entrega a morte de insetos condenados com seu bico revestido de aço.", delay: 600 },

  { nome: "Fantasma", arquivo: "fantasma.html", imagem: "/assets/Boss/fantasma.png", descricao: "Criatura triste, encarregada sozinha de expulsar o lixo sufocante da Cidadela.", delay: 800 },

];

const Npc = [
  { nome: "Hornet", arquivo: "Hornet.html", imagem: "/assets/Npc/Hornet_Idle.webp", descricao: "Protetora ágil e destemida de Hallownest, mestre na lança e guardiã dos segredos do reino.", delay: 0 },
  { nome: "Shakra", arquivo: "Shakra.html", imagem: "/assets/Npc/Shakra.webp", descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.", delay: 200 },
  { nome: "Filha Da Forja", arquivo: "Filhadaforja.html", imagem: "/assets/Npc/Filha_da_forja.webp", descricao: "Restaura a Ferramenta Arruinada e concede versões mais poderosas dos ataques de Hornet.", delay: 400 },
  { nome: "Grindle", arquivo: "Grindle.html", imagem: "/assets/Npc/Grindle.webp", descricao: "Você pode libertá-lo e, depois, pagar Rosaries para obter segredos/informações pelo mapa de Pharloom.", delay: 600 },
  { nome: "Garmond e zaza", arquivo: "garmondezaza.html", imagem: "/assets/Npc/Garmond_e_zaza.webp", descricao: "Garmond fala demais, enquanto Zaza carrega e protege o parceiro silenciosamente.", delay: 800 },
  { nome: "Ballow", arquivo: "Ballow.html", imagem: "/assets/Npc/Ballow.webp", descricao: "Assistente da Filha da Forja. Trabalha alimentando carvão no maquinário da filha da forja.", delay: 0 },
  { nome: "Caravana", arquivo: "caranava.html", imagem: "/assets/Npc/Caravana.webp", descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.", delay: 200 },
  { nome: "Guardião da Igreja", arquivo: "Capela_maid.html", imagem: "/assets/Npc/Guardiao_da_igreja.webp", descricao: "Sua presença intimidadora reflete a devoção e o rigor da fé local.", delay: 400 },
  { nome: "Caçadora", arquivo: "Caçador.html", imagem: "/assets/Npc/Huntress.webp", descricao: "Caçadora ágil e letal, mestre em rastrear suas presas, tornando-a uma adversária formidável.", delay: 600 },
  { nome: "Sherma", arquivo: "Sherma.html", imagem: "/assets/Npc/Sherma.webp", descricao: "Sherma é um NPC alegre que canta em fontes termais e ajuda Hornet em Silksong.", delay: 800 }
];

const pages = [
  { name: "mapa", file: "mapas.html" },
  { name: "Itens", file: "Itens.html" },
  { name: "Ferramentas", file: "ferramentas.html" },
  { name: "Habilidade e silks", file: "Silks.html" },
  { name: "brasões", file: "Brasoes.html" },
  { name: "brasão do ceifador", file: "Brasaoceifador.html" },
  { name: "brasão do andarilho", file: "brasaoandarilho.html" },
  { name: "brasão do arquiteto", file: "brasaoarquiteto.html" },
  { name: "brasão da besta", file: "brasaodabesta.html" },
  { name: "brasão da bruxa", file: "brasaodabruxa.html" },
  { name: "brasão do xamã", file: "brasaoxama.html" },
  //Boss
  { name: "mãe musgo", file: "Mae_musgo.html" },
  { name: "lace", file: "lace.html" },
  { name: "Ultima juiza", file: "Ultimo_julgamento.html" },
  { name: "Karmellita", file: "Carmellita.html" },
  { name: "caveira tirana", file: "Caveira_Tirana.html" },
  { name: "irmã de lasca", file: "irma_de_lasca.html" },
  { name: "asa do pântano", file: "Asa_do_pantano.html" },
  { name: "besta alada", file: "Besta_voadora.html" },
  { name: "comedor de sinos", file: "comedor_de_sino.html" },
  { name: "mãe da ninhada", file: "mae_da_ninhada.html" },
  { name: "Besta Alada", file: "Besta_voadora.html" },
  { name: "lace", file: "lace.html" },
  { name: "Besta dos sinos", file: "besta_do_sino.html" },
  { name: "Dançarinos mecanicos", file: "dancarinos.html" },
  { name: "Paicraw", file: "paicraw.html" },

  //Npcs
  { name: "Ballow", file: "ballow.html" },
  { name: "Caçador", file: "Caçador.html" },
  { name: "Donzela da capela", file: "Capela_maid.html" },
  { name: "caravana das pulgas", file: "caravana.html" },
  { name: "Filha da forja", file: "Filhadaforja.html" },
  { name: "Garmond e zaza", file: "garmondezaza.html" },
  { name: "Grindle", file: "Grindle.html" },
  { name: "Hornet", file: "Hornet.html" },
  { name: "Shakra", file: "Shakra.html" },
  { name: "Sherma", file: "Sherma.html" },

];

// =========================
// FUNÇÃO PARA NORMALIZAR STRINGS (remover acentos)
// =========================
function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// =========================
// FUNÇÃO PARA CRIAR CARDS
// =========================
function criarCards(lista, seletor) {
  const container = document.querySelector(seletor);
  if (!container) return;

  lista.forEach(item => {
    const a = document.createElement('a');
    a.href = item.arquivo;
    a.setAttribute('data-aos', 'fade-in');
    a.setAttribute('data-aos-delay', item.delay);

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('imgperso');
    img.src = item.imagem;
    img.alt = item.nome;

    const strong = document.createElement('strong');
    strong.textContent = item.nome;

    const span = document.createElement('span');
    span.classList.add('desc');
    span.textContent = item.descricao;

    card.append(img, strong, span);
    a.appendChild(card);
    container.appendChild(a);
  });
}


// =========================
// PESQUISA COM DEBOUNCE + LOADER
// =========================
const searchInput = document.getElementById("searchInput");
let debounceTimer;

if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);

    const query = normalize(searchInput.value.trim());
    const resultsDiv = document.getElementById("results");
    if (resultsDiv) resultsDiv.innerHTML = "";

    // Só mostra o loader se tiver pelo menos 3 caracteres
    if (query.length >= 3 && resultsDiv) {
      const loader = document.createElement("div");
      loader.classList.add("loader");
      loader.id = "loadingMsg";
      resultsDiv.appendChild(loader);
    }

    debounceTimer = setTimeout(() => {
      if (resultsDiv) resultsDiv.innerHTML = "";

      if (query.length < 3) return;

      const found = pages.find(p => normalize(p.name) === query) || 
                    pages.find(p => normalize(p.name).includes(query));

      if (found) {
        window.location.href = found.file;
      } else if (resultsDiv) {
        const p = document.createElement("p");
        p.textContent = "Nenhum resultado encontrado...";
        resultsDiv.appendChild(p);
      }
    }, 1000);
  });
}
const hamburguerBtn = document.getElementById("hamburguer-btn");
const navbar = document.querySelector(".navbar");

hamburguerBtn.addEventListener("click", () => {
    hamburguerBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});


// =========================
// LIMPAR PESQUISA AO VOLTAR
// =========================
function limparPesquisa() {
  if (searchInput) searchInput.value = "";
  const resultsDiv = document.getElementById("results");
  if (resultsDiv) resultsDiv.innerHTML = "";
}
window.addEventListener("pageshow", limparPesquisa);

// =========================
// DOM CONTENT LOADED
// =========================
document.addEventListener('DOMContentLoaded', () => {
  criarCards(chefes, '.agrupamento1');
  criarCards(Npc, '.agrupamento');
  limparPesquisa();

  // =========================
  // GRÁFICOS
  // =========================
  
  }
);

