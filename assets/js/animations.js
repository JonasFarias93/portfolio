// assets/js/animations.js

// ==========================================
// NAVBAR — muda aparência ao rolar
// ==========================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// ==========================================
// SCROLL REVEAL — elementos aparecem ao entrar na tela
// ==========================================
const revealElements = document.querySelectorAll(
    ".project-card, .skill-category, .contato-card, .sobre-grid, .contato-info-item"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});

// ==========================================
// LINK ATIVO NA NAVBAR ao rolar
// ==========================================
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});