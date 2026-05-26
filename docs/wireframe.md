# Wireframe — Jonas Farias Portfolio

## Objetivo

Definir estrutura visual, organização das seções,
experiência do usuário, fluxo de navegação e
hierarquia de conteúdo.

---

## Estrutura Geral da Página

```txt
[ Header / Navbar ]
        ↓
[ Hero Section ]
        ↓
[ Sobre ]
        ↓
[ Skills ]
        ↓
[ Projetos ]
        ↓
[ Infraestrutura / DevOps ]
        ↓
[ Contato ]
        ↓
[ Footer ]
```

---

## Navbar

### Itens
```txt
Logo (Jonas Farias)
Início
Sobre
Projetos
Contato
```

### Comportamento
- **Desktop:** horizontal fixa no topo, fundo escuro,
  logo laranja, links brancos com hover laranja
- **Mobile:** menu hambúrguer, abre menu vertical
  ao clicar, fecha ao clicar em link

---

## Hero Section

### Layout
```txt
[TEXTO ESQUERDA]     [CARD IMAGEM DIREITA]
```

### Conteúdo esquerda
- Badge pill: "Desenvolvedor Full Stack"
- Título: "Olá, eu sou Jonas Farias"
- Subtítulo laranja: "Python Developer"
- Descrição profissional curta
- Botões: Ver Projetos / Entre em Contato
- Ícones sociais: GitHub, LinkedIn, Email

### Conteúdo direita
- Card com foto/avatar
- Badge flutuante: `</> Python • Django`

---

## Seção Sobre

### Layout
```txt
[FOTO/AVATAR ESQUERDA]     [TEXTO DIREITA]
```

### Conteúdo
- Badge: "Sobre mim"
- Título: "Quem sou eu?"
- Dois parágrafos de apresentação
- Card de informações: Localização, Foco, Disponível
- Botão: Entre em Contato

---

## Seção Skills

### Layout
Grid 3 colunas — 6 cards de categorias

### Categorias
- Backend
- Frontend
- Banco de Dados
- DevOps & Infra
- Ferramentas
- Segurança

### Comportamento
- Gerado dinamicamente via `skills.js`
- Para adicionar skill: editar array em `skills.js`

---

## Seção Projetos

### Layout
Grid 3 colunas — cards gerados via JS

### Filtros
```txt
Todos | Web | Backend | Frontend | API | Linux | Games
```

### Card de projeto
- Imagem placeholder (futuramente screenshot real)
- Ícones GitHub e Demo aparecem no hover
- Título
- Descrição
- Tags de tecnologias

### Comportamento
- Gerado dinamicamente via `projects.js`
- Para adicionar projeto: editar array em `projects.js`
- Filtros funcionam por `data-category`

---

## Seção Infraestrutura / DevOps

### Layout
Grid de cards ou lista visual

### Conteúdo previsto
- Docker
- Nginx
- Cloudflare
- Deploy VPS
- Linux
- Hardening
- Monitoramento

### Status
- Planejada — a ser implementada

---

## Seção Contato

### Layout
Grid 2x2 de cards clicáveis

### Cards
- Email → abre cliente de email
- GitHub → abre perfil
- LinkedIn → abre perfil
- WhatsApp → abre conversa

### Decisão técnica
Formulário descartado em favor de contatos diretos.
Motivo: sem backend, formulário seria apenas visual.
Cards diretos garantem que o contato realmente aconteça.

---

## Footer

### Conteúdo
- Logo / Nome
- Descrição curta
- Ícones sociais
- Copyright com linha criativa

---

## Responsividade

### Desktop (1200px+)
- Grid completo 3 colunas
- Navbar horizontal

### Tablet (992px)
- Grid 2 colunas
- Hero empilhado verticalmente

### Mobile (768px)
- Grid 1 coluna
- Navbar hambúrguer
- Cards contato em coluna única

---

## Hierarquia Visual

1. Nome + Especialidade (Hero)
2. Projetos
3. Skills
4. Sobre
5. Contato