<script>
export default {
  data() {
    return { menuOpen: false }
  }
}
</script>

<template>
  <div id="app">
    <header class="app-header">
      <nav class="navbar">
        <router-link to="/" class="nav-logo">SVEN<span>CHU</span></router-link>
        <ul class="nav-links">
          <li><router-link to="/games">Games</router-link></li>
          <li><router-link to="/mods">Mods</router-link></li>
          <li><router-link to="/translations">Translations</router-link></li>
          <li><router-link to="/collaborations">Collabs</router-link></li>
          <li><router-link to="/tools">Tools</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      <a href="https://twitter.com/Svenchu64" target="_blank" rel="noopener">Twitter/X</a>
      <a href="https://youtube.com/@TheSoraHD" target="_blank" rel="noopener">YouTube</a>
      <a href="https://github.com/TheSoraHD" target="_blank" rel="noopener">GitHub</a>
      <p>&copy; 2026 — Svenchu</p>
    </footer>
  </div>
</template>

<style>
/* ─── TOKENS ─── */
:root {
  --bg:       #0a0a0f;
  --surface:  #111118;
  --surface2: #16161f;
  --border:   rgba(255,255,255,0.07);
  --accent:   #ffae00;
  --text:     #f0f0f8;
  --muted:    rgba(240,240,248,0.45);
  --font-display: 'Orbitron', monospace;
  --font-body:    'DM Sans', sans-serif;
}

/* ─── RESET ─── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: var(--text);
  background: var(--bg);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Cuadrícula de fondo sutil */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  z-index: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

/* ─── NAVBAR ─── */
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10,10,15,0.88);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.navbar {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  color: var(--text);
  text-decoration: none;
  flex-shrink: 0;
}
.nav-logo span { color: var(--accent); }

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.15rem;
}

.nav-links a {
  display: block;
  padding: 0.4rem 0.9rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}
.nav-links a:hover { color: var(--text); background: rgba(255,255,255,0.05); }
.nav-links a.router-link-active { color: var(--accent); }

/* Hamburger — oculto en desktop */
.nav-hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.nav-hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

/* Menú móvil */
.nav-mobile {
  display: none;
  flex-direction: column;
  padding: 1rem 2rem;
  border-top: 1px solid var(--border);
  gap: 0.25rem;
}
.nav-mobile.open { display: flex; }
.nav-mobile a {
  padding: 0.6rem 0.5rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
  transition: color 0.2s;
}
.nav-mobile a:hover, .nav-mobile a.router-link-active { color: var(--accent); }

/* ─── CONTENIDO ─── */
.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

/* ─── FOOTER ─── */
.app-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  border-top: 1px solid var(--border);
}

/* ─── RESPONSIVE ─── */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-hamburger { display: flex; }
}

@media (max-width: 600px) {
  .navbar { padding: 0 1.25rem; }
}
</style>
