  const btn = document.getElementById('hamburguer-btn');
    const navbar = document.querySelector('.navbar');

    btn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });