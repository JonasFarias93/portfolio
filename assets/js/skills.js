// assets/js/skills.js

const skills = [
    {
        category: "Backend",
        items: ["Python", "Django", "FastAPI", "REST APIs"]
    },
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        category: "Banco de Dados",
        items: ["PostgreSQL", "MySQL", "Redis", "SQLite"]
    },
    {
        category: "DevOps & Infra",
        items: ["Docker", "Nginx", "Linux", "Cloudflare"]
    },
    {
        category: "Ferramentas",
        items: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
        category: "Segurança",
        items: ["SSH Hardening", "UFW", "Fail2Ban", "SSL/TLS"]
    }
];

function renderSkills() {
    const grid = document.getElementById("skills-grid");
    grid.innerHTML = "";

    skills.forEach(skill => {
        const items = skill.items
            .map(item => `<div class="skill-item"><span>${item}</span></div>`)
            .join("");

        grid.innerHTML += `
            <div class="skill-category">
                <h3 class="skill-category-title">${skill.category}</h3>
                <div class="skill-items">${items}</div>
            </div>
        `;
    });
}

renderSkills();