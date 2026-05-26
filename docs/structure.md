# Structure — Jonas Farias Portfolio

## Objetivo

Documentar a organização técnica real do projeto,
convenções adotadas e responsabilidade de cada arquivo.

---

## Estrutura de Arquivos

```txt
portfolio/
│
├── index.html                  # Página principal
│
├── assets/
│   ├── css/
│   │   ├── variables.css       # Tokens globais (cores, fontes, espaçamento)
│   │   ├── style.css           # Layout base, todas as seções
│   │   ├── components.css      # Reservado para componentes futuros
│   │   └── responsive.css      # Media queries (992px, 768px)
│   │
│   ├── js/
│   │   ├── projects.js         # Array de dados dos projetos
│   │   ├── skills.js           # Array de dados das skills
│   │   ├── filters.js          # Lógica de filtro e renderização dos projetos
│   │   ├── navbar.js           # Menu hambúrguer mobile
│   │   ├── animations.js       # Scroll reveal, navbar scroll, link ativo
│   │   └── script.js           # Inicialização geral (reservado)
│   │
│   ├── img/                    # Imagens do site
│   ├── icons/                  # Ícones SVG futuros
│   └── fonts/                  # Fontes locais futuras
│
├── docs/
│   ├── wireframe.md
│   ├── design-system.md
│   ├── structure.md            # Este arquivo
│   ├── infra.md
│   ├── decision.md
│   └── deploy-guide.md
│
├── docker/
│   └── nginx.conf              # Configuração do servidor Nginx
│
├── .dockerignore               # Arquivos ignorados no build Docker
├── Dockerfile                  # Build da imagem do container
├── docker-compose.yml          # Orquestração dos containers
└── README.md                   # Documentação principal do repositório
```

---

## Responsabilidade de cada arquivo CSS

### `variables.css`
Fonte única da verdade para todos os tokens visuais.
Nunca usar valores hardcoded no CSS — sempre usar variáveis daqui.

### `style.css`
Layout base e estilo de todas as seções:
- Reset global
- Navbar
- Hero
- Sobre
- Skills
- Projetos
- Contato
- Footer
- Animações scroll reveal

### `components.css`
Reservado para componentes reutilizáveis futuros.
Atualmente vazio.

### `responsive.css`
Apenas media queries.
Nunca adicionar estilos base aqui — só sobrescritas responsivas.

---

## Responsabilidade de cada arquivo JS

### `projects.js`
Array com todos os projetos. Único arquivo a editar
para adicionar, remover ou atualizar projetos.

```js
// Estrutura de um projeto
{
    title: "Nome do Projeto",
    desc: "Descrição do projeto.",
    tags: ["Python", "Django"],
    category: ["web", "backend"],
    github: "https://github.com/...",
    demo: "https://..."
}
```

### `skills.js`
Array com todas as categorias e skills. Único arquivo
a editar para adicionar, remover ou atualizar skills.

```js
// Estrutura de uma categoria
{
    category: "Nome da Categoria",
    items: ["Skill1", "Skill2"]
}
```

### `filters.js`
- Lê o array de `projects.js`
- Renderiza os cards no `#projetos-grid`
- Gerencia os botões de filtro
- Depende de `projects.js` — deve ser carregado depois

### `navbar.js`
- Controla o menu hambúrguer no mobile
- Fecha o menu ao clicar em um link
- Alterna ícone ☰ / ✕

### `animations.js`
- Scroll reveal com IntersectionObserver
- Navbar com sombra ao rolar
- Link ativo na navbar conforme seção visível

### `script.js`
Reservado para inicialização geral futura.
Atualmente vazio.

---

## Ordem de carregamento dos scripts

```html
<!-- Dados primeiro -->
<script src="assets/js/projects.js"></script>
<script src="assets/js/skills.js"></script>

<!-- Lógica que depende dos dados -->
<script src="assets/js/filters.js"></script>

<!-- Independentes -->
<script src="assets/js/script.js"></script>
<script src="assets/js/navbar.js"></script>
<script src="assets/js/animations.js"></script>
```

A ordem importa: `filters.js` depende de `projects.js`
e `skills.js` já estarem carregados.

---

## Convenções de Naming

### Classes CSS
```txt
kebab-case
```

Exemplos:
```txt
hero-section
project-card
nav-link
skill-category
section-wrapper
```

### Arquivos
```txt
kebab-case
```

Exemplos:
```txt
projects.js
design-system.md
nginx.conf
```

### IDs HTML
Usados apenas para ancoragem de navegação e
seleção via JS:
```txt
#navbar
#inicio
#sobre
#skills
#projetos
#infra
#contato
#footer
#projetos-grid
#skills-grid
#hamburger
```

---

## Padrão de Seção

Toda seção segue esta estrutura HTML:

```html
<section id="nome" class="nome-section">
    <div class="section-wrapper">

        <div class="section-header">
            <span class="section-badge">Label</span>
            <h2 class="section-title">Título <span class="hero-accent">Destaque</span></h2>
            <p class="section-subtitle">Subtítulo opcional</p>
        </div>

        <!-- conteúdo específico da seção -->

    </div>
</section>
```

---

## Como adicionar um projeto

1. Abrir `assets/js/projects.js`
2. Adicionar objeto no array `projects`:

```js
{
    title: "Novo Projeto",
    desc: "Descrição clara e objetiva do projeto.",
    tags: ["Python", "Docker"],
    category: ["backend", "linux"],
    github: "https://github.com/jonas/novo-projeto",
    demo: "#"
}
```

3. Salvar — o card aparece automaticamente.

---

## Como adicionar uma skill

1. Abrir `assets/js/skills.js`
2. Adicionar item em uma categoria existente:

```js
{ category: "Backend", items: ["Python", "Django", "NovoItem"] }
```

Ou adicionar nova categoria:

```js
{ category: "Nova Categoria", items: ["Item1", "Item2"] }
```

3. Salvar — o card aparece automaticamente.

---

## Git Flow

```txt
main      → produção estável
dev       → desenvolvimento ativo
feature/* → novas funcionalidades
hotfix/*  → correções urgentes em produção
```