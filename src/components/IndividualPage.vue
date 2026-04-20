<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MediaCarousel from './MediaCarousel.vue'
import { sectionsData } from '../data/sectionsData.js'

const route = useRoute()
const router = useRouter()

const category = computed(() => route.params.category)
const subcategory = computed(() => route.params.subcategory)
const itemId = computed(() => route.params.itemId)

const pageData = computed(() => {
  const section = sectionsData[category.value]
  if (!section) return null
  let item
  if (subcategory.value && section[subcategory.value]) {
    item = section[subcategory.value].find((i) => String(i.id) === String(itemId.value))
  } else if (Array.isArray(section)) {
    item = section.find((i) => String(i.id) === String(itemId.value))
  }
  return item || null
})

const hasDownloadInfo = computed(() => !!pageData.value?.downloadInfo)

function goBack() {
  router.back()
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div class="individual-page">
    <!-- 404 -->
    <div v-if="!pageData" class="not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      <button class="btn-back" @click="goBack">← Volver</button>
    </div>

    <template v-else>
      <!-- Breadcrumb / back -->
      <nav class="breadcrumb">
        <button class="breadcrumb-back" @click="goBack">←</button>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-cat">{{ category }}</span>
        <span v-if="subcategory" class="breadcrumb-sep">/</span>
        <span v-if="subcategory" class="breadcrumb-cat">{{ subcategory }}</span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ pageData.name }}</span>
      </nav>

      <!-- Hero title -->
      <header class="hero">
        <h1 class="hero-title">{{ pageData.name }}</h1>
        <p class="hero-desc" v-html="pageData.shortDescription"></p>
      </header>

      <!-- Grid principal -->
      <div class="content-grid">
        <!-- Columna izquierda -->
        <div class="col-main">
          <!-- Galería -->
          <section class="content-block">
            <h2 class="block-title">Gallery</h2>
            <MediaCarousel
              :images="pageData.images || []"
              :youtube-videos="pageData.youtubeVideos || []"
              :item-id="pageData.id"
            />
            <p
              v-if="!pageData.images?.length && !pageData.youtubeVideos?.length"
              class="empty-state"
            >
              No media available.
            </p>
          </section>

          <!-- Description  -->
          <section v-if="pageData.features?.length" class="content-block">
            <h2 class="block-title">Description</h2>
            <div
              class="description [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6"
              v-html="pageData.description"
            ></div>
          </section>

          <!-- Features -->
          <section v-if="pageData.features?.length" class="content-block">
            <h2 class="block-title">Features</h2>
            <ul class="features-list">
              <li v-for="feat in pageData.features" :key="feat">
                <span class="feat-check">✓</span>{{ feat }}
              </li>
            </ul>
          </section>

          <!-- Changelog -->
          <section v-if="pageData.changelog?.length" class="content-block">
            <h2 class="block-title">Change Log</h2>
            <div class="changelog">
              <div v-for="v in pageData.changelog" :key="v.version" class="changelog-item">
                <div class="changelog-header">
                  <span class="version-tag">v{{ v.version }}</span>
                  <span class="version-date">{{ formatDate(v.date) }}</span>
                </div>
                <ul class="changelog-changes">
                  <li v-for="c in v.changes" :key="c">{{ c }}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar derecho -->
        <aside class="col-sidebar">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Download</h3>

            <template v-if="hasDownloadInfo">
              <div class="download-meta">
                <div class="meta-row">
                  <span class="meta-label">Version</span>
                  <span class="meta-value">{{ pageData.downloadInfo.version }}</span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Size</span>
                  <span class="meta-value">{{ pageData.downloadInfo.size }}</span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Requirements</span>
                  <span class="meta-value">{{ pageData.downloadInfo.requirements }}</span>
                </div>
              </div>
            </template>

            <a
              v-if="pageData.downloadUrl && pageData.downloadUrl !== 'TO-DO'"
              :href="pageData.downloadUrl"
              target="_blank"
              rel="noopener"
              class="btn-download"
            >
              Download Now
            </a>
            <p v-else-if="!pageData.downloadUrl" class="download-pending">Not Available</p>
            <p v-else class="download-pending">Coming Soon</p>
          </div>

          <div
            v-if="hasDownloadInfo && pageData.downloadInfo.installation?.length"
            class="sidebar-card"
          >
            <h3 class="sidebar-card-title">Installation</h3>
            <ol class="install-steps">
              <li v-for="step in pageData.downloadInfo.installation" :key="step">{{ step }}</li>
            </ol>
          </div>
        </aside>
      </div>
    </template>
  </div>
</template>

<style scoped>
.individual-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2.5rem 6rem;
}

/* ─── 404 ─── */
.not-found {
  text-align: center;
  padding: 8rem 0;
  color: var(--muted);
}
.not-found h1 {
  font-family: var(--font-display);
  font-size: 8rem;
  font-weight: 900;
  color: var(--border);
  line-height: 1;
}

/* ─── BREADCRUMB ─── */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.breadcrumb-back {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.breadcrumb-back:hover {
  background: var(--surface2);
}
.breadcrumb-sep {
  color: var(--border);
}
.breadcrumb-cat {
  color: var(--muted);
}
.breadcrumb-current {
  color: var(--accent);
}

/* ─── HERO ─── */
.hero {
  margin-bottom: 3rem;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  color: var(--text);
  margin-bottom: 0.75rem;
  line-height: 1.1;
}
.hero-desc {
  color: var(--muted);
  font-size: 1rem;
  max-width: 65ch;
  line-height: 1.7;
  white-space: pre-line;
}
.hero-desc :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}
.hero-desc :deep(a:hover) {
  opacity: 0.75;
}

/* ─── LAYOUT ─── */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 2rem;
  align-items: start;
}

.col-main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* ─── CONTENT BLOCKS ─── */
.content-block {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.75rem;
  background: var(--surface);
}

.block-title {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.empty-state {
  color: var(--muted);
  font-size: 0.85rem;
  font-style: italic;
}

/* ─── FEATURES ─── */
.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--muted);
}
.feat-check {
  color: var(--accent);
  font-size: 0.75rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

/* ─── CHANGELOG ─── */
.changelog {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.changelog-item {
  border-left: 2px solid var(--border);
  padding-left: 1.25rem;
}
.changelog-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.version-tag {
  font-family: var(--font-display);
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.08em;
}
.version-date {
  font-size: 0.75rem;
  color: var(--muted);
}
.changelog-changes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.changelog-changes li {
  font-size: 0.85rem;
  color: var(--muted);
  position: relative;
  padding-left: 1rem;
}
.changelog-changes li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--border);
}

/* ─── SIDEBAR ─── */
.col-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 84px;
}

.sidebar-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.5rem;
}
.sidebar-card-title {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.download-meta {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1.25rem;
}
.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.meta-label {
  font-size: 0.75rem;
  color: var(--muted);
  white-space: nowrap;
}
.meta-value {
  font-size: 0.78rem;
  color: var(--text);
  text-align: right;
}

.btn-download {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background: var(--accent);
  color: #000;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.2s;
}
.btn-download:hover {
  background: #fff;
}

.download-pending {
  text-align: center;
  font-size: 0.8rem;
  color: var(--muted);
  font-style: italic;
}

.btn-back {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-back:hover {
  background: var(--surface2);
}

.install-steps {
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.install-steps li {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.5;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  .col-sidebar {
    position: static;
  }
}
@media (max-width: 600px) {
  .individual-page {
    padding: 2rem 1.25rem 4rem;
  }
  .hero-title {
    font-size: 1.8rem;
  }
}
</style>
