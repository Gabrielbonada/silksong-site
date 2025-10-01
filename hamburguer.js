 const hamburguerBtn = document.getElementById("hamburguer-btn");
const navbar = document.querySelector(".navbar");

hamburguerBtn.addEventListener("click", () => {
    hamburguerBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});