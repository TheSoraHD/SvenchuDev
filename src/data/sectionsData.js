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
        images: [
          '/images/games/kh_tears-1.jpg',
          '/images/games/kh_tears-2.jpg',
          '/images/games/kh_tears-3.jpg',
          '/images/games/kh_tears-4.jpg',
        ],
        youtubeVideos: [],
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
        description:
          'This is a "bullet hell" 3D minigame created using the Unity engine, which features a vibrant aesthetic and unique shooting mechanics. It was made in four days for an Advanced Course in Video Game Development with Unity 3D at UPC FIB. It was interesting to learn not only how to use the Unity engine, but also how to programme using a SOLID methodology in the development of video games. The experience was very enriching; I had always wanted to create a space shooter reminiscent of Ikaruga, a fantastic game by Treasure.',

        downloadUrl: 'https://drive.google.com/file/d/1S5qwNlVKk4UJKf8vDl9PZieQVaFhRRsp/view',
        images: ['/images/games/flamboyant-1.jpg', '/images/games/flamboyant-2.jpg'],
        youtubeVideos: [],
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
        description:
          "Rolling Sky clone game, with JoJo's Bizarre Adventures theme. Made with Joel Alarcón.",
        downloadUrl: 'https://drive.google.com/file/d/1tHPl-hVR8-TCa_OmsNOn675VE6rChssT/view',
        images: ['/images/games/bizarreskies-1.jpg', '/images/games/bizarreskies-2.jpg'],
        youtubeVideos: ['OHOoz5rjCn0'],
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
            date: '2019-12-18',
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
        youtubeVideos: ['x99bPYrfr3s'],
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
        description: 'A psychological horror game that challenges the perception of reality.',
        downloadUrl: 'TO-DO',
        images: ['/images/games/delusion-1.jpg'],
        youtubeVideos: ['A2iSPnM1gHs'],
        features: [
          'Short horror experience',
          'Psychological themes',
          'Dynamic environment changes',
        ],
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
        features: [],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
          requirements: 'Custom C++/OpenGL Engine',
          installation: ['Extract the file'],
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
    gba: [
      {
        id: 'magicalpopn',
        name: "Magical Pop'n GBA",
        description: 'TO-DO',
        downloadUrl:
          'https://drive.google.com/file/d/0B6QBHHAkKtjtZ2M1ZWdrTHdnaW8/view?resourcekey=0-uXezMaENQ9zCHtd4ROIjFw',
        images: [
          '/images/games/magicalpopn-1.jpg',
          '/images/games/magicalpopn-2.jpg',
          '/images/games/magicalpopn-3.jpg',
          '/images/games/magicalpopn-4.jpg',
        ],
        youtubeVideos: [],
        features: [],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
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
        description: 'A chess clock homebrew made for the Nintendo DS.',
        downloadUrl: 'TO-DO',
        images: ['/images/games/chesscount-1.jpg', '/images/games/chesscount-2.jpg'],
        youtubeVideos: [],
        features: [],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
          requirements: 'NDS Flashcart / Emulator',
          installation: ['Play the ROM'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2012-04-12',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'avalancheds',
        name: 'AvalancheDS',
        description: 'A port of the flash game Avalanche for the Nintendo DS.',
        downloadUrl: 'TO-DO',
        images: ['/images/games/avalancheds-1.jpg'],
        youtubeVideos: [],
        features: [],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
          requirements: 'NDS Flashcart / Emulator',
          installation: ['Play the ROM'],
        },
        changelog: [
          {
            version: '1.0.0',
            date: '2011-03-02',
            changes: ['Official release'],
          },
        ],
      },
      {
        id: 'pongds',
        name: 'PongDS',
        description: 'TO-DO',
        downloadUrl: 'TO-DO',
        images: ['/images/games/pongds-1.jpg', '/images/games/pongds-2.jpg'],
        youtubeVideos: [],
        features: [],
        downloadInfo: {
          version: '1.0.0',
          size: '???',
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
        version: '1.0',
        size: '??? MB',
        requirements: 'Kingdom Hearts Birth by Sleep Final Mix (PSP)',
        installation: [
          'Download the translation file',
          'Extract the content into the game folder',
          'Run the installation patch',
          'Restart the game',
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
      downloadInfo: {
        version: '1.3',
        size: '2.8 GB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod TO-DO', 'Build only, then play!'],
      },
      changelog: [
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
      description: 'Restores deleted Sephiroth content in Kingdom Hearts 2.',
      downloadUrl: 'https://example.com/download/kh2-sephiroth',
      images: [
        '/images/mods/sephirothas-1.jpg',
        '/images/mods/sephirothas-2.jpg',
        '/images/mods/sephirothas-3.jpg',
      ],
      youtubeVideos: [],
      features: [],
      downloadInfo: {
        version: '???',
        size: '???',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod TO-DO', 'Build only, then play!'],
      },
      changelog: [
        {
          version: '???',
          date: '???',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'kh2-xemnas',
      name: 'KINGDOM HEARTS 2: Xemnas Deleted Quotes',
      description: 'Adds deleted Xemnas dialogues to the original game.',
      downloadUrl: 'https://example.com/download/kh2-xemnas',
      images: [],
      youtubeVideos: ['cBhjAdvNwUg'],
      features: [],
      downloadInfo: {
        version: '???',
        size: '???',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod TO-DO', 'Build only, then play!'],
      },
      changelog: [
        {
          version: '???',
          date: '???',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'crisis-core-voices',
      name: "Restore Crisis Core's PSP Original Voices",
      description: 'Restores the original PSP voices in Crisis Core Reunion.',
      downloadUrl: 'https://example.com/download/crisis-core-voices',
      images: ['/images/mods/crisis-core-1.jpg'],
      youtubeVideos: [],
      features: [],
      downloadInfo: {
        version: '???',
        size: '???',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod TO-DO', 'Build only, then play!'],
      },
      changelog: [
        {
          version: '???',
          date: '???',
          changes: ['First version released'],
        },
      ],
    },
    {
      id: 'bbsfm-analog',
      name: 'Second Analog Stick for Birth By Sleep Final Mix (Emulator Version)',
      description: 'Adds support for a second analog stick in emulators.',
      downloadUrl: 'https://example.com/download/bbsfm-analog',
      images: [],
      youtubeVideos: [],
      features: [],
      downloadInfo: {
        version: '???',
        size: '???',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod TO-DO', 'Build only, then play!'],
      },
      changelog: [
        {
          version: '???',
          date: '???',
          changes: ['First version released'],
        },
      ],
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
}
