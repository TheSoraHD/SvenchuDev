// data/portfolio.js
export const sectionsData = {
  games: {
    pc: [
      {
        id: 'kh-tears',
        name: {
          en: 'Kingdom Hearts Tears',
          es: 'Kingdom Hearts Tears',
        },
        shortDescription: {
          en: 'Fan-made reimagining of Day 357 from Kingdom Hearts 358/2 Days, powered by Unreal Engine 5. This game aims to offers a new way to experience this pivotal moment in the story.',
          es: 'Reimaginación fan del Día 357 de Kingdom Hearts 358/2 Days, impulsada por Unreal Engine 5. Este juego propone una nueva forma de vivir este momento clave de la historia.',
        },
        downloadUrl: 'TO-DO',
        images: [
          '/images/games/kh_tears-1.jpg',
          '/images/games/kh_tears-2.jpg',
          '/images/games/kh_tears-3.jpg',
          '/images/games/kh_tears-4.jpg',
        ],
        // youtubeVideos: [],
        description: {
          en: '<p>In September 2017, after watching talented fans spend months unsuccessfully attempting to remake a behemoth like <em>Kingdom Hearts 358/2 Days</em> for modern platforms, I began working alone on programming the core systems that, to me, define what a Kingdom Hearts game is:</p><ul>  <li>Its combat system, including abilities, combos, levelling up, and movement.</li>  <li>A system for grabbing onto building ledges.</li>  <li>Interactions with enemies and environmental elements.</li>  <li>A dialogue system with flags.</li>  <li>The menus, including the command menu, main menu, and contextual pause menus.</li>  <li>Pre-rendered cutscenes and their integration into the game.</li>  <li>Recreating assets exclusive to 358/2 Days, such as the boss Xion.</li></ul><p>While my objective was to remake only the most important event in the game — the final fights against your friend Xion — it was proving to be an immense task for a single person. And so, Keytotruth, 13th Vessel and I continued to work together for another five years, convinced the game could achieve exceptional results. During that time, we made huge strides in filling the gaps in the core content and refined every aspect to make the most of the systems we had built.</p><p>Alongside the programming work and reverse engineering of other official titles in the series, and coordinating with my colleagues, I also contacted with artists and translators from around the world. Finally, we collaborated with the team at Ecos del Doblaje to produce a full Spanish dub for our game.</p><p>From one fan to another, I present my magnum opus to date. I hope you enjoy it as much as we enjoyed making it.</p>',
          es: '<p>En septiembre de 2017, tras ver cómo fans con talento llevaban meses intentando sin éxito rehacer un juego tan colosal como <em>Kingdom Hearts 358/2 Days</em> para plataformas modernas, comencé a trabajar en solitario programando los sistemas fundamentales que, para mí, definen lo que es un juego de Kingdom Hearts:</p><ul>  <li>Su sistema de combate, incluyendo habilidades, combos, subidas de nivel y movimiento.</li>  <li>Un sistema para agarrarse a las cornisas de los edificios.</li>  <li>Interacciones con enemigos y elementos del entorno.</li>  <li>Un sistema de diálogos con flags.</li>  <li>Los menús, incluido el menú de comandos, el menú principal y los menús de pausa contextuales.</li>  <li>Cinemáticas prerenderizadas y su integración en el juego.</li>  <li>Recreación de assets exclusivos de 358/2 Days, como la jefa Xion.</li></ul><p>Aunque mi objetivo era rehacer únicamente el evento más importante del juego —los combates finales contra tu amiga Xion—, resultó ser una tarea inmensa para una sola persona. Así que Keytotruth, 13th Vessel y yo continuamos trabajando juntos durante otros cinco años, convencidos de que el juego podía alcanzar resultados excepcionales. Durante ese tiempo, dimos grandes pasos para completar el contenido principal y refinamos cada aspecto para sacar el máximo partido a los sistemas que habíamos construido.</p><p>Junto al trabajo de programación e ingeniería inversa de otros títulos oficiales de la saga, y la coordinación con mis compañeros, también contacté con artistas y traductores de todo el mundo. Finalmente, colaboramos con el equipo de Ecos del Doblaje para producir un doblaje completo al español para nuestro juego.</p><p>De fan a fan, presento mi magnum opus hasta la fecha. Espero que lo disfrutéis tanto como nosotros disfrutamos haciéndolo.</p>',
        },
        features: {
          en: [
            '10+ hours of playable content',
            'High-definition graphics',
            'Reimagined gameplay mechanics',
            'Translated to 10 languages',
            'Dubbed into 3 languages (English, Spanish, Japanese)',
          ],
          es: [
            'Más de 10 horas de contenido jugable',
            'Gráficos en alta definición',
            'Mecánicas de juego reimaginadas',
            'Traducido a 10 idiomas',
            'Doblado a 3 idiomas (inglés, español, japonés)',
          ],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '6.9 GB',
          requirements: 'Unreal Engine 5.6',
          installation: {
            en: ['Extract the compressed game file'],
            es: ['Extrae el archivo comprimido del juego'],
          },
        },
      },
      {
        id: 'corruption',
        name: {
          en: 'Corruption',
          es: 'Corruption',
        },
        shortDescription: {
          en: 'A "Slender-style" horror game where you must purify a city from the looming darkness.',
          es: 'Un juego de terror estilo "Slender" en el que debes purificar una ciudad de la oscuridad amenazante.',
        },
        downloadUrl: 'https://drive.google.com/file/d/1SLsC0G-UL--kHGKr6StUJARP0A5jTNk2/view',
        images: ['/images/games/corruption-1.jpg', '/images/games/corruption-2.jpg'],
        youtubeVideos: ['p95O5zlnE7U'],
        description: {
          en: '<p>Created together with Keytotruth (Team Tiniebla), this was our entry for Z-Jam 2021, themed around "City". It was a short project built in 40 hours, and the result was something we were genuinely proud of given the constraints — we didn\'t win, but we felt the work spoke for itself.</p> <p>When approaching this as a Slender-style game, the central design question was how the player would locate the "corruptions" scattered across the city. My solution, designed and fully implemented in under two hours, was a mechanic akin to the dowsing rod method: a pair of L-shaped metal rods that would cross whenever the player entered the considerable radius surrounding each corruption. From there, the remainder of the work focused on the core mechanics and polish: enemies, cutscenes, level design, balancing, effects, and a main menu with basic configuration options.</p><p>Z-Jam is an initiative organised by San Jorge University, the Emprender en Aragón Foundation, the Aragonese Institute for Economic Development, and the Zaragoza City of Knowledge Foundation. It is coordinated by Miguel Vallés, a video game developer from Aragon.</p>',
          es: '<p>Creado junto a Keytotruth (Team Tiniebla), fue nuestra propuesta para la Z-Jam 2021, cuyo tema era "Ciudad". Fue un proyecto corto construido en 40 horas, y el resultado fue algo de lo que nos sentimos genuinamente orgullosos teniendo en cuenta las limitaciones —no ganamos, pero sentimos que el trabajo hablaba por sí solo.</p> <p>Al plantearlo como un juego al estilo Slender, la pregunta central de diseño era cómo el jugador localizaría las "corrupciones" repartidas por la ciudad. Mi solución, diseñada e implementada por completo en menos de dos horas, fue una mecánica similar al método de la varilla de zahorí: un par de varillas metálicas en forma de L que se cruzarían cuando el jugador entrase en el considerable radio que rodea cada corrupción. A partir de ahí, el resto del trabajo se centró en las mecánicas principales y el pulido: enemigos, cinemáticas, diseño de niveles, equilibrado, efectos y un menú principal con opciones básicas de configuración.</p><p>La Z-Jam es una iniciativa organizada por la Universidad San Jorge, la Fundación Emprender en Aragón, el Instituto Aragonés de Fomento y la Fundación Zaragoza Ciudad del Conocimiento. Está coordinada por Miguel Vallés, un desarrollador de videojuegos aragonés.</p>',
        },
        features: {
          en: [
            'Single-player horror experience',
            'Short duration',
            'Map changes based on player actions',
          ],
          es: [
            'Experiencia de terror en solitario',
            'Duración corta',
            'El mapa cambia según las acciones del jugador',
          ],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: {
            en: ['Extract the compressed game file'],
            es: ['Extrae el archivo comprimido del juego'],
          },
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2021-04-11',
            changes: {
              en: ['Official release'],
              es: ['Lanzamiento oficial'],
            },
          },
        ],
      },
      {
        id: 'flamboyant',
        name: {
          en: 'Flamboyant',
          es: 'Flamboyant',
        },
        shortDescription: {
          en: '"Bullet hell" 3D minigame featuring a vibrant aesthetic and unique shooting mechanics.',
          es: 'Minijuego 3D de "bullet hell" con una estética vibrante y mecánicas de disparo únicas.',
        },
        downloadUrl: 'https://drive.google.com/file/d/1S5qwNlVKk4UJKf8vDl9PZieQVaFhRRsp/view',
        images: ['/images/games/flamboyant-1.jpg', '/images/games/flamboyant-2.jpg'],
        // youtubeVideos: [],
        description: {
          en: '<p>A 3D bullet hell minigame built in Unity, featuring a vibrant aesthetic and unique shooting mechanics. It was made in four days for an Advanced Course in Video Game Development with Unity 3D at UPC FIB.</p><p>Beyond learning the Unity engine itself, the course placed a strong emphasis on applying SOLID principles to game development — a valuable and eye-opening exercise. The project also gave me the opportunity to build something I had long wanted to create: a space shooter in the spirit of Ikaruga, the acclaimed game by Treasure.</p>',
          es: '<p>Un minijuego de bullet hell en 3D desarrollado con Unity, con una estética vibrante y mecánicas de disparo únicas. Fue creado en cuatro días para un Curso Avanzado de Desarrollo de Videojuegos con Unity 3D en la UPC FIB.</p><p>Más allá del aprendizaje del propio motor Unity, el curso ponía un énfasis especial en aplicar los principios SOLID al desarrollo de videojuegos —un ejercicio valioso y revelador. El proyecto también me brindó la oportunidad de crear algo que llevaba tiempo queriendo hacer: un juego de disparos espacial al estilo de Ikaruga, el aclamado juego de Treasure.</p>',
        },
        features: {
          en: [
            'Color changing mechanics',
            'Vibrant visual style',
            'Short and intense gameplay',
          ],
          es: [
            'Mecánicas de cambio de color',
            'Estilo visual vibrante',
            'Jugabilidad corta e intensa',
          ],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '576 MB',
          requirements: 'Unity Engine 2022.3.3f1',
          installation: {
            en: ['Extract the compressed game file'],
            es: ['Extrae el archivo comprimido del juego'],
          },
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2023-07-07',
            changes: {
              en: ['Official release'],
              es: ['Lanzamiento oficial'],
            },
          },
        ],
      },
      {
        id: 'bizarreskies3d',
        name: {
          en: 'Bizarre Skies',
          es: 'Bizarre Skies',
        },
        shortDescription: {
          en: "Rolling Sky clone game, with JoJo's Bizarre Adventures theme.",
          es: "Clon del juego Rolling Sky con temática de JoJo's Bizarre Adventure.",
        },
        downloadUrl: 'https://drive.google.com/file/d/1tHPl-hVR8-TCa_OmsNOn675VE6rChssT/view',
        images: ['/images/games/bizarreskies-1.jpg', '/images/games/bizarreskies-2.jpg'],
        youtubeVideos: ['OHOoz5rjCn0'],
        description: {
          en: "<p>Developed as the final major project for the Video Games course at FIB (UPC) in November 2019, Bizarre Skies is a <em>Rolling Sky</em>-style obstacle avoidance game built in Unreal Engine over the course of one month — including the written report.</p><p>The game features three levels with a distinct visual identity: a retro aesthetic with strongly differentiated colour palettes per level, all set to Eurobeat-infused <em>JoJo's Bizarre Adventure</em> music. Each level was designed to feel like its own world while remaining cohesive as a whole.</p><p>As lead developer, I was responsible for the programming and technical direction of the project: I implemented the functionality of all gameplay elements and menus, defined the artistic vision, and introduced my partner Joel Alarcón to Unreal Engine throughout the process. We used GitHub for version control, while Joel handled level design and asset creation in Voxel3D.</p>",
          es: "<p>Desarrollado como proyecto principal final para la asignatura de Videojuegos de FIB (UPC) en noviembre de 2019, Bizarre Skies es un juego de esquivar obstáculos al estilo <em>Rolling Sky</em> construido en Unreal Engine a lo largo de un mes —incluyendo la memoria escrita.</p><p>El juego cuenta con tres niveles con una identidad visual propia: una estética retro con paletas de colores claramente diferenciadas por nivel, todo acompañado de música de <em>JoJo's Bizarre Adventure</em> con toques de Eurobeat. Cada nivel fue diseñado para sentirse como un mundo propio, manteniendo la coherencia del conjunto.</p><p>Como desarrollador principal, fui responsable de la programación y la dirección técnica del proyecto: implementé la funcionalidad de todos los elementos de juego y menús, definí la visión artística e introduje a mi compañero Joel Alarcón en Unreal Engine durante el proceso. Usamos GitHub para el control de versiones, mientras que Joel se encargó del diseño de niveles y la creación de assets en Voxel3D.</p>",
        },
        features: {
          en: ['Colorful levels', 'Rhythm-based gameplay', 'Multiple difficulty levels'],
          es: ['Niveles coloridos', 'Jugabilidad basada en el ritmo', 'Múltiples niveles de dificultad'],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '256 MB',
          requirements: 'Unreal Engine 4.23',
          installation: {
            en: ['Extract the compressed game file'],
            es: ['Extrae el archivo comprimido del juego'],
          },
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2019-12-18',
            changes: {
              en: ['Official release'],
              es: ['Lanzamiento oficial'],
            },
          },
        ],
      },
      {
        id: 'contra2d',
        name: {
          en: 'Rambo (Contra NES clone)',
          es: 'Rambo (Contra NES clone)',
        },
        shortDescription: {
          en: 'A 2D reimagining of the classic action game Contra.',
          es: 'Una reimaginación 2D del clásico juego de acción Contra.',
        },
        downloadUrl: 'https://drive.google.com/file/d/1VSCMri7Gh7eXLOywHeh7L4ahy8PpnHTC/view',
        images: ['/images/games/contra-1.jpg', '/images/games/contra-2.jpg'],
        youtubeVideos: ['x99bPYrfr3s'],
        description: {
          en: '<p>The first of two projects developed for the Video Games course at FIB (UPC), Contra2D is a semi-faithful 2D recreation of the original NES <em>Contra</em>, built from scratch in C++ with a custom OpenGL engine over the course of one month in October 2019.</p><p>The game recreates three levels from the original: the classic side-scrolling platformer stage, a simplified take on the bottom-to-top shooting gallery where clearing all on-screen enemies advances the player, and a climactic boss fight against the alien brain — reimagined as a three-phase bullet hell encounter with no tentacles, each phase visually and mechanically distinct. The game ends after the boss is defeated.</p><p>One original addition is a time-stop mechanic, usable once per level. Activating it triggers the iconic <em>Za Warudo</em> voice clip; when time resumes, <em>Omae wa mou shindeiru</em> plays — and during that entire quote, everything is frozen, player included. The original <em>Contra</em> soundtrack accompanies the game throughout.</p><p>My partner Joel Alarcón and I divided responsibilities clearly: I handled the engine architecture, level design (recreated tile by tile from the original), asset preparation, boss AI, music integration, and general polish, while Joel implemented the standard enemy behaviour and weapon types.</p>',
          es: '<p>El primero de dos proyectos desarrollados para la asignatura de Videojuegos de FIB (UPC), Contra2D es una recreación 2D semifiel del <em>Contra</em> original de NES, construida desde cero en C++ con un motor OpenGL propio a lo largo de un mes en octubre de 2019.</p><p>El juego recrea tres niveles del original: el clásico nivel de plataformas con scroll lateral, una versión simplificada de la galería de tiro de abajo a arriba donde eliminar todos los enemigos en pantalla hace avanzar al jugador, y un combate final contra el cerebro alienígena —reimaginado como un bullet hell de tres fases sin tentáculos, cada fase visualmente y mecánicamente distinta. El juego termina cuando el jefe es derrotado.</p><p>Una adición original es una mecánica de detención del tiempo, utilizable una vez por nivel. Al activarla suena el icónico clip de voz de <em>Za Warudo</em>; cuando el tiempo se reanuda, suena <em>Omae wa mou shindeiru</em> —y durante toda esa frase, todo queda congelado, incluido el jugador. La banda sonora original de <em>Contra</em> acompaña el juego en todo momento.</p><p>Mi compañero Joel Alarcón y yo dividimos claramente las responsabilidades: yo me encargué de la arquitectura del motor, el diseño de niveles (recreado tile a tile del original), la preparación de assets, la IA del jefe, la integración de la música y el pulido general, mientras que Joel implementó el comportamiento de los enemigos estándar y los tipos de armas.</p>',
        },
        features: {
          en: [
            'Time-stopping mechanics',
            'Recreation of classic Contra levels',
            'Bullet hell boss fight',
          ],
          es: [
            'Mecánicas de detención del tiempo',
            'Recreación de los niveles clásicos de Contra',
            'Combate final de bullet hell',
          ],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '39.5 MB',
          requirements: 'Custom 2D engine, using C++ and OpenGL',
          installation: {
            en: ['Extract the compressed game file'],
            es: ['Extrae el archivo comprimido del juego'],
          },
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2019-10-29',
            changes: {
              en: ['Official release'],
              es: ['Lanzamiento oficial'],
            },
          },
        ],
      },
      {
        id: 'delusion',
        name: {
          en: 'Delusion',
          es: 'Delusion',
        },
        shortDescription: {
          en: 'Psychological horror game that challenges the perception of reality.',
          es: 'Juego de terror psicológico que desafía la percepción de la realidad.',
        },
        downloadUrl:
          'https://drive.google.com/file/d/1C6Htc72cG1TRtywTYZmgmyGYnZ_V_ZP0/view?usp=sharing',
        images: ['/images/games/delusion-1.jpg', '/images/games/delusion-2.jpg'],
        youtubeVideos: ['A2iSPnM1gHs'],
        description: {
          en: '<p>Delusion was my <em>Treball de Recerca</em> — the capstone research project of the Catalan pre-university curriculum — and my first serious attempt at building a 3D game entirely on my own. The project spanned a full year, during which I enrolled in an online course at IDesigner (Escuela Online de Diseño y Desarrollo Digital), created all 3D assets from scratch, investigated and experimented with multiple game engines, and produced both a written report and a formal presentation.</p><p>Before settling on UDK (Unreal Engine 3), I explored Ogre3D and DarkGDK (DarkBasic Pro), none of which proved suitable for what I had in mind. UDK allowed me to bring the project to life as a horror exploration and puzzle-solving experience set inside a building — though it ultimately remained a tech demo rather than a fully realised game.</p><p>One highlight is an outdoor Parisian night scene modelled in 3DS Max, included not as core gameplay but as a showcase of what the engine and my assets could achieve with considered lighting. Inspired by titles such as <em>Alice: Madness Returns</em>, <em>Doom</em>, and <em>Alone in the Dark</em>, Delusion represents a year of self-directed learning compressed into a single project — and the foundation everything that came after was built on.</p>',
          es: '<p>Delusion fue mi <em>Treball de Recerca</em> —el proyecto de investigación de bachillerato del currículo preuniversitario catalán— y mi primer intento serio de crear un juego 3D completamente por mi cuenta. El proyecto abarcó un año completo, durante el cual me matriculé en un curso online en IDesigner (Escuela Online de Diseño y Desarrollo Digital), creé todos los assets 3D desde cero, investigué y experimenté con múltiples motores de juego, y elaboré tanto una memoria escrita como una presentación formal.</p><p>Antes de decantarme por UDK (Unreal Engine 3), exploré Ogre3D y DarkGDK (DarkBasic Pro), ninguno de los cuales resultó adecuado para lo que tenía en mente. UDK me permitió dar vida al proyecto como una experiencia de exploración de terror y resolución de puzles ambientada en un edificio —aunque finalmente quedó más como una demo técnica que como un juego plenamente realizado.</p><p>Un punto destacado es una escena exterior parisina nocturna modelada en 3DS Max, incluida no como jugabilidad central sino como muestra de lo que el motor y mis assets podían lograr con una iluminación cuidada. Inspirado por títulos como <em>Alice: Madness Returns</em>, <em>Doom</em> y <em>Alone in the Dark</em>, Delusion representa un año de aprendizaje autodidacta condensado en un solo proyecto —y la base sobre la que se construyó todo lo que vino después.</p>',
        },
        features: {
          en: [
            'Short horror experience',
            'Psychological themes',
            'Dynamic environment changes',
          ],
          es: [
            'Experiencia de terror corta',
            'Temáticas psicológicas',
            'Cambios dinámicos en el entorno',
          ],
        },
        downloadInfo: {
          version: '0.15 (Still a Prototype)',
          size: '389 MB',
          requirements: 'UDK (Unreal Engine 3)',
          installation: {
            en: [
              'Extract the compressed game file.',
              "Run Binaries/UnEulaLite and accept UDK's EULA.",
              'Run the game!',
            ],
            es: [
              'Extrae el archivo comprimido del juego.',
              'Ejecuta Binaries/UnEulaLite y acepta la EULA de UDK.',
              '¡Ejecuta el juego!',
            ],
          },
        },
        changelog: [
          {
            version: '0.15 (Still a Prototype)',
            date: '2026-04-19',
            changes: {
              en: [
                'Added UnEulaLite, making it playable on modern systems',
                'Added compatibility with Ultrawide monitors',
                'Changed website',
              ],
              es: [
                'Se añadió UnEulaLite, permitiendo jugarlo en sistemas modernos',
                'Se añadió compatibilidad con monitores ultrawide',
                'Se cambió la página web',
              ],
            },
          },
          {
            version: '0.1 (Prototype)',
            date: '2014-01-12',
            changes: {
              en: ['Private release'],
              es: ['Lanzamiento privado'],
            },
          },
        ],
      },
      {
        id: 'sanic',
        name: {
          en: 'Sanic: The Zombie Game',
          es: 'Sanic: The Zombie Game',
        },
        shortDescription: {
          en: 'Zombie game that was developed using a custom-made 2D graphics engine. Kill them all before they infect everyone!',
          es: 'Juego de zombis desarrollado con un motor de gráficos 2D propio. ¡Elimínalos a todos antes de que infecten a todo el mundo!',
        },
        downloadUrl:
          'https://drive.google.com/file/d/14S5l6I_hjzYXFRn3xz-TDWlvzz3hRgKv/view?usp=sharing',
        images: ['/images/games/sanic-1.jpg', '/images/games/sanic-2.jpg'],
        //youtubeVideos: [],
        description: {
          en: "<p>Built in 2016 as a purely self-directed learning exercise, Sanic: The Zombie Game was developed by following <em>MakingGamesWithBen</em>'s Advanced C++/Graphics Tutorials — a 65-video series on advanced C++ and OpenGL — with the goal of understanding how to build and reason about a custom 2D game engine from the ground up.</p><p>The result is a top-down shooter where zombies spread instantly by contact: infected civilians turn immediately, and a single touch kills the player. The only personal touch added beyond the course material was the player character — rendered as the Sanic meme, making them instantly distinguishable from the civilians and undead filling the screen.</p><p>Straightforward in scope by design, the project was never about the game itself but about what building it taught: working directly with OpenGL, structuring an engine architecture, and developing a clearer understanding of what happens beneath the surface of higher-level tools.</p>",
          es: "<p>Desarrollado en 2016 como ejercicio de aprendizaje autodidacta, Sanic: The Zombie Game fue creado siguiendo los tutoriales avanzados de C++/Gráficos de <em>MakingGamesWithBen</em> —una serie de 65 vídeos sobre C++ avanzado y OpenGL— con el objetivo de entender cómo construir y razonar sobre un motor de juego 2D propio desde cero.</p><p>El resultado es un shooter top-down donde los zombis se propagan al instante por contacto: los civiles infectados se convierten de inmediato, y un solo toque mata al jugador. El único toque personal añadido más allá del material del curso fue el personaje del jugador —representado como el meme de Sanic, haciéndolo inmediatamente distinguible de los civiles y los no muertos que llenan la pantalla.</p><p>Sencillo en alcance por diseño, el proyecto nunca trató sobre el juego en sí, sino sobre lo que su construcción enseñó: trabajar directamente con OpenGL, estructurar una arquitectura de motor y desarrollar una comprensión más clara de lo que ocurre bajo la superficie de las herramientas de más alto nivel.</p>",
        },
        features: {
          en: ['Multiple weapons', 'Zoomable camera', 'Pathfinding AI'],
          es: ['Múltiples armas', 'Cámara con zoom', 'IA con pathfinding'],
        },
        downloadInfo: {
          version: '0.1',
          size: '6.74 MB',
          requirements: 'Custom C++/OpenGL Engine',
          installation: {
            en: ['Extract the file'],
            es: ['Extrae el archivo'],
          },
        },
        changelog: [
          {
            version: '0.1',
            date: '2016-08-05',
            changes: {
              en: ['Release'],
              es: ['Lanzamiento'],
            },
          },
        ],
      },
    ],
    gba: [
      {
        id: 'magicalpopn',
        name: {
          en: "Magical Pop'n GBA",
          es: "Magical Pop'n GBA",
        },
        shortDescription: {
          en: "A homebrew action-platformer for the Game Boy Advance, inspired by the original Magical Pop'n for SNES. It features a single boss fight, and an ending sequence.",
          es: "Un juego homebrew de acción y plataformas para Game Boy Advance, inspirado en el Magical Pop'n original de SNES. Incluye un combate contra un jefe y una secuencia final.",
        },
        downloadUrl:
          'https://drive.google.com/file/d/0B6QBHHAkKtjtZ2M1ZWdrTHdnaW8/view?resourcekey=0-uXezMaENQ9zCHtd4ROIjFw',
        images: [
          '/images/games/magicalpopn-1.jpg',
          '/images/games/magicalpopn-2.jpg',
          '/images/games/magicalpopn-3.jpg',
          '/images/games/magicalpopn-4.jpg',
        ],
        // youtubeVideos: [],
        description: {
          en: "<p>A solo homebrew action-platformer for the Game Boy Advance, built as a love letter to <em>Magical Pop'n</em> — a criminally underappreciated 1995 SNES action-platformer that deserved far more attention than it received.</p><p>The game was written in C using DevkitARM and ToncLib, working directly against the GBA hardware. The entire process took six days: four spent studying the architecture through VGAFIB's GBA programming course, one reverse engineering the original game's movement to recreate it faithfully, and one writing the game's code itself.</p><p>The result is a single boss fight followed by an ending sequence. The boss — a fire mage — has no fixed phases in the traditional sense; instead, as his health drops, he and his attacks grow progressively faster and more aggressive, turning what begins as a measured encounter into a frantic bullet hell by the end.</p><p>All assets were prepared from scratch to fit within the GBA's tight hardware constraints: a 240×160 screen, tile-based rendering, and strict palette limitations.</p>",
          es: "<p>Un juego homebrew de acción y plataformas para Game Boy Advance hecho en solitario, creado como homenaje a <em>Magical Pop'n</em> —un juego de acción y plataformas de 1995 para SNES criminalmente infravalorado que mereció mucha más atención de la que recibió.</p><p>El juego fue escrito en C usando DevkitARM y ToncLib, trabajando directamente contra el hardware de la GBA. Todo el proceso llevó seis días: cuatro estudiando la arquitectura a través del curso de programación para GBA de VGAFIB, uno haciendo ingeniería inversa del movimiento del juego original para recrearlo fielmente, y uno escribiendo el código del juego en sí.</p><p>El resultado es un combate contra un jefe seguido de una secuencia final. El jefe —un mago del fuego— no tiene fases fijas en el sentido tradicional; en cambio, a medida que pierde vida, él y sus ataques se vuelven progresivamente más rápidos y agresivos, convirtiendo lo que empieza como un enfrentamiento pausado en un frenético bullet hell hacia el final.</p><p>Todos los assets fueron preparados desde cero para encajar dentro de las estrictas limitaciones del hardware de la GBA: una pantalla de 240×160, renderizado por tiles y limitaciones estrictas de paleta.</p>",
        },
        features: {
          en: ['Action-platformer gameplay', 'Colorful graphics', 'Boss fights'],
          es: ['Jugabilidad de acción y plataformas', 'Gráficos coloridos', 'Combates contra jefes'],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '359 KB',
          requirements: 'GBA Flashcart / Emulator',
          installation: {
            en: ['Play the ROM'],
            es: ['Juega la ROM'],
          },
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2017-02-03',
            changes: {
              en: ['Official release'],
              es: ['Lanzamiento oficial'],
            },
          },
        ],
      },
    ],
    nds: [
      {
        id: 'chesscount',
        name: {
          en: 'ChessCount',
          es: 'ChessCount',
        },
        shortDescription: {
          en: 'A chess clock homebrew made for the Nintendo DS.',
          es: 'Un reloj de ajedrez homebrew para Nintendo DS.',
        },
        images: ['/images/games/chesscount-1.jpg', '/images/games/chesscount-2.jpg'],
        // youtubeVideos: [],
        description: {
          en: '<p>Built in 2012 at the age of 15, ChessCount is a homebrew chess clock for the Nintendo DS — written in C using PALib and with hand-drawn textures made in GIMP.</p><p>The motivation was entirely practical: a friend had a flashcard, we played chess together regularly, and neither of us could afford a real chess clock. So I made one. The app supports customizable time settings and mid-game pausing, covering everything we actually needed at the board.</p><p>It is one of the earliest projects in this portfolio, and the first one I was really proud of.</p>',
          es: '<p>Desarrollado en 2012 a los 15 años, ChessCount es un reloj de ajedrez homebrew para Nintendo DS —escrito en C usando PALib y con texturas dibujadas a mano en GIMP.</p><p>La motivación fue completamente práctica: un amigo tenía una flashcard, jugábamos al ajedrez juntos con regularidad y ninguno de los dos podía permitirse un reloj de ajedrez de verdad. Así que hice uno. La aplicación permite configurar el tiempo y pausar la partida a mitad de juego, cubriendo todo lo que realmente necesitábamos en el tablero.</p><p>Es uno de los proyectos más antiguos de este portfolio, y el primero del que me sentí realmente orgulloso.</p>',
        },
        features: {
          en: [
            "Use the buttons closer to the player's hands to control the clock.",
            'Customizable time settings',
            'Simple and intuitive interface',
          ],
          es: [
            'Usa los botones más cercanos a las manos del jugador para controlar el reloj.',
            'Ajustes de tiempo personalizables',
            'Interfaz simple e intuitiva',
          ],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2012-04-12',
            changes: {
              en: ['Private release.', 'If you would like it to be public, please let me know!'],
              es: ['Lanzamiento privado.', '¡Si quieres que sea público, házmelo saber!'],
            },
          },
        ],
      },
      {
        id: 'spaceinvadersds',
        name: {
          en: 'Space Invaders DS',
          es: 'Space Invaders DS',
        },
        shortDescription: {
          en: 'An attempt to reimagine the classic game Space Invaders on the Nintendo DS.',
          es: 'Un intento de reimaginar el clásico juego Space Invaders en Nintendo DS.',
        },
        downloadUrl: '',
        images: [
          '/images/games/spaceinvadersds-1.jpg',
          '/images/games/spaceinvadersds-2.jpg',
          '/images/games/spaceinvadersds-3.jpg',
        ],
        // youtubeVideos: [],
        description: {
          en: "<p>Made in August 2011, Space Invaders DS was the next step in a deliberate effort to incrementally tackle more complex projects on the Nintendo DS using PALib. Fresh off the success of PongDS, the ambition was to recreate the classic arcade game — with plans to introduce new enemy types beyond the originals.</p><p>Neither goal was reached. The new enemies never made it in, and the game never reached a playable state. It was a reminder that complexity has a way of humbling you just when you think you've found your footing — a lesson ChessCount would answer a few months later.</p>",
          es: "<p>Desarrollado en agosto de 2011, Space Invaders DS fue el siguiente paso en un esfuerzo deliberado por abordar proyectos progresivamente más complejos en Nintendo DS usando PALib. Tras el éxito de PongDS, la ambición era recrear el clásico juego arcade —con planes de introducir nuevos tipos de enemigos más allá de los originales.</p><p>Ninguno de los dos objetivos se alcanzó. Los nuevos enemigos nunca llegaron a implementarse, y el juego nunca alcanzó un estado jugable. Fue un recordatorio de que la complejidad tiene una forma de humillarte justo cuando crees que has encontrado tu ritmo —una lección a la que ChessCount respondería unos meses después.</p>",
        },
        features: {
          en: [],
          es: [],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2011/08/23',
            changes: {
              en: [
                'Non-functional ROM.',
                'If you would like it to be properly made, please let me know!',
              ],
              es: [
                'ROM no funcional.',
                '¡Si quieres que se haga correctamente, házmelo saber!',
              ],
            },
          },
        ],
      },
      {
        id: 'pongds',
        name: {
          en: 'PongDS',
          es: 'PongDS',
        },
        shortDescription: {
          en: 'Classic Pong game for the Nintendo DS, featuring simple controls and multiplayer on the same device.',
          es: 'Juego clásico de Pong para Nintendo DS con controles sencillos y multijugador en el mismo dispositivo.',
        },
        downloadUrl:
          'https://drive.google.com/file/d/1GGeeQkHAca299yCgXe4PBoLH7horNGVP/view?usp=sharing',
        images: ['/images/games/pongds-1.jpg', '/images/games/pongds-2.jpg'],
        // youtubeVideos: [],
        description: {
          en: '<p>Made at the age of 15, PongDS was a direct response to the lessons of <em>AvalancheDS</em>: start small, get it working, then grow. Rather than attempting another port, I chose the most manageable scope I could think of — and for the first time, delivered something fully playable.</p><p>The game is a two-player Pong clone on a single DS, with Player 1 using Up and Down on the D-pad and Player 2 using X and B. It tracks both the high score and the total number of hits across a session.</p><p>Modest in ambition by design, it was the project that taught me the value of finishing something.</p>',
          es: '<p>Desarrollado a los 15 años, PongDS fue una respuesta directa a las lecciones de <em>AvalancheDS</em>: empieza pequeño, haz que funcione, luego crece. En lugar de intentar otro port, elegí el alcance más manejable que se me ocurrió —y por primera vez, entregué algo completamente jugable.</p><p>El juego es un clon de Pong para dos jugadores en una sola DS, donde el Jugador 1 usa Arriba y Abajo en el D-pad y el Jugador 2 usa X y B. Registra tanto la puntuación máxima como el número total de golpes durante una sesión.</p><p>Modesto en ambición por diseño, fue el proyecto que me enseñó el valor de terminar algo.</p>',
        },
        features: {
          en: ['Track high scores', 'Multiplayer on the same device'],
          es: ['Registra las puntuaciones máximas', 'Multijugador en el mismo dispositivo'],
        },
        downloadInfo: {
          version: '1.0.0',
          size: '174 KB',
          requirements: 'NDS Flashcart / Emulator',
          installation: {
            en: ['Play the ROM'],
            es: ['Juega la ROM'],
          },
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2011-10-03',
            changes: {
              en: ['Official release'],
              es: ['Lanzamiento oficial'],
            },
          },
        ],
      },
      {
        id: 'avalancheds',
        name: {
          en: 'AvalancheDS',
          es: 'AvalancheDS',
        },
        shortDescription: {
          en: 'An attempt to port of the flash game Avalanche for the Nintendo DS.',
          es: 'Un intento de portar el juego flash Avalanche para Nintendo DS.',
        },
        images: ['/images/games/avalancheds-1.jpg'],
        // youtubeVideos: [],
        description: {
          en: "<p>Written at the age of 14, AvalancheDS was an attempt to port the Flash game <em>Avalanche</em> to the Nintendo DS using PALib — one of the earliest things I ever built, and an honest reflection of where I was as a programmer at the time.</p><p><em>Avalanche</em> is a survival game where you jump over falling blocks while escaping rising red water, climbing as high as possible to beat your record. One of its most satisfying mechanics was using the sides of falling blocks to slow your descent and chain an extra jump in midair — the kind of thing that made it endlessly replayable in the Flash era.</p><p>The port never reached a playable state. The falling blocks were never correctly spawned, though I did manage to get an intro sequence, interactive menu buttons, and a semi-functional player with movement, jumping, and screen-wrapping. Given that the entire codebase lived inside a single <em>main</em> function — a sign of someone who hadn't yet encountered the fundamentals of C — it is perhaps impressive that it got as far as it did.</p><p>One day, time permitting, I would like to revisit this with the tools and knowledge I have now, and finally get it to a fully playable state.</p>",
          es: "<p>Escrito a los 14 años, AvalancheDS fue un intento de portar el juego Flash <em>Avalanche</em> a Nintendo DS usando PALib —una de las primeras cosas que jamás construí, y un reflejo honesto de dónde estaba como programador en aquel momento.</p><p><em>Avalanche</em> es un juego de supervivencia donde saltas sobre bloques que caen mientras escapas del agua roja que sube, escalando todo lo alto posible para batir tu récord. Una de sus mecánicas más satisfactorias era usar los lados de los bloques que caen para frenar el descenso y encadenar un salto extra en el aire —el tipo de cosa que lo hacía infinitamente rejugable en la era Flash.</p><p>El port nunca llegó a un estado jugable. Los bloques que caen nunca se generaron correctamente, aunque sí logré crear una secuencia de introducción, botones de menú interactivos y un jugador semifuncional con movimiento, salto y rebote en los bordes de la pantalla. Dado que todo el código vivía dentro de una única función <em>main</em> —señal de alguien que aún no había conocido los fundamentos de C—, quizás es impresionante que llegara tan lejos.</p><p>Algún día, si el tiempo lo permite, me gustaría revisitar esto con las herramientas y el conocimiento que tengo ahora, y por fin llevarlo a un estado completamente jugable.</p>",
        },
        features: {
          en: [],
          es: [],
        },
        changelog: [
          {
            version: '0',
            date: '2011-03-02',
            changes: {
              en: [
                'Non-functional ROM.',
                'If you would like it to be properly made, please let me know!',
              ],
              es: [
                'ROM no funcional.',
                '¡Si quieres que se haga correctamente, házmelo saber!',
              ],
            },
          },
        ],
      },
    ],
  },
  collaborations: [
    {
      id: 'kh2-rando',
      name: {
        en: 'Kingdom Hearts 2 Randomizer',
        es: 'Kingdom Hearts 2 Randomizer',
      },
      shortDescription: {
        en: 'Several improvements and fixes when playing KH2 Randomizer in Spanish (Steam/EPIC), which shuffles various game elements to create a unique experience each time.',
        es: 'Varias mejoras y correcciones al jugar al KH2 Randomizer en español (Steam/EPIC), que mezcla varios elementos del juego para crear una experiencia única cada vez.',
      },
      downloadUrl: 'https://tommadness.github.io/KH2Randomizer/setup/Panacea-ModLoader/',
      images: ['/images/collabs/kh2-rando-1.jpg'],
      // youtubeVideos: [''],
      description: {
        en: "<p>In July 2024, I contributed bug fixes and translation corrections to the <em>Kingdom Hearts II</em> Randomizer — a community tool that shuffles various game elements to create a unique experience on each run.</p><p>Spanish players on Steam and Epic were encountering untranslated strings and, more critically, a crash that occurred exclusively in the Spanish version when levelling up and receiving a new Drive Form level. After reaching out via the project's Discord, I spent three days tracking down the root cause — an overflow in the level-up text rendering — fixing it, translating the remaining untranslated elements, and testing the changes. The fix was submitted as a pull request to the main repository, followed by continuity adjustments requested by the project owner.</p>",
        es: "<p>En julio de 2024, contribuí con correcciones de errores y ajustes de traducción al Randomizer de <em>Kingdom Hearts II</em> —una herramienta de la comunidad que baraja varios elementos del juego para crear una experiencia única en cada partida.</p><p>Los jugadores en español de Steam y Epic encontraban cadenas sin traducir y, más críticamente, un crash que ocurría exclusivamente en la versión en español al subir de nivel y recibir un nuevo nivel de Drive Form. Tras contactar a través del Discord del proyecto, pasé tres días rastreando la causa raíz —un desbordamiento en el renderizado del texto de subida de nivel—, corrigiéndola, traduciendo los elementos restantes sin traducir y probando los cambios. La corrección fue enviada como pull request al repositorio principal, seguida de ajustes de continuidad solicitados por el propietario del proyecto.</p>",
      },
    },
    {
      id: 'kh-refined',
      name: {
        en: 'Kingdom Hearts Re:Fined',
        es: 'Kingdom Hearts Re:Fined',
      },
      shortDescription: {
        en: 'Spanish translation (and Spanish Dub for KH2) for the refined versions of Classic Kingdom Hearts PC ports with QoL improvements and bug fixes.',
        es: 'Traducción al español (y doblaje en español para KH2) para las versiones refinadas de los ports clásicos de Kingdom Hearts para PC con mejoras de calidad de vida y correcciones de errores.',
      },
      downloadUrl: 'https://github.com/KH-ReFined/KH-ReFined',
      images: ['/images/collabs/kh-refined-1.jpg'],
      youtubeVideos: ['au0rhFks090'],
      description: {
        en: "<p>Since 2022, I have been part of the translation team for <em>Kingdom Hearts Re:Fined</em> — a community project that enhances the classic PC ports of the <em>Kingdom Hearts</em> series with quality-of-life improvements and bug fixes — contributing Spanish translations across games and features as they were implemented, totalling around 500 lines.</p><p>As a senior translator within the project's Discord, my role extended beyond direct translation work to reviewing and correcting contributions from other team members. Additionally, the creator of Re:Fined reached out to integrate my own mods, <em>Kingdom Hearts II Spanish Mix</em> and <em>Sephiroth's Absent Silhouette</em>, bringing its full Spanish dub and refightable secret boss into the project officially.</p>",
        es: "<p>Desde 2022, he formado parte del equipo de traducción de <em>Kingdom Hearts Re:Fined</em> —un proyecto comunitario que mejora los ports clásicos de PC de la saga <em>Kingdom Hearts</em> con mejoras de calidad de vida y correcciones de errores—, contribuyendo traducciones al español en distintos juegos y funcionalidades a medida que se implementaban, sumando alrededor de 500 líneas en total.</p><p>Como traductor sénior dentro del Discord del proyecto, mi rol fue más allá de la traducción directa, incluyendo la revisión y corrección de contribuciones de otros miembros del equipo. Además, el creador de Re:Fined se puso en contacto conmigo para integrar mis propios mods, <em>Kingdom Hearts II Spanish Mix</em> y <em>Sephiroth's Absent Silhouette</em>, incorporando su doblaje completo al español y su jefe secreto enfrentable de nuevo al proyecto de forma oficial.</p>",
      },
    },
    {
      id: 'brainrot-royale',
      name: {
        en: 'Brainrot Royale',
        es: 'Brainrot Royale',
      },
      shortDescription: {
        en: 'Commercial game betatesting.',
        es: 'Betatesting de juego comercial.',
      },
      downloadUrl: 'https://store.steampowered.com/app/878000/Brainrot_Royale/',
      images: ['/images/collabs/brainrot-royale-1.jpg'],
      youtubeVideos: ['z1-tFbFqXwo'],
      description: {
        en: '<p>Invited by the developers — close friends of mine — I participated in three closed beta sessions for <em>Brainrot Royale</em> ahead of its Early Access launch in July 2025. The game is a chaotic 16-player battle royale built around Italian Brainrot meme characters, developed by Keytotruth (Truthkey) and 13th Vessel (ligero_miguel).</p><p>My focus during testing was on platform compatibility and technical performance: verifying the experience on ultrawide monitors and Steam Deck, identifying issues that fed into compatibility, performance, and networking improvements carried out by the development team before release.</p>',
        es: '<p>Invitado por los desarrolladores —amigos cercanos míos—, participé en tres sesiones de beta cerrada de <em>Brainrot Royale</em> antes de su lanzamiento en Acceso Anticipado en julio de 2025. El juego es un caótico battle royale para 16 jugadores basado en personajes de los memes de Italian Brainrot, desarrollado por Keytotruth (Truthkey) y 13th Vessel (ligero_miguel).</p><p>Mi enfoque durante las pruebas fue la compatibilidad de plataformas y el rendimiento técnico: verificar la experiencia en monitores ultrawide y Steam Deck, identificando problemas que contribuyeron a mejoras de compatibilidad, rendimiento y red llevadas a cabo por el equipo de desarrollo antes del lanzamiento.</p>',
      },
    },
    {
      id: 'clueless-crew',
      name: {
        en: 'Clueless Crew',
        es: 'Clueless Crew',
      },
      shortDescription: {
        en: 'Commercial game betatesting.',
        es: 'Betatesting de juego comercial.',
      },
      downloadUrl: 'https://store.steampowered.com/app/3252400/Clueless_Crew/',
      images: ['/images/collabs/clueless-crew-1.jpg'],
      youtubeVideos: ['vdptQDM8PLA'],
      description: {
        en: '<p>Invited by Keytotruth — one of the developers — I participated in a couple of closed beta sessions for <em>Clueless Crew</em> ahead of its Early Access launch in December 2024. The game is an online co-op survival horror experience developed by Ashkandi and Keytotruth (Truthkey), where teams scavenge eerie abandoned locations for loot while racing against the clock and avoiding hostile threats.</p><p>My focus was on platform compatibility and technical performance: verifying the experience on ultrawide monitors and Steam Deck, and feeding back issues that informed compatibility, performance, and networking improvements carried out by the development team before release.</p>',
        es: '<p>Invitado por Keytotruth —uno de los desarrolladores—, participé en un par de sesiones de beta cerrada de <em>Clueless Crew</em> antes de su lanzamiento en Acceso Anticipado en diciembre de 2024. El juego es una experiencia de terror survival cooperativa online desarrollada por Ashkandi y Keytotruth (Truthkey), donde los equipos saquean espeluznantes lugares abandonados en busca de botín mientras compiten contra el reloj y evitan amenazas hostiles.</p><p>Mi enfoque fue la compatibilidad de plataformas y el rendimiento técnico: verificar la experiencia en monitores ultrawide y Steam Deck, y reportar problemas que contribuyeron a mejoras de compatibilidad, rendimiento y red llevadas a cabo por el equipo de desarrollo antes del lanzamiento.</p>',
      },
    },
    {
      id: 'remorse',
      name: {
        en: 'Remorse: The List',
        es: 'Remorse: The List',
      },
      shortDescription: {
        en: 'Commercial game betatesting.',
        es: 'Betatesting de juego comercial.',
      },
      downloadUrl: 'https://store.steampowered.com/app/867960/Remorse_The_List/',
      images: ['/images/collabs/remorse-1.jpg'],
      youtubeVideos: ['LXTDrL71A4s'],
      description: {
        en: '<p>Invited by Keytotruth, I performed full pre-launch testing for <em>Remorse: The List</em>, a single-player survival horror game developed by Ashkandi and Keytotruth (Truthkey) — set in the eerie Hungarian town of Hidegpuszta — published by Feardemic and released in April 2022.</p><p>The nature of the game made this testing particularly demanding: its heavy use of UI widgets and puzzle elements meant that compatibility across a wide range of aspect ratios and control schemes was critical, not incidental. Thorough testing across those combinations led to numerous improvements before launch — including ultrawide monitor support, which the game now lists as a feature on its Steam page.</p>',
        es: '<p>Invitado por Keytotruth, realicé pruebas completas previas al lanzamiento de <em>Remorse: The List</em>, un juego de terror survival en solitario desarrollado por Ashkandi y Keytotruth (Truthkey) —ambientado en el espeluznante pueblo húngaro de Hidegpuszta— publicado por Feardemic y lanzado en abril de 2022.</p><p>La naturaleza del juego hizo que estas pruebas fueran especialmente exigentes: su uso intensivo de widgets de interfaz y elementos de puzle significaba que la compatibilidad entre una amplia gama de proporciones de pantalla y esquemas de control era fundamental, no accidental. Las pruebas exhaustivas en esas combinaciones dieron lugar a numerosas mejoras antes del lanzamiento —incluido el soporte para monitores ultrawide, que el juego ahora lista como característica en su página de Steam.</p>',
      },
    },
  ],
  translations: [
    {
      id: 'bbsfm',
      name: {
        en: 'Kingdom Hearts Birth By Sleep Final Mix (PSP) - Spanish Translation',
        es: 'Kingdom Hearts Birth By Sleep Final Mix (PSP) - Traducción al Español',
      },
      shortDescription: {
        en: "Spanish translation for Birth by Sleep Final Mix's PSP version, including menus, dialogues, and in-game text.",
        es: 'Traducción al español para la versión PSP de Birth by Sleep Final Mix, incluyendo menús, diálogos y texto en el juego.',
      },
      downloadUrl: 'https://mega.nz/folder/LMlQ0ZYa#DQYsHk4h48xaqS7q_vpBbA',
      images: [
        '/images/translations/khbbsfmspanish-1.jpg',
        '/images/translations/khbbsfmspanish-2.jpg',
        '/images/translations/khbbsfmspanish-3.jpg',
      ],
      youtubeVideos: ['9zZ1bo90yYI'],
      description: {
        en: "<p>Released in August 2016, this is the first and only Spanish translation of <em>Kingdom Hearts: Birth by Sleep Final Mix</em> for PSP — bringing the Japanese-exclusive version of the game to Spanish-speaking players for the first time on the platform, and to this day the only way to experience its multiplayer mode and Final Mix extras in Spanish.</p><p>The project took half a year and built upon Keytotruth's existing English translation as a base, which had already introduced Latin alphabet support into the game's files. The technical work involved image re-encoding to the PSP's required format, hex-level editing to replace text without exceeding the original file sizes — as expanding them would break the game — and adapting subtitle files extracted from the European PS3 version of the original <em>Birth by Sleep</em> to fit the Final Mix release. BBS Modding Station was used to assist with the bulk of text changes.</p><p>The patch was covered by Spanish gaming community outlets including Last Virtual Gate, and has been widely distributed across fan communities. It prompted several full playthroughs from Spanish-speaking content creators, and remains an active reference for fans of the series seeking the complete Final Mix experience in their language.</p>",
        es: "<p>Lanzada en agosto de 2016, esta es la primera y única traducción al español de <em>Kingdom Hearts: Birth by Sleep Final Mix</em> para PSP —llevando la versión exclusiva japonesa del juego a los jugadores hispanohablantes por primera vez en la plataforma, y hasta hoy la única forma de disfrutar su modo multijugador y los extras de Final Mix en español.</p><p>El proyecto llevó medio año y se construyó sobre la traducción al inglés existente de Keytotruth como base, que ya había introducido soporte para el alfabeto latino en los archivos del juego. El trabajo técnico implicó recodificación de imágenes al formato requerido por la PSP, edición a nivel hexadecimal para reemplazar texto sin superar los tamaños originales de los archivos —ya que ampliarlos rompería el juego—, y adaptar los archivos de subtítulos extraídos de la versión europea para PS3 del <em>Birth by Sleep</em> original al lanzamiento de Final Mix. BBS Modding Station fue utilizado para ayudar con la mayor parte de los cambios de texto.</p><p>El parche fue cubierto por medios de la comunidad gamer española como Last Virtual Gate, y ha sido ampliamente distribuido en comunidades de fans. Motivó varias partidas completas por parte de creadores de contenido hispanohablantes, y sigue siendo una referencia activa para los fans de la saga que buscan la experiencia completa de Final Mix en su idioma.</p>",
      },
      features: {
        en: [
          'Almost complete translation of all dialogues',
          'Translated menus and interfaces',
          "Compatible with PSP's exclusive multiplayer mode",
        ],
        es: [
          'Traducción casi completa de todos los diálogos',
          'Menús e interfaces traducidos',
          'Compatible con el modo multijugador exclusivo de PSP',
        ],
      },
      downloadInfo: {
        version: '1.0',
        size: '1 GB',
        requirements: 'Kingdom Hearts Birth by Sleep Final Mix (PSP)',
        installation: {
          en: [
            'Extract UMDGen, and open the original ISO file of the game with it',
            'Replace DAT files with the ones included in the translation patch',
            'Save the modified ISO file and use it with a compatible emulator or on a modded PSP/PSVita',
          ],
          es: [
            'Extrae UMDGen y abre el archivo ISO original del juego con él',
            'Reemplaza los archivos DAT con los incluidos en el parche de traducción',
            'Guarda el archivo ISO modificado y úsalo con un emulador compatible o en una PSP/PSVita modificada',
          ],
        },
      },
      changelog: [
        {
          version: '1.0',
          date: '2016-08-26',
          changes: {
            en: ['Official release'],
            es: ['Lanzamiento oficial'],
          },
        },
      ],
    },
    {
      id: 'drakengard3',
      name: {
        en: 'Drakengard 3 - Spanish Translation (WIP)',
        es: 'Drakengard 3 - Traducción al Español (En desarrollo)',
      },
      shortDescription: {
        en: 'Full Spanish translation of the exclusive JRPG for the PlayStation 3, Drakengard 3.',
        es: 'Traducción completa al español del JRPG exclusivo para PlayStation 3, Drakengard 3.',
      },
      downloadUrl: 'TO-DO',
      images: [
        '/images/translations/drakengard3-1.jpg',
        '/images/translations/drakengard3-2.jpg',
        '/images/translations/drakengard3-3.jpg',
        '/images/translations/drakengard3-4.jpg',
      ],
      description: {
        en: "<p>An ongoing collaborative Spanish translation of <em>Drakengard 3</em> for PS3 (RPCS3), developed together with ByToxX. Work began in March 2023, covering text, textures, and video assets across a title known for its dark, layered narrative — where each New Game Plus playthrough reveals a different timeline, and the full picture only emerges after completing all endings.</p><p>The technical scope was considerable. Square Enix's undocumented .XXX file format had no complete tooling available, requiring hex editing and custom investigation to extract and reinsert text reliably. Beyond text, the work extended to DDS texture editing for in-game images, Bink video replacement for localised video assets, and widget editing for elements such as the loading screen — all coordinated through a shared Google Sheets pipeline tracking per-file progress across the team.</p><p>To date, the first two chapters of the game are fully playable in Spanish with minimal errors, representing approximately two hours of the experience.</p>",
        es: "<p>Una traducción colaborativa al español en curso de <em>Drakengard 3</em> para PS3 (RPCS3), desarrollada junto a ByToxX. El trabajo comenzó en marzo de 2023, abarcando texto, texturas y assets de vídeo a lo largo de un título conocido por su narrativa oscura y elaborada —donde cada partida en Nueva Partida Plus revela una línea temporal diferente, y el panorama completo solo emerge tras completar todos los finales.</p><p>El alcance técnico fue considerable. El formato de archivo .XXX no documentado de Square Enix no contaba con herramientas completas disponibles, lo que requirió edición hexadecimal e investigación personalizada para extraer y reinsertar texto de forma fiable. Más allá del texto, el trabajo se extendió a la edición de texturas DDS para imágenes en el juego, el reemplazo de vídeos Bink para assets de vídeo localizados, y la edición de widgets para elementos como la pantalla de carga —todo coordinado a través de una hoja de cálculo de Google Sheets compartida que registra el progreso por archivo en todo el equipo.</p><p>Hasta la fecha, los dos primeros capítulos del juego son completamente jugables en español con errores mínimos, lo que representa aproximadamente dos horas de la experiencia.</p>",
      },
      features: {
        en: [
          'Translation faithful to the USA localization.',
          'Support for latest version and DLCs.',
        ],
        es: [
          'Traducción fiel a la localización de EE. UU.',
          'Compatible con la última versión y DLCs.',
        ],
      },
      downloadInfo: {
        version: '1.0.0',
        size: '1 GB',
        requirements: 'RPCS3 Emulator or CFW PS3',
        installation: {
          en: ['Install the PKG file', 'Apply the translation patch'],
          es: ['Instala el archivo PKG', 'Aplica el parche de traducción'],
        },
      },
    },
  ],
  mods: [
    {
      id: 'kh2-spanish-mix',
      name: {
        en: 'KINGDOM HEARTS 2: Spanish Mix',
        es: 'KINGDOM HEARTS 2: Spanish Mix',
      },
      shortDescription: {
        en: 'Mod that includes Castilian Spanish voices for Kingdom Hearts 2.',
        es: 'Mod que incluye voces en castellano para Kingdom Hearts 2.',
      },
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/31',
      images: ['/images/mods/kh2spanishmix-1.jpg'],
      youtubeVideos: ['q1P7gPPuFH0'],
      description: {
        en: '<p>Released in June 2021 after two months of development, <em>Spanish Mix - Voces en Castellano</em> is a mod for <em>Kingdom Hearts II Final Mix</em> (PC) that restores the original Spanish PlayStation 2 dub — bringing back the iconic Castilian voices, including Adolfo Moreno (the voice of Ash Ketchum in Pokémon) as Sora and Jorge Saudinós (the voice of Roronoa Zoro in One Piece) as Riku, to the definitive version of the game.</p><p>The mod covers over 6,000 in-game dialogue audio files, all pre-rendered cutscenes, more than 2,000 combat voice lines for both playable characters and bosses — including those added exclusively in the Final Mix version — Gummi Mission voices, and fully remixed Atlantica songs rebuilt from the original PS2 vocal tracks. The entire subtitle track was also rewritten to match the restored voices and correct spelling errors present in the original release.</p><p>The mod has accumulated over 10,000 downloads on NexusMods alone, with the page reaching 70,000 visits — figures that do not account for additional mirrors or the OpenKH installation method. It has been covered by Spanish gaming outlets including 3DJuegos and Meristation, featured by Spanish-language content creators, and its existence was referenced in <em>El despertar del corazón</em>, a book dedicated to the Kingdom Hearts series.</p>',
        es: '<p>Lanzado en junio de 2021 tras dos meses de desarrollo, <em>Spanish Mix - Voces en Castellano</em> es un mod para <em>Kingdom Hearts II Final Mix</em> (PC) que restaura el doblaje original en español de PlayStation 2 —recuperando las icónicas voces en castellano, incluyendo a Adolfo Moreno (la voz de Ash Ketchum en Pokémon) como Sora y Jorge Saudinós (la voz de Roronoa Zoro en One Piece) como Riku, en la versión definitiva del juego.</p><p>El mod cubre más de 6.000 archivos de audio de diálogos en el juego, todas las cinemáticas prerenderizadas, más de 2.000 líneas de voz de combate para ambos personajes jugables y jefes —incluidas las añadidas exclusivamente en la versión Final Mix—, voces de Misiones Gummi y las canciones completamente remezcladas de Atlantica reconstruidas a partir de las pistas vocales originales de PS2. También se reescribió completamente la pista de subtítulos para que coincida con las voces restauradas y corregir errores ortográficos presentes en la versión original.</p><p>El mod ha acumulado más de 10.000 descargas solo en NexusMods, con la página alcanzando 70.000 visitas —cifras que no incluyen mirrors adicionales ni el método de instalación con OpenKH. Ha sido cubierto por medios de videojuegos en español como 3DJuegos y Meristation, presentado por creadores de contenido en español, y su existencia fue referenciada en <em>El despertar del corazón</em>, un libro dedicado a la saga Kingdom Hearts.</p>',
      },
      features: {
        en: [
          'Full dubbing in Castilian Spanish',
          'Resubbed cutscenes to go along with the Spanish voices',
          'Compatible with all versions',
        ],
        es: [
          'Doblaje completo en castellano',
          'Cinemáticas resubtituladas para acompañar las voces en español',
          'Compatible con todas las versiones',
        ],
      },
      downloadInfo: {
        version: '1.3',
        size: '2.8 GB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: {
          en: [
            'Use OpenKH Mod Manager',
            'Install the mod "TheSoraHD/KH2SpanishMix"',
            'Build only, then play!',
          ],
          es: [
            'Usa OpenKH Mod Manager',
            'Instala el mod "TheSoraHD/KH2SpanishMix"',
            '¡Solo compila y juega!',
          ],
        },
      },
      changelog: [
        {
          version: '1.3',
          date: '2024-05-23',
          changes: {
            en: ['Bug fixes'],
            es: ['Corrección de errores'],
          },
        },
        {
          version: '1.2',
          date: '2022-05-27',
          changes: {
            en: [
              'Mod compatibility with other mods improved',
              'More FM-exclusive cutscenes dubbed',
            ],
            es: [
              'Compatibilidad del mod con otros mods mejorada',
              'Más cinemáticas exclusivas de FM dobladas',
            ],
          },
        },
        {
          version: '1.1',
          date: '2021-09-26',
          changes: {
            en: ['Roxas boss fight fully dubbed'],
            es: ['Combate contra Roxas completamente doblado'],
          },
        },
        {
          version: '1.0',
          date: '2021-06-27',
          changes: {
            en: ['Fully dubbed gameplay'],
            es: ['Gameplay completamente doblado'],
          },
        },
        {
          version: '0.95',
          date: '2021-06-02',
          changes: {
            en: ['Fully dubbed cutscenes'],
            es: ['Cinemáticas completamente dobladas'],
          },
        },
        {
          version: '0.9',
          date: '2021-05-29',
          changes: {
            en: ['First version released'],
            es: ['Primera versión lanzada'],
          },
        },
      ],
    },
    {
      id: 'kh2-sephiroth',
      name: {
        en: "KINGDOM HEARTS 2: Sephiroth's Absent Silhouette",
        es: "KINGDOM HEARTS 2: Silueta Ausente de Sephiroth",
      },
      shortDescription: {
        en: "Makes secret boss Sephiroth refightable in Kingdom Hearts 2. This is an enhanced port of CrazyCatz00's mod, which was originally created for the PS2 version of the game and has been updated for the HD Collection.",
        es: "Hace que el jefe secreto Sephiroth sea enfrentable de nuevo en Kingdom Hearts 2. Es un port mejorado del mod de CrazyCatz00, creado originalmente para la versión de PS2 y actualizado para la HD Collection.",
      },
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/87',
      images: [
        '/images/mods/sephirothas-1.jpg',
        '/images/mods/sephirothas-2.jpg',
        '/images/mods/sephirothas-3.jpg',
      ],
      // youtubeVideos: [],
      description: {
        en: "<p>Released in March 2022, <em>Sephiroth Absent Silhouette</em> is an enhanced PC port of Crazycatz00's original PS2 mod for <em>Kingdom Hearts II Final Mix</em>, built over one week into a stable release.</p><p>The mod allows players to refight Sephiroth as many times as they wish via his Absent Silhouette in The Dark Depths, complete with two cutscenes bookending the battle and a reward for defeating him — without affecting main story progression or his associated side quest. New additions over the original include HD textures and full multilanguage support across all five languages of the Global version: English, Spanish, French, Italian, and German.</p><p>The mod accumulated 6,000 downloads and 40,000 total views on NexusMods alone, not counting mirrors or the OpenKH installation method, and earned 200+ endorsements. It was later integrated into Topaz's <em>KH Re:Fined</em> as part of its official suite of enhancements.</p>",
        es: "<p>Lanzado en marzo de 2022, <em>Sephiroth Absent Silhouette</em> es un port mejorado para PC del mod original de Crazycatz00 para PS2 de <em>Kingdom Hearts II Final Mix</em>, construido en una semana hasta convertirse en un lanzamiento estable.</p><p>El mod permite a los jugadores volver a enfrentarse a Sephiroth tantas veces como quieran a través de su Silueta Ausente en Las Profundidades Oscuras, con dos cinemáticas que enmarcan el combate y una recompensa por derrotarlo —sin afectar la progresión de la historia principal ni la misión secundaria asociada. Las nuevas incorporaciones respecto al original incluyen texturas en HD y soporte multilingüe completo en los cinco idiomas de la versión Global: inglés, español, francés, italiano y alemán.</p><p>El mod acumuló 6.000 descargas y 40.000 visualizaciones totales solo en NexusMods, sin contar mirrors ni el método de instalación con OpenKH, y obtuvo más de 200 avales. Posteriormente fue integrado en <em>KH Re:Fined</em> de Topaz como parte de su conjunto oficial de mejoras.</p>",
      },
      features: {
        en: [
          'Refightable Sephiroth boss fight',
          'Enhanced graphics and effects',
          'Compatible with every language',
        ],
        es: [
          'Combate contra Sephiroth enfrentable de nuevo',
          'Gráficos y efectos mejorados',
          'Compatible con todos los idiomas',
        ],
      },
      downloadInfo: {
        version: '2.0',
        size: '7.3 MB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: {
          en: [
            'Use OpenKH Mod Manager',
            'Install the mod "TheSoraHD/KH2SephirothAS"',
            'Build only, then play!',
          ],
          es: [
            'Usa OpenKH Mod Manager',
            'Instala el mod "TheSoraHD/KH2SephirothAS"',
            '¡Solo compila y juega!',
          ],
        },
      },
      changelog: [
        {
          version: '2.0',
          date: '2022-06-15',
          changes: {
            en: ['100% compatible with KH Re:Fined'],
            es: ['100% compatible con KH Re:Fined'],
          },
        },
        {
          version: '1.0',
          date: '2022-03-27',
          changes: {
            en: ['First version released'],
            es: ['Primera versión lanzada'],
          },
        },
      ],
    },
    {
      id: 'kh2-xemnas',
      name: {
        en: 'KINGDOM HEARTS 2: Xemnas Deleted Quotes',
        es: 'KINGDOM HEARTS 2: Frases Eliminadas de Xemnas',
      },
      shortDescription: {
        en: "Adds deleted Xemnas dialogues to the original game. This is a direct port of 13th Vessel's Xemnas unused quotes mod for the PS2 version.",
        es: "Añade los diálogos eliminados de Xemnas al juego original. Es un port directo del mod de frases no usadas de Xemnas de 13th Vessel para la versión de PS2.",
      },
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/96',
      images: ['/images/mods/xemnasquotes-1.jpg'],
      youtubeVideos: ['cBhjAdvNwUg'],
      description: {
        en: "<p>Released for <em>Kingdom Hearts II Final Mix</em> (PC), <em>Xemnas Deleted Quotes</em> is a direct port of 13th Vessel's original PS2 mod, built in a single day. It restores unused voice lines recorded by Square Enix for two cut boss encounters involving Xemnas Armor 2 — audio that has sat buried in the game's files since the original release, never heard in-game.</p><p>Notably, Square Enix recorded these lines in every language, meaning the restored quotes will play in whichever dub is currently installed — including the Spanish Mix, Japanese, French, and German dub mods. The mod is compatible with any other mod that does not alter Xemnas Armor 2's AI, and a known audio skipping bug inherited from the PS3 HD version remains beyond the scope of the mod to fix.</p><p>It accumulated 2,000 downloads and 20,000 page views on NexusMods alone, earning 50+ endorsements.</p>",
        es: "<p>Lanzado para <em>Kingdom Hearts II Final Mix</em> (PC), <em>Xemnas Deleted Quotes</em> es un port directo del mod original de 13th Vessel para PS2, construido en un solo día. Restaura líneas de voz no utilizadas grabadas por Square Enix para dos encuentros con jefes eliminados que involucran a Xemnas Armadura 2 —audio que ha permanecido enterrado en los archivos del juego desde el lanzamiento original, sin escucharse nunca en el juego.</p><p>Es destacable que Square Enix grabó estas líneas en todos los idiomas, lo que significa que las frases restauradas sonarán en el doblaje que esté instalado —incluyendo el Spanish Mix, el doblaje japonés, francés y alemán. El mod es compatible con cualquier otro mod que no altere la IA de Xemnas Armadura 2, y un bug conocido de salto de audio heredado de la versión HD de PS3 queda fuera del alcance del mod para ser corregido.</p><p>Acumuló 2.000 descargas y 20.000 visualizaciones de página solo en NexusMods, obteniendo más de 50 avales.</p>",
      },
      features: {
        en: [],
        es: [],
      },
      downloadInfo: {
        version: '1.0',
        size: '168 KB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: {
          en: [
            'Use OpenKH Mod Manager',
            'Install the mod "TheSoraHD/XemnasDeletedQuotes"',
            'Build only, then play!',
          ],
          es: [
            'Usa OpenKH Mod Manager',
            'Instala el mod "TheSoraHD/XemnasDeletedQuotes"',
            '¡Solo compila y juega!',
          ],
        },
      },
      changelog: [
        {
          version: '1.0',
          date: '2022-03-27',
          changes: {
            en: ['First version released'],
            es: ['Primera versión lanzada'],
          },
        },
      ],
    },
    {
      id: 'crisis-core-voices',
      name: {
        en: 'Crisis Core Reunion: PSP Original Voices',
        es: 'Crisis Core Reunion: Voces Originales de PSP',
      },
      shortDescription: {
        en: 'Restores the original PSP voices in Crisis Core Reunion.',
        es: 'Restaura las voces originales de PSP en Crisis Core Reunion.',
      },
      downloadUrl: 'https://www.nexusmods.com/crisiscoreff7reunion/mods/15',
      images: ['/images/mods/crisiscore-1.jpg'],
      description: {
        en: "<p>Released on 25th December 2022 — less than two weeks after the game's launch — <em>Restore Crisis Core's PSP Original Voices</em> brings back the original PSP cast to <em>Crisis Core: Final Fantasy VII Reunion</em> on PC, replacing the recast voices with performances from Rick Gomez (Zack Fair), Steve Burton (Cloud), George Newbern (Sephiroth), Andrea Bowen (Aerith), and Oliver Quinn (Genesis), among others.</p><p>The project took roughly a month in total, with the bulk of the time spent extracting and preparing assets from the PSP version ahead of the game's launch. The technical obstacles were considerable: the game was not designed to be easily modded, as is common with Unreal Engine 4 titles, and initial work was done using the Switch version before a specific Steam launch parameter was discovered that enabled mod loading. Beyond that, the new compressed .ucas/.utoc file format had no available tooling, and all audio was encapsulated within .awb/.uasset files in HCA format. To work around this, I wrote a custom tool to replace the game's dialogue lines by converting WAV audio to HCA at the highest possible quality — covering 99% of in-game cutscene voices. Combat voice replacement remained blocked pending a solution for the .ucas/.utoc format.</p><p>The mod became my most downloaded to date, accumulating over 6,200 downloads and 100,000 page views on NexusMods alone, not counting mirrors, and was covered by Siliconera, WCCFTech, The Gamer, and Noisy Pixel, as well as numerous content creators. The initial release was later superseded when other community members — using my tool and assets with permission — extended coverage to combat voices and addressed remaining bugs, completing the classic experience for fans.</p>",
        es: "<p>Lanzado el 25 de diciembre de 2022 —menos de dos semanas después del lanzamiento del juego—, <em>Restore Crisis Core's PSP Original Voices</em> recupera el reparto original de PSP en <em>Crisis Core: Final Fantasy VII Reunion</em> para PC, reemplazando las voces reemplazadas por las actuaciones de Rick Gomez (Zack Fair), Steve Burton (Cloud), George Newbern (Sephiroth), Andrea Bowen (Aerith) y Oliver Quinn (Genesis), entre otros.</p><p>El proyecto llevó aproximadamente un mes en total, con la mayor parte del tiempo dedicado a extraer y preparar assets de la versión de PSP antes del lanzamiento del juego. Los obstáculos técnicos fueron considerables: el juego no estaba diseñado para ser modificado fácilmente, como es habitual en los títulos de Unreal Engine 4, y el trabajo inicial se realizó usando la versión de Switch antes de que se descubriera un parámetro de lanzamiento específico de Steam que habilitaba la carga de mods. Más allá de eso, el nuevo formato de archivo comprimido .ucas/.utoc no disponía de herramientas disponibles, y todo el audio estaba encapsulado dentro de archivos .awb/.uasset en formato HCA. Para solucionar esto, escribí una herramienta personalizada para reemplazar las líneas de diálogo del juego convirtiendo audio WAV a HCA con la mayor calidad posible —cubriendo el 99% de las voces de las cinemáticas del juego. El reemplazo de voces de combate permaneció bloqueado a la espera de una solución para el formato .ucas/.utoc.</p><p>El mod se convirtió en el más descargado hasta la fecha, acumulando más de 6.200 descargas y 100.000 visualizaciones de página solo en NexusMods, sin contar mirrors, y fue cubierto por Siliconera, WCCFTech, The Gamer y Noisy Pixel, además de numerosos creadores de contenido. El lanzamiento inicial fue posteriormente superado cuando otros miembros de la comunidad —usando mi herramienta y assets con permiso— extendieron la cobertura a las voces de combate y corrigieron los errores restantes, completando la experiencia clásica para los fans.</p>",
      },
      features: {
        en: [
          '99% in-game cutscenes voices that existed previously in the PSP version!',
          'Compatible only with the latest version of the game.',
        ],
        es: [
          '¡El 99% de las voces de cinemáticas del juego que existían previamente en la versión de PSP!',
          'Compatible solo con la última versión del juego.',
        ],
      },
      downloadInfo: {
        version: '0.2',
        size: '587.8 MB',
        requirements: 'Crisis Core: Final Fantasy VII Reunion (PC)',
        installation: {
          en: [
            'Create a ~mods folder in the game directory',
            'Extract the mod files into the ~mods folder',
            'Go to Steam, Right-Click the game, Properties. Now, in General -> Additional Parameters, write -fileopenlog',
          ],
          es: [
            'Crea una carpeta ~mods en el directorio del juego',
            'Extrae los archivos del mod en la carpeta ~mods',
            'Ve a Steam, haz clic derecho en el juego, Propiedades. Ahora, en General -> Parámetros adicionales de lanzamiento, escribe -fileopenlog',
          ],
        },
      },
      changelog: [
        {
          version: '0.2',
          date: '2022-12-31',
          changes: {
            en: [
              "Fixed Issue where after a cutscene in Chapter 2, there wouldn't be any voices for the majority of the game.",
              "Fixed Crashes (like when talking to Angeal's Mother).",
              'Fixed Fast Cutscenes with no sound.',
              'Existing Save Games now work.',
            ],
            es: [
              'Se corrigió un problema por el que, tras una cinemática en el Capítulo 2, no había voces durante la mayor parte del juego.',
              'Se corrigieron crashes (como al hablar con la madre de Angeal).',
              'Se corrigieron cinemáticas rápidas sin sonido.',
              'Las partidas guardadas existentes ahora funcionan.',
            ],
          },
        },
        {
          version: '0.1',
          date: '2022-12-05',
          changes: {
            en: ['First version released'],
            es: ['Primera versión lanzada'],
          },
        },
      ],
    },
    {
      id: 'bbsfm-analog',
      name: {
        en: "Birth By Sleep Final Mix's Free Camera (Emulator)",
        es: "Cámara Libre de Birth By Sleep Final Mix (Emulador)",
      },
      shortDescription: {
        en: 'Adds support for a second analog stick in PPSSPP emulator.',
        es: 'Añade soporte para un segundo stick analógico en el emulador PPSSPP.',
      },
      downloadUrl: 'https://mega.nz/file/idV0SD5b#lZ15ozM282sgokA66Aq8TwlKRGIZHvEGlQUcLHZ0W-4',
      images: ['/images/mods/bbsfm-camera-1.jpg'],
      // youtubeVideos: [],
      description: {
        en: "<p>A plugin for the PPSSPP emulator (v1.11+) that adds free camera support via the second analog stick to <em>Kingdom Hearts: Birth By Sleep Final Mix</em> — a feature the game natively supports on PSVita through TheOfficialFloW's original Adrenaline patch, but unavailable on general emulation.</p><p>Porting the patch required a day of investigation into PPSSPP's plugin system. The process involved stripping out the HEN and kernel functions from the original that PPSSPP does not support due to its different internal architecture, then building an .ini configuration file and compiling a PRX plugin using the PSPSDK, relying only on the subset of functions accessible to games themselves — direct RAM access, game-callable functions, and similar. The result loads cleanly into the emulator without further modification.</p><p>The plugin was subsequently incorporated into Keytotruth's SuperBosses mod for <em>KHBBSFM</em> after sharing the work with him.</p>",
        es: "<p>Un plugin para el emulador PPSSPP (v1.11+) que añade soporte de cámara libre mediante el segundo stick analógico a <em>Kingdom Hearts: Birth By Sleep Final Mix</em> —una función que el juego admite de forma nativa en PSVita a través del parche Adrenaline original de TheOfficialFloW, pero que no está disponible en emulación general.</p><p>Portar el parche requirió un día de investigación en el sistema de plugins de PPSSPP. El proceso implicó eliminar las funciones HEN y kernel del original que PPSSPP no admite debido a su diferente arquitectura interna, y luego construir un archivo de configuración .ini y compilar un plugin PRX usando el PSPSDK, dependiendo únicamente del subconjunto de funciones accesibles para los propios juegos —acceso directo a RAM, funciones invocables por el juego y similares. El resultado se carga limpiamente en el emulador sin modificación adicional.</p><p>El plugin fue incorporado posteriormente al mod SuperBosses de Keytotruth para <em>KHBBSFM</em> después de compartir el trabajo con él.</p>",
      },
      features: {
        en: [],
        es: [],
      },
      downloadInfo: {
        version: '1.0',
        size: '3 KB',
        requirements: 'PPSSPP 1.11 or later',
        installation: {
          en: [
            'Copy memstick folder to your PPSSPP folder, say overwrite if prompted.',
            'Inside the emulator, go to Settings -> Controls -> Control mapping, configure your pad: RightAn.*',
          ],
          es: [
            'Copia la carpeta memstick a tu carpeta de PPSSPP, acepta sobrescribir si se te solicita.',
            'Dentro del emulador, ve a Ajustes -> Controles -> Mapeo de controles, configura tu mando: RightAn.*',
          ],
        },
      },
      changelog: [
        {
          version: '1.0',
          date: '2022-08-19',
          changes: {
            en: ['First version released'],
            es: ['Primera versión lanzada'],
          },
        },
      ],
    },
  ],
  tools: [
    {
      id: 'hcareplace',
      name: {
        en: 'HCAreplace',
        es: 'HCAreplace',
      },
      shortDescription: {
        en: 'Tool to replace HCA audio within .awb/.uasset files. Created to restore the original English dub in Crisis Core Reunion.',
        es: 'Herramienta para reemplazar audio HCA dentro de archivos .awb/.uasset. Creada para restaurar el doblaje original en inglés de Crisis Core Reunion.',
      },
      downloadUrl: 'https://github.com/TheSoraHD/HCAreplace/',
      images: ['/images/mods/crisiscore-1.jpg'],
      description: {
        en: "<p>Written in C++ and released in December 2022, HCAReplace is a command-line tool for replacing HCA audio tracks inside .awb/.uasset files — the compressed audio containers used by <em>Crisis Core: Final Fantasy VII Reunion</em> and other Unreal Engine titles.</p><p>The tool was built out of necessity during the development of the PSP voice restoration mod, where no existing tooling could handle the game's audio format. It leverages VGAudio for WAV-to-HCA encoding, and handles the binary patching required to swap audio tracks in-place within the container files at maximum quality.</p><p>It was subsequently adopted by other modders in the <em>Crisis Core Reunion</em> community as the foundation for further voice restoration work, and is credited in several mods that built upon it.</p>",
        es: "<p>Escrito en C++ y lanzado en diciembre de 2022, HCAReplace es una herramienta de línea de comandos para reemplazar pistas de audio HCA dentro de archivos .awb/.uasset —los contenedores de audio comprimido utilizados por <em>Crisis Core: Final Fantasy VII Reunion</em> y otros títulos de Unreal Engine.</p><p>La herramienta fue creada por necesidad durante el desarrollo del mod de restauración de voces de PSP, donde ninguna herramienta existente podía manejar el formato de audio del juego. Utiliza VGAudio para la codificación de WAV a HCA, y gestiona el parcheado binario necesario para intercambiar pistas de audio en los archivos contenedor con la máxima calidad.</p><p>Posteriormente fue adoptada por otros modders de la comunidad de <em>Crisis Core Reunion</em> como base para trabajos adicionales de restauración de voces, y aparece en los créditos de varios mods que se construyeron sobre ella.</p>",
      },
      features: {
        en: [
          'Convert .wav files to HCA format',
          'Replace HCA audio in .awb/.uasset files',
          'Command-line interface',
        ],
        es: [
          'Convierte archivos .wav al formato HCA',
          'Reemplaza audio HCA en archivos .awb/.uasset',
          'Interfaz de línea de comandos',
        ],
      },
      changelog: [
        {
          version: '0.1',
          date: '2022-12-05',
          changes: {
            en: ['First version released'],
            es: ['Primera versión lanzada'],
          },
        },
      ],
    },
  ],
}
