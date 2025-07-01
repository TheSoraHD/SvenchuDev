// data/portfolio.js
export const sectionsData = {
  GAMES: {
    PC: [
      {
        id: 'kh-tears',
        name: 'Kingdom Hearts Tears',
        description: 'Un juego épico inspirado en la saga Kingdom Hearts con mecánicas únicas.',
        downloadUrl: 'https://example.com/download/kh-tears',
        images: [
          '/images/games/kh_tears.jpg'
        ],
        youtubeVideos: [
          'dQw4w9WgXcQ' // ID del video de YouTube
        ]
      },
      {
        id: 'corruption',
        name: 'Corruption',
        description: 'Un thriller psicológico con elementos de supervivencia.',
        downloadUrl: 'https://example.com/download/corruption',
        images: [],
        youtubeVideos: []
      },
      {
        id: 'flamboyant',
        name: 'Flamboyant',
        description: 'Juego de acción con estilo visual único y colorido.',
        downloadUrl: 'https://example.com/download/flamboyant',
        images: [],
        youtubeVideos: ['dQw4w9WgXcQ']
      },
      {
        id: 'contra2d',
        name: 'Contra2D',
        description: 'Reimaginación 2D del clásico juego de acción Contra.',
        downloadUrl: 'https://example.com/download/contra2d',
        images: [],
        youtubeVideos: []
      },
      {
        id: 'bizarreskies3d',
        name: 'BizarreSkies3D',
        description: 'Aventura aérea en 3D con mecánicas de vuelo innovadoras.',
        downloadUrl: 'https://example.com/download/bizarreskies3d',
        images: [],
        youtubeVideos: []
      },
      {
        id: 'delusion',
        name: 'Delusion',
        description: 'Juego de horror psicológico que desafía la percepción de la realidad.',
        downloadUrl: 'https://example.com/download/delusion',
        images: ['/images/games/delusion-1.jpg'],
        youtubeVideos: []
      },
      {
        id: 'sanic',
        name: 'Sanic Juego Zombies con motor gráfico 2D propio',
        description: 'Juego de zombies desarrollado con motor gráfico 2D personalizado.',
        downloadUrl: 'https://example.com/download/sanic',
        images: ['/images/games/sanic-1.jpg', '/images/games/sanic-2.jpg'],
        youtubeVideos: ['dQw4w9WgXcQ']
      }
    ],
    NDS: [
      {
        id: 'chesscount',
        name: 'ChessCount',
        description: 'Juego de ajedrez optimizado para Nintendo DS con contador de movimientos.',
        downloadUrl: 'https://example.com/download/chesscount',
        images: ['/images/games/chesscount-1.jpg'],
        youtubeVideos: []
      },
      {
        id: 'avalancheds',
        name: 'AvalancheDS',
        description: 'Juego de puzzle y acción para Nintendo DS con mecánicas de avalancha.',
        downloadUrl: 'https://example.com/download/avalancheds',
        images: [],
        youtubeVideos: []
      }
    ]
  },
  COLLABORATIONS: [
    {
      id: 'remorse-betatest',
      name: 'Betatested Remorse: The List + Clueless Crew',
      description: 'Optimización para monitores ultrawide y Steam Deck, mejoras de compatibilidad y rendimiento.',
      downloadUrl: 'https://example.com/download/remorse',
      images: ['/images/collab/remorse-1.jpg'],
      youtubeVideos: []
    }
  ],
  TRANSLATIONS: [
    {
      id: 'bbsfm',
      name: 'BBSFM',
      description: 'Traducción completa al español de Birth by Sleep Final Mix.',
      downloadUrl: 'https://example.com/download/bbsfm-translation',
      images: ['/images/translations/bbsfm-1.jpg'],
      youtubeVideos: []
    },
    {
      id: 'drakengard3',
      name: 'Drakengard 3',
      description: 'Traducción al español del aclamado JRPG Drakengard 3.',
      downloadUrl: 'https://example.com/download/drakengard3-translation',
      images: [],
      youtubeVideos: ['dQw4w9WgXcQ']
    }
  ],
  MODS: [
    {
      id: 'kh2-spanish-mix',
      name: 'KINGDOM HEARTS 2: Spanish Mix - Voices in Castillian',
      description: 'Mod que incluye voces en castellano para Kingdom Hearts 2.',
      downloadUrl: 'https://example.com/download/kh2-spanish',
      images: ['/images/mods/kh2-spanish-1.jpg'],
      youtubeVideos: []
    },
    {
      id: 'kh2-sephiroth',
      name: 'KINGDOM HEARTS 2: Sephiroth\'s Absent Silhouette',
      description: 'Restaura contenido eliminado de Sephiroth en Kingdom Hearts 2.',
      downloadUrl: 'https://example.com/download/kh2-sephiroth',
      images: [],
      youtubeVideos: []
    },
    {
      id: 'kh2-xemnas',
      name: 'KINGDOM HEARTS 2: Xemnas Deleted Quotes',
      description: 'Añade diálogos eliminados de Xemnas al juego original.',
      downloadUrl: 'https://example.com/download/kh2-xemnas',
      images: [],
      youtubeVideos: []
    },
    {
      id: 'crisis-core-voices',
      name: 'Restore Crisis Core\'s PSP Original Voices',
      description: 'Restaura las voces originales de PSP en Crisis Core Reunion.',
      downloadUrl: 'https://example.com/download/crisis-core-voices',
      images: ['/images/mods/crisis-core-1.jpg'],
      youtubeVideos: []
    },
    {
      id: 'bbsfm-analog',
      name: 'Second Analog Stick for Birth By Sleep Final Mix (Emulator Version)',
      description: 'Añade soporte para segundo stick analógico en emuladores.',
      downloadUrl: 'https://example.com/download/bbsfm-analog',
      images: [],
      youtubeVideos: []
    }
  ],
  TOOLS: [
    {
      id: 'realms-engine',
      name: 'Realms Engine',
      description: 'Motor de juego personalizado desarrollado desde cero.',
      downloadUrl: 'https://example.com/download/realms-engine',
      images: ['/images/tools/realms-1.jpg'],
      youtubeVideos: ['dQw4w9WgXcQ']
    },
    {
      id: 'hcareplace',
      name: 'HCAreplace',
      description: 'Herramienta para reemplazar audios HCA dentro de archivos .awb/.uasset. Creada para restaurar el doblaje inglés original de Crisis Core Reunion.',
      downloadUrl: 'https://example.com/download/hcareplace',
      images: [],
      youtubeVideos: []
    }
  ],
  ABOUT: [
    {
      id: 'degree',
      name: 'Degree',
      description: 'Información sobre mi formación académica y certificaciones.',
      downloadUrl: '#',
      images: ['/images/about/degree-1.jpg'],
      youtubeVideos: []
    },
    {
      id: 'youtube',
      name: 'YouTube Channel',
      description: 'Canal de YouTube con contenido sobre desarrollo de juegos y programación.',
      downloadUrl: 'https://youtube.com/@tu-canal',
      images: [],
      youtubeVideos: []
    },
    {
      id: 'it-work',
      name: 'Working in the IT',
      description: 'Experiencia profesional en el sector de tecnologías de la información.',
      downloadUrl: '#',
      images: [],
      youtubeVideos: []
    },
    {
      id: 'chess',
      name: 'Love Playing Chess',
      description: 'Pasión por el ajedrez y participación en torneos online.',
      downloadUrl: '#',
      images: ['/images/about/chess-1.jpg'],
      youtubeVideos: []
    },
    {
      id: '3d-skills',
      name: 'Proficient with 3DS Max, Learning Blender',
      description: 'Habilidades en modelado 3D y creación de assets para videojuegos.',
      downloadUrl: '#',
      images: ['/images/about/3d-work-1.jpg'],
      youtubeVideos: []
    }
  ]
};