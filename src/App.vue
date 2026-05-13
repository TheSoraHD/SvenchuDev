<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const menuOpen = ref(false)
const { locale, setLocale } = useLanguage()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'es' : 'en')
}
</script>

<script>
export default {
  data() {
    return { menuOpen: false }
  },
}
</script>

<template>
  <div id="app">
    <header class="app-header">
      <nav class="navbar">
        <router-link to="/" class="nav-logo">SVEN<span>CHU</span></router-link>
        <div class="nav-actions">
          <ul class="nav-links">
            <li>
              <router-link to="/games">{{ locale === 'en' ? 'Games' : 'Juegos' }}</router-link>
            </li>
            <li><router-link to="/mods">Mods</router-link></li>
            <li>
              <router-link to="/translations">{{
                locale === 'en' ? 'Translations' : 'Traducciones'
              }}</router-link>
            </li>
            <li>
              <router-link to="/collaborations">{{
                locale === 'en' ? 'Collabs' : 'Colabs'
              }}</router-link>
            </li>
            <li>
              <router-link to="/tools">{{
                locale === 'en' ? 'Tools' : 'Herramientas'
              }}</router-link>
            </li>
            <li>
              <router-link to="/about">{{ locale === 'en' ? 'About' : 'Acerca de' }}</router-link>
            </li>
            <li>
              <router-link to="/contact">{{
                locale === 'en' ? 'Contact' : 'Contacto'
              }}</router-link>
            </li>
          </ul>
          <button
            class="lang-toggle"
            @click="toggleLocale"
            :title="locale === 'en' ? 'Cambiar a Español' : 'Switch to English'"
          >
            <!-- Muestra la bandera del idioma AL QUE vas a cambiar -->
            <svg
              v-if="locale === 'en'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 40"
              width="28"
              height="19"
              aria-label="Cambiar a español"
            >
              <!-- Bandera de España -->
              <rect width="60" height="40" fill="#c60b1e" />
              <rect y="10" width="60" height="20" fill="#ffc400" />
              <!-- Escudo simplificado -->
              <rect
                x="22"
                y="13"
                width="7"
                height="14"
                rx="1"
                fill="#c60b1e"
                stroke="#888"
                stroke-width="0.5"
              />
              <rect x="22" y="13" width="3.5" height="14" fill="#c60b1e" />
              <rect x="25.5" y="13" width="3.5" height="14" fill="#ffc400" opacity="0.6" />
              <rect x="22" y="13" width="7" height="5" rx="1" fill="#ffc400" opacity="0.5" />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 40"
              width="28"
              height="19"
              aria-label="Switch to English"
            >
              <!-- Union Jack -->
              <rect width="60" height="40" fill="#012169" />
              <!-- Aspas blancas (X) -->
              <line x1="0" y1="0" x2="60" y2="40" stroke="white" stroke-width="8" />
              <line x1="60" y1="0" x2="0" y2="40" stroke="white" stroke-width="8" />
              <!-- Cruz roja diagonal (borde blanco) -->
              <line x1="0" y1="0" x2="60" y2="40" stroke="#C8102E" stroke-width="4" />
              <line x1="60" y1="0" x2="0" y2="40" stroke="#C8102E" stroke-width="4" />
              <!-- Cruz central blanca -->
              <rect x="24" y="0" width="12" height="40" fill="white" />
              <rect x="0" y="14" width="60" height="12" fill="white" />
              <!-- Cruz central roja -->
              <rect x="26" y="0" width="8" height="40" fill="#C8102E" />
              <rect x="0" y="16" width="60" height="8" fill="#C8102E" />
            </svg>
          </button>

          <button class="nav-hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div class="nav-mobile" :class="{ open: menuOpen }">
        <li>
          <router-link to="/games">{{ locale === 'en' ? 'Games' : 'Juegos' }}</router-link>
        </li>
        <li><router-link to="/mods">Mods</router-link></li>
        <li>
          <router-link to="/translations">{{
            locale === 'en' ? 'Translations' : 'Traducciones'
          }}</router-link>
        </li>
        <li>
          <router-link to="/collaborations">{{
            locale === 'en' ? 'Collaborations' : 'Colaboraciones'
          }}</router-link>
        </li>
        <li>
          <router-link to="/tools">{{ locale === 'en' ? 'Tools' : 'Herramientas' }}</router-link>
        </li>
        <li>
          <router-link to="/about">{{ locale === 'en' ? 'About' : 'Acerca de' }}</router-link>
        </li>
        <li>
          <router-link to="/contact">{{ locale === 'en' ? 'Contact' : 'Contacto' }}</router-link>
        </li>
      </div>
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
  background: rgba(10, 10, 15, 0.88);
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
  gap: 1rem;
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
.nav-logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links a {
  display: inline flow-root;
  padding: 0.4rem 0.9rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
  transition:
    color 0.2s,
    background 0.2s;
}
.nav-links a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}
.nav-links a.router-link-active {
  color: var(--accent);
}

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
.nav-mobile a:hover,
.nav-mobile a.router-link-active {
  color: var(--accent);
}

/* ─── CONTENIDO ─── */
.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

/* ─── FOOTER ─── */
.app-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem 1.25rem;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem 1.5rem;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  opacity: 0.75;
  transition: opacity 0.2s;
}

.lang-toggle:hover {
  opacity: 1;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .nav-hamburger {
    display: flex;
  }
  .nav-mobile.open {
    display: flex;
  }
  .navbar {
    padding: 0 1.25rem;
  }
  .main-content {
    padding: 0 1.25rem;
  }
}
</style>
