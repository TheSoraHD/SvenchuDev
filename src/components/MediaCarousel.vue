<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images:        { type: Array, default: () => [] },
  youtubeVideos: { type: Array, default: () => [] },
  itemId:        { type: String, required: true }
})

const currentIndex = ref(0)
const totalItems   = computed(() => props.images.length + props.youtubeVideos.length)
const hasMedia     = computed(() => totalItems.value > 0)

const next = () => { if (currentIndex.value < totalItems.value - 1) currentIndex.value++ }
const prev = () => { if (currentIndex.value > 0) currentIndex.value-- }
const goTo = (i) => { currentIndex.value = i }

const handleImageError = (e) => {
  if (!e.target.src.includes('placeholder')) e.target.src = '/images/placeholder.jpg'
}

const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

onMounted(()  => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div v-if="hasMedia" class="carousel">
    <div class="carousel-track-wrap">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(img, i) in images" :key="`img-${i}`" class="carousel-slide">
          <img :src="img" :alt="`${itemId} imagen ${i + 1}`" class="slide-img" @error="handleImageError" />
        </div>
        <div v-for="(vid, i) in youtubeVideos" :key="`vid-${i}`" class="carousel-slide">
          <iframe
            :src="`https://www.youtube.com/embed/${vid}`"
            :title="`${itemId} video ${i + 1}`"
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
</style>
