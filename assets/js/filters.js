// assets/js/filters.js

function getProjectImage(project) {
    if (project.image) {
        return `<img src="${project.image}" alt="${project.title}" class="project-img-real">`;
    }
    return '';
}

function renderProjects(filter = "todos") {
    const grid = document.getElementById("projetos-grid");
    grid.innerHTML = "";

    const filtered = filter === "todos"
        ? projects
        : projects.filter(p => p.category.includes(filter));

    filtered.forEach(project => {
        const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join("");

        const demoBtn = project.demo
            ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" title="Demo">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>`
            : '';

        grid.innerHTML += `
            <div class="project-card">
                <div class="project-img">
                    ${getProjectImage(project)}
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" title="GitHub">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        ${demoBtn}
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-tags">${tags}</div>
                </div>
            </div>
        `;
    });
}

// Filtros
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
    });
});

// Renderiza todos ao carregar
renderProjects();