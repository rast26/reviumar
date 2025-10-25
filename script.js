// Interacciones: menú móvil, validación de formulario y lightbox
document.addEventListener('DOMContentLoaded', function() {
  // Menu movil toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.site-header nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      // usar atributo open para CSS
      if (!expanded) nav.setAttribute('open', ''); else nav.removeAttribute('open');
    });
  }

  // Formulario de contacto (sin backend)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const fm = document.getElementById('formMsg');
      if (!name || !email || !msg) {
        fm.textContent = 'Por favor completa todos los campos.';
        fm.style.color = 'crimson';
        return;
      }
      fm.textContent = 'Gracias. Tu mensaje ha sido registrado localmente. Conecta un servicio (Formspree, Netlify Forms o backend) para recibirlo por email.';
      fm.style.color = 'green';
      form.reset();
    });
  }

  // Lightbox para galería
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  if (gallery && lightbox && lightboxImg) {
    gallery.addEventListener('click', function(e) {
      const img = e.target.closest('img');
      if (!img) return;
      const full = img.dataset.full || img.src;
      lightboxImg.src = full;
      lightboxImg.alt = img.alt || '';
      const fig = img.closest('figure');
      if (fig) lightboxCaption.textContent = (fig.querySelector('figcaption') || {textContent: ''}).textContent;
      lightbox.setAttribute('aria-hidden', 'false');
      // trap focus
      lightbox.focus();
    });

    function closeLightbox() {
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
    }

    lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keyup', function(e) { if (e.key === 'Escape') closeLightbox(); });
  }
});