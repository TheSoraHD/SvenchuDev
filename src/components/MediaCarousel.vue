<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  youtubeVideos: {
    type: Array,
    default: () => []
  },
  itemId: {
    type: String,
    required: true
  }
})

// Estado reactivo
const currentIndex = ref(0)

// Computed properties
const totalItems = computed(() => props.images.length + props.youtubeVideos.length)
const hasMedia = computed(() => totalItems.value > 0)

// Métodos
const nextItem = () => {
  if (currentIndex.value < totalItems.value - 1) {
    currentIndex.value++
  }
}

const prevItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToItem = (index) => {
  currentIndex.value = index
}

const handleImageError = (event) => {
  event.target.src = '/images/placeholder.jpg' // Imagen de placeholder
  console.warn(`Error cargando imagen: ${event.target.src}`)
}

// Auto-play opcional (comentado por defecto)
let autoplayInterval = null

const startAutoplay = () => {
  if (totalItems.value > 1) {
    autoplayInterval = setInterval(() => {
      if (currentIndex.value === totalItems.value - 1) {
        currentIndex.value = 0
      } else {
        nextItem()
      }
    }, 5000) // Cambia cada 5 segundos
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  // Descomenta la siguiente línea si quieres autoplay
  // startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

// Control de teclado
const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') {
    prevItem()
  } else if (event.key === 'ArrowRight') {
    nextItem()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div v-if="hasMedia" class="media-carousel">
    <div class="carousel-container">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <!-- Imágenes -->
        <div 
          v-for="(image, index) in images" 
          :key="`img-${index}`"
          class="carousel-item"
        >
          <img 
            :src="image" 
            :alt="`${itemId} imagen ${index + 1}`"
            class="carousel-image"
            @error="handleImageError"
          />
        </div>
        
        <!-- Videos de YouTube -->
        <div 
          v-for="(videoId, index) in youtubeVideos" 
          :key="`video-${index}`"
          class="carousel-item"
        >
          <div class="video-container">
            <iframe
              :src="`https://www.youtube.com/embed/${videoId}`"
              :title="`${itemId} video ${index + 1}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="carousel-video"
            ></iframe>
          </div>
        </div>
      </div>
      
      <!-- Controles de navegación -->
      <div v-if="totalItems > 1" class="carousel-controls">
        <button 
          @click="prevItem" 
          class="carousel-button carousel-button-prev"
          :disabled="currentIndex === 0"
        >
          &#8249;
        </button>
        <button 
          @click="nextItem" 
          class="carousel-button carousel-button-next"
          :disabled="currentIndex === totalItems - 1"
        >
          &#8250;
        </button>
      </div>
      
      <!-- Indicadores -->
      <div v-if="totalItems > 1" class="carousel-indicators">
        <button
          v-for="(_, index) in totalItems"
          :key="index"
          @click="goToItem(index)"
          :class="['indicator', { active: currentIndex === index }]"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-carousel {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  background: #f8f9fa;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-video {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transform: translateY(-50%);
  pointer-events: none;
}

.carousel-button {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  pointer-events: all;
}

.carousel-button:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.carousel-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-container {
    height: 200px;
  }
  
  .carousel-button {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
  
  .carousel-controls {
    padding: 0 0.5rem;
  }
}
</style>