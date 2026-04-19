// data/portfolio.js
export const sectionsData = {
  games: {
    pc: [
      {
        id: 'kh-tears',
        name: 'Kingdom Hearts Tears',
        description:
          'Fan-made reimagining of Day 357 from Kingdom Hearts 358/2 Days, powered by Unreal Engine 5. This game aims to offers a new way to experience this pivotal moment in the story.',
        downloadUrl: 'TO-DO',
        images: [
          '/images/games/kh_tears-1.jpg',
          '/images/games/kh_tears-2.jpg',
          '/images/games/kh_tears-3.jpg',
          '/images/games/kh_tears-4.jpg',
        ],
        // youtubeVideos: [],
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
        // youtubeVideos: [],
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
        description: 'This psychological horror game challenges the perception of reality. It was made as a school project in Unreal Engine 3, with the objective of building my own 3D assets from scratch and creating a simple yet functional game.',
        downloadUrl: 'https://drive.google.com/file/d/1C6Htc72cG1TRtywTYZmgmyGYnZ_V_ZP0/view?usp=sharing',
        images: ['/images/games/delusion-1.jpg', '/images/games/delusion-2.jpg'],
        youtubeVideos: ['A2iSPnM1gHs'],
        features: [
          'Short horror experience',
          'Psychological themes',
          'Dynamic environment changes',
        ],
        downloadInfo: {
          version: '0.15 (Still a Prototype)',
          size: '389 MB',
          requirements: 'UDK (Unreal Engine 3)',
          installation: ['Extract the compressed game file.', 'Run Binaries/UnEulaLite and accept UDK\'s EULA.', 'Run the game!'],
        },
        changelog: [
          {
            version: '0.15 (Still a Prototype)',
            date: '2026-04-19',
            changes: ['Added UnEulaLite, making it playable on modern systems', 'Added compatibility with Ultrawide monitors', 'Changed website'],
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
        description: 'This is a zombie game that was developed using a custom-made 2D graphics engine. The aim of the game is to kill all the zombies before they can infect everyone.',
        downloadUrl: 'https://drive.google.com/file/d/14S5l6I_hjzYXFRn3xz-TDWlvzz3hRgKv/view?usp=sharing',
        images: ['/images/games/sanic-1.jpg', '/images/games/sanic-2.jpg'],
        //youtubeVideos: [],
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
        description: 'A homebrew action-platformer for the Game Boy Advance, inspired by the original Magical Pop\'n for SNES. It features a single boss fight, and an ending sequence.',
        downloadUrl:
          'https://drive.google.com/file/d/0B6QBHHAkKtjtZ2M1ZWdrTHdnaW8/view?resourcekey=0-uXezMaENQ9zCHtd4ROIjFw',
        images: [
          '/images/games/magicalpopn-1.jpg',
          '/images/games/magicalpopn-2.jpg',
          '/images/games/magicalpopn-3.jpg',
          '/images/games/magicalpopn-4.jpg',
        ],
        // youtubeVideos: [],
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
        description: 'A chess clock homebrew made for the Nintendo DS.',
        images: ['/images/games/chesscount-1.jpg', '/images/games/chesscount-2.jpg'],
        // youtubeVideos: [],
        features: ['Use the buttons closer to the player\'s hands to control the clock.', 'Customizable time settings', 'Simple and intuitive interface'],
        changelog: [
          {
            version: '1.0.0',
            date: '2012-04-12',
            changes: ['Private release.', 'If you would like it to be public, please let me know!'],
          },
        ],
      },
      {
        id: 'pongds',
        name: 'PongDS',
        description: 'Classic Pong game for the Nintendo DS, featuring simple controls and multiplayer on the same device.',
        downloadUrl: 'https://drive.google.com/file/d/1GGeeQkHAca299yCgXe4PBoLH7horNGVP/view?usp=sharing',
        images: ['/images/games/pongds-1.jpg', '/images/games/pongds-2.jpg'],
        // youtubeVideos: [],
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
        description: 'An attempt to port of the flash game Avalanche for the Nintendo DS.',
        images: ['/images/games/avalancheds-1.jpg'],
        // youtubeVideos: [],
        // features: [],
        changelog: [
          {
            version: '0',
            date: '2011-03-02',
            changes: ['Non-functional ROM.', 'If you would like it to be properly made, please let me know!'],
          },
        ],
      },
    ],
  },
  collaborations: [
    {
      id: 'kh2-rando',
      name: 'Kingdom Hearts 2 Randomizer',
      description:
        'Several improvements and fixes when playing KH2 Randomizer in Spanish (Steam/EPIC), which shuffles various game elements to create a unique experience each time.',
      downloadUrl: 'https://tommadness.github.io/KH2Randomizer/setup/Panacea-ModLoader/',
      images: ['/images/collabs/kh2-rando-1.jpg'],
      // youtubeVideos: [''],
    },
    {
      id: 'kh-refined',
      name: 'Kingdom Hearts Re:Fined',
      description:
        'Spanish translation (and Spanish Dub for KH2) for the refined versions of Classic Kingdom Hearts PC ports with QoL improvements and bug fixes.',
      downloadUrl: 'https://github.com/KH-ReFined/KH-ReFined',
      images: ['/images/collabs/kh-refined-1.jpg'],
      youtubeVideos: ['au0rhFks090'],
    },
    {
      id: 'brainrot-royale',
      name: 'Brainrot Royale',
      description:
        'Betatested the game in order to optimize it for ultrawide monitors and Steam Deck, including compatibility, performance and networking improvements.',
      downloadUrl: 'https://store.steampowered.com/app/878000/Brainrot_Royale/',
      images: ['/images/collabs/brainrot-royale-1.jpg'],
      youtubeVideos: ['z1-tFbFqXwo'],
    },
    {
      id: 'clueless-crew',
      name: 'Clueless Crew',
      description:
        'Betatested the game in order to optimize it for ultrawide monitors and Steam Deck, including compatibility, performance and networking improvements.',
      downloadUrl: 'https://store.steampowered.com/app/3252400/Clueless_Crew/',
      images: ['/images/collabs/clueless-crew-1.jpg'],
      youtubeVideos: ['vdptQDM8PLA'],
    },
    {
      id: 'remorse',
      name: 'Remorse: The List',
      description:
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
      description:
        'Spanish translation for Birth by Sleep Final Mix\'s PSP version, including menus, dialogues, and in-game text.',
      downloadUrl: 'https://mega.nz/folder/LMlQ0ZYa#DQYsHk4h48xaqS7q_vpBbA',
      images: ['/images/translations/khbbsfmspanish-1.jpg','/images/translations/khbbsfmspanish-2.jpg','/images/translations/khbbsfmspanish-3.jpg'],
      youtubeVideos: ['9zZ1bo90yYI'],
      features: [
        'Almost complete translation of all dialogues',
        'Translated menus and interfaces',
        'Compatible with PSP\'s exclusive multiplayer mode',
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
      description:
        'Full Spanish translation of the exclusive JRPG for the PlayStation 3, Drakengard 3.',
      downloadUrl: 'TO-DO',
      images: ['/images/translations/drakengard3-1.jpg', '/images/translations/drakengard3-2.jpg', '/images/translations/drakengard3-3.jpg', '/images/translations/drakengard3-4.jpg'],
      features: [
        'Translation faithful to the USA localization.',
        'Support for latest version and DLCs.',
      ],
      downloadInfo: {
        version: '1.0.0',
        size: '1 GB',
        requirements: 'RPCS3 Emulator or CFW PS3',
        installation: [
          'Install the PKG file',
          'Apply the translation patch',
        ],
      },
    },
  ],
  mods: [
    {
      id: 'kh2-spanish-mix',
      name: 'KINGDOM HEARTS 2: Spanish Mix - Voices in Castilian',
      description: 'Mod that includes Castilian Spanish voices for Kingdom Hearts 2.',
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/31',
      images: ['/images/mods/kh2spanishmix-1.jpg'],
      youtubeVideos: ['q1P7gPPuFH0'],
      features: [
        'Full dubbing in Castilian Spanish',
        'Resubbed cutscenes to go along with the Spanish voices',
        'Compatible with all versions',
      ],
      downloadInfo: {
        version: '1.3',
        size: '2.8 GB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod "TheSoraHD/KH2SpanishMix"', 'Build only, then play!'],
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
          changes: ['Mod compatibility with other mods improved', 'More FM-exclusive cutscenes dubbed'],
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
      description: 'Makes secret boss Sephiroth refightable in Kingdom Hearts 2. This is an enhanced port of CrazyCatz00\'s mod, which was originally created for the PS2 version of the game and has been updated for the HD Collection.',
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/87',
      images: [
        '/images/mods/sephirothas-1.jpg',
        '/images/mods/sephirothas-2.jpg',
        '/images/mods/sephirothas-3.jpg',
      ],
      // youtubeVideos: [],
      features: ['Refightable Sephiroth boss fight', 'Enhanced graphics and effects', 'Compatible with every language'],
      downloadInfo: {
        version: '2.0',
        size: '7.3 MB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod "TheSoraHD/KH2SephirothAS"', 'Build only, then play!'],
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
      description: 'Adds deleted Xemnas dialogues to the original game. This is a direct port of 13th Vessel\'s Xemnas unused quotes mod for the PS2 version.',
      downloadUrl: 'https://www.nexusmods.com/kingdomhearts2finalmix/mods/96',
      images: ['/images/mods/xemnasquotes-1.jpg'],
      youtubeVideos: ['cBhjAdvNwUg'],
      // features: [],
      downloadInfo: {
        version: '1.0',
        size: '168 KB',
        requirements: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX (Steam/EPIC)',
        installation: ['Use OpenKH Mod Manager', 'Install the mod "TheSoraHD/XemnasDeletedQuotes"', 'Build only, then play!'],
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
      description: 'Restores the original PSP voices in Crisis Core Reunion.',
      downloadUrl: 'https://www.nexusmods.com/crisiscoreff7reunion/mods/15',
      images: ['/images/mods/crisiscore-1.jpg'],
      features: ['99% in-game cutscenes voices that existed previously in the PSP version!', 'Compatible only with the latest version of the game.'],
      downloadInfo: {
        version: '0.2',
        size: '587.8 MB',
        requirements: 'Crisis Core: Final Fantasy VII Reunion (PC)',
        installation: ['Create a ~mods folder in the game directory', 'Extract the mod files into the ~mods folder', 'Go to Steam, Right-Click the game, Properties. Now, in General -> Additional Parameters, write -fileopenlog'],
      },
      changelog: [
        {
          version: '0.2',
          date: '2022-12-31',
          changes: ['Fixed Issue where after a cutscene in Chapter 2, there wouldn\'t be any voices for the majority of the game.', 'Fixed Crashes (like when talking to Angeal\'s Mother).', 'Fixed Fast Cutscenes with no sound.', 'Existing Save Games now work.'],
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
      name: 'Birth By Sleep Final Mix\'s Free Camera (Emulator)',
      description: 'Adds support for a second analog stick in PPSSPP emulator. Original work by TheOfficialFloW, who made the original patch for Adrenaline (PSP emulator on PSVita).',
      downloadUrl: 'https://mega.nz/file/idV0SD5b#lZ15ozM282sgokA66Aq8TwlKRGIZHvEGlQUcLHZ0W-4',
      images: ['/images/mods/bbsfm-camera-1.jpg'],
      // youtubeVideos: [],
      // features: [],
      downloadInfo: {
        version: '1.0',
        size: '3 KB',
        requirements: 'PPSSPP 1.11 or later',
        installation: ['Copy memstick folder to your PPSSPP folder, say overwrite if prompted.', 'Inside the emulator, go to Settings -> Controls -> Control mapping, configure your pad: RightAn.*'],
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
      description:
        'Tool to replace HCA audio within .awb/.uasset files. Created to restore the original English dub in Crisis Core Reunion.',
      downloadUrl: 'https://github.com/TheSoraHD/HCAreplace/',
      images: ['/images/mods/crisiscore-1.jpg'],
      features: ['Convert .wav files to HCA format', 'Replace HCA audio in .awb/.uasset files', 'Command-line interface'],
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
