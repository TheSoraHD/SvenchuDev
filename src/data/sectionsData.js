// data/portfolio.js
export const sectionsData = {
  games: {
    pc: [
      {
        id: 'kh-tears',
        name: 'Kingdom Hearts Tears',
        description:
          'Fan-made reimagining of Day 357 from Kingdom Hearts 358/2 Days, powered by Unreal Engine 5. This game aims to offers a new way to experience this pivotal moment in the story.',
        downloadUrl: '',
        images: ['/images/games/kh_tears-1.jpg', '/images/games/kh_tears-2.jpg', '/images/games/kh_tears-3.jpg', '/images/games/kh_tears-4.jpg'],
        youtubeVideos: [],
        features: [
          '10+ hours of playable content',
          'High-definition graphics',
          'Reimagined gameplay mechanics',
          'Translated to 10 languages',
          'Dubbed into 3 languages (English, Spanish, Japanese)'
        ],
        downloadInfo: {
          version: '1.0.0',
          size: '6.9 GB',
          requirements: 'TO-DO',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2026-05-30',
            changes: ['Estimated release'],
          },
        ],
      },
      {
        id: 'corruption',
        name: 'Corruption',
        description:
          'A "Slender-style" horror game where you must purify a city from the looming darkness. Created together with Keytotruth, this was our entry in Z-Jam 2021.',
        downloadUrl: 'https://drive.google.com/file/d/1SLsC0G-UL--kHGKr6StUJARP0A5jTNk2/view',
        images: ['/images/games/corruption-1.jpg', '/images/games/corruption-2.jpg'],
        youtubeVideos: ['p95O5zlnE7U'],
        features: ['Single-player horror experience', 'Short duration', 'Map changes based on player actions'],
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
        description:
          'This is a "bullet hell" 3D minigame created using the Unity engine, which features a vibrant aesthetic and unique shooting mechanics. It was made in four days for an Advanced Course in Video Game Development with Unity 3D at UPC FIB. It was interesting to learn not only how to use the Unity engine, but also how to programme using a SOLID methodology in the development of video games. The experience was very enriching; I had always wanted to create a space shooter reminiscent of Ikaruga, a fantastic game by Treasure.',


        downloadUrl: 'https://drive.google.com/file/d/1S5qwNlVKk4UJKf8vDl9PZieQVaFhRRsp/view',
        images: ['/images/games/flamboyant-1.jpg', '/images/games/flamboyant-2.jpg'],
        youtubeVideos: [],
        features: ['Color changing mechanics', 'Vibrant visual style', 'Short and intense gameplay'],
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
        id: 'contra2d',
        name: 'Contra2D',
        description: 'A 2D reimagining of the classic action game Contra.',
        downloadUrl: 'https://drive.google.com/file/d/1VSCMri7Gh7eXLOywHeh7L4ahy8PpnHTC/view',
        images: ['/images/games/contra-1.jpg', '/images/games/contra-2.jpg'],
        youtubeVideos: ['https://www.youtube.com/watch?v=x99bPYrfr3s'],
        features: ['Time-stopping mechanics', 'Recreation of classic Contra levels', 'Bullet hell boss fight'],
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
        id: 'bizarreskies3d',
        name: 'Bizarre Skies',
        description: 'TO-DO',
        downloadUrl: 'https://drive.google.com/file/d/1tHPl-hVR8-TCa_OmsNOn675VE6rChssT/view',
        images: ['/images/games/bizarreskies-1.jpg', '/images/games/bizarreskies-2.jpg'],
        youtubeVideos: ['https://www.youtube.com/watch?v=OHOoz5rjCn0'],
        features: ['TO-DO'],
        downloadInfo: {
          version: '1.0.0',
          size: '256 MB',
          requirements: 'Unreal Engine 4.23',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: 'TO-DO',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'delusion',
        name: 'Delusion',
        description: 'A psychological horror game that challenges the perception of reality.',
        downloadUrl: 'TO-DO',
        images: ['/images/games/delusion-1.jpg'],
        youtubeVideos: ['https://www.youtube.com/watch?v=A2iSPnM1gHs'],
        features: ['Short horror experience', 'Psychological themes', 'Dynamic environment changes'],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
          requirements: 'UDK (Unreal Engine 3)',
          installation: ['Extract the compressed game file'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2014-01-12',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'sanic',
        name: 'Sanic Zombie Game with custom 2D graphics engine',
        description: 'A zombie game developed using a custom-made 2D graphics engine.',
        downloadUrl: 'https://example.com/download/sanic',
        images: ['/images/games/sanic-1.jpg', '/images/games/sanic-2.jpg'],
        youtubeVideos: [],
      },
    ],
    nds: [
      {
        id: 'chesscount',
        name: 'ChessCount',
        description: 'A chess game optimized for Nintendo DS featuring a move counter.',
        downloadUrl: 'https://example.com/download/chesscount',
        images: ['/images/games/chesscount-1.jpg'],
        youtubeVideos: [],
      },
      {
        id: 'avalancheds',
        name: 'AvalancheDS',
        description: 'A port of the flash game Avalanche for the Nintendo DS.',
        downloadUrl: 'https://example.com/download/avalancheds',
        images: [],
        youtubeVideos: [],
      },
    ],
  },
  collaborations: [
    {
      id: 'remorse-betatest',
      name: 'Betatested Remorse: The List + Clueless Crew',
      description:
        'Optimization for ultrawide monitors and Steam Deck, including compatibility and performance improvements.',
      downloadUrl: 'https://example.com/download/remorse',
      images: ['/images/collab/remorse-1.jpg'],
      youtubeVideos: [],
      features: ['10 hours of original content'],
      downloadInfo: {
        version: '1.0.0',
        size: '1.6 GB',
        requirements: 'Unreal Engine 4',
        installation: ['Extract the compressed game file'],
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
      id: 'brainrot-royale',
      name: 'Betatested Brainrot Royale',
      description:
        'Optimization for ultrawide monitors and Steam Deck, including compatibility and performance improvements.',
      downloadUrl: 'https://example.com/download/remorse',
      images: [''],
      youtubeVideos: ['z1-tFbFqXwo'],
      features: ['10 hours of original content'],
      downloadInfo: {
        version: '1.0.0',
        size: '1.6 GB',
        requirements: 'Unreal Engine 4',
        installation: ['Extract the compressed game file'],
      },
      changelog: [
        {
          version: '1.0.0',
          date: '???',
          changes: ['Official release'],
        },
      ],
    },
  ],
  translations: [
    {
      id: 'bbsfm',
      name: 'Kingdom Hearts Birth By Sleep Final Mix (PSP) - Spanish Translation',
      description:
        'Full Spanish translation for Birth by Sleep Final Mix, including menus, dialogues, and in-game text.',
      downloadUrl: 'https://example.com/download/bbsfm-translation',
      images: ['/images/translations/bbsfm-1.jpg'],
      youtubeVideos: ['9zZ1bo90yYI'],
      features: [
        'Full translation of all dialogues',
        'Translated menus and interfaces',
        'Synchronized subtitles',
        'Compatible with all versions',
      ],
      downloadInfo: {
        version: '1.2.0',
        size: '45 MB',
        requirements: 'Kingdom Hearts Birth by Sleep Final Mix',
        installation: [
          'Download the translation file',
          'Extract the content into the game folder',
          'Run the installation patch',
          'Restart the game',
        ],
      },
      changelog: [
        {
          version: '1.2.0',
          date: '???',
          changes: [
            'Fixed translation errors in the Disney world',
            'Improved subtitle synchronization',
            'Added missing translations in menus',
          ],
        },
      ],
    },
    {
      id: 'drakengard3',
      name: 'Drakengard 3 - Spanish Translation',
      description:
        'Full Spanish translation of the acclaimed JRPG Drakengard 3, maintaining the original tone of the work.',
      downloadUrl: 'https://example.com/download/drakengard3-translation',
      images: ['/images/translations/drakengard3-1.jpg', '/images/translations/drakengard3-2.jpg'],
      youtubeVideos: [],
      features: [
        'Translation faithful to the original Japanese text',
        'Appropriate cultural localization',
        'Exhaustive review of terminology',
        'Support for different regions',
      ],
      downloadInfo: {
        version: '2.0.1',
        size: '120 MB',
        requirements: 'Drakengard 3 (PS3)',
        installation: [
          'Requires PS3 with CFW',
          'Install the PKG file',
          'Apply the translation patch',
          'Restart the console',
        ],
      },
      changelog: [
        {
          version: '2.0.1',
          date: '???',
          changes: [
            'Minor bug fixes',
            'Improved compatibility with different firmwares',
            'Performance optimization',
          ],
        },
      ],
    },
  ],
  mods: [
    {
      id: 'kh2-spanish-mix',
      name: 'KINGDOM HEARTS 2: Spanish Mix - Voices in Castilian',
      description: 'Mod that includes Castilian Spanish voices for Kingdom Hearts 2.',
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/31',
      images: ['/images/mods/kh2-spanish-1.jpg'],
      youtubeVideos: ['q1P7gPPuFH0'],
      features: [
        'Full dubbing in Castilian Spanish',
        'Improved lip-sync',
        'Professional audio quality',
        'Compatible with all versions',
      ],
      screenshots: ['/images/mods/kh2-spanish-1.jpg', '/images/mods/kh2-spanish-2.jpg'],
      downloadInfo: {
        version: '1.3',
        size: '2.8 GB',
        requirements: 'Kingdom Hearts 2 Final Mix',
        installation: [
          'Download all audio files',
          'Use OpenKH Mod Manager',
          'Install the mod following the instructions',
          'Configure the audio in-game',
        ],
      },
      changelog: [
        {
          version: '0.9',
          date: '2021-05-29',
          changes: [
            'First version released',
          ],
        },
      ],
    },
    {
      id: 'kh2-sephiroth',
      name: "KINGDOM HEARTS 2: Sephiroth's Absent Silhouette",
      description: 'Restores deleted Sephiroth content in Kingdom Hearts 2.',
      downloadUrl: 'https://example.com/download/kh2-sephiroth',
      images: [],
      youtubeVideos: [],
    },
    {
      id: 'kh2-xemnas',
      name: 'KINGDOM HEARTS 2: Xemnas Deleted Quotes',
      description: 'Adds deleted Xemnas dialogues to the original game.',
      downloadUrl: 'https://example.com/download/kh2-xemnas',
      images: [],
      youtubeVideos: ['cBhjAdvNwUg'],
    },
    {
      id: 'crisis-core-voices',
      name: "Restore Crisis Core's PSP Original Voices",
      description: 'Restores the original PSP voices in Crisis Core Reunion.',
      downloadUrl: 'https://example.com/download/crisis-core-voices',
      images: ['/images/mods/crisis-core-1.jpg'],
      youtubeVideos: [],
    },
    {
      id: 'bbsfm-analog',
      name: 'Second Analog Stick for Birth By Sleep Final Mix (Emulator Version)',
      description: 'Adds support for a second analog stick in emulators.',
      downloadUrl: 'https://example.com/download/bbsfm-analog',
      images: [],
      youtubeVideos: [],
    },
  ],
  tools: [
    {
      id: 'realms-engine',
      name: 'Realms Engine',
      description: 'Custom game engine developed from scratch.',
      downloadUrl: 'https://example.com/download/realms-engine',
      images: ['/images/tools/realms-1.jpg'],
      youtubeVideos: [],
    },
    {
      id: 'hcareplace',
      name: 'HCAreplace',
      description:
        'Tool to replace HCA audio within .awb/.uasset files. Created to restore the original English dub in Crisis Core Reunion.',
      downloadUrl: 'https://example.com/download/hcareplace',
      images: [],
      youtubeVideos: [],
    },
  ],
  about: [
    {
      id: 'degree',
      name: 'Degree',
      description: 'Information about my academic background and certifications.',
      downloadUrl: '#',
      images: ['/images/about/degree-1.jpg'],
      youtubeVideos: [],
    },
    {
      id: 'youtube',
      name: 'YouTube Channel',
      description: 'YouTube channel featuring content about game development and programming.',
      downloadUrl: 'https://youtube.com/@your-channel',
      images: [],
      youtubeVideos: [],
    },
    {
      id: 'it-work',
      name: 'Working in IT',
      description: 'Professional experience in the information technology sector.',
      downloadUrl: '#',
      images: [],
      youtubeVideos: [],
    },
    {
      id: 'chess',
      name: 'Love Playing Chess',
      description: 'Passion for chess and participation in online tournaments.',
      downloadUrl: '#',
      images: ['/images/about/chess-1.jpg'],
      youtubeVideos: [],
    },
    {
      id: '3d-skills',
      name: 'Proficient with 3DS Max, Learning Blender',
      description: 'Skills in 3D modeling and creation of assets for video games.',
      downloadUrl: '#',
      images: ['/images/about/3d-work-1.jpg'],
      youtubeVideos: [],
    },
  ],
}
