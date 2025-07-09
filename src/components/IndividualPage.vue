<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MediaCarousel from './MediaCarousel.vue'
import { sectionsData, individualPages } from '../data/sectionsData.js'

const route = useRoute()
const category = computed(() => route.params.category)
const subcategory = computed(() => route.params.subcategory)
const itemId = computed(() => route.params.itemId)

const pageData = computed(() => {
  const section = sectionsData[category.value]
  if (!section) return {}

  let item
  if (subcategory.value && section[subcategory.value]) {
    item = section[subcategory.value].find(i => String(i.id) === String(itemId.value))
  } else if (Array.isArray(section)) {
    item = section.find(i => String(i.id) === String(itemId.value))
  }
  if (!item) return {}

  // Devuelve el item tal cual, o adapta si necesitas props extra
  return item
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="individual-page">
    
    

    <!-- Botón de volver -->
    <button @click="goBack" class="back-button">
      ← Volver
    </button>

    <!-- Contenido principal -->
    <div class="page-content">
      <header class="page-header">
        <h1 class="page-title">{{ pageData.name }}</h1>
      </header>

      <div class="content-grid">
        <!-- Columna principal -->
        <div class="main-content">
          <div class="description-section">
            <h2>Descripción</h2>
            {{ pageData.description }}
          </div>

          <div v-if="pageData.features" class="features-section">
            <h2>Características</h2>
            <ul class="features-list">
              <li v-for="feature in pageData.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Carrusel de medios -->
          <div class="media-section">
            <h2>Galería</h2>
            <MediaCarousel 
              :images="pageData.images || []"
              :youtube-videos="pageData.youtubeVideos || []"
              :item-id="pageData.item"
            />
          </div>

          <!-- Changelog -->
          <div v-if="pageData.changelog" class="changelog-section">
            <h2>Historial de Cambios</h2>
            <div class="changelog-list">
              <div v-for="version in pageData.changelog" :key="version.version" class="changelog-item">
                <div class="changelog-header">
                  <span class="version-number">v{{ version.version }}</span>
                  <span class="version-date">{{ formatDate(version.date) }}</span>
                </div>
                <ul class="changelog-changes">
                  <li v-for="change in version.changes" :key="change">
                    {{ change }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar">
          <div class="download-card">
            <h3>Descargar</h3>
            <div class="download-info">
              <div class="info-item">
                <strong>Versión:</strong> {{ pageData.downloadInfo.version }}
              </div>
              <div class="info-item">
                <strong>Tamaño:</strong> {{ pageData.downloadInfo.size }}
              </div>
              <div class="info-item">
                <strong>Requisitos:</strong> {{ pageData.downloadInfo.requirements }}
              </div>
            </div>
            <button class="download-button-main">
              Descargar Ahora
            </button>
          </div>

          <div class="installation-card">
            <h3>Instalación</h3>
            <ol class="installation-steps">
              <li v-for="step in pageData.downloadInfo.installation" :key="step">
                {{ step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.individual-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.breadcrumb-item {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.breadcrumb-item:hover:not(.active) {
  background: #f0f0f0;
  color: #3498db;
}

.breadcrumb-item.active {
  color: #2c3e50;
  font-weight: 500;
  cursor: default;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: #999;
}

.back-button {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #495057;
  transition: all 0.2s ease;
  margin-bottom: 2rem;
}

.back-button:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.page-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.page-meta {
  display: flex;
  gap: 1rem;
}

.category-tag, .subcategory-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  padding: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.description-section h2,
.features-section h2,
.media-section h2,
.changelog-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.description-section p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li:before {
  content: "✓";
  color: #27ae60;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.changelog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.changelog-item {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
}

.changelog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.version-number {
  font-weight: 600;
  color: #3498db;
}

.version-date {
  color: #666;
  font-size: 0.9rem;
}

.changelog-changes {
  list-style: disc;
  padding-left: 1.5rem;
}

.changelog-changes li {
  margin-bottom: 0.25rem;
  color: #666;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.download-card, .installation-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
}

.download-card h3, .installation-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.download-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.info-item {
  font-size: 0.9rem;
  color: #666;
}

.download-button-main {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.download-button-main:hover {
  background: linear-gradient(135deg, #2980b9, #1f5f8b);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.installation-steps {
  padding-left: 1.2rem;
}

.installation-steps li {
  margin-bottom: 0.5rem;
  color: #666;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .individual-page {
    padding: 1rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-header {
    padding: 1.5rem;
  }
  
  .breadcrumb {
    flex-wrap: wrap;
  }
}
</style>