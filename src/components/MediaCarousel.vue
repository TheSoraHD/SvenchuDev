<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images:        { type: Array, default: () => [] },
  youtubeVideos: { type: Array, default: () => [] },
  itemId:        { type: String, required: true }
})

// Flat ordered list of all media items, matching carousel render order
const mediaItems = computed(() => [
  ...props.images.map((src, i)       => ({ type: 'image', src, label: `${props.itemId} imagen ${i + 1}` })),
  ...props.youtubeVideos.map((id, i) => ({ type: 'video', src: `https://www.youtube.com/embed/${id}`, label: `${props.itemId} video ${i + 1}` })),
])

const currentIndex = ref(0)
const totalItems   = computed(() => mediaItems.value.length)
const hasMedia     = computed(() => totalItems.value > 0)

const next = () => { if (currentIndex.value < totalItems.value - 1) currentIndex.value++ }
const prev = () => { if (currentIndex.value > 0) currentIndex.value-- }
const goTo = (i) => { currentIndex.value = i }

const handleImageError = (e) => {
  if (!e.target.src.includes('placeholder')) e.target.src = '/images/placeholder.jpg'
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
const lightboxIndex = ref(null)
const lightboxItem  = computed(() => lightboxIndex.value !== null ? mediaItems.value[lightboxIndex.value] : null)

const openLightbox = (i) => {
  lightboxIndex.value = i
  currentIndex.value  = i   // keep carousel in sync
}
const closeLightbox = () => { lightboxIndex.value = null }

const lightboxNext = () => {
  if (lightboxIndex.value < totalItems.value - 1) {
    lightboxIndex.value++
    currentIndex.value = lightboxIndex.value
  }
}
const lightboxPrev = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--
    currentIndex.value = lightboxIndex.value
  }
}

const handleKeydown = (e) => {
  if (lightboxItem.value) {
    if      (e.key === 'Escape')     closeLightbox()
    else if (e.key === 'ArrowRight') lightboxNext()
    else if (e.key === 'ArrowLeft')  lightboxPrev()
    return
  }
  if (e.key === 'ArrowLeft')  prev()
  else if (e.key === 'ArrowRight') next()
}

onMounted(()  => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div v-if="hasMedia" class="carousel">
    <div class="carousel-track-wrap">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, i) in mediaItems" :key="i" class="carousel-slide">
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.label"
            class="slide-img"
            @error="handleImageError"
            @click="openLightbox(i)"
          />
          <iframe
            v-else
            :src="item.src"
            :title="item.label"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="slide-video"
          ></iframe>
        </div>
      </div>

      <!-- Controles -->
      <div v-if="totalItems > 1" class="carousel-controls">
        <button class="ctrl-btn" :disabled="currentIndex === 0" @click="prev">&#8249;</button>
        <button class="ctrl-btn" :disabled="currentIndex === totalItems - 1" @click="next">&#8250;</button>
      </div>
    </div>

    <!-- Indicadores -->
    <div v-if="totalItems > 1" class="carousel-dots">
      <button
        v-for="(_, i) in totalItems"
        :key="i"
        class="dot"
        :class="{ active: currentIndex === i }"
        @click="goTo(i)"
      ></button>
    </div>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="lightboxItem" class="lightbox-backdrop" @click.self="closeLightbox">

        <!-- Close -->
        <button class="lightbox-close" @click="closeLightbox" aria-label="Cerrar">&#x2715;</button>

        <!-- Counter -->
        <div class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ totalItems }}</div>

        <!-- Prev -->
        <button
          v-if="totalItems > 1"
          class="lightbox-nav lightbox-nav--prev"
          :disabled="lightboxIndex === 0"
          @click="lightboxPrev"
          aria-label="Anterior"
        >&#8249;</button>

        <!-- Media -->
        <img
          v-if="lightboxItem.type === 'image'"
          :src="lightboxItem.src"
          :alt="lightboxItem.label"
          class="lightbox-img"
        />
        <iframe
          v-else
          :src="lightboxItem.src"
          :title="lightboxItem.label"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="lightbox-video"
        ></iframe>

        <!-- Next -->
        <button
          v-if="totalItems > 1"
          class="lightbox-nav lightbox-nav--next"
          :disabled="lightboxIndex === totalItems - 1"
          @click="lightboxNext"
          aria-label="Siguiente"
        >&#8250;</button>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.carousel {
  width: 100%;
}

.carousel-track-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 2px;
  background: var(--surface2, #16161f);
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: zoom-in;
}

.slide-video {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Controles */
.carousel-controls {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
  pointer-events: none;
}

.ctrl-btn {
  width: 36px;
  height: 36px;
  border-radius: 2px;
  background: rgba(10,10,15,0.75);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text, #f0f0f8);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  transition: background 0.2s;
}
.ctrl-btn:hover:not(:disabled) { background: rgba(0,229,255,0.15); color: var(--accent, #00e5ff); }
.ctrl-btn:disabled { opacity: 0.25; cursor: not-allowed; }

/* Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 0.75rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.2);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  padding: 0;
}
.dot.active {
  background: var(--accent, #00e5ff);
  transform: scale(1.3);
}
.dot:hover { background: rgba(255,255,255,0.5); }

/* Lightbox */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 2px;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6);
  user-select: none;
}

/* Lightbox nav buttons */
.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 2px;
  background: rgba(10, 10, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--text, #f0f0f8);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  z-index: 1;
}
.lightbox-nav--prev { left: 1rem; }
.lightbox-nav--next { right: 1rem; }
.lightbox-nav:hover:not(:disabled) {
  background: rgba(0, 229, 255, 0.15);
  color: var(--accent, #00e5ff);
}
.lightbox-nav:disabled { opacity: 0.2; cursor: not-allowed; }

/* Counter */
.lightbox-counter {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
  pointer-events: none;
}

/* Lightbox video */
.lightbox-video {
  width: min(90vw, 160vh);
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 2px;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6);
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background: rgba(10, 10, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--text, #f0f0f8);
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}
.lightbox-close:hover {
  background: rgba(0, 229, 255, 0.15);
  color: var(--accent, #00e5ff);
}

/* Transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
