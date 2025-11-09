# Guía de Despliegue - IA solo para Mí

## Archivos Generados

### 📄 Archivos Esenciales

#### 1. **index.html**
- Página principal con todos los meta tags SEO
- Open Graph y Twitter Cards integrados
- Schema.org JSON-LD embebido
- Enlaces a manifest y favicon

#### 2. **sitemap.xml**
- Mapa del sitio para motores de búsqueda
- Incluye todas las secciones principales
- Actualizar `lastmod` cuando hagas cambios

#### 3. **robots.txt**
- Controla qué pueden rastrear los bots
- Incluye referencia al sitemap
- Bloquea bots maliciosos conocidos

#### 4. **manifest.json**
- Configuración PWA (Progressive Web App)
- Permite agregar el sitio a pantalla de inicio
- Define iconos y colores del tema

#### 5. **schema-org.json**
- Datos estructurados de la organización
- También está embebido en index.html
- Mejora el SEO y resultados enriquecidos

### 🎨 Archivos de Diseño

#### 6. **favicon.svg**
- Icono vectorial del sitio
- Basado en tu logo actual
- Compatible con navegadores modernos

#### 7. **404.html**
- Página de error personalizada
- Mantiene el diseño del sitio
- Botón para volver al inicio

### ⚙️ Configuración de Servidor

#### 8. **_headers** (Para Cloudflare Pages)
- **USA ESTE ARCHIVO en Cloudflare**
- Configura headers de seguridad
- Define políticas de cache
- Reemplaza la funcionalidad de .htaccess

#### 9. **_redirects** (Para Cloudflare Pages)
- **USA ESTE ARCHIVO en Cloudflare**
- Maneja redirecciones
- Configura página 404
- Reemplaza la funcionalidad de .htaccess

#### 10. **.htaccess** (Solo para Apache)
- **NO USAR en Cloudflare Pages**
- Solo si migras a servidor Apache tradicional
- Incluye seguridad, cache y redirecciones

## 🚀 Despliegue en Cloudflare Pages

### Archivos que DEBES subir:
```
✅ index.html
✅ sitemap.xml
✅ robots.txt
✅ manifest.json
✅ schema-org.json
✅ favicon.svg
✅ 404.html
✅ _headers          ← IMPORTANTE para Cloudflare
✅ _redirects        ← IMPORTANTE para Cloudflare
✅ telegram_button.css
✅ telegram_button.js
✅ whatsapp_button.css
✅ whatsapp_button.js
```

### Archivos que NO necesitas en Cloudflare:
```
❌ .htaccess         ← Solo para Apache, Cloudflare lo ignora
```

## 📝 Tareas Pendientes

### Imágenes a Crear:
1. **favicon.ico** (16x16, 32x32, 48x48)
   - Convertir favicon.svg a .ico
   - Herramienta: https://realfavicongenerator.net/

2. **icon-192.png** (192x192)
   - Para manifest.json
   - Exportar desde favicon.svg

3. **icon-512.png** (512x512)
   - Para manifest.json
   - Exportar desde favicon.svg

4. **apple-touch-icon.png** (180x180)
   - Para dispositivos iOS
   - Exportar desde favicon.svg

5. **og-image.png** (1200x630)
   - Para compartir en Facebook/LinkedIn
   - Debe incluir logo y texto descriptivo

6. **twitter-image.png** (1200x600)
   - Para compartir en Twitter/X
   - Similar a og-image pero con ratio diferente

7. **screenshot-desktop.png** (1280x720)
   - Captura de pantalla del sitio en desktop
   - Para manifest.json

8. **screenshot-mobile.png** (750x1334)
   - Captura de pantalla del sitio en móvil
   - Para manifest.json

### Configuración Adicional:

#### Google Search Console:
1. Verificar propiedad del sitio
2. Enviar sitemap.xml
3. Solicitar indexación

#### Google Analytics (Opcional):
```html
<!-- Agregar antes de </head> en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Cloudflare Web Analytics (Recomendado):
```html
<!-- Agregar antes de </head> en index.html -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "tu-token-aqui"}'></script>
```

## 🔍 Verificación Post-Despliegue

### Checklist:
- [ ] Sitio carga correctamente en https://iasoloparami.libresoft.ec
- [ ] Favicon aparece en la pestaña del navegador
- [ ] robots.txt accesible: /robots.txt
- [ ] sitemap.xml accesible: /sitemap.xml
- [ ] manifest.json accesible: /manifest.json
- [ ] Página 404 funciona correctamente
- [ ] Botones de WhatsApp y Telegram funcionan
- [ ] Links de redes sociales funcionan
- [ ] Emails son clickeables
- [ ] Teléfonos son clickeables en móvil
- [ ] Sitio es responsive en móvil
- [ ] Meta tags aparecen al compartir en redes sociales

### Herramientas de Validación:
- **Open Graph**: https://www.opengraph.xyz/
- **Twitter Card**: https://cards-dev.twitter.com/validator
- **Schema.org**: https://validator.schema.org/
- **Sitemap**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Mobile-Friendly**: https://search.google.com/test/mobile-friendly
- **PageSpeed**: https://pagespeed.web.dev/

## 📊 Métricas a Monitorear

1. **Velocidad de carga** (objetivo: < 3 segundos)
2. **Core Web Vitals** (LCP, FID, CLS)
3. **Tasa de rebote** (objetivo: < 60%)
4. **Conversiones** (clics en WhatsApp/Telegram)
5. **Posicionamiento en Google** para keywords principales

## 🔐 Seguridad

Los headers de seguridad están configurados en `_headers`:
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy configurado

## 📱 PWA (Progressive Web App)

El sitio está configurado como PWA:
- Los usuarios pueden agregarlo a su pantalla de inicio
- Funciona offline (después de la primera visita)
- Tiene iconos y colores personalizados

## 🆘 Soporte

Para dudas o problemas:
- Email: soporte@libresoft.ec
- WhatsApp: +593-95-959-5168
- Telegram: @RicardoOrtegaO
