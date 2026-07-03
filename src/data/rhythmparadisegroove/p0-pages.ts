import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { DataSource, GuideFaq, GuideSection } from './types';

export interface PriorityPage {
  route: string;
  label: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  updatedAt: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  featuredRoutes: string[];
  relatedRoutes: string[];
  sourceNotes: string;
  sources: DataSource[];
  sections: GuideSection[];
  faq: GuideFaq[];
}

const officialSource: DataSource = {
  type: 'official',
  label: 'Nintendo UK Rhythm Paradise Groove page',
  url: officialGameFacts.officialStoreUrl,
  checkedAt: OFFICIAL_CHECKED_AT,
  confidence: 'high',
  note: 'Used for confirmed platform, demo, player count, solo rhythm game count, multiplayer count, and mode names.',
};

const nintendoAuSource: DataSource = {
  type: 'official',
  label: 'Nintendo AU Rhythm Paradise Groove page',
  url: 'https://www.nintendo.com/au/games/nintendo-switch/rhythm-paradise-groove/',
  checkedAt: CHECKED_AT,
  confidence: 'high',
  note: 'Used to cross-check Rhythm Toy Box, Cafe, and official mode language.',
};

const beatspellSource: DataSource = {
  type: 'competitor',
  label: 'Gamereactor Beatspell guide',
  url: 'https://www.gamereactor.eu/rhythm-paradise-groove-guide-what-is-beatspell-and-tips-and-tricks-to-conquer-it-1742433/',
  checkedAt: CHECKED_AT,
  confidence: 'medium',
  note: 'Used to verify launch-week Beatspell guide demand, location context, and player confusion around the mode.',
};

const multiplayerVideoSource: DataSource = {
  type: 'youtube',
  label: 'Rhythm Heaven Groove - All Multiplayer Minigames',
  url: 'https://www.youtube.com/watch?v=0JZ4sSHzaFI',
  checkedAt: CHECKED_AT,
  confidence: 'medium',
  note: 'Used as a gameplay cross-check for multiplayer page planning. Article text is original and not transcript-based.',
};

const techRadarSource: DataSource = {
  type: 'review',
  label: 'TechRadar Rhythm Heaven Groove review',
  url: 'https://www.techradar.com/gaming/rhythm-heaven-groove-review',
  checkedAt: CHECKED_AT,
  confidence: 'medium',
  note: 'Used for current review context on Beatspell, multiplayer, side modes, and Switch play.',
};

const vergeSource: DataSource = {
  type: 'review',
  label: 'The Verge Rhythm Heaven Groove review',
  url: 'https://www.theverge.com/entertainment/959757/rhythm-heaven-groove-review-nintendo-switch',
  checkedAt: CHECKED_AT,
  confidence: 'medium',
  note: 'Used for launch-week TV latency and handheld timing context.',
};

const demoSource: DataSource = {
  type: 'community',
  label: 'Rhythm Heaven Groove Fandom page',
  url: 'https://rhythmheaven.fandom.com/wiki/Rhythm_Heaven_Groove',
  checkedAt: CHECKED_AT,
  confidence: 'medium',
  note: 'Used to cross-check demo scope and regional naming context. Official page remains the source for demo and save-transfer claims.',
};

export const priorityPages: PriorityPage[] = [
  {
    route: '/multiplayer',
    label: 'Multiplayer',
    eyebrow: 'Local Play',
    title: 'Rhythm Paradise Groove Multiplayer Guide',
    seoTitle:
      'Rhythm Paradise Groove Multiplayer Guide - Local Play and Party Setup',
    seoDescription:
      'Set up Rhythm Paradise Groove multiplayer with fair TV timing, player registration, party rules, and links to all multiplayer minigame advice.',
    summary:
      'Use multiplayer as a party mode, not a Perfect grind. Start with one fair screen, shared audio, readable games, and a rhythm-friendly way to rotate players.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Multiplayer', 'Local Play', 'Party'],
    featuredRoutes: [
      '/multiplayer/all-minigames',
      '/setup/handheld-vs-tv',
      '/setup/bluetooth-audio-lag',
    ],
    relatedRoutes: [
      '/modes',
      '/guides/multiplayer-party-guide',
      '/setup',
      '/minigames',
    ],
    sourceNotes:
      'Built from official multiplayer count, current review context, and launch-week multiplayer gameplay references.',
    sources: [officialSource, multiplayerVideoSource, techRadarSource],
    sections: [
      {
        heading: 'Start with fairness, not difficulty',
        paragraphs: [
          'Multiplayer in Rhythm Paradise Groove works best when every player is sharing the same rhythm environment. That sounds obvious, but it is the difference between a funny party round and a session where one person quietly has a worse timing setup. Put everyone on the same screen, use the same audio, and keep the room volume high enough that players can hear cues without relying only on animation.',
          'The first goal is not to find the hardest multiplayer game. The first goal is to make the group understand the timing language together. Pick readable games, let new players watch one round, and avoid long rules explanations before they have felt the beat. Once the group hears the calls and responses, faster or stranger games become much easier to enjoy.',
        ],
        bullets: [
          'Use one low-lag TV or handheld tabletop setup for everyone.',
          'Use shared speakers instead of mixed headphone and speaker timing.',
          'Let new players watch once before rotating in.',
          'Save harder games for after the room can keep a steady beat.',
        ],
      },
      {
        heading: 'Player registration changes the mood',
        paragraphs: [
          'Several launch impressions point out that multiplayer has a social layer beyond the inputs. Player registration and name callouts can make the session feel more personal, which is great for a party but also a reason to keep the mood relaxed. If one player is getting called out repeatedly, switch games or teams before the joke turns into pressure.',
          'A good local session should feel like rhythm karaoke: people are allowed to laugh, miss, and recover. If you treat every miss like a ranked match, the group will start watching the score instead of listening to the music. Keep the focus on readable cues and funny recovery moments, especially when the group has mixed experience with rhythm games.',
        ],
      },
      {
        heading: 'Use teams and rotations to protect weaker players',
        paragraphs: [
          'Mixed-skill multiplayer needs structure. Pair a confident player with a beginner, rotate after short sets, and choose one practice goal per round. For example, one round can focus only on hearing the call. Another can focus on staying calm after a miss. That keeps the room moving and prevents one person from getting stuck in the same failed input loop.',
          'If someone is always late, do not assume they have bad rhythm. Swap controllers, move them closer to the speakers, and compare handheld or tabletop mode if the TV feels suspicious. Rhythm Paradise Groove is sensitive to latency, so a party setup can create problems that would not show up in solo handheld play.',
        ],
      },
      {
        heading: 'When multiplayer should send you back to setup',
        paragraphs: [
          'The warning sign is group-wide lateness. If most players miss the same way, the TV or audio path is probably interfering. Pause the party and use the setup pages before deciding the game is unfair. If only one player is struggling, simplify the cue and let them play one slower game before returning to the faster one.',
          'Use multiplayer as a stress test after setup feels good, not as the first place to diagnose the entire system. Once the room timing is fair, the mode becomes one of the best reasons to keep the game installed: short, funny rounds with enough rhythm depth to reward repeat sessions.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Rhythm Paradise Groove have local multiplayer?',
        answer:
          'Yes. Nintendo lists local play for 1-4 players and more than 30 multiplayer rhythm games.',
      },
      {
        question: 'What is the best multiplayer setup?',
        answer:
          'Use one low-lag screen, shared audio, charged controllers, and readable games before moving into harder party rounds.',
      },
      {
        question:
          'Should multiplayer use the same timing setup as solo Perfect attempts?',
        answer:
          'Use the same low-lag principles, but prioritize shared audio and room fairness over one player having a private perfect setup.',
      },
    ],
  },
  {
    route: '/multiplayer/all-minigames',
    label: 'All Multiplayer Minigames',
    eyebrow: 'Multiplayer List',
    title: 'Rhythm Paradise Groove All Multiplayer Minigames Guide',
    seoTitle:
      'Rhythm Paradise Groove All Multiplayer Minigames - Party Route Guide',
    seoDescription:
      'Browse Rhythm Paradise Groove multiplayer minigame advice with party routing, cue clarity, team rotation, and timing setup tips.',
    summary:
      'The first version of this multiplayer list is a route guide: group the games by how they feel to play, then choose the right set for the room.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Multiplayer', 'Minigames', 'Party Route'],
    featuredRoutes: ['/multiplayer', '/setup/handheld-vs-tv', '/modes'],
    relatedRoutes: [
      '/multiplayer',
      '/guides/multiplayer-party-guide',
      '/setup',
      '/links',
    ],
    sourceNotes:
      'First-version multiplayer list built from the official 30+ multiplayer count and launch-week all-multiplayer video cross-checks.',
    sources: [officialSource, multiplayerVideoSource],
    sections: [
      {
        heading: 'Use a route list before individual pages',
        paragraphs: [
          'Rhythm Paradise Groove has enough multiplayer content that the long-term site can eventually split individual games into their own pages. The first useful page, though, is not thirty thin cards. It is a route list that helps a group decide what to play next. Multiplayer players usually do not search because one exact game blocked them. They search because the room needs a fair, funny, readable setup.',
          'Treat the multiplayer list as a party menu. Start with games that make the beat obvious, move into games with faster response changes, and save the most chaotic or coordination-heavy rounds for later. That order keeps new players from feeling ambushed and gives experienced players a reason to stay engaged.',
        ],
      },
      {
        heading: 'Group games by player job',
        paragraphs: [
          'The easiest way to organize multiplayer is by player job rather than by unlock order. Some games ask everyone to do the same input together. Some ask players to answer different cues. Some create pressure by making one person recover after another player misses. Those categories matter more for party planning than the exact visual theme.',
          'When the room is new, pick same-action games first. When people are warmed up, pick response-switching games. When the group is laughing and comfortable, pick games where one player can create a funny recovery moment for the others. This gives the session a natural curve instead of a random playlist.',
        ],
        bullets: [
          'Same-action games are best for first rounds.',
          'Call-and-response games are best after everyone hears the cue language.',
          'Recovery-heavy games are best when the room can laugh at misses.',
          'High-pressure games work better after the TV and audio setup is proven.',
        ],
      },
      {
        heading: 'How to turn the video list into written pages later',
        paragraphs: [
          'The current all-multiplayer video references are useful for verifying that the mode has real breadth, but the site should not turn a video timeline into copied prose. The better expansion path is to watch for player search behavior after launch: exact game names, phrases like "how to unlock multiplayer", and specific party setup questions. Those are the pages worth splitting out.',
          'When individual multiplayer pages are added, each one should answer a practical question: what does the group listen for, what input does each player own, how do you make it fair for beginners, and what setup problem can make the game feel wrong. A page that only names the game and says "press on beat" is not worth publishing.',
        ],
      },
      {
        heading: 'Use this list with the setup pages',
        paragraphs: [
          'The multiplayer list should be paired with timing setup pages. If the group is consistently late, pick a simpler game and test the TV. If one controller feels suspicious, swap it before blaming the player. If the room is loud, raise the game audio or move players closer to the speakers. Party play is forgiving emotionally, but it is still a rhythm mode.',
          'Once the setup is fair, the list becomes a good internal hub. It can link to exact multiplayer pages later, while still helping players today choose a clean route through the mode.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are all multiplayer minigames listed here individually?',
        answer:
          'This first version is a route guide rather than thirty thin pages. Individual multiplayer pages should be split out when exact-name search demand is clear.',
      },
      {
        question: 'What should a group play first?',
        answer:
          'Start with readable same-action games, then move into cue switching and recovery-heavy games once everyone hears the beat.',
      },
      {
        question: 'Why not copy a YouTube all-minigames timeline?',
        answer:
          'A timeline is useful as a source check, but a written guide should explain decisions, setup, player roles, and party flow in original language.',
      },
    ],
  },
  {
    route: '/beatspell',
    label: 'Beatspell',
    eyebrow: 'Side Mode',
    title: 'Rhythm Paradise Groove Beatspell Full Guide',
    seoTitle:
      'Rhythm Paradise Groove Beatspell Guide - Dungeon Mode Tips and Route',
    seoDescription:
      'Learn Rhythm Paradise Groove Beatspell with unlock context, rhythm combat habits, spell timing, setup advice, and when to return to Solo practice.',
    summary:
      'Beatspell looks like an RPG side mode, but the winning habit is still rhythm-first: hear the loop, answer calmly, and treat upgrades as support.',
    updatedAt: CHECKED_AT,
    difficulty: 'Intermediate',
    tags: ['Beatspell', 'Dungeon', 'Side Mode'],
    featuredRoutes: [
      '/beatspell/how-to-unlock',
      '/guides/beatspell-guide',
      '/setup/handheld-vs-tv',
    ],
    relatedRoutes: ['/modes', '/walkthrough', '/guides/beginner-guide'],
    sourceNotes:
      'Expanded from official mode naming, Nintendo Treehouse footage, launch reviews, and current Beatspell guide demand.',
    sources: [officialSource, beatspellSource, techRadarSource],
    sections: [
      {
        heading: 'Beatspell is rhythm combat, not normal RPG combat',
        paragraphs: [
          'Beatspell can trick players because it borrows RPG language: battles, enemies, spells, pressure, and progress. The important thing is that it does not stop being Rhythm Paradise Groove. You are not trying to out-menu the enemy. You are trying to understand the beat pattern well enough that the spell response lands where the music expects it.',
          'That means the first practice rule is simple: do not mash when the screen looks dangerous. Listen for the combat loop, find the response point, and let the animation confirm the timing rather than decide it. If you react only to enemy movement, Beatspell starts feeling like a messy action mode. If you react to rhythm, the RPG layer becomes easier to read.',
        ],
      },
      {
        heading: 'Separate danger pressure from timing pressure',
        paragraphs: [
          'Normal Solo games often tell one joke at a time. Beatspell layers danger on top of rhythm, which can make players press early. When a monster attacks, the screen is asking you to care, but the music is still telling you when to move. Keep those two forms of pressure separate. Danger tells you what matters. Rhythm tells you when it matters.',
          'If a fight feels unfair, replay it while ignoring progress for one attempt. Only listen for the loop. Count the gap between cue and response. Notice whether your hand wants to answer before the phrase resolves. That one quiet run usually teaches more than five nervous attempts where every mistake feels urgent.',
        ],
        bullets: [
          'Use the first attempt to hear the loop instead of forcing progress.',
          'Treat enemy animation as context, not the main timer.',
          'Name whether a miss was early panic, late recognition, or wrong cue.',
          'Return to Solo timing setup if every response feels delayed.',
        ],
      },
      {
        heading: 'Use upgrades as support, not an escape hatch',
        paragraphs: [
          'If Beatspell includes progression choices in your route, use them to reduce pressure, but do not expect them to solve the core timing problem. A stronger setup can make a fight more forgiving, yet the mode still asks for clean rhythm decisions. If you keep missing the same spell window, more confidence helps less than one honest practice run on that cue.',
          'The healthy loop is: identify the fight pattern, improve the rhythm response, then use upgrades or route choices to smooth the run. The unhealthy loop is: lose timing, blame stats, change everything, and return with the same early input. Beatspell rewards players who know which problem they are solving.',
        ],
      },
      {
        heading: 'Where Beatspell fits in your full route',
        paragraphs: [
          'Beatspell is a good break from Perfect grinding because it keeps your ear active without repeating one tiny mistake. If a Solo minigame is making you tense, switch to Beatspell for a short session, then come back once your timing feels relaxed again. The mode gives variety without pulling you out of the rhythm language.',
          'Do not make Beatspell your first latency test, though. Because battles are busier than early Solo pages, it is harder to tell whether a miss came from setup, nerves, or misunderstanding. Test timing on a simple Solo game first, then use Beatspell once your screen and audio path feel honest.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Beatspell in Rhythm Paradise Groove?',
        answer:
          'Beatspell is an RPG-flavored rhythm side mode. It uses battle pressure, but the core skill is still hearing and answering rhythm cues.',
      },
      {
        question: 'Is Beatspell required before Perfect cleanup?',
        answer:
          'No. It is better used as a side route or timing break after your basic Solo setup is stable.',
      },
      {
        question: 'Why does Beatspell feel harder than normal minigames?',
        answer:
          'It adds danger and RPG framing on top of timing. The inputs are easier to read when you separate screen pressure from rhythm pressure.',
      },
    ],
  },
  {
    route: '/beatspell/how-to-unlock',
    label: 'Beatspell Unlock',
    eyebrow: 'Unlock Route',
    title: 'How to Unlock Beatspell in Rhythm Paradise Groove',
    seoTitle:
      'How to Unlock Beatspell in Rhythm Paradise Groove - Location and Tips',
    seoDescription:
      'Find how Beatspell fits into Rhythm Paradise Groove, when to look for it, what to do before starting, and how to avoid early side-mode confusion.',
    summary:
      'Beatspell is easier to approach once you know where it sits in the Solo flow and what you should prepare before treating it as a serious mode.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Beatspell', 'Unlock', 'Route'],
    featuredRoutes: ['/beatspell', '/modes', '/guides/full-walkthrough-route'],
    relatedRoutes: ['/beatspell', '/demo/demo-vs-full-game', '/setup'],
    sourceNotes:
      'Built from launch-week Beatspell location discussion and official mode confirmation. Avoids unsupported exact unlock conditions beyond public source confidence.',
    sources: [officialSource, beatspellSource],
    sections: [
      {
        heading: 'Look for Beatspell as a side-mode unlock, not a menu code',
        paragraphs: [
          'Players search for Beatspell unlocks because the mode sounds separate from the normal rhythm game route. The safest way to think about it is as a side-mode destination that appears as you progress, not as a code, secret download, or separate campaign you need to install. Nintendo presents Beatspell as part of the game, and launch guides place it in the broader Frontside activity map.',
          'Because public sources can describe location context more confidently than every exact save-state requirement, this page stays practical: keep clearing Solo content, check the mode/activity area as new options open, and avoid assuming your file is broken just because Beatspell is not visible in the first few minutes.',
        ],
      },
      {
        heading: 'What to do before you enter',
        paragraphs: [
          'Before starting Beatspell seriously, make sure one simple Solo game feels honest on your setup. Beatspell is busier than early rhythm pages, so it is a poor place to diagnose TV lag for the first time. If you are already fighting late audio or a processed TV image, the mode will make the problem feel like confusing combat.',
          'A good pre-Beatspell checklist is short: test handheld or low-lag TV play, clear a few normal rhythm games, and make sure you understand the difference between listening for a cue and reacting to an animation. That foundation makes the mode feel like a rhythm battle rather than a noisy side screen.',
        ],
        bullets: [
          'Clear a few early Solo games first.',
          'Check the mode or activity map after new unlocks appear.',
          'Use handheld mode as a timing baseline if the TV feels late.',
          'Read the full Beatspell guide before grinding fights.',
        ],
      },
      {
        heading: 'Do not confuse unlock trouble with timing trouble',
        paragraphs: [
          'There are two very different problems players can have: finding the mode and playing the mode. If you cannot find Beatspell yet, continue normal progression and check the relevant activity area again. If you can enter but keep losing, the unlock is not the problem. You need rhythm combat practice.',
          'That distinction matters for search pages because a player who searches "how to unlock Beatspell" may actually need the full Beatspell guide after the mode opens. This page should get them to the right next step quickly instead of pretending every issue is a hidden requirement.',
          'A practical route is to check Beatspell after each meaningful Solo progress step, then play one short attempt when it appears. If the first attempt feels chaotic, leave the mode and fix one timing habit before returning. That keeps the unlock search connected to actual play instead of turning it into menu checking.',
        ],
      },
      {
        heading: 'When this page should be updated',
        paragraphs: [
          'If the community documents a precise medal count, stage gate, or route requirement, this page should be updated with that exact condition and source. Until then, the safe advice is to keep progressing through Solo mode, use the in-game activity layout, and avoid spreading guessed unlock numbers.',
          'That restraint is good for users. Wrong unlock requirements are worse than a conservative page, because they send players grinding the wrong thing. The current version focuses on confirmed mode context, preparation, and the next page to read once Beatspell is available.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Beatspell a separate download?',
        answer:
          'No. Beatspell is part of Rhythm Paradise Groove. Treat it as an in-game side mode that opens through normal play.',
      },
      {
        question: 'Should I start Beatspell immediately?',
        answer:
          'Try it when available, but make sure basic Solo timing feels stable first so you do not confuse setup lag with combat difficulty.',
      },
      {
        question: 'Will this page list exact unlock requirements?',
        answer:
          'Yes when a reliable exact requirement is verified. Until then it avoids guessed medal counts or unsupported route claims.',
      },
    ],
  },
  {
    route: '/setup/handheld-vs-tv',
    label: 'Handheld vs TV',
    eyebrow: 'Timing Setup',
    title: 'Rhythm Paradise Groove Handheld vs TV Mode Guide',
    seoTitle:
      'Rhythm Paradise Groove Handheld vs TV - Fix Timing and Input Lag',
    seoDescription:
      'Compare Rhythm Paradise Groove handheld and TV mode timing with Game Mode, audio latency checks, calibration, and Perfect practice advice.',
    summary:
      'Handheld mode is the cleanest baseline. TV mode can still be great, but only after display processing and audio delay are under control.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Setup', 'TV Mode', 'Handheld'],
    featuredRoutes: [
      '/setup/bluetooth-audio-lag',
      '/guides/tv-calibration-input-lag',
      '/guides/perfect-solo-minigames',
    ],
    relatedRoutes: ['/setup', '/demo/demo-vs-full-game', '/multiplayer'],
    sourceNotes:
      'Built from official TV timing support and launch reviews that discuss TV latency concerns.',
    sources: [officialSource, vergeSource, techRadarSource],
    sections: [
      {
        heading: 'Use handheld mode as your control test',
        paragraphs: [
          'If Rhythm Paradise Groove feels wrong, handheld mode should be your first comparison point. It removes a long chain of possible problems: TV picture processing, receiver delay, soundbar latency, wireless audio, and room speaker distance. That does not mean handheld is the only correct way to play. It means handheld gives you a cleaner answer to the question: is the cue itself making sense?',
          'Play one simple Solo minigame in handheld mode until you can describe the cue. Then play the same game on the TV without changing your practice goal. If handheld feels steady and TV feels late, your display or audio path needs attention. If both feel equally wrong, the issue is probably cue understanding or tired practice rather than the screen.',
        ],
      },
      {
        heading: 'TV mode needs fewer image features, not more',
        paragraphs: [
          'Modern TVs like to improve movies with motion smoothing, noise reduction, dynamic contrast, and extra processing. Rhythm games dislike that. Before you judge the game, put the TV input into Game Mode or PC Mode and turn off optional picture features. A prettier image is not worth a delayed beat.',
          'Do not calibrate first and change TV settings later. That creates a moving target. Lock the low-lag TV setup first, then test calibration. If you change HDMI input, sound system, headphones, or TV mode, repeat the comparison. Rhythm timing is a chain, and one changed link can move the whole feel.',
        ],
        bullets: [
          'Start handheld to learn the cue.',
          'Enable Game Mode or PC Mode on the TV input.',
          'Disable motion smoothing and extra picture processing.',
          'Calibrate only after display and audio settings are stable.',
        ],
      },
      {
        heading: 'Audio delay can masquerade as input lag',
        paragraphs: [
          'A player often says "my button is late" when the real problem is that the sound arrives late. If the Switch sends audio through a TV, soundbar, receiver, Bluetooth device, or capture setup, the cue can reach your ear after the game expected it to. Your hands then look wrong even if the controller is fine.',
          'Test with the simplest possible audio route. Handheld speakers are a baseline. TV speakers are often a better test than a complicated soundbar chain. Wired headphones can be useful if your setup supports them cleanly. Once you know which route feels honest, compare every other audio device against that baseline.',
        ],
      },
      {
        heading: 'Which mode should you use for Perfect attempts?',
        paragraphs: [
          'Use the mode that feels consistent. For many players that will be handheld. For others, a properly configured TV will be comfortable and more social. The important thing is that Perfect attempts should not happen on a setup you are still suspicious of. If you are mentally compensating for lag, you are training around a problem instead of learning the cue.',
          'A good rule is to do one warm-up clear in the mode you plan to use. If the cue feels natural, continue. If you immediately start saying "that should have counted", stop and test the setup before spending more Perfect windows.',
          'For multiplayer or family play, TV mode may be the right choice even if handheld is cleaner for solo practice. Just separate those goals. Use handheld to prove what honest timing feels like, then tune TV mode until the group setup gets close enough that everyone can trust the beat.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is handheld mode better for Rhythm Paradise Groove?',
        answer:
          'Handheld mode is usually the cleanest timing baseline because it removes TV and audio-chain delay. A low-lag TV setup can still be good.',
      },
      {
        question: 'Why does TV mode feel late?',
        answer:
          'TV picture processing or audio delay can shift the cue. Enable Game Mode, simplify audio, then calibrate.',
      },
      {
        question: 'Should I practice Perfects on TV?',
        answer:
          'Only if the TV setup feels consistent after testing. If handheld is clean and TV is suspicious, solve TV timing first.',
      },
    ],
  },
  {
    route: '/setup/bluetooth-audio-lag',
    label: 'Bluetooth Audio Lag',
    eyebrow: 'Audio Setup',
    title: 'Rhythm Paradise Groove Bluetooth Audio Lag Guide',
    seoTitle:
      'Rhythm Paradise Groove Bluetooth Audio Lag - Best Audio Setup Tips',
    seoDescription:
      'Fix Rhythm Paradise Groove Bluetooth audio lag with wired audio checks, TV speaker tests, handheld baselines, and Perfect practice advice.',
    summary:
      'Bluetooth audio can make rhythm cues arrive late. Use it casually if it feels fine, but test wired or direct audio before serious Perfect practice.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Setup', 'Audio Lag', 'Bluetooth'],
    featuredRoutes: [
      '/setup/handheld-vs-tv',
      '/guides/tv-calibration-input-lag',
      '/minigames/hoop-trundling',
    ],
    relatedRoutes: ['/setup', '/guides/perfect-solo-minigames', '/demo'],
    sourceNotes:
      'Built from common rhythm-game latency practice, official timing support, and launch reviews that call out timing sensitivity.',
    sources: [officialSource, vergeSource],
    sections: [
      {
        heading: 'Bluetooth is convenient, but rhythm games are picky',
        paragraphs: [
          'Bluetooth audio is fine for many games because a tiny sound delay does not change the decision. Rhythm Paradise Groove is different. The cue is the instruction, so delayed audio can make your correct input look late. You may press exactly when you hear the sound and still be behind the game clock.',
          'That does not mean Bluetooth is forbidden. It means you should not use it as your main diagnostic setup. If a minigame feels unfair, test with handheld speakers, TV speakers, or a wired route before deciding your timing is bad. The simpler the audio chain, the easier it is to trust the result.',
        ],
      },
      {
        heading: 'Run a three-route audio test',
        paragraphs: [
          'A useful audio test has three steps. First, play a simple minigame in handheld mode with built-in sound. Second, play the same game on the TV using TV speakers. Third, test your Bluetooth device. Do not change the minigame or practice goal between tests. You are trying to isolate the audio path, not prove skill.',
          'If Bluetooth is the only route that feels late, keep it for casual play and switch away for Perfect windows. If TV speakers and Bluetooth both feel late compared with handheld, the TV path may need calibration or Game Mode work. If every route feels wrong, the cue itself needs practice.',
        ],
        bullets: [
          'Test one easy minigame, not a hard Remix.',
          'Compare handheld speakers before changing settings.',
          'Use TV speakers as a simple docked baseline.',
          'Treat Bluetooth as a convenience path, not the control path.',
        ],
      },
      {
        heading: 'Do not calibrate around unstable audio',
        paragraphs: [
          'Calibration can help, but it should not be used to rescue a messy setup. If your audio device adds inconsistent delay, calibration may make one cue feel better and another feel strange. The better move is to simplify the path first. Once the delay is stable, calibration has something reliable to correct.',
          'This matters most for Perfect attempts. A casual clear can survive a small delay because you can adapt. A Perfect window punishes tiny uncertainty. If you want clean medals, use the audio route that lets you stop thinking about the hardware.',
          'If you still prefer Bluetooth, make that choice deliberately. Pick one device, keep the same connection path, and test it on a simple minigame before moving to Remixes or advanced pages. Changing headphones, speakers, or TV audio output between attempts can make your practice notes unreliable.',
        ],
      },
      {
        heading: 'Best audio choice for different sessions',
        paragraphs: [
          'For solo Perfect practice, use the most direct route you can tolerate: handheld speakers, wired headphones, or low-lag TV speakers. For multiplayer, shared speakers are usually better than one player wearing headphones, even if the headphone path is technically cleaner, because everyone needs the same cue timing.',
          'For casual play, use whatever keeps the game fun. The only mistake is refusing to test. If you know Bluetooth is slightly late, you can choose when it is acceptable and when to switch to a cleaner setup.',
          'The easiest habit is to keep two setups in mind: a comfort setup and a cleanup setup. The comfort setup is for relaxed sessions. The cleanup setup is the one you trust when a Perfect window, Remix route, or tricky Beatspell fight needs precise audio. Switching intentionally is much better than wondering why the same cue feels different every night.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Bluetooth audio bad for Rhythm Paradise Groove?',
        answer:
          'It can add enough delay to hurt timing. Test it against handheld or wired audio before using it for Perfect attempts.',
      },
      {
        question: 'Should I calibrate while using Bluetooth headphones?',
        answer:
          'Only if that Bluetooth delay is stable and you plan to keep using that exact setup. For serious practice, a simpler audio path is safer.',
      },
      {
        question: 'What audio setup is best for multiplayer?',
        answer:
          'Shared low-lag speakers are usually best because all players hear the same cue at the same time.',
      },
    ],
  },
  {
    route: '/demo/minigames',
    label: 'Demo Minigames',
    eyebrow: 'Demo Route',
    title: 'Rhythm Paradise Groove Demo Minigames Guide',
    seoTitle:
      'Rhythm Paradise Groove Demo Minigames - What to Play and Test First',
    seoDescription:
      'Use the Rhythm Paradise Groove demo minigames to test timing, handheld vs TV feel, multiplayer basics, and whether the full game is right for you.',
    summary:
      'The demo should be used as a timing audition. Play fewer games more carefully, compare setups, and decide whether the full game will feel fair.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Demo', 'Minigames', 'Timing Test'],
    featuredRoutes: [
      '/demo/demo-vs-full-game',
      '/setup/handheld-vs-tv',
      '/guides/demo-save-transfer',
    ],
    relatedRoutes: ['/demo', '/minigames', '/release', '/setup'],
    sourceNotes:
      'Built from official demo confirmation and community cross-checks that describe the demo as a small playable sample.',
    sources: [officialSource, demoSource],
    sections: [
      {
        heading: 'Do not rush the demo checklist',
        paragraphs: [
          'The Rhythm Paradise Groove demo is small enough that it is tempting to touch every available screen once and call it done. That is the least useful way to use it. A rhythm demo should answer whether your setup feels honest and whether the cue language makes sense. You learn that by replaying a few sections carefully, not by speed-running the menu.',
          'Start with one simple single-player minigame. Play it in handheld mode, then play it on the TV. If the same cue suddenly feels late, you have learned something important before buying or before starting a long full-game session. If both modes feel clean, the demo has done its job: it proved the basic rhythm path is trustworthy.',
        ],
      },
      {
        heading: 'What the demo can and cannot prove',
        paragraphs: [
          'The demo can prove timing feel, controller comfort, whether the game style clicks for you, and whether local multiplayer is worth trying with your group. It cannot prove the full difficulty curve, every Remix, every side mode, or long-term Perfect cleanup. Treat it as a practical audition, not a complete review copy.',
          'If you are new to Rhythm Heaven-style games, the demo is also a good reminder that visuals are not the main timer. Watch once to understand the joke, then replay by sound. If the second run feels better than the first, that is a strong sign the full game will reward practice.',
        ],
        bullets: [
          'Test one simple minigame in handheld and TV mode.',
          'Replay until you can name the cue in plain words.',
          'Try multiplayer only after the solo timing feels fair.',
          'Use the demo to test comfort, not to judge every full-game mode.',
        ],
      },
      {
        heading: 'How to read misses during the demo',
        paragraphs: [
          'A demo miss is useful if you can name it. Late after the cue, early because the animation looked urgent, wrong response because you missed the call, or distracted because the joke pulled your eyes away. Once you can name the miss, the game is teachable. If every miss feels random, slow down and test setup before blaming yourself.',
          'Do not chase Perfects in the demo unless the cue already feels boring. The better first goal is consistent clears. A clean clear teaches more about whether the full game will be fun than one stressful medal attempt.',
        ],
      },
      {
        heading: 'When the demo says buy, wait, or fix setup',
        paragraphs: [
          'Buy or continue when the rhythm feels fair, the humor lands for you, and at least one replay gets cleaner. Wait if you like the style but the setup feels suspicious and you have not tested handheld yet. Fix setup first if handheld feels good and TV mode feels late. That is a solvable hardware problem, not necessarily a game problem.',
          'The demo is especially valuable because save transfer exists on the official page. Use the same profile, avoid deleting the demo before confirming transfer, and keep your first clears calm if you intend to continue in the full version.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many minigames are in the demo?',
        answer:
          'Community references describe a small sample with several single-player games and one multiplayer game, while Nintendo confirms the demo itself and save-transfer support.',
      },
      {
        question: 'Should I play the demo on TV or handheld?',
        answer:
          'Play both. Handheld gives a clean baseline, and TV mode tells you whether your display or audio setup needs work.',
      },
      {
        question: 'Should I chase Perfects in the demo?',
        answer:
          'Only after normal clears feel stable. The demo is more useful as a timing and comfort test than a medal grind.',
      },
    ],
  },
  {
    route: '/demo/demo-vs-full-game',
    label: 'Demo vs Full Game',
    eyebrow: 'Buy Decision',
    title: 'Rhythm Paradise Groove Demo vs Full Game Guide',
    seoTitle:
      'Rhythm Paradise Groove Demo vs Full Game - Save Transfer and Buying Tips',
    seoDescription:
      'Compare the Rhythm Paradise Groove demo and full game with save transfer, setup testing, multiplayer checks, side modes, and buying advice.',
    summary:
      'The demo tells you whether the timing and style work for you. The full game is where Solo routes, Remixes, Beatspell, multiplayer, and Perfect cleanup become the real loop.',
    updatedAt: CHECKED_AT,
    difficulty: 'Beginner',
    tags: ['Demo', 'Full Game', 'Save Transfer'],
    featuredRoutes: ['/demo/minigames', '/release', '/setup/handheld-vs-tv'],
    relatedRoutes: ['/demo', '/guides/demo-save-transfer', '/minigames'],
    sourceNotes:
      'Built from official demo and save-transfer confirmation, official full-game feature counts, and current launch review context.',
    sources: [officialSource, demoSource, techRadarSource],
    sections: [
      {
        heading: 'The demo answers setup and taste questions',
        paragraphs: [
          'The demo is not trying to be the whole game. Its job is to tell you whether Rhythm Paradise Groove feels good on your Switch, your screen, your audio path, and your hands. If the timing feels fair and the humor works for you, the full game has a strong chance of landing. If the timing feels wrong, the demo gives you a safe place to diagnose before buying or before committing to a long route.',
          'Use the demo to test handheld versus TV, button comfort, cue clarity, and whether the rhythm-game style makes you want to replay. Do not judge the full game only by how many modes are visible in the sample. Judge whether the core action feels honest enough to support dozens of stages later.',
        ],
      },
      {
        heading: 'The full game is about breadth and cleanup',
        paragraphs: [
          `Nintendo lists ${officialGameFacts.soloGameCount}, ${officialGameFacts.multiplayerGameCount}, Beatspell, Drum Lessons, Rhythm Toy Box, Cafe, and other side content. That breadth is the reason the full game works differently from the demo. The demo checks the feel. The full game gives you the long route: base games, evolved versions, Remixes, multiplayer, side modes, and Perfect cleanup.`,
          'If you already know you enjoy short rhythm challenges, the full game value comes from repetition with variation. A cue you learn early returns under different pressure later. A simple timing idea becomes a Remix transition. A casual clear becomes a Perfect target. That arc is hard for a small demo to show completely.',
        ],
        bullets: [
          'Demo: timing test, taste check, save-transfer start.',
          'Full game: Solo route, Remixes, Beatspell, multiplayer, side modes.',
          'Demo decision: does the game feel fair enough to replay?',
          'Full-game decision: do you want long-term Perfect and party coverage?',
        ],
      },
      {
        heading: 'Save transfer makes calm demo play worthwhile',
        paragraphs: [
          'Nintendo says demo save data can transfer to the full version. That makes the demo more than a disposable preview. Use the same Switch user profile, avoid deleting the demo before the full version confirms progress, and treat your first clears as real progress if you intend to continue.',
          'At the same time, do not over-optimize the demo like a competitive file. The point is still to test feel. If you spend the entire sample chasing a Perfect while your TV has delay, you are learning the wrong lesson. Fix setup, clear calmly, and let the full game carry the long grind.',
        ],
      },
      {
        heading: 'Who should buy after the demo?',
        paragraphs: [
          'Buy after the demo if the music cues feel readable, at least one replay improves, and you can imagine returning for Perfects or multiplayer. Wait if you only played on a laggy TV and never tested handheld. Skip or watch more footage if the core call-and-response style does not click even after a clean setup.',
          'For returning Rhythm Heaven players, the demo is mostly a confidence check. For new players, it is a learning check. If the second or third attempt feels clearer than the first, you are the kind of player the full game can teach.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Rhythm Paradise Groove demo progress transfer?',
        answer:
          'Nintendo says demo save data can be transferred to the full version. Use the same Switch profile and confirm transfer in-game.',
      },
      {
        question: 'Is the demo enough to judge the full game?',
        answer:
          'It is enough to judge timing feel and basic taste. It is not enough to judge the full Solo route, Remixes, Beatspell, or long-term Perfect cleanup.',
      },
      {
        question: 'Should I buy if TV mode feels bad in the demo?',
        answer:
          'Test handheld mode first. If handheld feels clean and TV feels late, fix the TV/audio setup before judging the game.',
      },
    ],
  },
];

export const priorityPageLabels = Object.fromEntries(
  priorityPages.map((page) => [page.route, page.label])
);

export function getPriorityPage(route: string) {
  return priorityPages.find((page) => page.route === route);
}
