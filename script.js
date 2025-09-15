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

const npcs = [
  {
    name: Hornet,

  }
]
