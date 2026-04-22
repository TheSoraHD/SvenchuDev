// data/portfolio.js
export const sectionsData = {
  games: {
    pc: [
      {
        id: 'kh-tears',
        name: 'Kingdom Hearts Tears',
        shortDescription:
          'Fan-made reimagining of Day 357 from Kingdom Hearts 358/2 Days, powered by Unreal Engine 5. This game aims to offers a new way to experience this pivotal moment in the story.',
        downloadUrl: 'TO-DO',
        images: [
          '/images/games/kh_tears-1.jpg',
          '/images/games/kh_tears-2.jpg',
          '/images/games/kh_tears-3.jpg',
          '/images/games/kh_tears-4.jpg',
        ],
        // youtubeVideos: [],
        description:
          '<p>In September 2017, after watching talented fans spend months unsuccessfully attempting to remake a behemoth like <em>Kingdom Hearts 358/2 Days</em> for modern platforms, I began working alone on programming the core systems that, to me, define what a Kingdom Hearts game is:</p><ul>  <li>Its combat system, including abilities, combos, levelling up, and movement.</li>  <li>A system for grabbing onto building ledges.</li>  <li>Interactions with enemies and environmental elements.</li>  <li>A dialogue system with flags.</li>  <li>The menus, including the command menu, main menu, and contextual pause menus.</li>  <li>Pre-rendered cutscenes and their integration into the game.</li>  <li>Recreating assets exclusive to 358/2 Days, such as the boss Xion.</li></ul><p>While my objective was to remake only the most important event in the game — the final fights against your friend Xion — it was proving to be an immense task for a single person. And so, Keytotruth, 13th Vessel and I continued to work together for another five years, convinced the game could achieve exceptional results. During that time, we made huge strides in filling the gaps in the core content and refined every aspect to make the most of the systems we had built.</p><p>Alongside the programming work and reverse engineering of other official titles in the series, and coordinating with my colleagues, I also contacted with artists and translators from around the world. Finally, we collaborated with the team at Ecos del Doblaje to produce a full Spanish dub for our game.</p><p>From one fan to another, I present my magnum opus to date. I hope you enjoy it as much as we enjoyed making it.</p>',
        features: [
          '10+ hours of playable content',
          'High-definition graphics',
          'Reimagined gameplay mechanics',
          'Translated to 10 languages',
          'Dubbed into 3 languages (English, Spanish, Japanese)',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '6.9 GB',
          requirements: 'Unreal Engine 5.6',
          installation: ['Extract the compressed game file'],
        },
      },
      {
        id: 'corruption',
        name: 'Corruption',
        shortDescription:
          'A "Slender-style" horror game where you must purify a city from the looming darkness.',
        downloadUrl: 'https://drive.google.com/file/d/1SLsC0G-UL--kHGKr6StUJARP0A5jTNk2/view',
        images: ['/images/games/corruption-1.jpg', '/images/games/corruption-2.jpg'],
        youtubeVideos: ['p95O5zlnE7U'],
        description:
          '<p>Created together with Keytotruth (Team Tiniebla), this was our entry for Z-Jam 2021, themed around "City". It was a short project built in 40 hours, and the result was something we were genuinely proud of given the constraints — we didn\'t win, but we felt the work spoke for itself.</p> <p>When approaching this as a Slender-style game, the central design question was how the player would locate the "corruptions" scattered across the city. My solution, designed and fully implemented in under two hours, was a mechanic akin to the dowsing rod method: a pair of L-shaped metal rods that would cross whenever the player entered the considerable radius surrounding each corruption. From there, the remainder of the work focused on the core mechanics and polish: enemies, cutscenes, level design, balancing, effects, and a main menu with basic configuration options.</p><p>Z-Jam is an initiative organised by San Jorge University, the Emprender en Aragón Foundation, the Aragonese Institute for Economic Development, and the Zaragoza City of Knowledge Foundation. It is coordinated by Miguel Vallés, a video game developer from Aragon.</p>',
        features: [
          'Single-player horror experience',
          'Short duration',
          'Map changes based on player actions',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2021-04-11',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'flamboyant',
        name: 'Flamboyant',
        shortDescription:
          '"Bullet hell" 3D minigame featuring a vibrant aesthetic and unique shooting mechanics.',
        downloadUrl: 'https://drive.google.com/file/d/1S5qwNlVKk4UJKf8vDl9PZieQVaFhRRsp/view',
        images: ['/images/games/flamboyant-1.jpg', '/images/games/flamboyant-2.jpg'],
        // youtubeVideos: [],
        description:
          '<p>A 3D bullet hell minigame built in Unity, featuring a vibrant aesthetic and unique shooting mechanics. It was made in four days for an Advanced Course in Video Game Development with Unity 3D at UPC FIB.</p><p>Beyond learning the Unity engine itself, the course placed a strong emphasis on applying SOLID principles to game development — a valuable and eye-opening exercise. The project also gave me the opportunity to build something I had long wanted to create: a space shooter in the spirit of Ikaruga, the acclaimed game by Treasure.</p>',
        features: [
          'Color changing mechanics',
          'Vibrant visual style',
          'Short and intense gameplay',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '576 MB',
          requirements: 'Unity Engine 2022.3.3f1',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2023-07-07',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'bizarreskies3d',
        name: 'Bizarre Skies',
        shortDescription: "Rolling Sky clone game, with JoJo's Bizarre Adventures theme.",
        downloadUrl: 'https://drive.google.com/file/d/1tHPl-hVR8-TCa_OmsNOn675VE6rChssT/view',
        images: ['/images/games/bizarreskies-1.jpg', '/images/games/bizarreskies-2.jpg'],
        youtubeVideos: ['OHOoz5rjCn0'],
        description:
          "<p>Developed as the final major project for the Video Games course at FIB (UPC) in November 2019, Bizarre Skies is a <em>Rolling Sky</em>-style obstacle avoidance game built in Unreal Engine over the course of one month — including the written report.</p><p>The game features three levels with a distinct visual identity: a retro aesthetic with strongly differentiated colour palettes per level, all set to Eurobeat-infused <em>JoJo's Bizarre Adventure</em> music. Each level was designed to feel like its own world while remaining cohesive as a whole.</p><p>As lead developer, I was responsible for the programming and technical direction of the project: I implemented the functionality of all gameplay elements and menus, defined the artistic vision, and introduced my partner Joel Alarcón to Unreal Engine throughout the process. We used GitHub for version control, while Joel handled level design and asset creation in Voxel3D.</p>",
        features: ['Colorful levels', 'Rhythm-based gameplay', 'Multiple difficulty levels'],
        downloadInfo: {
          version: '1.0.0',
          size: '256 MB',
          requirements: 'Unreal Engine 4.23',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2019-12-18',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'contra2d',
        name: 'Rambo (Contra NES clone)',
        shortDescription: 'A 2D reimagining of the classic action game Contra.',
        downloadUrl: 'https://drive.google.com/file/d/1VSCMri7Gh7eXLOywHeh7L4ahy8PpnHTC/view',
        images: ['/images/games/contra-1.jpg', '/images/games/contra-2.jpg'],
        youtubeVideos: ['x99bPYrfr3s'],
        description:
          '<p>The first of two projects developed for the Video Games course at FIB (UPC), Contra2D is a semi-faithful 2D recreation of the original NES <em>Contra</em>, built from scratch in C++ with a custom OpenGL engine over the course of one month in October 2019.</p><p>The game recreates three levels from the original: the classic side-scrolling platformer stage, a simplified take on the bottom-to-top shooting gallery where clearing all on-screen enemies advances the player, and a climactic boss fight against the alien brain — reimagined as a three-phase bullet hell encounter with no tentacles, each phase visually and mechanically distinct. The game ends after the boss is defeated.</p><p>One original addition is a time-stop mechanic, usable once per level. Activating it triggers the iconic <em>Za Warudo</em> voice clip; when time resumes, <em>Omae wa mou shindeiru</em> plays — and during that entire quote, everything is frozen, player included. The original <em>Contra</em> soundtrack accompanies the game throughout.</p><p>My partner Joel Alarcón and I divided responsibilities clearly: I handled the engine architecture, level design (recreated tile by tile from the original), asset preparation, boss AI, music integration, and general polish, while Joel implemented the standard enemy behaviour and weapon types.</p>',
        features: [
          'Time-stopping mechanics',
          'Recreation of classic Contra levels',
          'Bullet hell boss fight',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '39.5 MB',
          requirements: 'Custom 2D engine, using C++ and OpenGL',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2019-10-29',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'delusion',
        name: 'Delusion',
        shortDescription: 'Psychological horror game that challenges the perception of reality.',
        downloadUrl:
          'https://drive.google.com/file/d/1C6Htc72cG1TRtywTYZmgmyGYnZ_V_ZP0/view?usp=sharing',
        images: ['/images/games/delusion-1.jpg', '/images/games/delusion-2.jpg'],
        youtubeVideos: ['A2iSPnM1gHs'],
        description:
          '<p>Delusion was my <em>Treball de Recerca</em> — the capstone research project of the Catalan pre-university curriculum — and my first serious attempt at building a 3D game entirely on my own. The project spanned a full year, during which I enrolled in an online course at IDesigner (Escuela Online de Diseño y Desarrollo Digital), created all 3D assets from scratch, investigated and experimented with multiple game engines, and produced both a written report and a formal presentation.</p><p>Before settling on UDK (Unreal Engine 3), I explored Ogre3D and DarkGDK (DarkBasic Pro), none of which proved suitable for what I had in mind. UDK allowed me to bring the project to life as a horror exploration and puzzle-solving experience set inside a building — though it ultimately remained a tech demo rather than a fully realised game.</p><p>One highlight is an outdoor Parisian night scene modelled in 3DS Max, included not as core gameplay but as a showcase of what the engine and my assets could achieve with considered lighting. Inspired by titles such as <em>Alice: Madness Returns</em>, <em>Doom</em>, and <em>Alone in the Dark</em>, Delusion represents a year of self-directed learning compressed into a single project — and the foundation everything that came after was built on.</p>',
        features: [
          'Short horror experience',
          'Psychological themes',
          'Dynamic environment changes',
        ],
        downloadInfo: {
          version: '0.15 (Still a Prototype)',
          size: '389 MB',
          requirements: 'UDK (Unreal Engine 3)',
          installation: [
            'Extract the compressed game file.',
            "Run Binaries/UnEulaLite and accept UDK's EULA.",
            'Run the game!',
          ],
        },
        changelog: [
          {
            version: '0.15 (Still a Prototype)',
            date: '2026-04-19',
            changes: [
              'Added UnEulaLite, making it playable on modern systems',
              'Added compatibility with Ultrawide monitors',
              'Changed website',
            ],
          },
          {
            version: '0.1 (Prototype)',
            date: '2014-01-12',
            changes: ['Private release'],
          },
        ],
      },
      {
        id: 'sanic',
        name: 'Sanic: The Zombie Game',
        shortDescription:
          'Zombie game that was developed using a custom-made 2D graphics engine. Kill them all before they infect everyone!',
        downloadUrl:
          'https://drive.google.com/file/d/14S5l6I_hjzYXFRn3xz-TDWlvzz3hRgKv/view?usp=sharing',
        images: ['/images/games/sanic-1.jpg', '/images/games/sanic-2.jpg'],
        //youtubeVideos: [],
        description:
          "<p>Built in 2016 as a purely self-directed learning exercise, Sanic: The Zombie Game was developed by following <em>MakingGamesWithBen</em>'s Advanced C++/Graphics Tutorials — a 65-video series on advanced C++ and OpenGL — with the goal of understanding how to build and reason about a custom 2D game engine from the ground up.</p><p>The result is a top-down shooter where zombies spread instantly by contact: infected civilians turn immediately, and a single touch kills the player. The only personal touch added beyond the course material was the player character — rendered as the Sanic meme, making them instantly distinguishable from the civilians and undead filling the screen.</p><p>Straightforward in scope by design, the project was never about the game itself but about what building it taught: working directly with OpenGL, structuring an engine architecture, and developing a clearer understanding of what happens beneath the surface of higher-level tools.</p>",
        features: ['Multiple weapons', 'Zoomable camera', 'Pathfinding AI'],
        downloadInfo: {
          version: '0.1',
          size: '6.74 MB',
          requirements: 'Custom C++/OpenGL Engine',
          installation: ['Extract the file'],
        },
        changelog: [
          {
            version: '0.1',
            date: '2016-08-05',
            changes: ['Release'],
          },
        ],
      },
    ],
    gba: [
      {
        id: 'magicalpopn',
        name: "Magical Pop'n GBA",
        shortDescription:
          "A homebrew action-platformer for the Game Boy Advance, inspired by the original Magical Pop'n for SNES. It features a single boss fight, and an ending sequence.",
        downloadUrl:
          'https://drive.google.com/file/d/0B6QBHHAkKtjtZ2M1ZWdrTHdnaW8/view?resourcekey=0-uXezMaENQ9zCHtd4ROIjFw',
        images: [
          '/images/games/magicalpopn-1.jpg',
          '/images/games/magicalpopn-2.jpg',
          '/images/games/magicalpopn-3.jpg',
          '/images/games/magicalpopn-4.jpg',
        ],
        // youtubeVideos: [],
        description:
          "<p>A solo homebrew action-platformer for the Game Boy Advance, built as a love letter to <em>Magical Pop'n</em> — a criminally underappreciated 1995 SNES action-platformer that deserved far more attention than it received.</p><p>The game was written in C using DevkitARM and ToncLib, working directly against the GBA hardware. The entire process took six days: four spent studying the architecture through VGAFIB's GBA programming course, one reverse engineering the original game's movement to recreate it faithfully, and one writing the game's code itself.</p><p>The result is a single boss fight followed by an ending sequence. The boss — a fire mage — has no fixed phases in the traditional sense; instead, as his health drops, he and his attacks grow progressively faster and more aggressive, turning what begins as a measured encounter into a frantic bullet hell by the end.</p><p>All assets were prepared from scratch to fit within the GBA's tight hardware constraints: a 240×160 screen, tile-based rendering, and strict palette limitations.</p>",
        features: ['Action-platformer gameplay', 'Colorful graphics', 'Boss fights'],
        downloadInfo: {
          version: '1.0.0',
          size: '359 KB',
          requirements: 'GBA Flashcart / Emulator',
          installation: ['Play the ROM'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2017-02-03',
            changes: ['Official release'],
          },
        ],
      },
    ],
    nds: [
      {
        id: 'chesscount',
        name: 'ChessCount',
        shortDescription: 'A chess clock homebrew made for the Nintendo DS.',
        images: ['/images/games/chesscount-1.jpg', '/images/games/chesscount-2.jpg'],
        // youtubeVideos: [],
        description:
          '<p>Built in 2012 at the age of 15, ChessCount is a homebrew chess clock for the Nintendo DS — written in C using PALib and with hand-drawn textures made in GIMP.</p><p>The motivation was entirely practical: a friend had a flashcard, we played chess together regularly, and neither of us could afford a real chess clock. So I made one. The app supports customizable time settings and mid-game pausing, covering everything we actually needed at the board.</p><p>It is one of the earliest projects in this portfolio, and the first one I was really proud of.</p>',
        features: [
          "Use the buttons closer to the player's hands to control the clock.",
          'Customizable time settings',
          'Simple and intuitive interface',
        ],
        changelog: [
          {
            version: '1.0.0',
            date: '2012-04-12',
            changes: ['Private release.', 'If you would like it to be public, please let me know!'],
          },
        ],
      },
      {
        id: 'spaceinvadersds',
        name: 'Space Invaders DS',
        shortDescription:
          'An attempt to reimagine the classic game Space Invaders on the Nintendo DS.',
        downloadUrl: '',
        images: [
          '/images/games/spaceinvadersds-1.jpg',
          '/images/games/spaceinvadersds-2.jpg',
          '/images/games/spaceinvadersds-3.jpg',
        ],
        // youtubeVideos: [],
        description: '',
        features: [''],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
          requirements: 'NDS Flashcart / Emulator',
          installation: ['Play the ROM'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '???',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'pongds',
        name: 'PongDS',
        shortDescription:
          'Classic Pong game for the Nintendo DS, featuring simple controls and multiplayer on the same device.',
        downloadUrl:
          'https://drive.google.com/file/d/1GGeeQkHAca299yCgXe4PBoLH7horNGVP/view?usp=sharing',
        images: ['/images/games/pongds-1.jpg', '/images/games/pongds-2.jpg'],
        // youtubeVideos: [],
        description:
          '<p>Made at the age of 15, PongDS was a direct response to the lessons of <em>AvalancheDS</em>: start small, get it working, then grow. Rather than attempting another port, I chose the most manageable scope I could think of — and for the first time, delivered something fully playable.</p><p>The game is a two-player Pong clone on a single DS, with Player 1 using Up and Down on the D-pad and Player 2 using X and B. It tracks both the high score and the total number of hits across a session.</p><p>Modest in ambition by design, it was the project that taught me the value of finishing something.</p>',
        features: ['Track high scores', 'Multiplayer on the same device'],
        downloadInfo: {
          version: '1.0.0',
          size: '174 KB',
          requirements: 'NDS Flashcart / Emulator',
          installation: ['Play the ROM'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2011-10-03',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'avalancheds',
        name: 'AvalancheDS',
        shortDescription: 'An attempt to port of the flash game Avalanche for the Nintendo DS.',
        images: ['/images/games/avalancheds-1.jpg'],
        // youtubeVideos: [],
        description:
          "<p>Written at the age of 14, AvalancheDS was an attempt to port the Flash game <em>Avalanche</em> to the Nintendo DS using PALib — one of the earliest things I ever built, and an honest reflection of where I was as a programmer at the time.</p><p><em>Avalanche</em> is a survival game where you jump over falling blocks while escaping rising red water, climbing as high as possible to beat your record. One of its most satisfying mechanics was using the sides of falling blocks to slow your descent and chain an extra jump in midair — the kind of thing that made it endlessly replayable in the Flash era.</p><p>The port never reached a playable state. The falling blocks were never correctly spawned, though I did manage to get an intro sequence, interactive menu buttons, and a semi-functional player with movement, jumping, and screen-wrapping. Given that the entire codebase lived inside a single <em>main</em> function — a sign of someone who hadn't yet encountered the fundamentals of C — it is perhaps impressive that it got as far as it did.</p><p>One day, time permitting, I would like to revisit this with the tools and knowledge I have now, and finally get it to a fully playable state.</p>",
        features: [],
        changelog: [
          {
            version: '0',
            date: '2011-03-02',
            changes: [
              'Non-functional ROM.',
              'If you would like it to be properly made, please let me know!',
            ],
          },
        ],
      },
    ],
  },
  collaborations: [
    {
      id: 'kh2-rando',
      name: 'Kingdom Hearts 2 Randomizer',
      shortDescription:
        'Several improvements and fixes when playing KH2 Randomizer in Spanish (Steam/EPIC), which shuffles various game elements to create a unique experience each time.',
      downloadUrl: 'https://tommadness.github.io/KH2Randomizer/setup/Panacea-ModLoader/',
      images: ['/images/collabs/kh2-rando-1.jpg'],
      // youtubeVideos: [''],
    },
    {
      id: 'kh-refined',
      name: 'Kingdom Hearts Re:Fined',
      shortDescription:
        'Spanish translation (and Spanish Dub for KH2) for the refined versions of Classic Kingdom Hearts PC ports with QoL improvements and bug fixes.',
      downloadUrl: 'https://github.com/KH-ReFined/KH-ReFined',
      images: ['/images/collabs/kh-refined-1.jpg'],
      youtubeVideos: ['au0rhFks090'],
    },
    {
      id: 'brainrot-royale',
      name: 'Brainrot Royale',
      shortDescription:
        'Betatested the game in order to optimize it for ultrawide monitors and Steam Deck, including compatibility, performance and networking improvements.',
      downloadUrl: 'https://store.steampowered.com/app/878000/Brainrot_Royale/',
      images: ['/images/collabs/brainrot-royale-1.jpg'],
      youtubeVideos: ['z1-tFbFqXwo'],
    },
    {
      id: 'clueless-crew',
      name: 'Clueless Crew',
      shortDescription:
        'Betatested the game in order to optimize it for ultrawide monitors and Steam Deck, including compatibility, performance and networking improvements.',
      downloadUrl: 'https://store.steampowered.com/app/3252400/Clueless_Crew/',
      images: ['/images/collabs/clueless-crew-1.jpg'],
      youtubeVideos: ['vdptQDM8PLA'],
    },
    {
      id: 'remorse',
      name: 'Remorse: The List',
      shortDescription:
        'Betatested the game in order to optimize it for ultrawide monitors and Steam Deck, including compatibility and performance improvements.',
      downloadUrl: 'https://store.steampowered.com/app/867960/Remorse_The_List/',
      images: ['/images/collabs/remorse-1.jpg'],
      youtubeVideos: ['LXTDrL71A4s'],
    },
  ],
  translations: [
    {
      id: 'bbsfm',
      name: 'Kingdom Hearts Birth By Sleep Final Mix (PSP) - Spanish Translation',
      shortDescription:
        "Spanish translation for Birth by Sleep Final Mix's PSP version, including menus, dialogues, and in-game text.",
      downloadUrl: 'https://mega.nz/folder/LMlQ0ZYa#DQYsHk4h48xaqS7q_vpBbA',
      images: [
        '/images/translations/khbbsfmspanish-1.jpg',
        '/images/translations/khbbsfmspanish-2.jpg',
        '/images/translations/khbbsfmspanish-3.jpg',
      ],
      youtubeVideos: ['9zZ1bo90yYI'],
      description: '',
      features: [
        'Almost complete translation of all dialogues',
        'Translated menus and interfaces',
        "Compatible with PSP's exclusive multiplayer mode",
      ],
      downloadInfo: {
        version: '1.0',
        size: '1 GB',
        requirements: 'Kingdom Hearts Birth by Sleep Final Mix (PSP)',
        installation: [
          'Extract UMDGen, and open the original ISO file of the game with it',
          'Replace DAT files with the ones included in the translation patch',
          'Save the modified ISO file and use it with a compatible emulator or on a modded PSP/PSVita',
        ],
      },
      changelog: [
        {
          version: '1.0',
          date: '2016-08-26',
          changes: ['Official release'],
        },
      ],
    },
    {
      id: 'drakengard3',
      name: 'Drakengard 3 - Spanish Translation (WIP)',
      shortDescription:
        'Full Spanish translation of the exclusive JRPG for the PlayStation 3, Drakengard 3.',
      downloadUrl: 'TO-DO',
      images: [
        '/images/translations/drakengard3-1.jpg',
        '/images/translations/drakengard3-2.jpg',
        '/images/translations/drakengard3-3.jpg',
        '/images/translations/drakengard3-4.jpg',
      ],
      description: '',
      features: [
        'Translation faithful to the USA localization.',
        'Support for latest version and DLCs.',
      ],
      downloadInfo: {
        version: '1.0.0',
        size: '1 GB',
        requirements: 'RPCS3 Emulator or CFW PS3',
        installation: ['Install the PKG file', 'Apply the translation patch'],
      },
    },
  ],
  mods: [
    {
      id: 'kh2-spanish-mix',
      name: 'KINGDOM HEARTS 2: Spanish Mix - Voices in Castilian',
      shortDescription: 'Mod that includes Castilian Spanish voices for Kingdom Hearts 2.',
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/31',
      images: ['/images/mods/kh2spanishmix-1.jpg'],
      youtubeVideos: ['q1P7gPPuFH0'],
      description: '',
      features: [
        'Full dubbing in Castilian Spanish',
        'Resubbed cutscenes to go along with the Spanish voices',
        'Compatible with all versions',
      ],
      downloadInfo: {
        version: '1.3',
        size: '2.8 GB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: [
          'Use OpenKH Mod Manager',
          'Install the mod "TheSoraHD/KH2SpanishMix"',
          'Build only, then play!',
        ],
      },
      changelog: [
        {
          version: '1.3',
          date: '2024-05-23',
          changes: ['Bug fixes'],
        },
        {
          version: '1.2',
          date: '2022-05-27',
          changes: [
            'Mod compatibility with other mods improved',
            'More FM-exclusive cutscenes dubbed',
          ],
        },
        {
          version: '1.1',
          date: '2021-09-26',
          changes: ['Roxas boss fight fully dubbed'],
        },
        {
          version: '1.0',
          date: '2021-06-27',
          changes: ['Fully dubbed gameplay'],
        },
        {
          version: '0.95',
          date: '2021-06-02',
          changes: ['Fully dubbed cutscenes'],
        },
        {
          version: '0.9',
          date: '2021-05-29',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'kh2-sephiroth',
      name: "KINGDOM HEARTS 2: Sephiroth's Absent Silhouette",
      shortDescription:
        "Makes secret boss Sephiroth refightable in Kingdom Hearts 2. This is an enhanced port of CrazyCatz00's mod, which was originally created for the PS2 version of the game and has been updated for the HD Collection.",
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/87',
      images: [
        '/images/mods/sephirothas-1.jpg',
        '/images/mods/sephirothas-2.jpg',
        '/images/mods/sephirothas-3.jpg',
      ],
      // youtubeVideos: [],
      description: '',
      features: [
        'Refightable Sephiroth boss fight',
        'Enhanced graphics and effects',
        'Compatible with every language',
      ],
      downloadInfo: {
        version: '2.0',
        size: '7.3 MB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: [
          'Use OpenKH Mod Manager',
          'Install the mod "TheSoraHD/KH2SephirothAS"',
          'Build only, then play!',
        ],
      },
      changelog: [
        {
          version: '2.0',
          date: '2022-06-15',
          changes: ['100% compatible with KH Re:Fined'],
        },
        {
          version: '1.0',
          date: '2022-03-27',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'kh2-xemnas',
      name: 'KINGDOM HEARTS 2: Xemnas Deleted Quotes',
      shortDescription:
        "Adds deleted Xemnas dialogues to the original game. This is a direct port of 13th Vessel's Xemnas unused quotes mod for the PS2 version.",
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/96',
      images: ['/images/mods/xemnasquotes-1.jpg'],
      youtubeVideos: ['cBhjAdvNwUg'],
      // description: '',
      features: [],
      downloadInfo: {
        version: '1.0',
        size: '168 KB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: [
          'Use OpenKH Mod Manager',
          'Install the mod "TheSoraHD/XemnasDeletedQuotes"',
          'Build only, then play!',
        ],
      },
      changelog: [
        {
          version: '1.0',
          date: '2022-03-27',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'crisis-core-voices',
      name: "Restore Crisis Core's PSP Original Voices",
      shortDescription: 'Restores the original PSP voices in Crisis Core Reunion.',
      downloadUrl: 'https://www.nexusmods.com/crisiscoreff7reunion/mods/15',
      images: ['/images/mods/crisiscore-1.jpg'],
      description: '',
      features: [
        '99% in-game cutscenes voices that existed previously in the PSP version!',
        'Compatible only with the latest version of the game.',
      ],
      downloadInfo: {
        version: '0.2',
        size: '587.8 MB',
        requirements: 'Crisis Core: Final Fantasy VII Reunion (PC)',
        installation: [
          'Create a ~mods folder in the game directory',
          'Extract the mod files into the ~mods folder',
          'Go to Steam, Right-Click the game, Properties. Now, in General -> Additional Parameters, write -fileopenlog',
        ],
      },
      changelog: [
        {
          version: '0.2',
          date: '2022-12-31',
          changes: [
            "Fixed Issue where after a cutscene in Chapter 2, there wouldn't be any voices for the majority of the game.",
            "Fixed Crashes (like when talking to Angeal's Mother).",
            'Fixed Fast Cutscenes with no sound.',
            'Existing Save Games now work.',
          ],
        },
        {
          version: '0.1',
          date: '2022-12-05',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'bbsfm-analog',
      name: "Birth By Sleep Final Mix's Free Camera (Emulator)",
      shortDescription:
        'Adds support for a second analog stick in PPSSPP emulator. Original work by TheOfficialFloW, who made the original patch for Adrenaline (PSP emulator on PSVita).',
      downloadUrl: 'https://mega.nz/file/idV0SD5b#lZ15ozM282sgokA66Aq8TwlKRGIZHvEGlQUcLHZ0W-4',
      images: ['/images/mods/bbsfm-camera-1.jpg'],
      // youtubeVideos: [],
      // description: '',
      features: [],
      downloadInfo: {
        version: '1.0',
        size: '3 KB',
        requirements: 'PPSSPP 1.11 or later',
        installation: [
          'Copy memstick folder to your PPSSPP folder, say overwrite if prompted.',
          'Inside the emulator, go to Settings -> Controls -> Control mapping, configure your pad: RightAn.*',
        ],
      },
      changelog: [
        {
          version: '1.0',
          date: '2022-08-19',
          changes: ['First version released'],
        },
      ],
    },
  ],
  tools: [
    {
      id: 'hcareplace',
      name: 'HCAreplace',
      shortDescription:
        'Tool to replace HCA audio within .awb/.uasset files. Created to restore the original English dub in Crisis Core Reunion.',
      downloadUrl: 'https://github.com/TheSoraHD/HCAreplace/',
      images: ['/images/mods/crisiscore-1.jpg'],
      description: '',
      features: [
        'Convert .wav files to HCA format',
        'Replace HCA audio in .awb/.uasset files',
        'Command-line interface',
      ],
      changelog: [
        {
          version: '0.1',
          date: '2022-12-05',
          changes: ['First version released'],
        },
      ],
    },
  ],
}
