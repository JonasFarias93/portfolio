# Decisões Técnicas — Jonas Farias Portfolio

## Objetivo

Registrar decisões tomadas durante o desenvolvimento,
o motivo de cada uma e as alternativas descartadas.
Serve como referência para manutenção futura e
evolução do projeto.

---

## DT-001 — Contato via cards diretos, não formulário

**Decisão:** Seção de contato implementada com cards
clicáveis (Email, GitHub, LinkedIn, WhatsApp) em vez
de formulário HTML.

**Motivo:**
- Formulário HTML puro não envia emails sem backend
- Alternativas externas (Formspree, EmailJS) adicionam
  dependência desnecessária para um portfólio estático
- Cards diretos eliminam fricção — um clique já abre
  o canal de comunicação
- Recrutadores preferem contato direto

**Alternativas descartadas:**
- Formulário com Formspree
- Formulário com EmailJS
- Formulário estático (apenas visual, sem função)

---

## DT-002 — Projetos e Skills gerados via JavaScript

**Decisão:** Cards de projetos e skills não estão
escritos no HTML — são gerados dinamicamente por
`projects.js` e `skills.js`.

**Motivo:**
- Facilita manutenção: adicionar projeto = 1 objeto no array
- Elimina duplicação de HTML
- Filtros de projetos funcionam naturalmente com JS
- Escala bem conforme o portfólio cresce

**Como funciona:**
```txt
projects.js  → define array de dados
filters.js   → lê array e renderiza cards no DOM
skills.js    → define array e renderiza cards no DOM
```

**Alternativas descartadas:**
- HTML estático para cada card (difícil de manter)
- CMS externo (complexidade desnecessária)
- Backend Django para servir dados (over-engineering
  para esta fase)

---

## DT-003 — Frontend 100% estático

**Decisão:** O portfólio é HTML, CSS e JavaScript
Vanilla puro — sem frameworks.

**Motivo:**
- Performance máxima — sem bundle, sem runtime
- Deploy simples — qualquer Nginx serve
- Foco no conteúdo, não na tecnologia
- Demonstra domínio dos fundamentos

**Alternativas descartadas:**
- React / Next.js (over-engineering para portfólio)
- Vue.js (mesma razão)
- Jekyll / Hugo (geradores estáticos — complexidade
  desnecessária)

---

## DT-004 — Nginx Alpine como servidor

**Decisão:** Imagem `nginx:alpine` para servir
os arquivos estáticos em produção.

**Motivo:**
- Imagem extremamente leve (~20MB)
- Nginx é o padrão de mercado para servir estáticos
- Alpine reduz superfície de ataque
- Compatible com Cloudflare na frente

**Alternativas descartadas:**
- Apache (mais pesado, menos performático para estáticos)
- Caddy (menos familiar, menos documentação)
- Servir direto via Python HTTP server (não adequado
  para produção)

---

## DT-005 — CSS com variáveis nativas (CSS Custom Properties)

**Decisão:** Todo o design system implementado com
variáveis CSS nativas em `variables.css`.

**Motivo:**
- Sem dependência de preprocessador (Sass, Less)
- Funciona nativamente em todos os browsers modernos
- Fácil de manter e atualizar
- Tokens reutilizáveis em todo o CSS

**Alternativas descartadas:**
- Sass/SCSS (adiciona etapa de build)
- Tailwind CSS (conflita com a proposta de CSS próprio)
- CSS inline (impossível de manter)

---

## DT-006 — section-wrapper como padrão de layout

**Decisão:** Todas as seções usam um `div.section-wrapper`
interno para controlar `max-width` e `padding`.

**Motivo:**
- Evita repetição de `max-width` e `margin: 0 auto`
  em cada seção
- Permite que o `background` da seção ocupe 100%
  da largura enquanto o conteúdo fica centralizado
- Padrão consistente em todo o site

**Estrutura:**
```html
<section id="nome" class="nome-section">
    <div class="section-wrapper">
        <!-- conteúdo centralizado aqui -->
    </div>
</section>
```

---

## DT-007 — Scroll Reveal com IntersectionObserver

**Decisão:** Animações de entrada dos elementos
implementadas com a API nativa `IntersectionObserver`.

**Motivo:**
- API nativa do browser — sem biblioteca externa
- Performance superior ao scroll event listener
- Fácil de configurar threshold e rootMargin
- Funciona bem em mobile

**Alternativas descartadas:**
- AOS (Animate On Scroll) — dependência externa
- GSAP — over-engineering para este caso
- scroll event listener — menos performático

---

## Registro de bugs corrigidos

| ID | Descrição | Solução |
|----|-----------|---------|
| BUG-001 | `line-height: 1,6` com vírgula em vez de ponto | Corrigido para `1.6` |
| BUG-002 | Typo `hero-rigth` em vez de `hero-right` | Corrigido no HTML |
| BUG-003 | `projetos-section` sem `</section>` de fechamento | Tag adicionada |
| BUG-004 | Skills geradas via JS mas `#skills-grid` ausente no HTML | ID adicionado |
| BUG-005 | Footer saindo da largura por falta de `max-width` | `section-wrapper` aplicado com override |
| BUG-006 | Skill items em coluna em vez de linha | `width: fit-content` e `white-space: nowrap` adicionados |
| BUG-007 | MIME type duplicado no nginx.conf | `text/html` removido do `gzip_types` |