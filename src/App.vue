<script>
  export default {
    data() {
      return {
        menu: [
          {
            title: 'GAMES',
            icon: 'fa fa-user',
            child: [
              {
                title: 'PC',
                icon: 'fa fa-user',
                child: [
                  {
                    href: '/games/pc/bizarreskies',
                    title: 'Bizarre Skies',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/pc/contra2d',
                    title: 'Contra 2D',
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
                    href: '/games/pc/kh-tears',
                    title: 'Kingdom Hearts Tears',
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
                title: 'GAME BOY ADVANCE',
                icon: 'fa fa-user',
                child: [
                  {
                    href: '/games/gba/magicalpopn',
                    title: "Magical Pop'n",
                    icon: 'fa fa-user'
                  }
                ]
              },
              {
                title: 'NINTENDO DS',
                icon: 'fa fa-user',
                child: [
                  {
                    href: '/games/nds/avalancheds',
                    title: 'Avalanche DS',
                    icon: 'fa fa-user'
                  },
                  {
                    href: '/games/nds/chesscount',
                    title: 'ChessCount',
                    icon: 'fa fa-user'
                  }
                ]
              }
            ]
          },
          {
            title: 'TRANSLATIONS',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/translations/bbsfm',
                title: 'Birth By Sleep Final Mix',
                icon: 'fa fa-user'
              },
              {
                href: '/translations/drakengard3',
                title: 'Drakengard 3',
                icon: 'fa fa-user'
              }
            ]
          },
          {
            title: 'MODS',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/mods/bbsfmcameraemu',
                title: 'BBSFM: Camera Stick (Emu)',
                icon: 'fa fa-user'
              },
              {
                href: '/mods/crisiscorereunionogdub',
                title: 'Crisis Core Reunion: Og Dub',
                icon: 'fa fa-user'
              },
              {
                href: '/mods/kh2sephirothas',
                title: "KH2: Replayable Sephiroth",
                icon: 'fa fa-user'
              },
              {
                href: '/mods/kh2spanishmix',
                title: 'KH2: Spanish Mix',
                icon: 'fa fa-user'
              },
              {
                href: '/mods/kh2xemnasdeletedquotes',
                title: 'KH2: Xemnas Deleted Quotes',
                icon: 'fa fa-user'
              }
            ]
          },
          {
            title: 'COLLABORATIONS',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/collaborations/brainrotroyale',
                title: 'Brainrot Royale (Beta Testing)',
                icon: 'fa fa-user'
              },
              {
                href: '/collaborations/cluelesscrew',
                title: 'Clueless Crew (Beta Testing)',
                icon: 'fa fa-user'
              },
              {
                href: '/collaborations/kh2rando',
                title: 'KH2: Randomizer (Bug Fixing)',
                icon: 'fa fa-user'
              },
              {
                href: '/collaborations/remorse',
                title: 'Remorse: The List (Beta Testing)',
                icon: 'fa fa-user'
              }              
            ]
          },
          {
            title: 'TOOLS',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/tools/hcareplace',
                title: 'HCAReplace',
                icon: 'fa fa-user'
              },
              {
                href: '/tools/realmsengine',
                title: 'Realms Engine',
                icon: 'fa fa-user'
              }              
            ]
          },
          {
            title: 'ABOUT ME',
            href: '/aboutme',
            icon: 'fa fa-chart-area'
          },
          {
            title: 'CONTACT',
            href: '/contact',
            icon: 'fa fa-chart-area'
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
          <router-link :to="'/'"><h1>Svenchu</h1></router-link>
        </div>
        <div class="nav-links">
          <router-link to="/games">Games</router-link>
          <router-link to="/collaborations">Collaborations</router-link>
          <router-link to="/translations">Translations</router-link>
          <router-link to="/mods">Mods</router-link>
          <router-link to="/tools">Tools</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </nav>
    </header>

    <sidebar-menu :menu="menu" />

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 - Svenchu</p>
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
  background: linear-gradient(135deg, #eaba66 0%, #eaba663d 100%);
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