<script setup>
</script>

<template>
  <div class="contact-page">

    <header class="page-header">

      <h1 class="page-title">CONTACT</h1>
      <div class="section-divider"></div>
    </header>

    <div class="contact-grid">

      <!-- ─── COLUMNA PRINCIPAL ─── -->
      <div class="col-main">
        <p class="contact-intro">
          ¿Tienes una idea, una colaboración o simplemente quieres decir hola?
          Escríbeme directamente al correo. Suelo responder en menos de 48&nbsp;horas.
        </p>

        <!-- Email principal -->
        <a href="mailto:contact@about.me" class="email-block">
          <span class="email-label">Email</span>
          <span class="email-address">contact@about.me</span>
          <span class="email-arrow">→</span>
        </a>

        <!-- Redes sociales -->
        <div class="socials">
          <h2 class="socials-title">También puedes encontrarme en</h2>
          <div class="socials-grid">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-card"
            >
              <span class="social-icon">{{ social.icon }}</span>
              <div class="social-info">
                <span class="social-platform">{{ social.label }}</span>
                <span class="social-handle">{{ social.handle }}</span>
              </div>
              <span class="social-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>

      <!-- ─── SIDEBAR ─── -->
      <aside class="col-sidebar">
        <div class="info-card">
          <h3 class="info-card-title">Qué tipo de proyectos</h3>
          <ul class="info-list">
            <li v-for="item in projectTypes" :key="item">
              <span class="list-dot"></span>{{ item }}
            </li>
          </ul>
        </div>

        <div class="info-card">
          <h3 class="info-card-title">Tiempo de respuesta</h3>
          <p class="info-text">Generalmente respondo en <strong>24–48 horas</strong> en días laborables.</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        // Rellena los href con tus URLs reales. Elimina las que no uses.
        { label: 'GitHub',   icon: '🐙', handle: '@svenchu',  url: 'https://github.com/' },
        { label: 'YouTube',  icon: '▶',  handle: '@svenchu',  url: 'https://youtube.com/' },
        { label: 'Twitter/X',icon: '✦',  handle: '@svenchu',  url: 'https://x.com/' },
        { label: 'Discord',  icon: '💬', handle: 'svenchu',   url: 'https://discord.com/' },
      ],
      projectTypes: [
        'Colaboraciones en juegos indie',
        'Beta testing y feedback',
        'Consultoría de modding',
        'Localización y traducción',
        'Proyectos fan de videojuegos',
        'Desarrollo de herramientas',
      ]
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2.5rem 6rem;
}

/* ─── HEADER ─── */
.page-header { margin-bottom: 4rem; }

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1;
  color: var(--text);
}
.dim { color: rgba(240,240,248,0.15); }

.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--accent) 0%, transparent 55%);
  margin-top: 1.5rem;
  opacity: 0.4;
}

/* ─── GRID ─── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 2.5rem;
  align-items: start;
}

/* ─── COLUMNA PRINCIPAL ─── */
.contact-intro {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 55ch;
  margin-bottom: 2.5rem;
}

/* Bloque de email */
.email-block {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 3rem;
  transition: background 0.2s, border-color 0.2s;
  group: true;
}
.email-block:hover {
  background: var(--surface2);
  border-color: var(--accent);
}
.email-block:hover .email-arrow {
  color: var(--accent);
  transform: translateX(4px);
}

.email-label {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  flex-shrink: 0;
  width: 44px;
}

.email-address {
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 2.5vw, 1.4rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.03em;
  flex: 1;
}

.email-arrow {
  font-size: 1.2rem;
  color: var(--muted);
  transition: color 0.2s, transform 0.2s;
}

/* ─── SOCIALS ─── */
.socials-title {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}

.socials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;
  border: 1px solid var(--border);
}

.social-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem 1.1rem;
  background: var(--surface);
  border-right: 1px solid var(--border);
  text-decoration: none;
  transition: background 0.2s;
}
.social-card:hover { background: var(--surface2); }
.social-card:hover .social-arrow { color: var(--accent); }

.social-icon {
  font-size: 1.1rem;
  width: 22px;
  text-align: center;
  flex-shrink: 0;
}

.social-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
}
.social-platform {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text);
}
.social-handle {
  font-size: 0.72rem;
  color: var(--muted);
}

.social-arrow {
  font-size: 0.85rem;
  color: var(--muted);
  transition: color 0.2s;
}

/* ─── SIDEBAR ─── */
.col-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 84px;
}

.info-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.5rem;
}

.info-card-title {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.82rem;
  color: var(--muted);
}
.list-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.info-text {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.65;
}
.info-text strong {
  color: var(--text);
  font-weight: 500;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .contact-page { padding: 2.5rem 1.25rem 4rem; }
  .contact-grid { grid-template-columns: 1fr; }
  .col-sidebar { position: static; }
  .email-block { padding: 1.25rem; gap: 1rem; }
  .email-address { font-size: 0.95rem; }
}
</style>
