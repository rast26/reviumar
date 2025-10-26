# Proyecto Linternas — Barranco de las Ovejas

Esta carpeta contiene un sitio estático de ejemplo para presentar el proyecto de instalación de linternas cerca del puerto de Alicante.

Estructura:
- `index.html` — Página principal (presentación, objetivos, enlaces)
- `tecnica.html` — Detalles técnicos y consideraciones ambientales
- `galeria.html` — Galería de imágenes (sustituir placeholder por fotos reales)
- `blog.html` — Entradas y noticias
- `contacto.html` — Formulario de contacto (cliente-side)
- `styles.css`, `script.js` — Estilos y comportamiento
- `images/` — Carpeta para tus imágenes (crear y subir fotos aquí)

Cómo usar:
1. Copia la carpeta `linternas` a tu servidor web o ábrela localmente (doble clic sobre `index.html`).
2. Añade tus imágenes reales en `linternas/images/` y actualiza los nombres en `galeria.html`.
3. Para recibir mensajes desde el formulario, conecta un backend o un servicio de formularios (Formspree, Netlify Forms, o tu propio endpoint). Actualmente el formulario solo muestra un mensaje local.

Siguientes pasos / recomendaciones:
- Conectar un servicio de correo o endpoint seguro para procesar el formulario (evitar exponer correos en HTML si no quieres spam).
- Añadir accesibilidad: textos alternativos ricos, contrastes definitivos, y pruebas con lectores de pantalla.
- Sustituir placeholders por fotografías georreferenciadas y videos en `galeria.html`.
- Implementar un sistema simple de CMS (Netlify CMS, Forestry, o un pequeño backend) si quieres que el equipo publique noticias sin editar archivos.

Si quieres, puedo:
- Integrar un backend básico para procesar el formulario (Node/Express o serverless).
- Mejorar la galería con lightbox y reproducción de video.
- Crear plantillas para entradas del blog y añadir Markdown -> HTML.

Dime qué prefieres y lo continúo.