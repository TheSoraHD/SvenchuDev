<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { sectionsData } from '../data/sectionsData.js'

const route = useRoute()
const router = useRouter()

// La ruta raíz / muestra una home; rutas tipo /games, /mods, etc. muestran su sección
const sectionKey = computed(() => route.params.section || route.path.replace('/', '') || null)

// Configuración visual de cada sección
const sectionMeta = {
  games: { label: 'Games', eyebrow: 'Portfolio', accent: '#00e5ff' },
  mods: { label: 'Mods', eyebrow: 'Portfolio', accent: '#7b2fff' },
  translations: { label: 'Translations', eyebrow: 'Portfolio', accent: '#ff3cac' },
  collaborations: { label: 'Collaborations', eyebrow: 'Portfolio', accent: '#00ff9d' },
  tools: { label: 'Tools', eyebrow: 'Portfolio', accent: '#ffb800' },
  about: { label: 'About Me', eyebrow: 'Personal', accent: '#ff6b6b' },
}

// Colores de tint por posición (para variedad visual entre cards)
const tintColors = [
  '#ff6600',
  '#0040ff',
  '#aa00ff',
  '#00aa44',
  '#00aaff',
  '#ffcc00',
  '#ff0066',
  '#00cccc',
  '#ff3300',
  '#8800ff',
]

// ─── DATOS NORMALIZADOS ───────────────────────────────────────────
// Devuelve siempre un array plano de { item, platform? }
const sections = computed(() => {
  const key = sectionKey.value
  if (!key || !sectionsData[key]) return []

  const raw = sectionsData[key]

  // games es un objeto { pc: [...], nds: [...] } — lo aplanamos por plataforma
  if (key === 'games' && !Array.isArray(raw)) {
    return Object.entries(raw).map(([platform, items]) => ({
      platform: platform.toUpperCase(),
      items,
    }))
  }

  // El resto son arrays planos
  return [{ platform: null, items: Array.isArray(raw) ? raw : [] }]
})

const meta = computed(
  () =>
    sectionMeta[sectionKey.value] || {
      label: sectionKey.value,
      eyebrow: 'Portfolio',
      accent: '#00e5ff',
    },
)

function navigateTo(item) {
  const key = sectionKey.value
  const platform = sections.value.find((s) => s.items.includes(item))?.platform?.toLowerCase()
  if (key === 'games' && platform) {
    router.push(`/games/${platform}/${item.id}`)
  } else {
    router.push(`/${key}/${item.id}`)
  }
}

// ─── HOME ─────────────────────────────────────────────────────────
const isHome = computed(() => !sectionKey.value || sectionKey.value === '')

const featuredItems = computed(() => {
  if (!isHome.value) return []
  const pcGames = sectionsData.games?.pc || []
  const mods = sectionsData.mods || []
  const translations = sectionsData.translations || []
  return [
    ...pcGames.slice(0, 3).map((i) => ({ ...i, _section: 'games', _platform: 'pc' })),
    ...mods.slice(0, 2).map((i) => ({ ...i, _section: 'mods' })),
    ...translations.slice(0, 1).map((i) => ({ ...i, _section: 'translations' })),
  ]
})

function navigateHome(item) {
  if (item._section === 'games' && item._platform) {
    router.push(`/games/${item._platform}/${item.id}`)
  } else {
    router.push(`/${item._section}/${item.id}`)
  }
}

const navSections = [
  {
    key: 'games',
    label: 'Games',
    accent: '#00e5ff',
    count: () => Object.values(sectionsData.games || {}).flat().length,
  },
  { key: 'mods', label: 'Mods', accent: '#7b2fff', count: () => (sectionsData.mods || []).length },
  {
    key: 'translations',
    label: 'Translations',
    accent: '#ff3cac',
    count: () => (sectionsData.translations || []).length,
  },
  {
    key: 'collaborations',
    label: 'Collaborations',
    accent: '#00ff9d',
    count: () => (sectionsData.collaborations || []).length,
  },
  {
    key: 'tools',
    label: 'Tools',
    accent: '#ffb800',
    count: () => (sectionsData.tools || []).length,
  },
]
</script>

<template>
  <!-- ─── HOME ─────────────────────────────────────────── -->
  <div v-if="isHome" class="portfolio-page">
    <header class="page-header">
      <span class="eyebrow">Game Developer</span>
      <h1 class="page-title">SVENCHU</h1>
      <p class="page-subtitle">
        From retro homebrew to Unreal Engine 5.<br />
        15 years of shipped projects across C/C++, Unity and Unreal engines, and a relentless drive
        to create experiences that stay with you.
      </p>
      <div class="section-divider"></div>
    </header>

    <!-- Secciones de navegación rápida -->
    <div class="home-nav-grid">
      <router-link
        v-for="sec in navSections"
        :key="sec.key"
        :to="`/${sec.key}`"
        class="home-nav-card"
        :style="{ '--card-accent': sec.accent }"
      >
        <span class="home-nav-count">{{ sec.count() }}</span>
        <span class="home-nav-label">{{ sec.label }}</span>
        <span class="home-nav-arrow">→</span>
      </router-link>
    </div>

    <!-- Featured grid -->
    <section class="platform-section">
      <div class="platform-label"><h2>Featured</h2></div>
      <div class="game-grid">
        <div
          v-for="(item, i) in featuredItems"
          :key="item.id"
          class="game-card"
          @click="navigateHome(item)"
        >
          <div
            class="game-card__thumb"
            :style="item.images?.[0] ? `background-image: url('${item.images[0]}')` : ''"
            :class="!item.images?.[0] ? `thumb-fallback-${i % 9}` : ''"
          ></div>

          <div class="game-card__content">
            <span class="game-card__tag">{{ item._section }}</span>
            <h3 class="game-card__title">{{ item.name }}</h3>
            <p class="game-card__desc">{{ item.description }}</p>
            <div class="game-card__actions">
              <button class="btn btn-primary">More details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ─── SECCIÓN (games, mods, etc.) ─────────────────── -->
  <div v-else class="portfolio-page">
    <header class="page-header" :style="{ '--accent': meta.accent }">
      <span class="eyebrow">{{ meta.eyebrow }}</span>
      <h1 class="page-title">{{ meta.label.toUpperCase() }}</h1>
      <div class="section-divider"></div>
    </header>

    <section v-for="group in sections" :key="group.platform || 'main'" class="platform-section">
      <div v-if="group.platform" class="platform-label">
        <h2>{{ group.platform }}</h2>
      </div>

      <div class="game-grid">
        <div
          v-for="(item, i) in group.items"
          :key="item.id"
          class="game-card"
          @click="navigateTo(item)"
        >
          <!-- Imagen real si existe, si no fallback de color -->
          <div
            class="game-card__thumb"
            :style="item.images?.[0] ? `background-image: url('${item.images[0]}')` : ''"
            :class="!item.images?.[0] ? `thumb-fallback-${i % 9}` : ''"
          ></div>
          <div
            class="game-card__tint"
            :style="{ background: tintColors[i % tintColors.length] }"
          ></div>
          <div class="game-card__gradient"></div>
          <div class="game-card__content">
            <span
              class="game-card__tag"
              :style="{
                color: meta.accent,
                borderColor: meta.accent + '55',
                background: meta.accent + '12',
              }"
              >{{ sectionKey }}</span
            >
            <h3 class="game-card__title">{{ item.name }}</h3>
            <p class="game-card__desc">{{ item.description }}</p>
            <div class="game-card__actions">
              <button class="btn btn-primary" :style="{ background: meta.accent }">
                More details
              </button>
              <a
                v-if="item.downloadUrl && item.downloadUrl !== 'TO-DO'"
                :href="item.downloadUrl"
                target="_blank"
                rel="noopener"
                class="btn btn-ghost"
                @click.stop
                >Download</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-page {
  padding: 4rem 0 6rem;
}

/* ─── HEADER ─── */
.page-header {
  margin-bottom: 4rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent, #ff9d00);
  margin-bottom: 0.6rem;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1;
  color: var(--text);
}

.page-subtitle {
  margin-top: 1rem;
  color: var(--muted);
  font-size: 1rem;
}

.dim {
  color: rgba(240, 240, 248, 0.15);
}

.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--accent, #00e5ff) 0%, transparent 55%);
  margin-top: 1.5rem;
  opacity: 0.4;
}

/* ─── HOME NAV GRID ─── */
.home-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1px;
  margin-bottom: 4rem;
  border: 1px solid var(--border);
}

.home-nav-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.5rem;
  background: var(--surface);
  text-decoration: none;
  transition: background 0.2s;
  border-right: 1px solid var(--border);
}
.home-nav-card:hover {
  background: var(--surface2);
}
.home-nav-count {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--card-accent, #00e5ff);
  line-height: 1;
}
.home-nav-label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}
.home-nav-arrow {
  font-size: 0.9rem;
  color: var(--card-accent, #00e5ff);
  margin-top: auto;
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.home-nav-card:hover .home-nav-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ─── PLATFORM SECTION ─── */
.platform-section {
  margin-bottom: 5rem;
}

.platform-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5px;
}
.platform-label h2 {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  white-space: nowrap;
}
.platform-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ─── GAME GRID ─── */
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5px;
}

/* ─── GAME CARD ─── */
.game-card {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  cursor: pointer;
  background: var(--surface);
}

.game-card__thumb {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.75) saturate(0.8);
  transition:
    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.55s ease;
}
.game-card:hover .game-card__thumb {
  transform: scale(1.06);
  filter: brightness(0.3) saturate(0.5);
}

/* Fallback paletas de color para cuando no hay imagen */
.thumb-fallback-0 {
  background: linear-gradient(135deg, #1a0a00, #7a3a10);
}
.thumb-fallback-1 {
  background: linear-gradient(135deg, #030518, #1e2d8a);
}
.thumb-fallback-2 {
  background: linear-gradient(135deg, #1a0025, #a020f0);
}
.thumb-fallback-3 {
  background: linear-gradient(135deg, #001a0a, #00703d);
}
.thumb-fallback-4 {
  background: linear-gradient(135deg, #001533, #0066cc);
}
.thumb-fallback-5 {
  background: linear-gradient(135deg, #1a1a00, #888800);
}
.thumb-fallback-6 {
  background: linear-gradient(135deg, #33001a, #cc0066);
}
.thumb-fallback-7 {
  background: linear-gradient(135deg, #001a33, #0080cc);
}
.thumb-fallback-8 {
  background: linear-gradient(135deg, #0a0a0a, #444);
}

.game-card__tint {
  position: absolute;
  inset: 0;
  opacity: 0;
  mix-blend-mode: color;
  transition: opacity 0.45s ease;
}
.game-card:hover .game-card__tint {
  opacity: 0.25;
}

.game-card__gradient {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(10, 10, 15, 0.85) 0%,
      rgba(10, 10, 15, 0.4) 40%,
      transparent 65%
    ),
    linear-gradient(to top, rgba(10, 10, 15, 0.75) 0%, transparent 30%);
}

.game-card__content {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  padding-top: 3.5rem; /* clear the absolutely-positioned tag */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.game-card__tag {
  display: inline-block;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--accent);
  border-radius: 2px;
  width: fit-content;
  background: rgba(0, 229, 255, 0.06);
  /* Pin to top-left so it never shifts with title height */
  position: absolute;
  top: 1.25rem;
  left: 1.5rem;
}

.game-card__title {
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--text);
  margin-bottom: 0.4rem;
  transform: translateY(4px);
  transition: transform 0.25s ease;
}
.game-card:hover .game-card__title {
  transform: translateY(0);
}

.game-card__desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.5;
  max-width: 42ch;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.3s 0.04s ease,
    transform 0.3s 0.04s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.game-card:hover .game-card__desc {
  opacity: 1;
  transform: translateY(0);
}

.game-card__actions {
  display: flex;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 0.9rem;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.3s 0.08s ease,
    transform 0.3s 0.08s ease;
}
.game-card:hover .game-card__actions {
  opacity: 1;
  transform: translateY(0);
}

/* ─── BOTONES ─── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1.1rem;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}
.btn-primary {
  background: var(--accent);
  color: #000;
}
.btn-primary:hover {
  background: #fff;
}
.btn-ghost {
  background: rgba(255, 255, 255, 0.07);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.13);
}

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .portfolio-page {
    padding: 2.5rem 0 4rem;
  }

  /* Switch to 2-column grid on mobile */
  .game-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5px;
  }

  /* Split layout: image on top, content below */
  .game-card {
    aspect-ratio: unset;
    display: flex;
    flex-direction: column;
  }

  .game-card__thumb {
    position: relative;
    inset: unset;
    width: 100%;
    aspect-ratio: 16 / 9;
    flex-shrink: 0;
    filter: brightness(0.85) saturate(0.9);
    transition: filter 0.3s ease;
  }

  /* Disable zoom-darken on tap */
  .game-card:hover .game-card__thumb {
    transform: none;
    filter: brightness(0.85) saturate(0.9);
  }

  /* Hide overlay layers — not needed in split layout */
  .game-card__gradient,
  .game-card__tint {
    display: none;
  }

  /* Content sits below the image, in a solid surface panel */
  .game-card__content {
    position: relative;
    inset: unset;
    background: var(--surface);
    padding: 0.75rem 0.9rem 1rem;
    justify-content: flex-start;
    border-top: 1px solid var(--border);
    flex: 1;
  }

  /* Always show desc and actions — no hover on mobile */
  .game-card__desc,
  .game-card__actions {
    opacity: 1;
    transform: translateY(0);
  }

  .game-card__title {
    transform: translateY(0);
    font-size: 0.8rem;
    margin-bottom: 0.35rem;
  }

  .game-card__desc {
    font-size: 0.72rem;
    -webkit-line-clamp: 3;
  }

  .game-card__tag {
    position: relative;
    top: unset;
    left: unset;
    font-size: 0.55rem;
    padding: 0.2rem 0.45rem;
    margin-bottom: 0.4rem;
  }

  .game-card__actions {
    margin-top: auto;
    padding-top: 0.65rem;
  }

  .btn {
    font-size: 0.65rem;
    padding: 0.4rem 0.8rem;
  }

  .home-nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
