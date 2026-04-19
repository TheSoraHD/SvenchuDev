<script setup>
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="hero-photo-wrap">
        <img
          src="/images/about/photo.jpg"
          alt="Svenchu's Photo"
          class="hero-photo"
          @error="(e) => (e.target.style.display = 'none')"
        />
        <div class="hero-photo-fallback" aria-hidden="true">
          <span>S</span>
        </div>
      </div>

      <div class="hero-text">
        <span class="eyebrow">About me</span>
        <h1 class="hero-name">SVEN WALLIN</h1>
        <p class="hero-tagline">Game Developer · Modder · Translator · Video Editor</p>
        <p class="hero-bio">
          Bachelor's Degree in Computer Engineering with a specialisation in Computing (FIB UPC -
          2024).<br /><br />
          Ever since I was a child, I have wondered how video games could work using only 0s and 1s.
          This simple question inspired me to spend years learning how to code and then start
          developing video games, mods and translations out of pure passion. I also shared my
          knowledge and passion on YouTube. I specialise in Unreal Engine 5 and have solid
          experience in the IT sector, having managed teams of university scholars.<br /><br />
          Outside of work, I enjoy playing video games of all genres and eras, playing chess and
          spending time with my wife and our dog, Roxas.
        </p>
      </div>
    </section>

    <div class="divider"></div>

    <section class="about-section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div class="skill-card" v-for="skill in skills" :key="skill.label">
          <span class="skill-icon">{{ skill.icon }}</span>
          <div>
            <p class="skill-label">{{ skill.label }}</p>
            <p class="skill-desc">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="about-section stats-row">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </section>

    <div class="divider"></div>

    <section class="about-section">
      <h2 class="section-title">Timeline</h2>
      <ol class="timeline">
        <li v-for="(event, i) in timeline" :key="i" class="timeline-item">
          <span class="timeline-year">{{ event.year }}</span>
          <div class="timeline-body">
            <p class="timeline-title" v-html="event.title"></p>
            <p class="timeline-desc" v-html="event.desc"></p>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: '🎮',
          label: 'Game Dev',
          desc: 'Unreal Engine 5 · Unity · C/C++ · OpenGL · Learning Vulkan · Console homebrew enthusiastic',
        },
        {
          icon: '🌍',
          label: 'Translation',
          desc: 'EN -> ES Localization · ROM Editing · Learning Japanese ',
        },
        { icon: '🔧', label: 'Modding', desc: 'OpenKH · Custom Tools' },
        { icon: '💻', label: 'IT', desc: '10 Years of Professional Experience in the Sector' },
        { icon: '🎲', label: '3D', desc: '3DS Max · Blender · Photoshop · Substance Painter' },
        {
          icon: '🎬',
          label: 'Youtube',
          desc: 'Sony Vegas · Davince Resolve · Focused mainly on Kingdom Hearts content, with humorous skits',
        },
      ],
      stats: [
        { value: '10+', label: 'Published Projects' },
        { value: '10+', label: 'Years of GameDev Experience' },
        { value: '4K', label: 'Subscribers on YouTube' },
        { value: '1M', label: 'Views on YouTube' },
      ],
      timeline: [
        {
          year: '2011',
          title: 'AvalancheDS & PongDS',
          desc: 'First Nintendo DS homebrews: an attempt to port the Flash game Avalanche, and a classic Pong game featuring local multiplayer on the same device.',
        },
        {
          year: '2012',
          title: 'ChessCount',
          desc: 'A chess clock homebrew made for the Nintendo DS, with customizable time settings and an intuitive interface.',
        },
        {
          year: '2014',
          title: 'Delusion',
          desc: 'A psychological horror game built in Unreal Engine 3 as a school project, with all 3D assets created from scratch.',
        },
        {
          year: '2016',
          title: 'Sanic: The Zombie Game & BBS Final Mix Spanish Translation',
          desc: 'A zombie shooter built with a custom C++/OpenGL 2D engine, alongside the first major translation project: a full Spanish patch for Kingdom Hearts Birth by Sleep Final Mix (PSP).',
        },
        {
          year: '2017',
          title: "Magical Pop'n GBA",
          desc: "A homebrew action-platformer for the Game Boy Advance, inspired by the original Magical Pop'n for SNES.",
        },
        {
          year: '2019',
          title: 'Contra2D & Bizarre Skies 3D',
          desc: 'A 2D reimagining of the classic Contra built with a custom C++/OpenGL engine, and a Rolling Sky clone with a JoJo\'s Bizarre Adventure theme made with Unreal Engine 4.',
        },
        {
          year: '2021',
          title: 'Corruption & KH2 Spanish Mix',
          desc: 'A Slender-style horror game made for Z-Jam 2021 in collaboration with Keytotruth, plus the release of KH2 Spanish Mix — a full Castilian Spanish voice mod for Kingdom Hearts 2.',
        },
        {
          year: '2022',
          title: 'KH2/KHBBS Mods, Crisis Core Voices & HCAreplace',
          desc: "Multiple releases: Sephiroth's Absent Silhouette and Xemnas Deleted Quotes mods for KH2, the BBS Free Camera patch for PPSSPP, restoration of Crisis Core's original PSP voices, and HCAreplace — a tool to replace HCA audio in game files.",
        },
        {
          year: '2023',
          title: 'Flamboyant',
          desc: 'A vibrant bullet-hell 3D minigame built in Unity in four days for a UPC FIB advanced course, featuring color-changing shooting mechanics.',
        },
        {
          year: '2024',
          title: 'KH2 Spanish Mix v1.3',
          desc: 'Final bug-fix update for KH2 Spanish Mix, polishing compatibility and voice coverage across the game.',
        },
        {
          year: '2026',
          title: 'Kingdom Hearts: Tears',
          desc: 'An ambitious fan-made reimagining of Day 357 from Kingdom Hearts 358/2 Days, built in Unreal Engine 5 with lots of optional content.',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Styles remain unchanged as they contain no language-specific text */
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2.5rem 6rem;
}

.about-hero {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 3.5rem;
  align-items: center;
  margin-bottom: 3.5rem;
}

.hero-photo-wrap {
  position: relative;
  width: 250px;
  height: 500px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid var(--border);
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-photo-fallback {
  position: absolute;
  inset: 0;
  background: var(--surface2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 900;
  color: var(--accent);
  z-index: -1;
}

.hero-photo:not([style*='display: none']) ~ .hero-photo-fallback {
  z-index: -1;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.dim {
  color: rgba(240, 240, 248, 0.15);
}

.hero-tagline {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.hero-bio {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.75;
  max-width: 100ch;
  white-space: pre-line;
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--border);
  margin: 3rem 0;
}

.about-section {
  margin-bottom: 0;
}

.section-title {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  border: 1px solid var(--border);
}

.skill-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--surface);
  border-right: 1px solid var(--border);
  transition: background 0.2s;
}
.skill-card:hover {
  background: var(--surface2);
}

.skill-icon {
  font-size: 1.3rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.skill-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.2rem;
}
.skill-desc {
  font-size: 0.75rem;
  color: var(--muted);
}

.timeline {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 1px solid var(--border);
  padding-left: 0;
  margin-left: 3rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  padding: 1.25rem 0 1.25rem 2rem;
  position: relative;
  border-bottom: 1px solid var(--border);
}
.timeline-item:last-child {
  border-bottom: none;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 1.7rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--accent);
}

.timeline-year {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.08em;
  padding-top: 0.15rem;
}

.timeline-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.3rem;
}
.timeline-desc {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.6;
  white-space: pre-line;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border: 1px solid var(--border);
}

.stat-card {
  padding: 1.75rem 1.5rem;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-right: 1px solid var(--border);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
}
.stat-label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 768px) {
  .about-page {
    padding: 2.5rem 1.25rem 4rem;
  }
  .about-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    text-align: center;
  }
  .hero-bio {
    max-width: none;
  }
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .timeline {
    margin-left: 1rem;
  }
  .timeline-item {
    grid-template-columns: 55px 1fr;
    gap: 1rem;
  }
}
@media (max-width: 480px) {
  .stats-row {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
