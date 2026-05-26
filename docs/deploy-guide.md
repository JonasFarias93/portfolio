# Deploy Guide — Jonas Farias Portfolio

## Objetivo

Passo a passo completo para colocar o portfólio
em produção numa VPS Ubuntu com Docker e Cloudflare.

---

## Pré-requisitos

### VPS
- Ubuntu Server LTS
- Acesso SSH com chave configurada
- Usuário não-root com sudo

### Local
- Git configurado
- Repositório no GitHub

### Domínio
- Domínio registrado
- Conta no Cloudflare
- DNS apontando para a VPS

---

## Parte 1 — Preparar a VPS

### 1.1 Atualizar o sistema
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Instalar Docker
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker
```

### 1.3 Verificar instalação
```bash
docker --version
docker compose version
```

### 1.4 Configurar firewall UFW
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status
```

---

## Parte 2 — Clonar o projeto

```bash
# Na VPS
cd ~
git clone https://github.com/JonasFarias93/portifolio.git
cd portfolio
```

---

## Parte 3 — Subir o container

```bash
docker compose up -d --build
```

### Verificar se está rodando
```bash
docker compose ps
docker compose logs -f
```

### Testar localmente na VPS
```bash
curl http://localhost
```

Se retornar o HTML do site, está funcionando.

---

## Parte 4 — Configurar Cloudflare

### 4.1 Adicionar domínio no Cloudflare
1. Criar conta em cloudflare.com
2. Adicionar o domínio
3. Trocar os nameservers no registrador

### 4.2 Configurar DNS
```txt
Tipo: A
Nome: @
Conteúdo: IP_DA_VPS
Proxy: Ligado (nuvem laranja)
```

```txt
Tipo: A
Nome: www
Conteúdo: IP_DA_VPS
Proxy: Ligado (nuvem laranja)
```

### 4.3 Configurações recomendadas
```txt
SSL/TLS → Full
Edge Certificates → Always Use HTTPS: On
Speed → Auto Minify: JS, CSS, HTML
Caching → Caching Level: Standard
```

---

## Parte 5 — Verificar em produção

```bash
# Acessa o domínio no browser
https://seudominio.com
```

Checklist:
- [ ] Site carrega
- [ ] HTTPS ativo (cadeado verde)
- [ ] Todas as seções visíveis
- [ ] Filtros de projetos funcionando
- [ ] Links de contato funcionando
- [ ] Mobile responsivo

---

## Parte 6 — Fluxo de atualização

Sempre que fizer mudanças no site:

```bash
# Local
git add .
git commit -m "descrição da mudança"
git push origin main

# Na VPS
cd ~/portfolio
git pull
docker compose up -d --build
```

---

## Comandos úteis

### Ver containers rodando
```bash
docker compose ps
```

### Ver logs em tempo real
```bash
docker compose logs -f
```

### Reiniciar container
```bash
docker compose restart
```

### Parar tudo
```bash
docker compose down
```

### Ver uso de recursos
```bash
docker stats
```

---

## Troubleshooting

### Site não carrega
```bash
# Verificar se container está rodando
docker compose ps

# Verificar logs
docker compose logs

# Verificar porta
sudo ss -tlnp | grep 80
```

### Mudanças não aparecem
```bash
# Forçar rebuild completo
docker compose down
docker compose up -d --build
```

### Erro de permissão no Docker
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Verificar configuração do Nginx
```bash
docker exec portfolio nginx -t
```

---

## Segurança adicional (recomendado)

### SSH Hardening
```bash
sudo nano /etc/ssh/sshd_config

# Alterar:
PermitRootLogin no
PasswordAuthentication no
Port 2222  # trocar porta padrão
```

### Fail2Ban
```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

---

## Estrutura final em produção

```txt
VPS Ubuntu
├── ~/portfolio/          ← repositório clonado
│   ├── index.html
│   ├── assets/
│   ├── docker/
│   ├── docker-compose.yml
│   └── Dockerfile
│
└── Docker
    └── container: portfolio (nginx:alpine, porta 80)
```