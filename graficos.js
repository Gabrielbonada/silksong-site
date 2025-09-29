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

const API_KEY = "d15637dbd5a95f5b7f45f2ffea77ee4b";
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
const API_KEY1 = "8b4ee1907db54d529ea5bb22c0ae5b5f";
const gameName = "Hollow Knight: Silksong";
const rawgURL = `https://api.rawg.io/api/games?search=${encodeURIComponent(gameName)}&page_size=5&key=${API_KEY1}`;


fetch(rawgURL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("game-details");

    if (!data.results || data.results.length === 0) {
      container.innerHTML = "<p class='text-center'>Jogo não encontrado na base de dados RAWG.</p>";
      return;
    }

    const game = data.results[0];
    container.innerHTML = `
      <img src="${game.background_image}" alt="${game.name}" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title">${game.name}</h3>
        <p><strong>Data de lançamento:</strong> ${game.released || "N/D"}</p>
        <p><strong>Plataformas:</strong> ${game.platforms ? game.platforms.map(p => p.platform.name).join(", ") : "N/D"}</p>
        <p><strong>Gêneros:</strong> ${game.genres ? game.genres.map(g => g.name).join(", ") : "N/D"}</p>
        <a href="https://rawg.io/games/${game.slug}" target="_blank" class="btn btn-primary">Ver no RAWG</a>
      </div>
    `;
  })
  .catch(error => {
    console.error("Erro ao buscar dados do RAWG:", error);
    document.getElementById("game-details").innerHTML = "<p class='text-danger text-center'>Erro ao carregar informações do jogo.</p>";
  });



