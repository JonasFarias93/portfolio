// assets/js/navbar.js

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    hamburger.textContent = navLinks.classList.contains("nav-open") ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
        hamburger.textContent = "☰";
    });
});