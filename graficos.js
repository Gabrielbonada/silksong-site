const ctx1 = document.getElementById('meuGrafico')?.getContext('2d');
const ctx2 = document.getElementById('grafico')?.getContext('2d');

if (ctx1) {
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Monster Hunter: Wilds', 'Assassin’s Creed Shadows', 'Hollow Knight: Silksong', 'EA Sports FC 25', 'Kingdom Come: Deliverance II'],
      datasets: [{
        label: 'Unidades Vendidas',
        data: [10_000_000, 5_000_000, 5_000_000, 2_000_000, 2_000_000],
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f'],
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true }, title: { display: true, text: 'Vendas de 5 Jogos' } },
      scales: { x: { beginAtZero: true } }
    }
  });
}

if (ctx2) {
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Steam', 'Xbox', 'Playstation', 'Nintendo Switch'],
      datasets: [{
        label: 'Unidades Vendidas',
        data: [3_200_000, 100_000_0, 500_000, 500_000], // valores corretos
        backgroundColor: ['#4e79a7', '#59a14f', '#76b7b2', '#e15759'],
        borderWidth: 1
      }]
    },
    options: { responsive: true, plugins: { legend: { display: true, position: 'right' }, title: { display: true, text: 'Distribuição de Vendas' } } }
  });
}