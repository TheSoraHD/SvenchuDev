<script setup>
import { ref, onMounted } from 'vue'
import MediaCarousel from './MediaCarousel.vue'
import { sectionsData } from '../data/sectionsData.js'

// Datos reactivos
const portfolio = ref(sectionsData)

onMounted(() => {
  console.log('Portfolio cargado:', portfolio.value)
})
</script>

<template>
  <div class="portfolio-container">
    <div class="portfolio-section" v-for="(section, sectionName) in sectionsData" :key="sectionName">
      <h1 class="section-title">{{ sectionName }}</h1>
      
      <!-- Secciones con subcategorías (como GAMES) -->
      <div v-if="typeof section === 'object' && !Array.isArray(section)" class="subsections">
        <div v-for="(subsection, subsectionName) in section" :key="subsectionName" class="subsection">
          <h2 class="subsection-title">{{ subsectionName }}</h2>
          <div class="items-grid">
            <div v-for="item in subsection" :key="item.id" class="item-card">
              <h3 class="item-title">{{ item.name }}</h3>
              <p class="item-description">{{ item.description }}</p>
              
              <!-- Carrusel de medios -->
              <MediaCarousel 
                :images="item.images"
                :youtube-videos="item.youtubeVideos"
                :item-id="item.id"
              />
              
              <a 
                v-if="item.downloadUrl && item.downloadUrl !== '#'" 
                :href="item.downloadUrl" 
                class="download-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Secciones simples (arrays directos) -->
      <div v-else class="items-grid">
        <div v-for="item in section" :key="item.id" class="item-card">
          <h3 class="item-title">{{ item.name }}</h3>
          <p class="item-description">{{ item.description }}</p>
          
          <!-- Carrusel de medios -->
          <MediaCarousel 
            :images="item.images"
            :youtube-videos="item.youtubeVideos"
            :item-id="item.id"
          />
          
          <a 
            v-if="item.downloadUrl && item.downloadUrl !== '#'" 
            :href="item.downloadUrl" 
            class="download-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.portfolio-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subsections {
  margin-left: 1rem;
}

.subsection {
  margin-bottom: 3rem;
}

.subsection-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #e74c3c;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.item-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e8e8e8;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.item-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.item-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.download-button {
  display: inline-block;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.download-button:hover {
  background: linear-gradient(135deg, #2980b9, #1f5f8b);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-container {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .subsection-title {
    font-size: 1.5rem;
  }
  
  .items-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .item-card {
    padding: 1rem;
  }
}
</style>