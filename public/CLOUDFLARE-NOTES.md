# Notas Importantes sobre Cloudflare Pages

## ⚠️ Archivos Específicos de Cloudflare

Cloudflare Pages **NO usa .htaccess** (ese es para Apache). En su lugar usa:

### 1. `_headers` 
Reemplaza las directivas de headers de .htaccess
- Configura headers HTTP de seguridad
- Define políticas de cache
- Establece Content-Type para archivos específicos

**Ubicación**: Raíz del proyecto
**Formato**:
```
/ruta/del/archivo
  Header-Name: valor
  Otro-Header: valor
```

### 2. `_redirects`
Reemplaza las reglas de RewriteRule de .htaccess
- Maneja redirecciones 301/302
- Configura página 404 personalizada
- Redirecciones de URL

**Ubicación**: Raíz del proyecto
**Formato**:
```
/ruta-origen  /ruta-destino  código-status
```

## 🚫 Qué NO Funciona en Cloudflare Pages

### ❌ .htaccess
- Cloudflare Pages ignora completamente este archivo
- Es específico de servidores Apache
- Si lo subes, no causará errores pero tampoco hará nada

### ❌ Directivas de Apache
- `mod_rewrite`
- `mod_deflate`
- `mod_expires`
- `mod_headers` (Apache)
- `FilesMatch`
- `Directory`

## ✅ Qué SÍ Funciona en Cloudflare Pages

### Headers de Seguridad
Ya configurados en `_headers`:
```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Cache Control
Ya configurado en `_headers` para diferentes tipos de archivos:
- CSS/JS: 30 días
- Imágenes: 1 año
- HTML: Sin cache (siempre fresco)

### Compresión
Cloudflare comprime automáticamente:
- Brotli (mejor que GZIP)
- GZIP (fallback)
- No necesitas configurar nada

### HTTPS
Cloudflare fuerza HTTPS automáticamente:
- No necesitas reglas de redirección
- Certificado SSL gratuito incluido
- Renovación automática

### Redirecciones
Usa `_redirects`:
```
# Redireccionar index.html a raíz
/index.html  /  301

# Página 404 personalizada
/*  /404.html  404
```

## 🔧 Configuración Recomendada en Cloudflare Dashboard

### 1. Speed > Optimization
- ✅ Auto Minify: HTML, CSS, JavaScript
- ✅ Brotli compression
- ✅ Early Hints
- ✅ Rocket Loader (opcional, puede causar problemas con algunos scripts)

### 2. Caching > Configuration
- ✅ Caching Level: Standard
- ✅ Browser Cache TTL: Respect Existing Headers
- ✅ Always Online: ON

### 3. Security > Settings
- ✅ Security Level: Medium
- ✅ Challenge Passage: 30 minutes
- ✅ Browser Integrity Check: ON

### 4. SSL/TLS
- ✅ Encryption mode: Full (strict)
- ✅ Always Use HTTPS: ON
- ✅ Minimum TLS Version: 1.2
- ✅ Automatic HTTPS Rewrites: ON

### 5. Network
- ✅ HTTP/2: ON
- ✅ HTTP/3 (with QUIC): ON
- ✅ 0-RTT Connection Resumption: ON
- ✅ WebSockets: ON

## 📊 Cloudflare Analytics

Cloudflare Pages incluye analytics gratuitos:
1. Ve a tu proyecto en Cloudflare Pages
2. Click en "Analytics"
3. Verás:
   - Visitas
   - Requests
   - Bandwidth
   - Cache hit rate

### Agregar Web Analytics Avanzado (Gratis):
```html
<!-- Agregar antes de </head> -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "OBTENER-EN-DASHBOARD"}'></script>
```

Para obtener el token:
1. Dashboard de Cloudflare
2. Web Analytics
3. Add a site
4. Copia el script generado

## 🚀 Despliegue

### Método 1: Git (Recomendado)
1. Conecta tu repositorio GitHub/GitLab
2. Cloudflare despliega automáticamente en cada push
3. Preview deployments para cada PR

### Método 2: Drag & Drop
1. Ve a Cloudflare Pages
2. Create a project
3. Arrastra la carpeta con todos los archivos

### Método 3: Wrangler CLI
```bash
npm install -g wrangler
wrangler pages publish <directorio>
```

## 🔍 Debugging

### Ver logs de despliegue:
1. Cloudflare Dashboard
2. Pages
3. Tu proyecto
4. View build log

### Errores comunes:

#### "404 Not Found" después de desplegar
- Verifica que index.html esté en la raíz
- Revisa el "Build output directory" en settings

#### Headers no se aplican
- Verifica que `_headers` esté en la raíz
- Formato correcto (sin tabs, solo espacios)
- Espera 5-10 minutos para propagación

#### Redirects no funcionan
- Verifica que `_redirects` esté en la raíz
- Una regla por línea
- Espera 5-10 minutos para propagación

## 📝 Checklist Pre-Despliegue

- [ ] `_headers` en la raíz del proyecto
- [ ] `_redirects` en la raíz del proyecto
- [ ] **NO** incluir `.htaccess` (o ignorarlo)
- [ ] `index.html` en la raíz
- [ ] Todos los assets (CSS, JS, imágenes) accesibles
- [ ] `robots.txt` en la raíz
- [ ] `sitemap.xml` en la raíz
- [ ] `manifest.json` en la raíz
- [ ] `404.html` en la raíz

## 🎯 Optimizaciones Específicas de Cloudflare

### 1. Usar Cloudflare CDN para librerías
Ya estás usando:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### 2. Lazy Loading de imágenes
```html
<img src="imagen.jpg" loading="lazy" alt="descripción">
```

### 3. Preconnect a dominios externos
```html
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
```

### 4. Usar WebP para imágenes
Cloudflare puede convertir automáticamente:
- Dashboard > Speed > Optimization > Image Optimization
- Polish: Lossless o Lossy
- WebP: ON

## 💡 Tips Adicionales

1. **Custom Domain**: Configura tu dominio en Cloudflare Pages settings
2. **Preview Deployments**: Cada branch tiene su propia URL de preview
3. **Rollback**: Puedes volver a cualquier despliegue anterior
4. **Environment Variables**: Configura en Settings > Environment variables
5. **Build Commands**: No necesitas para sitio estático, pero disponible si lo necesitas

## 🆘 Recursos

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [_headers Documentation](https://developers.cloudflare.com/pages/platform/headers/)
- [_redirects Documentation](https://developers.cloudflare.com/pages/platform/redirects/)
- [Cloudflare Community](https://community.cloudflare.com/)
