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

  const API_KEY = "d15637dbd5a95f5b7f45f2ffea77ee4b"; // Coloque sua chave aqui
  const query = "Hollow Knight Silksong";
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=pt&max=6&apikey=${API_KEY}`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("gnews-container");

      if (!data.articles || data.articles.length === 0) {
        container.innerHTML = "<p class='text-center'>Nenhuma notícia encontrada no momento.</p>";
        return;
      }

      data.articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "col-md-4";

        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${article.image || 'https://via.placeholder.com/300x150'}" class="card-img-top" alt="Imagem da notícia">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description || ''}</p>
              <a href="${article.url}" class="btn btn-primary" target="_blank">Ler mais</a>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Erro ao buscar notícias da GNews:", error);
      document.getElementById("gnews-container").innerHTML = "<p class='text-danger text-center'>Erro ao carregar notícias.</p>";
    });

