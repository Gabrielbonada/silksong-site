const chefes = [
  {
    nome: "Mãe Musgo",
    arquivo: "Mae_musgo.html",
    imagem: "/assets/Boss/Mae_musgo.webp",
    descricao: "Criatura selvagem e ancestral coberta de musgo, ataca com investidas brutais e invocações da floresta.",
    delay: 0
  },
  {
    nome: "Lace",
    arquivo: "lace.html",
    imagem: "/assets/Boss/Lace.webp",
    descricao: "Espadachim elegante e rival ágil de Hornet, mestre em estocadas rápidas, contagens e fintas",
    delay: 200
  },
  {
    nome: "Ultimo julgamento",
    arquivo: "Ultimo_julgamento.html",
    imagem: "/assets/Boss/Ultimo_julgamento.webp",
    descricao: "Guardiã flamejante do Portão da Cidadela, mestre em ataques com sino e chamas.",
    delay: 400
  },
  {
    nome: "Carmellita",
    arquivo: "Carmellita.html",
    imagem: "/assets/Boss/Carmellita.webp",
    descricao: "Rainha teatral e feroz, ataca com saltos precisos e lâminas giratórias em meio a uma plateia vibrante.",
    delay: 600
  },
  {
    nome: "Caveira Tirana",
    arquivo: "Caveira_Tirana.html",
    imagem: "/assets/Boss/Caveira_tirana.png",
    descricao: "Tirano esquelético implacável, golpeia com ataques pesados e domina o campo de batalha com força bruta.",
    delay: 800
  },
  {
    nome: "Irmã de lasca",
    arquivo: "irma_de_lasca.html",
    imagem: "/assets/Boss/Irma_de_lasca.png",
    descricao: "Uma raiz com tentáculos, flutua em combate e utiliza ataques rápidos e saltos acentuados.",
    delay: 0
  },
  {
    nome: "Asa do Pântano",
    arquivo: "Asa_do_pantano.html",
    imagem: "/assets/Boss/Asa_do_pantano.png",
    descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.",
    delay: 200
  },
  {
    nome: "Besta Voadora",
    arquivo: "Besta_voadora.html",
    imagem: "/assets/Boss/Besta_voadora.png",
    descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.",
    delay: 400
  },
  {
    nome: "Garmond and Zaza",
    arquivo: "garmondezaza.html",
    imagem: "/assets/Ballow.webp",
    descricao: "Protetora ágil e destemida de Hallownest, mestre na lança e guardiã dos segredos do reino.",
    delay: 600
  },
  {
    nome: "Shakra",
    arquivo: "Shakra.html",
    imagem: "/assets/Boss/Church_Keeper.webp",
    descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.",
    delay: 800
  },
  {
    nome: "Grande mãe de seda",
    arquivo: "grande_mae_de_seda",
    imagem: "/assets/Boss/grande_mae.png",
    descricao: "Guia experiente que ajuda Hornet, oferecendo dicas valiosas para explorar cada canto do reino.",
    delay: 0
  }
];

const Npc = [
  {
    nome: "Hornet",
    arquivo: "Hornet.html",
    imagem: "/assets/Npc/Hornet_Idle.webp",
    descricao: " Protetora ágil e destemida de Hallownest, mestre na lança e guardiã dos segredos do reino.",
    delay: "0"
  },
  {
    nome: "Shakra",
    arquivo: "Shakra.html",
    imagem: "/assets/Npc/Shakra.webp",
    descricao: "Guia experiente que ajuda Hornet.oferecendo dicas valiosas para explorar cada canto doreino.",
    delay: "200"
  },
  {
    nome: "Filha Da Forja",
    arquivo: "Filhadaforja.html",
    imagem: "/assets/Npc/Filha_da_forja.webp",
    descricao: " Restaura a Ferramenta Arruinada e concede versões mais poderosa dos ataques de Hornet.",
    delay: "400"
  },
  {
    nome: "Grindle",
    arquivo: "Grindle.html",
    imagem: "/assets/Npc/Grindle.webp",
    descricao: "Você pode libertá-lo e, depois, pagar Rosaries para obter segredos/informações pelo mapa de Pharloom.",
    delay: "600"
  },
  {
    nome: "Garmond e zaza",
    arquivo: "garmondezaza.html",
    imagem: "/assets/Npc/Garmond_e_zaza.webp",
    descricao: " Garmond fala demais, enquanto Zaza carrega e protege o parceiro silenciosamente.",
    delay: "800"
  },
  {
    nome: "Ballow",
    arquivo: "Ballow.html",
    imagem: "/assets/Npc/Ballow.webp",
    descricao: "Assistente da Filha da Forja.Trabalha alimentando carvão no maquinário da filha da forja.",
    delay: "0"
  },
  {
    nome: "Caravana",
    arquivo: "caranava.html",
    imagem: "/assets/Npc/Caravana.webp",
    descricao: "Guia experiente que ajuda Hornet.oferecendo dicas valiosas para explorar cada canto do reino.",
    delay: "200"
  },
  {
    nome: "Guardião da Igreja",
    arquivo: "Guardiao_da_igreja.html",
    imagem: "/assets/Npc/Guardiao_da_igreja.webp",
    descricao: " Sua presença intimidadora reflete a devoção e o rigor da fé local.",
    delay: "400"
  },
  {
    nome: "Caçadora",
    arquivo: "Caçador.html",
    imagem: "/assets/Npc/Huntress.webp",
    descricao: " Caçadora ágil e letal, mestre em rastrear suas presas, tornam-na uma adversária formidável.",
    delay: "600"
  },
  {
    nome: "Sherma",
    arquivo: "Sherma.html",
    imagem: "/assets/Npc/Sherma.webp",
    descricao: " Sherma é um NPC alegre que canta em fontes termais e ajuda Hornet em Silksong.",
    delay: "800"
  },
]
document.addEventListener('DOMContentLoaded', () => {
  const agrupamento1 = document.querySelector('.agrupamento1');

  chefes.forEach(chefe => {
    const a = document.createElement('a');
    a.href = chefe.arquivo;
    a.setAttribute('data-aos', 'fade-in');
    a.setAttribute('data-aos-delay', chefe.delay);

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('imgperso');
    img.src = chefe.imagem;
    img.alt = chefe.nome;

    const strong = document.createElement('strong');
    strong.textContent = chefe.nome;

    const span = document.createElement('span');
    span.classList.add('desc');
    span.textContent = chefe.descricao;

    card.appendChild(img);
    card.appendChild(strong);
    card.appendChild(span);

    a.appendChild(card);
    agrupamento1.appendChild(a);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const agrupamento = document.querySelector('.agrupamento');

  Npc.forEach(npc => {
    const a = document.createElement('a');  // Link
    a.href = npc.arquivo;
    a.setAttribute('data-aos', 'fade-in');
    a.setAttribute('data-aos-delay', npc.delay);

    const cardNpc = document.createElement('div');
    cardNpc.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('imgperso');
    img.src = npc.imagem;
    img.alt = npc.nome;

    const strong = document.createElement('strong');
    strong.textContent = npc.nome;

    const span = document.createElement('span');
    span.classList.add('desc');
    span.textContent = npc.descricao;

    cardNpc.appendChild(img);
    cardNpc.appendChild(strong);
    cardNpc.appendChild(span);

    a.appendChild(cardNpc);
    agrupamento.appendChild(a);
  });
});



const ctx1 = document.getElementById('meuGrafico').getContext('2d');
const ctx2 = document.getElementById('grafico').getContext('2d');

// Gráfico de barras
const graficoVendas = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Monster Hunter: Wilds',
      'Assassin’s Creed Shadows',
      'Hollow Knight: Silksong',
      'EA Sports FC 25',
      'Kingdom Come: Deliverance II'],
    datasets: [{
      label: 'Unidades Vendidas',
      data: [10000000, 5000000, 5000000, 2000000, 2000000],
      backgroundColor: [
        '#4e79a7',
        '#f28e2b',
        '#e15759',
        '#76b7b2',
        '#59a14f'
      ],
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Vendas de 5 Jogos'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { stepSize: 50 }
      }
    }
  }
});

// Gráfico de pizza
const graficocirculo = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Jogo A', 'Jogo B', 'Jogo C', 'Jogo D', 'Jogo E'],
    datasets: [{
      label: 'Unidades Vendidas',
      data: [20e6, 15e6, 5e6, 4e6, 3.5e6],
      backgroundColor: [
        '#4e79a7',
        '#f28e2b',
        '#e15759',
        '#76b7b2',
        '#59a14f'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'right' },
      title: {
        display: true,
        text: 'Distribuição de Vendas'
      }
    }
  }
});