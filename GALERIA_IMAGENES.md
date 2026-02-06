# Galería de Imágenes - Guía de Uso

## Ubicación
La galería de imágenes se encuentra en `index.html` justo antes de la sección "Soluciones Adaptadas a".

## Características Responsivas

La galería se adapta automáticamente según el tamaño de pantalla:

- **Pantallas Full HD (1920px o más)**: Muestra 4 imágenes por fila
- **Pantallas grandes (1360px - 1919px)**: Muestra 3 imágenes por fila
- **Tablets (768px - 1359px)**: Muestra 2 imágenes por fila
- **Móviles (menos de 768px)**: Muestra 1 imagen por fila

## Formato de Imágenes

- **Aspect Ratio**: 9:16 (formato vertical/retrato)
- **Object-fit**: contain (muestra la imagen completa sin recortar)
- Las imágenes se muestran completas dentro del contenedor

## Modal de Visualización

Al hacer clic en cualquier imagen, se abre un modal con las siguientes características:

- **Tamaño**: 90% de ancho y 90% de alto de la pantalla
- **Scroll**: Permite desplazarse si la imagen es más grande que el modal
- **Fondo oscuro**: Con transparencia del 95%
- **Cierre**: 
  - Clic en el botón X (esquina superior derecha)
  - Clic fuera de la imagen
  - Tecla Escape (ESC)
- **Animaciones**: Fade in y zoom suave al abrir
- **Efecto hover**: El botón X rota al pasar el mouse

## Cómo Agregar Más Imágenes

1. **Sube tus imágenes** a la carpeta `iasoloparami/public/`

2. **Edita el archivo** `index.html` y busca la sección:
   ```html
   <!-- Image Gallery Section -->
   <section class="image-gallery">
   ```

3. **Descomenta y duplica** los bloques de ejemplo:
   ```html
   <div class="gallery-item" onclick="openModal('tu-imagen.jpg', 'Descripción de tu imagen')">
       <img src="tu-imagen.jpg" alt="Descripción de tu imagen" loading="lazy">
   </div>
   ```

4. **Reemplaza**:
   - `tu-imagen.jpg` con el nombre de tu archivo (aparece 2 veces)
   - `Descripción de tu imagen` con una descripción apropiada (aparece 2 veces)

## Ejemplo Completo

```html
<div class="gallery-grid">
    <div class="gallery-item" onclick="openModal('iasoloparami.jpeg', 'IA solo para Mí - Inteligencia Artificial Local')">
        <img src="iasoloparami.jpeg" alt="IA solo para Mí - Inteligencia Artificial Local" loading="lazy">
    </div>
    <div class="gallery-item" onclick="openModal('ia_local.jpg', 'IA Local en acción')">
        <img src="ia_local.jpg" alt="IA Local en acción" loading="lazy">
    </div>
    <div class="gallery-item" onclick="openModal('imagen3.jpg', 'Tercera imagen')">
        <img src="imagen3.jpg" alt="Tercera imagen" loading="lazy">
    </div>
    <div class="gallery-item" onclick="openModal('imagen4.jpg', 'Cuarta imagen')">
        <img src="imagen4.jpg" alt="Cuarta imagen" loading="lazy">
    </div>
</div>
```

## Características de Diseño

- **Efecto hover**: Las imágenes se elevan y hacen zoom al pasar el mouse
- **Bordes con gradiente**: Estilo consistente con el resto del sitio
- **Aspect ratio 9:16**: Formato vertical para mostrar imágenes completas
- **Loading lazy**: Optimización de carga para mejor rendimiento
- **Object-fit contain**: Las imágenes se muestran completas sin recortar
- **Cursor pointer**: Indica que las imágenes son clickeables
- **Modal responsivo**: Se adapta a todos los tamaños de pantalla

## Funcionalidades JavaScript

El modal incluye las siguientes funciones:

- `openModal(imageSrc, imageAlt)`: Abre el modal con la imagen especificada
- `closeModal()`: Cierra el modal y restaura el scroll del body
- Listener de tecla ESC para cerrar el modal
- Prevención de scroll del body cuando el modal está abierto

## Recomendaciones

- Usa imágenes de buena calidad (mínimo 1080x1920px para formato 9:16)
- Formato recomendado: JPG para fotos, PNG para gráficos con transparencia
- Optimiza el tamaño de archivo antes de subir (máximo 1MB por imagen)
- Usa nombres descriptivos para las imágenes
- Siempre incluye el atributo `alt` para accesibilidad
- Para imágenes verticales/retrato, el formato 9:16 es ideal
- Para imágenes horizontales, considera usar un aspect-ratio diferente en CSS
