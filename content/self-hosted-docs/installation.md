---
title: Installation
meta:
  title: Mockoon Self-Hosted installation and configuration
  description: Learn how to deploy and configure Mockoon Self-Hosted using Docker, Docker Compose, Kubernetes, and OpenShift.
order: 101
---

# Installation

---

Mockoon Self-Hosted is distributed as an official [Docker image on Docker Hub (`mockoon/pro`)](https://hub.docker.com/r/mockoon/pro). It requires a single persistent storage directory and a base domain name with wildcard DNS support for deployed mock instances.

## Prerequisites

- **Docker or OCI container engine** (Docker Engine, Podman, containerd).
- **Persistent storage volume**: A local volume or network persistent volume (minimum 1GB recommended) mounted to `/data`.
- **Domain & DNS records**:
  - A base domain pointing to your server (e.g. `mockoon.company.com`, replace with your own domain).
  - A wildcard DNS record pointing to the same server (e.g. `*.mockoon.company.com`) to support deployed mock subdomains.
- **TLS Certificate** (for production): A wildcard TLS certificate covering both the base domain (`mockoon.company.com`) and its subdomains (`*.mockoon.company.com`).

> 💡 In the configuration examples below, `mockoon.company.com` is used as a placeholder. Replace it with your own chosen domain. For local evaluation and development, you can omit the domain configuration or use `localhost`. Modern browsers automatically resolve `*.localhost` (such as `mock-1.localhost`) to `127.0.0.1` and treat it as a secure context.

## Deployment methods

### Docker

You can run Mockoon Self-Hosted with a standard `docker run` command:

```bash
docker run -d \
  --name mockoon-pro \
  -p 5020:5020 \
  -e MOCKOON_DOMAIN=mockoon.company.com \
  -e MOCKOON_SERVER_ID=mockoon-node-1 \
  -e MOCKOON_STORAGE_DIR=/data/ \
  -e NODE_ENV=production \
  -e PORT=5020 \
  -v mockoon-data:/data \
  mockoon/pro:latest
```

### Docker Compose

For VM and standalone server deployments, Docker Compose paired with a reverse proxy like **Caddy** provides a complete, turnkey stack with automated HTTPS certificate provisioning for both your base domain and dynamic mock subdomains.

#### Docker Compose with Caddy (Automated HTTPS)

This setup uses **Caddy** with **On-Demand TLS**. Caddy automatically provisions and renews TLS certificates via Let's Encrypt / ZeroSSL on port 80 for the main dashboard and every mock subdomain created by your team, with zero DNS API credentials required.

1. Create a `docker-compose.yml` file:

```yaml
services:
  caddy:
    image: caddy:2-alpine
    container_name: mockoon-proxy
    restart: unless-stopped
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config
    depends_on:
      - mockoon-pro

  mockoon-pro:
    image: mockoon/pro:latest
    container_name: mockoon-pro
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - PORT=5020
      - MOCKOON_DOMAIN=mockoon.company.com
      - MOCKOON_SERVER_ID=mockoon-pro-prod
      - MOCKOON_STORAGE_DIR=/data/
      - USE_HTTPS=true
    volumes:
      - mockoon-pro-data:/data

volumes:
  caddy_data:
  caddy_config:
  mockoon-pro-data:
```

2. Create a `Caddyfile` in the same directory:

```caddy
{
  on_demand_tls {
    # Internal permission check to prevent certificate issuance abuse
    ask http://127.0.0.1:8080/check-domain
  }
}

# Internal check endpoint to validate subdomains
:8080 {
  @allowed `{query.domain}.endsWith('.mockoon.company.com') || {query.domain} == 'mockoon.company.com'`
  respond @allowed 200
  respond 400
}

# Main dashboard & API
https://mockoon.company.com {
  reverse_proxy mockoon-pro:5020
}

# Dynamic mock subdomains (On-demand TLS)
https://*.mockoon.company.com {
  tls {
    on_demand
  }
  @subdomains host *.mockoon.company.com
  handle @subdomains {
    reverse_proxy mockoon-pro:5020
  }
}
```

#### Standalone Docker Compose (No Reverse Proxy)

If you already terminate TLS at an external load balancer or firewall:

```yaml
services:
  mockoon-pro:
    image: mockoon/pro:latest
    container_name: mockoon-pro
    restart: unless-stopped
    ports:
      - '5020:5020'
    environment:
      - NODE_ENV=production
      - PORT=5020
      - MOCKOON_DOMAIN=mockoon.company.com
      - MOCKOON_SERVER_ID=mockoon-pro-prod
      - MOCKOON_STORAGE_DIR=/data/
    volumes:
      - mockoon-pro-data:/data

volumes:
  mockoon-pro-data:
```

### Kubernetes & OpenShift

Mockoon Self-Hosted is compatible with Kubernetes and OpenShift environments:

- **Volume permissions**: The container is pre-configured with root group (`GID 0`) permissions (`chgrp 0 /data && chmod g+rwX /data`) to seamlessly support OpenShift's arbitrary non-root UID security context constraints (SCC).
- **Persistent Volume Claim**: Mount a `ReadWriteOnce` (RWO) PVC to `/data`.
- **Ingress / Route**: Configure your Ingress Controller or OpenShift Route to route both the main domain (`mockoon.company.com`) and wildcard subdomains (`*.mockoon.company.com`) to container port `5020`.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mockoon-pro
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mockoon-pro
  template:
    metadata:
      labels:
        app: mockoon-pro
    spec:
      containers:
        - name: mockoon-pro
          image: mockoon/pro:latest
          ports:
            - containerPort: 5020
          env:
            - name: NODE_ENV
              value: 'production'
            - name: PORT
              value: '5020'
            - name: MOCKOON_DOMAIN
              value: 'mockoon.company.com'
            - name: MOCKOON_SERVER_ID
              value: 'mockoon-k8s-1'
            - name: MOCKOON_STORAGE_DIR
              value: '/data/'
          volumeMounts:
            - name: mockoon-storage
              mountPath: /data
      volumes:
        - name: mockoon-storage
          persistentVolumeClaim:
            claimName: mockoon-pro-data-pvc
```

## Environment variables

The application is configured through environment variables passed to the container:

| Variable                | Required | Default              | Description                                                                                                                                                                                                                                |
| ----------------------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MOCKOON_DOMAIN`        | Optional | `localhost`          | Base domain for routing (e.g. `mockoon.company.com`). If omitted, defaults to `localhost`.                                                                                                                                                 |
| `PORT`                  | Optional | `5020`               | Port on which the HTTP server listens inside the container.                                                                                                                                                                                |
| `NODE_ENV`              | Optional | `development`        | Node.js environment mode: `production` or `development`.                                                                                                                                                                                   |
| `MOCKOON_STORAGE_DIR`   | Required | `/data/`             | Path to the directory where SQLite database files and mock environment JSON files are stored.                                                                                                                                              |
| `MOCKOON_SERVER_ID`     | Required | `mockoon-pro-server` | Unique identifier for the server node, used for deployment instances tracking and logging.                                                                                                                                                 |
| `USE_HTTPS`             | Optional | _Auto-inferred_      | Force `true` (HTTPS/WSS) or `false` (HTTP/WS). Automatically inferred as `false` for `localhost` and `true` for custom production domains. Informs the application that traffic is served over HTTPS (behind reverse proxy or Direct TLS). |
| `MOCKOON_TLS_CERT_PATH` | Optional | _None_               | Path to the server certificate/bundle when using Direct TLS. Direct TLS is only activated if this and `MOCKOON_TLS_KEY_PATH` are set.                                                                                                      |
| `MOCKOON_TLS_KEY_PATH`  | Optional | _None_               | Path to the server private key when using Direct TLS.                                                                                                                                                                                      |
| `MOCKOON_TLS_CA_PATH`   | Optional | _None_               | Path to the CA certificate when using Direct TLS.                                                                                                                                                                                          |

## DNS & wildcard routing

Mockoon Self-Hosted serves multiple interfaces from your base domain:

- **Dashboard & API**: `https://mockoon.company.com`
- **Embedded Web App**: `https://mockoon.company.com/app`
- **Synchronization Gateway (WebSocket)**: `wss://mockoon.company.com`
- **Deployed Mock Instances**: `https://{subdomain}.mockoon.company.com`

Configure two DNS records:

1. **A / CNAME Record**: `mockoon.company.com` pointing to your reverse proxy / ingress IP.
2. **Wildcard Record**: `*.mockoon.company.com` pointing to the same reverse proxy / ingress IP.

## TLS options

Traffic must be served over HTTPS to support both the dashboard (`mockoon.company.com`) and mock instances (`*.mockoon.company.com`). Choose one of the following setups:

### Option 1: Reverse proxy with a wildcard certificate (Recommended)

Using a wildcard certificate (covering `mockoon.company.com` and `*.mockoon.company.com`) is the recommended production setup:

- **Privacy**: A single wildcard certificate covers all dynamic mock subdomains without exposing individual mock subdomain names in public Certificate Transparency (CT) logs.
- Obtain the certificate via your DNS provider, internal corporate CA, or Certbot with a DNS-01 challenge (`_acme-challenge`), then mount it into your reverse proxy:

#### Caddy

```caddy
https://mockoon.company.com, https://*.mockoon.company.com {
  tls /etc/ssl/certs/fullchain.pem /etc/ssl/certs/privkey.pem
  reverse_proxy mockoon-pro:5020
}
```

Mount your certificates into the Caddy container in `docker-compose.yml`:

```yaml
volumes:
  - ./Caddyfile:/etc/caddy/Caddyfile:ro
  - ./certs:/etc/ssl/certs:ro
```

#### Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name mockoon.company.com *.mockoon.company.com;

    ssl_certificate /etc/ssl/certs/mockoon-wildcard.crt;
    ssl_certificate_key /etc/ssl/private/mockoon-wildcard.key;

    location / {
        proxy_pass http://127.0.0.1:5020;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support for Real-time Synchronization
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### Option 2: Reverse proxy with On-Demand TLS

Using **Caddy** with **On-Demand TLS** is an alternative setup for standalone VM deployments (AWS EC2, Azure VM, GCP Compute Engine, Linux VPS) when DNS-01 validation is unavailable:

- Caddy automatically requests and renews Let's Encrypt / ZeroSSL TLS certificates on port 80/443 when a new mock subdomain is accessed.
- Requires no DNS API tokens or manual certificate renewals.

> ⚠️ **Certificate Transparency Notice**: With On-Demand TLS, public certificate authorities (Let's Encrypt / ZeroSSL) log each newly issued mock subdomain certificate to public Certificate Transparency (CT) logs. Internet scanners monitor these logs and may probe newly detected subdomains. For private mock subdomains, prefer using a **Wildcard Certificate** (Option 1).

### Option 3: Cluster Ingress (Kubernetes & OpenShift)

#### OpenShift Wildcard Routes

OpenShift's native HAProxy router supports wildcard subdomain routes out of the box:

```yaml
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: mockoon-wildcard
spec:
  host: mockoon.company.com
  wildcardPolicy: Subdomain
  to:
    kind: Service
    name: mockoon-pro-service
  tls:
    termination: edge
```

#### Kubernetes Ingress + cert-manager

On Kubernetes, `cert-manager` can automatically issue and renew a wildcard certificate using DNS-01 challenges and attach it to your Ingress controller:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mockoon-ingress
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-dns01
spec:
  tls:
    - hosts:
        - 'mockoon.company.com'
        - '*.mockoon.company.com'
      secretName: mockoon-tls-secret
  rules:
    - host: 'mockoon.company.com'
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: mockoon-pro-service
                port:
                  number: 5020
```

### Option 4: Direct TLS termination

To have the Mockoon container serve TLS directly without a reverse proxy, set `USE_HTTPS=true`, `NODE_ENV=production`, and mount your certificate files:

```bash
docker run -d \
  --name mockoon-pro \
  -p 443:443 \
  -e NODE_ENV=production \
  -e PORT=443 \
  -e USE_HTTPS=true \
  -e MOCKOON_DOMAIN=mockoon.company.com \
  -e MOCKOON_SERVER_ID=mockoon-prod \
  -e MOCKOON_STORAGE_DIR=/data/ \
  -e MOCKOON_TLS_CERT_PATH=/certs/fullchain.pem \
  -e MOCKOON_TLS_KEY_PATH=/certs/privkey.pem \
  -v mockoon-data:/data \
  -v /path/to/certs:/certs:ro \
  mockoon/pro:latest
```

> ⚠️ The certificate must be a wildcard certificate valid for both `mockoon.company.com` and `*.mockoon.company.com`.

## Updating Mockoon Self-Hosted

Updating Mockoon Self-Hosted is seamless because all persistent data (the SQLite database, settings, user accounts, license information, and synchronized mock environments) resides on the mounted `/data` storage volume.

When a new version or patch is released, follow the instructions below matching your deployment setup.

### 1. (Recommended) Create a backup

Before applying updates, create a quick snapshot or archive of your `/data` volume:

```bash
# Archive the data volume
tar -czvf mockoon-data-backup-$(date +%Y%m%d%H%M%S).tar.gz -C /path/to/mockoon-data .
```

### 2. Update the container

#### With Docker Compose

1. **(Optional) Update the image tag**: If you pinned a specific version tag in your `docker-compose.yml` (e.g. `mockoon/pro:0.1.0-alpha.2`), update it to the target version. If you are tracking `latest` or an alpha track, you can leave it as is.
2. **Pull the latest image**:
   ```bash
   docker compose pull
   ```
3. **Recreate and restart the service**:
   ```bash
   docker compose up -d
   ```
   Docker Compose will detect the updated image, stop the old container, and start the new one with zero data loss.
4. **Verify startup logs**:
   ```bash
   docker compose logs -f mockoon-pro
   ```
5. **Clean up old dangling images** (optional):
   ```bash
   docker image prune -f
   ```

#### With Standalone Docker

1. **Pull the new image**:
   ```bash
   docker pull mockoon/pro:latest
   ```
2. **Stop and remove the old container**:
   ```bash
   docker stop mockoon-pro
   docker rm mockoon-pro
   ```
3. **Start the new container** using your original volume mount and environment parameters:
   ```bash
   docker run -d \
     --name mockoon-pro \
     -p 5020:5020 \
     -e NODE_ENV=production \
     -e PORT=5020 \
     -e MOCKOON_DOMAIN=mockoon.company.com \
     -e MOCKOON_SERVER_ID=mockoon-node-1 \
     -e MOCKOON_STORAGE_DIR=/data/ \
     -v mockoon-data:/data \
     mockoon/pro:latest
   ```

#### With Kubernetes / OpenShift

Update the deployment with the new image tag:

```bash
kubectl set image deployment/mockoon-pro mockoon-pro=mockoon/pro:latest
```

Or update your Helm values / Kubernetes manifest and apply:

```bash
kubectl apply -f deployment.yaml
```

### Automated migrations

When the updated container starts up, any required SQLite database migrations and internal state upgrades are automatically executed. No manual migration scripts or database intervention are needed.
