<script setup>
// About.vue
// Sustituye /public/images/about/photo.jpg por tu foto real.
// Los datos de texto están inline aquí — edítalos directamente.
</script>

<template>
  <div class="about-page">

    <!-- ─── HERO ─── -->
    <section class="about-hero">
      <div class="hero-photo-wrap">
        <img
          src="/images/about/photo.jpg"
          alt="Foto de Svenchu"
          class="hero-photo"
          @error="(e) => e.target.style.display = 'none'"
        />
        <!-- Placeholder si no hay foto -->
        <div class="hero-photo-fallback" aria-hidden="true">
          <span>S</span>
        </div>
      </div>

      <div class="hero-text">
        <span class="eyebrow">About me</span>
        <h1 class="hero-name">SVENCHU</h1>
        <p class="hero-tagline">
          Game Developer · Modder · Translator
        </p>
        <p class="hero-bio">
          Llevo años desarrollando videojuegos, mods y traducciones por pura pasión.
          Me especializo en Unreal Engine 5 y Unity, con experiencia sólida en el
          sector IT y un ojo puesto siempre en la narrativa y el diseño de sistemas.
          Cuando no estoy programando, lo más probable es que esté jugando al ajedrez.
        </p>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ─── SKILLS ─── -->
    <section class="about-section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div class="skill-card" v-for="skill in skills" :key="skill.label">
          <span class="skill-icon">{{ skill.icon }}</span>
          <div>
            <p class="skill-label">{{ skill.label }}</p>
            <p class="skill-desc">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ─── TIMELINE ─── -->
    <section class="about-section">
      <h2 class="section-title">Trayectoria</h2>
      <ol class="timeline">
        <li v-for="(event, i) in timeline" :key="i" class="timeline-item">
          <span class="timeline-year">{{ event.year }}</span>
          <div class="timeline-body">
            <p class="timeline-title">{{ event.title }}</p>
            <p class="timeline-desc">{{ event.desc }}</p>
          </div>
        </li>
      </ol>
    </section>

    <div class="divider"></div>

    <!-- ─── STATS ─── -->
    <section class="about-section stats-row">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { icon: '🎮', label: 'Game Dev',      desc: 'Unreal Engine 5 · Unity · C++ · C#' },
        { icon: '🌍', label: 'Traducción',     desc: 'Localización JP→ES · Edición de ROM' },
        { icon: '🔧', label: 'Modding',        desc: 'OpenKH · Herramientas propias' },
        { icon: '💻', label: 'IT',             desc: 'Experiencia profesional en el sector' },
        { icon: '🎲', label: '3D',             desc: '3DS Max · Aprendiendo Blender' },
        { icon: '♟',  label: 'Ajedrez',        desc: 'Jugador activo online y OTB' },
      ],
      timeline: [
        { year: '2021', title: 'Z-Jam 2021 — Corruption',         desc: 'Primer juego publicado: terror estilo Slender en Unreal Engine.' },
        { year: '2022', title: 'KH2 Spanish Mix',                  desc: 'Doblaje en castellano para Kingdom Hearts 2 Final Mix.' },
        { year: '2023', title: 'Birth By Sleep Final Mix ES',      desc: 'Traducción completa al español de BBSFM para PSP.' },
        { year: '2024', title: 'Crisis Core Reunion: OG Dub',      desc: 'Restauración del doblaje original de PSP en Reunion.' },
        { year: '2025', title: 'HCAReplace + Realms Engine',       desc: 'Desarrollo de herramientas propias para la comunidad.' },
        { year: '2026', title: 'Kingdom Hearts Tears',             desc: 'Proyecto fan en Unreal Engine 5 — en desarrollo activo.' },
      ],
      stats: [
        { value: '10+', label: 'Proyectos publicados' },
        { value: '5+',  label: 'Años de experiencia' },
        { value: '2',   label: 'Traducciones completas' },
        { value: '1',   label: 'Motor propio' },
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2.5rem 6rem;
}

/* ─── HERO ─── */
.about-hero {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 3.5rem;
  align-items: center;
  margin-bottom: 3.5rem;
}

.hero-photo-wrap {
  position: relative;
  width: 220px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid var(--border);
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Si la foto falla, se oculta y se muestra el fallback */
.hero-photo-fallback {
  position: absolute;
  inset: 0;
  background: var(--surface2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 900;
  color: var(--accent);
  z-index: -1;
}
/* Cuando la imagen carga bien, el fallback queda oculto bajo ella */
.hero-photo:not([style*="display: none"]) ~ .hero-photo-fallback { z-index: -1; }

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.dim { color: rgba(240,240,248,0.15); }

.hero-tagline {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.hero-bio {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.75;
  max-width: 55ch;
}

/* ─── DIVIDER ─── */
.divider {
  width: 100%;
  height: 1px;
  background: var(--border);
  margin: 3rem 0;
}

/* ─── SECCIONES ─── */
.about-section { margin-bottom: 0; }

.section-title {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
}

/* ─── SKILLS ─── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1px;
  border: 1px solid var(--border);
}

.skill-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--surface);
  border-right: 1px solid var(--border);
  transition: background 0.2s;
}
.skill-card:hover { background: var(--surface2); }

.skill-icon {
  font-size: 1.3rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.skill-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.2rem;
}
.skill-desc {
  font-size: 0.75rem;
  color: var(--muted);
}

/* ─── TIMELINE ─── */
.timeline {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 1px solid var(--border);
  padding-left: 0;
  margin-left: 3rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  padding: 1.25rem 0 1.25rem 2rem;
  position: relative;
  border-bottom: 1px solid var(--border);
}
.timeline-item:last-child { border-bottom: none; }

/* Punto en la línea */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 1.7rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--accent);
}

.timeline-year {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.08em;
  padding-top: 0.15rem;
}

.timeline-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.3rem;
}
.timeline-desc {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ─── STATS ─── */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border: 1px solid var(--border);
}

.stat-card {
  padding: 1.75rem 1.5rem;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-right: 1px solid var(--border);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
}
.stat-label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .about-page { padding: 2.5rem 1.25rem 4rem; }
  .about-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    text-align: center;
  }
  .hero-bio { max-width: none; }
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .timeline { margin-left: 1rem; }
  .timeline-item { grid-template-columns: 55px 1fr; gap: 1rem; }
}
@media (max-width: 480px) {
  .stats-row { grid-template-columns: 1fr 1fr; }
}
</style>
