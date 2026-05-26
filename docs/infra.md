# Infra — Jonas Farias Portfolio

## Objetivo

Documentar a infraestrutura operacional do projeto,
arquitetura de deploy e configurações de produção.

---

## Arquitetura

```txt
Internet
    ↓
Cloudflare (DNS + Proxy + SSL + Cache)
    ↓
VPS Ubuntu — São Paulo, BR
    ↓
Docker Engine
    ↓
Container: Nginx (porta 80)
    ↓
Arquivos estáticos do portfolio
```

---

## Ambiente do Servidor

| Item | Valor |
|------|-------|
| OS | Ubuntu Server (LTS) |
| Localização | São Paulo, BR |
| Serviço de container | Docker + Docker Compose |
| Web server | Nginx Alpine |
| DNS / Proxy | Cloudflare |

---

## Containers

| Container | Imagem | Porta | Função |
|-----------|--------|-------|--------|
| portfolio | nginx:alpine | 80:80 | Serve o frontend estático |

---

## Arquivos Docker

### `Dockerfile`
```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

### `docker-compose.yml`
```yaml
services:
  portfolio:
    build: .
    container_name: portfolio
    ports:
      - "80:80"
    restart: unless-stopped
```

### `.dockerignore`
```txt
.git
.gitignore
README.md
docs/
*.md
```

---

## Nginx

### Funções
- Servir arquivos estáticos
- Compressão gzip
- Cache de assets
- Headers de segurança
- Fallback para index.html

### Configuração — `docker/nginx.conf`
```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    location ~* \.(css|js|jpg|jpeg|png|webp|svg|ico|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
}
```

---

## Segurança

| Medida | Status |
|--------|--------|
| SSH Hardening | Planejado |
| Firewall UFW | Planejado |
| Fail2Ban | Planejado |
| Cloudflare Proxy | Planejado |
| Headers HTTP | ✅ Configurado no Nginx |
| SSL/TLS | Via Cloudflare |

---

## Cloudflare

### Funções
- DNS management
- Proxy reverso
- SSL/TLS automático
- Proteção DDoS
- Cache de assets estáticos

### Configuração recomendada
```txt
SSL Mode: Full
Always HTTPS: On
Auto Minify: JS, CSS, HTML
Caching Level: Standard
```

---

## Comandos operacionais

### Subir o ambiente
```bash
docker compose up -d --build
```

### Ver logs em tempo real
```bash
docker compose logs -f
```

### Parar o ambiente
```bash
docker compose down
```

### Reiniciar após atualização
```bash
git pull
docker compose up -d --build
```

---

## Fluxo de Deploy

```txt
Desenvolvimento local
        ↓
git push origin main
        ↓
SSH na VPS
        ↓
git pull
        ↓
docker compose up -d --build
        ↓
Site atualizado em produção
```

---

## Monitoramento

| Ferramenta | Status |
|------------|--------|
| Netdata | Planejado |
| Uptime Kuma | Planejado |
| Logs Docker | `docker compose logs -f` |
| Logs Nginx | `/var/log/nginx/` |

---

## Escalabilidade futura

```txt
Atual:
Frontend estático → Nginx → Docker → VPS

Futuro:
Frontend → Nginx
Backend Django API → Gunicorn → Docker
Banco PostgreSQL → Docker
Redis → Docker
CI/CD → GitHub Actions
```

---

## Ambientes

| Ambiente | Descrição |
|----------|-----------|
| dev | Local com Live Server ou Docker |
| production | VPS com Docker + Cloudflare |