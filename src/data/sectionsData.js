// data/portfolio.js
export const sectionsData = {
  games: {
    pc: [
      {
        id: 'kh-tears',
        name: 'Kingdom Hearts Tears',
        description: 'Reimaginación del día 357 de Kingdom Hearts 358/2 Days, en Unreal Engine 5.',
        downloadUrl: 'TO-DO',
        images: [
          '/images/games/kh_tears.jpg'
        ],
        youtubeVideos: [],
        features: [
          '10 horas de contenido original',
          'Sistema de combate reimaginado',
          'Gráficos en alta definición'
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '6.9 GB',
          requirements: 'TO-DO',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
      },
      {
        id: 'corruption',
        name: 'Corruption',
        description: 'Juego de terror estilo "Slender", donde tienes que purificar una ciudad de la oscuridad que se cierne sobre ella. Participó en la Z-Jam 2021.',
        downloadUrl: 'https://drive.google.com/file/d/1SLsC0G-UL--kHGKr6StUJARP0A5jTNk2/view',
        images: [
          '/images/games/corruption-1.jpg',
          '/images/games/corruption-2.jpg'
        ],
        youtubeVideos: ['p95O5zlnE7U'],
        features: [
          '10 horas de contenido original',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
      },
      {
        id: 'flamboyant',
        name: 'Flamboyant',
        description: 'Minijuego creado en el motor Unity tipo "bullet hell" con estética vibrante y mecánicas de disparo únicas.',
        downloadUrl: 'https://example.com/download/flamboyant',
        images: [],
        youtubeVideos: [],
        features: [
          'TO-DO',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: 'TO-DO',
          requirements: 'TO-DO',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: 'TO-DO',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
      },
      {
        id: 'contra2d',
        name: 'Contra2D',
        description: 'Reimaginación 2D del clásico juego de acción Contra.',
        downloadUrl: 'https://example.com/download/contra2d',
        images: [],
        youtubeVideos: [],
        features: [
          '10 horas de contenido original',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
      },
      {
        id: 'bizarreskies3d',
        name: 'BizarreSkies3D',
        description: 'Aventura aérea en 3D con mecánicas de vuelo innovadoras.',
        downloadUrl: 'https://example.com/download/bizarreskies3d',
        images: [],
        youtubeVideos: [],
        features: [
          '10 horas de contenido original',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
      },
      {
        id: 'delusion',
        name: 'Delusion',
        description: 'Juego de horror psicológico que desafía la percepción de la realidad.',
        downloadUrl: 'https://example.com/download/delusion',
        images: ['/images/games/delusion-1.jpg'],
        youtubeVideos: ['A2iSPnM1gHs'],
        features: [
          '10 horas de contenido original',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
      },
      {
        id: 'sanic',
        name: 'Sanic Juego Zombies con motor gráfico 2D propio',
        description: 'Juego de zombies desarrollado con motor gráfico 2D personalizado.',
        downloadUrl: 'https://example.com/download/sanic',
        images: ['/images/games/sanic-1.jpg', '/images/games/sanic-2.jpg'],
        youtubeVideos: []
      }
    ],
    nds: [
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
        description: 'Port del juego flash Avalanche para Nintendo DS.',
        downloadUrl: 'https://example.com/download/avalancheds',
        images: [],
        youtubeVideos: []
      }
    ]
  },
  collaborations: [
    {
      id: 'remorse-betatest',
      name: 'Betatested Remorse: The List + Clueless Crew',
      description: 'Optimización para monitores ultrawide y Steam Deck, mejoras de compatibilidad y rendimiento.',
      downloadUrl: 'https://example.com/download/remorse',
      images: ['/images/collab/remorse-1.jpg'],
      youtubeVideos: [],
      features: [
          '10 horas de contenido original',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
    },
    {
      id: 'brainrot-royale',
      name: 'Betatested Brainrot Royale',
      description: 'Optimización para monitores ultrawide y Steam Deck, mejoras de compatibilidad y rendimiento.',
      downloadUrl: 'https://example.com/download/remorse',
      images: [''],
      youtubeVideos: ['z1-tFbFqXwo'],
      features: [
          '10 horas de contenido original',
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '1.6 GB',
          requirements: 'Unreal Engine 4',
          installation: [
            'Extrae el archivo comprimido del juego',
          ]
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: [
              'Lanzamiento oficial',
            ]
          }
        ]
    }
  ],
  translations: [
    {
      id: 'bbsfm',
      name: 'Kingdom Hearts Birth By Sleep Final Mix (PSP) - Traducción al Español',
      description: 'Traducción completa al español de Birth by Sleep Final Mix, incluyendo menús, diálogos y textos del juego.',
      downloadUrl: 'https://example.com/download/bbsfm-translation',
      images: ['/images/translations/bbsfm-1.jpg'],
      youtubeVideos: ['9zZ1bo90yYI'],
      features: [
        'Traducción completa de todos los diálogos',
        'Menús y interfaces traducidos',
        'Subtítulos sincronizados',
        'Compatibilidad con todas las versiones'
      ],
      downloadInfo: {
        version: '1.2.0',
        size: '45 MB',
        requirements: 'Kingdom Hearts Birth by Sleep Final Mix',
        installation: [
          'Descarga el archivo de traducción',
          'Extrae el contenido en la carpeta del juego',
          'Ejecuta el parche de instalación',
          'Reinicia el juego'
        ]
      },
      changelog: [
        {
          version: '1.2.0',
          date: '2024-01-15',
          changes: [
            'Corregidos errores de traducción en el mundo de Disney',
            'Mejorada la sincronización de subtítulos',
            'Añadidas traducciones faltantes en menús'
          ]
        }
      ]
    },
    {
      id: 'drakengard3',
      name: 'Drakengard 3 - Traducción al Español',
      description: 'Traducción completa al español del aclamado JRPG Drakengard 3, manteniendo el tono original de la obra.',
      downloadUrl: 'https://example.com/download/drakengard3-translation',
      images: [
        '/images/translations/drakengard3-1.jpg',
        '/images/translations/drakengard3-2.jpg'
      ],
      youtubeVideos: [],
      features: [
        'Traducción fiel al texto original japonés',
        'Localización cultural apropiada',
        'Revisión exhaustiva de terminología',
        'Soporte para diferentes regiones'
      ],
      downloadInfo: {
        version: '2.0.1',
        size: '120 MB',
        requirements: 'Drakengard 3 (PS3)',
        installation: [
          'Requiere PS3 con CFW',
          'Instala el archivo PKG',
          'Aplica el parche de traducción',
          'Reinicia la consola'
        ]
      },
      changelog: [
        {
          version: '2.0.1',
          date: '2024-02-01',
          changes: [
            'Corrección de errores menores',
            'Mejorada compatibilidad con diferentes firmwares',
            'Optimización de rendimiento'
          ]
        }
      ]
    }
  ],
  mods: [
    {
      id: 'kh2-spanish-mix',
      name: 'KINGDOM HEARTS 2: Spanish Mix - Voices in Castillian',
      description: 'Mod que incluye voces en castellano para Kingdom Hearts 2.',
      downloadUrl: 'https://example.com/download/kh2-spanish',
      images: ['/images/mods/kh2-spanish-1.jpg'],
      youtubeVideos: ['q1P7gPPuFH0'],
      features: [
        'Doblaje completo en castellano',
        'Sincronización labial mejorada',
        'Calidad de audio profesional',
        'Compatible con todas las versiones'
      ],
      screenshots: [
        '/images/mods/kh2-spanish-1.jpg',
        '/images/mods/kh2-spanish-2.jpg'
      ],
      downloadInfo: {
        version: '3.1.0',
        size: '2.8 GB',
        requirements: 'Kingdom Hearts 2 Final Mix',
        installation: [
          'Descarga todos los archivos de audio',
          'Usa OpenKH Mod Manager',
          'Instala el mod siguiendo las instrucciones',
          'Configura el audio en el juego'
        ]
      },
      changelog: [
        {
          version: '3.1.0',
          date: '2024-03-10',
          changes: [
            'Añadidas voces faltantes de personajes secundarios',
            'Mejorada calidad de audio en escenas cinemáticas',
            'Corregidos problemas de sincronización'
          ]
        }
      ]
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
      youtubeVideos: ['cBhjAdvNwUg']
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
  tools: [
    {
      id: 'realms-engine',
      name: 'Realms Engine',
      description: 'Motor de juego personalizado desarrollado desde cero.',
      downloadUrl: 'https://example.com/download/realms-engine',
      images: ['/images/tools/realms-1.jpg'],
      youtubeVideos: []
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
  about: [
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
