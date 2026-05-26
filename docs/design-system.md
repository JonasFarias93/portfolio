# Design System — Jonas Farias Portfolio

## Objetivo

Padronizar identidade visual e garantir consistência
em todos os componentes do site.

---

## Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-main` | `#020617` | Background principal |
| `--bg-secondary` | `#0f172a` | Cards, navbar, footer |
| `--color-accent` | `#ff6b00` | Laranja — cor principal de destaque |
| `--text-main` | `#f8fafc` | Texto principal |
| `--text-secondary` | `#94a3b8` | Texto secundário, labels |
| `--border-color` | `#1e293b` | Bordas e divisores |
| `--color-white` | `#ffffff` | Texto sobre fundo laranja |
| `--accent-glow-rgba` | `rgba(255,107,0,0.20)` | Glow nos hovers |

---

## Tipografia

| Token | Valor |
|-------|-------|
| `--font-main` | `Inter, sans-serif` |
| `--weight-bold` | `700` |
| `--weight-regular` | `400` |
| `--font-size-hero` | `clamp(2.5rem, 5vw, 4rem)` |
| `--font-size-2xl` | `2rem` |
| `--font-size-xl` | `1.5rem` |
| `--font-size-lg` | `1.125rem` |
| `--font-size-base` | `1rem` |
| `--font-size-sm` | `0.875rem` |

---

## Espaçamento

Base: `8px`

| Token | Valor |
|-------|-------|
| `--space-xs` | `8px` |
| `--space-sm` | `16px` |
| `--space-md` | `24px` |
| `--space-lg` | `32px` |
| `--space-xl` | `48px` |
| `--space-2xl` | `64px` |
| `--space-3xl` | `96px` |
| `--space-4xl` | `120px` |

---

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-button` | `12px` | Botões |
| `--radius-card` | `20px` | Cards |
| `--radius-pill` | `999px` | Badges, tags, filtros |

---

## Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-glow` | `0 0 40px rgba(255,107,0,0.20)` | Hover de cards |

---

## Animações

| Token | Valor |
|-------|-------|
| `--transition-fast` | `0.2s ease` |
| `--transition-normal` | `0.3s ease` |
| `--transform-hover-card` | `translateY(-5px)` |

---

## Grid / Layout

| Token | Valor |
|-------|-------|
| `--container-max-width` | `1200px` |
| `--container-padding` | `10%` |

---

## Componentes

### Botão Primário
```css
background: var(--color-accent)
color: white
border-radius: var(--radius-button)
hover: box-shadow glow + translateY(-2px)
```

### Botão Secundário
```css
background: transparent
border: 2px solid var(--border-color)
hover: border laranja + texto laranja
```

### Card Padrão
```css
background: var(--bg-secondary)
border: 1px solid var(--border-color)
border-radius: var(--radius-card)
hover: border laranja + glow + translateY(-5px)
```

### Badge / Pill
```css
background: var(--color-accent)
color: white
border-radius: var(--radius-pill)
font-weight: bold
```

### Tag de tecnologia
```css
background: rgba(255,107,0,0.15)
color: var(--color-accent)
border-radius: var(--radius-pill)
```

### Input / Textarea
```css
background: var(--bg-secondary)
border: 1px solid var(--border-color)
focus: border laranja + glow sutil
```

---

## Estados Visuais

| Estado | Comportamento |
|--------|--------------|
| Hover | Borda laranja + glow |
| Active | Accent sólido |
| Focus | Outline laranja |
| Disabled | Opacidade reduzida |

---

## Ícones

Atualmente usando texto como placeholder:
GH → GitHub
LI → LinkedIn
@  → Email
WA → WhatsApp
</> → Código

Migração futura para Lucide Icons ou Font Awesome.

---

## Breakpoints

| Nome | Valor |
|------|-------|
| Desktop | 1200px+ |
| Tablet | 992px |
| Mobile | 768px |
| Mobile pequeno | 576px |
