import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Solo usa devtools en desarrollo
    process.env.NODE_ENV === 'development' ? vueDevTools() : undefined
  ].filter(Boolean),
  base: '/', // Para dominio personalizado
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Reduce tamaño del build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
