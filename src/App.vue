<script setup>
import Portfolio from './components/Portfolio.vue'
</script>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            href: '/games',
            title: 'GAMES',
            icon: 'fa fa-user',
            child: [
              {
                href: '/games/pc',
                title: 'PC',
                icon: 'fa fa-user',
                child: [
                  {
                    href: '/games/pc/khtears',
                    title: 'Kingdom Hearts Tears',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/pc/corruption',
                    title: 'Corruption',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/pc/flamboyant',
                    title: 'Flamboyant',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/pc/contra2d',
                    title: 'Contra 2D',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/pc/bizarreskies',
                    title: 'Bizarre Skies',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/pc/sanic',
                    title: 'Sanic: The Zombie Game',
                    icon: 'fa fa-user'
                  }
                ]
              },
              {
                href: '/games/gba',
                title: 'Game Boy Advance',
                icon: 'fa fa-user',
                child: [
                  {
                    href: '/games/gba/magicalpopn',
                    title: "Magical Pop'n",
                    icon: 'fa fa-user',
                  }
                ]
              },
              {
                href: '/games/ds',
                title: 'Nintendo DS',
                icon: 'fa fa-user',
                child: [
                  {
                    href: '/games/nds/chesscoint',
                    title: 'Kingdom Hearts Tears',
                    icon: 'fa fa-user',
                  }
                ]
              }
            ]
          },
          {
            href: '/translations',
            title: 'Translations',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/translations/bbsfm',
                title: 'Birth By Sleep Final Mix',
                icon: 'fa fa-user',
              },
              {
                href: '/translations/drakengard3',
                title: 'Drakengard 3',
                icon: 'fa fa-user',
              }
            ]
          }
        ]
      }
    }
  }
</script>

<template>
  <div id="app">
    <header class="app-header">
      <nav class="navbar">
        <div class="nav-brand">
          <h1>Mi Portfolio</h1>
        </div>
        <div class="nav-links">
          <a href="#games">Games</a>
          <a href="#collaborations">Collaborations</a>
          <a href="#translations">Translations</a>
          <a href="#mods">Mods</a>
          <a href="#tools">Tools</a>
          <a href="#about">About</a>
        </div>
      </nav>
    </header>

    <sidebar-menu :menu="menu" />

    <main class="main-content">
      <Portfolio />
    </main>

    <footer class="app-footer">
      <p>&copy; 2024 - Mi Portfolio de Desarrollo</p>
    </footer>
  </div>
</template>

<style>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #eaba66 0%, #a2a24b 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.nav-links a:hover {
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
  transform: translateY(-2px);
}

.main-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  margin: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.app-footer {
  background: rgba(44, 62, 80, 0.9);
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .main-content {
    margin: 1rem;
    border-radius: 15px;
  }
  
  .nav-brand h1 {
    font-size: 1.5rem;
  }
}
</style>