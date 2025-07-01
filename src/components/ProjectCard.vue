<script setup>
import { Download, ExternalLink, Code } from 'lucide-react'

// Props
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

// Funciones para manejar clics
const handleDownload = () => {
  if (props.item.downloadUrl && props.item.downloadUrl !== '#') {
    window.open(props.item.downloadUrl, '_blank')
  } else {
    console.log('Download:', props.item.name)
    // Aquí puedes añadir lógica personalizada para descargas
  }
}

const handleDemo = () => {
  if (props.item.demoUrl) {
    window.open(props.item.demoUrl, '_blank')
  }
}

const handleSource = () => {
  if (props.item.sourceUrl) {
    window.open(props.item.sourceUrl, '_blank')
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
    <div class="flex items-start justify-between mb-3">
      <div class="flex-1">
        <h4 class="font-semibold text-gray-800 mb-2">{{ item.name }}</h4>
        <p class="text-gray-600 text-sm leading-relaxed mb-3">{{ item.description }}</p>
        
        <!-- Tags -->
        <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-1 mb-3">
          <span 
            v-for="tag in item.tags" 
            :key="tag"
            class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    
    <!-- Botones de acción -->
    <div class="flex gap-2">
      <button 
        v-if="item.downloadUrl" 
        @click="handleDownload"
        class="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm transition-colors flex-1 justify-center"
      >
        <Download class="w-4 h-4" />
        Download
      </button>
      
      <button 
        v-if="item.demoUrl" 
        @click="handleDemo"
        class="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm transition-colors flex-1 justify-center"
      >
        <ExternalLink class="w-4 h-4" />
        Demo
      </button>
      
      <button 
        v-if="item.sourceUrl" 
        @click="handleSource"
        class="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm transition-colors flex-1 justify-center"
      >
        <Code class="w-4 h-4" />
        Source
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones adicionales si las necesitas */
.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}
</style>