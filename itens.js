document.addEventListener('DOMContentLoaded', function () {
        const categorias = document.querySelectorAll('.item-category');
        const itens = document.querySelectorAll('.card-item');

        categorias.forEach(cat => {
            cat.addEventListener('click', () => {
                // Remove active de todos
                categorias.forEach(c => c.classList.remove('active'));
                cat.classList.add('active');

                const categoriaSelecionada = cat.getAttribute('data-categoria');

                itens.forEach(item => {
                    const categoriaItem = item.getAttribute('data-categoria');

                    if (categoriaSelecionada === 'todos' || categoriaItem === categoriaSelecionada) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Ativa "Todos os Itens" automaticamente ao carregar
        const botaoTodos = document.querySelector('.item-category[data-categoria="todos"]');
        if (botaoTodos) {
            botaoTodos.click();
        }
    });
        document.addEventListener('DOMContentLoaded', function () {
        const categorias = document.querySelectorAll('.item-category');
        const itens = document.querySelectorAll('.card-item');
        const searchInput = document.getElementById('searchInput');

        // Filtragem por categoria
        categorias.forEach(cat => {
            cat.addEventListener('click', () => {
                categorias.forEach(c => c.classList.remove('active'));
                cat.classList.add('active');

                const categoriaSelecionada = cat.getAttribute('data-categoria');

                itens.forEach(item => {
                    const categoriaItem = item.getAttribute('data-categoria');

                    if (!categoriaSelecionada || categoriaSelecionada === 'todos' || categoriaItem === categoriaSelecionada) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Limpa pesquisa quando muda categoria
                searchInput.value = '';
            });
        });

        // Pesquisa por texto
        searchInput.addEventListener('input', function () {
            const searchText = this.value.toLowerCase();

            itens.forEach(item => {
                const textoItem = item.textContent.toLowerCase();

                // Só mostra se o texto bater E estiver visível pela categoria
                if (textoItem.includes(searchText)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Ativa "Todos os Itens" automaticamente ao abrir
        const btnTodos = document.querySelector('.item-category[data-categoria="todos"]');
        if (btnTodos) {
            btnTodos.click();
        } else {
            categorias[0].click(); // fallback
        }
    });
    