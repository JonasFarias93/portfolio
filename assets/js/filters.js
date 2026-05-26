// assets/js/filters.js

function renderProjects(filter = "todos") {
    const grid = document.getElementById("projetos-grid");
    grid.innerHTML = "";

    const filtered = filter === "todos"
        ? projects
        : projects.filter(p => p.category.includes(filter));

    filtered.forEach(project => {
        const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join("");

        grid.innerHTML += `
            <div class="project-card">
                <div class="project-img">
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" title="GitHub">GH</a>
                        <a href="${project.demo}" class="project-link" title="Demo">↗</a>
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