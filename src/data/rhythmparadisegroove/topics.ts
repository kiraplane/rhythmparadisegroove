import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/rhythmparadisegroove/hero.png';

export const topicPages = {
  minigames: {
    route: '/minigames',
    label: 'Minigames',
    eyebrow: 'Solo Hub',
    title: 'Rhythm Paradise Groove Minigames',
    seoTitle:
      'Rhythm Paradise Groove Minigames - 60 Solo Guides and Perfect Tips',
    seoDescription:
      'Explore 60 Rhythm Paradise Groove Solo minigame guides with base and evolved 2 cue notes, Perfect risks, Frontside and Flipside routing.',
    summary:
      'Use this hub to enter individual minigame pages, learn each cue in plain English, and return for Perfect attempts after setup is honest.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/perfect-solo-minigames',
      '/guides/full-walkthrough-route',
      '/remixes',
      '/setup',
    ],
    sections: [
      {
        heading: 'Start with the verified Solo practice pages',
        paragraphs: [
          `Nintendo lists ${officialGameFacts.soloGameCount} in Rhythm Paradise Groove, so the full guide database needs more than a single catch-all article. The current verified version covers 30 base Solo minigame pages plus 30 evolved 2 pages from the Frontside and Flipside route.`,
          'Each page focuses on the player job: what cue to trust, what input to prepare, and what mistake usually breaks a Perfect run. Remix pages are split into route-style guides because they combine several cue families rather than teaching one isolated pattern.',
        ],
      },
      {
        heading: 'What each minigame page includes',
        paragraphs: [
          'A useful minigame page should name the cue, input type, fake-out, common late or early miss, and Perfect danger moment. It should not be a plot summary or a copied transcript.',
          'The current pages are written as player-facing practice notes, so a stuck player can read one page, replay the stage, and know what to listen for on the next attempt.',
        ],
        bullets: [
          'Cue phrase: what the player should listen for.',
          'Input moment: tap, hold, release, or repeated response.',
          'Perfect danger: the moment most players lose the run.',
          'Related route: setup guide, walkthrough route, or Beatspell mode.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this wiki list every minigame yet?',
        answer:
          'It now lists 30 verified base Solo minigames, 30 evolved 2 versions, 20 Remix route pages, and a first multiplayer minigame route guide.',
      },
      {
        question: 'What is the best first minigame goal?',
        answer:
          'Aim for consistent clears before Perfects. A stable cue is more valuable than one lucky medal.',
      },
      {
        question: 'Where should Perfect players start?',
        answer:
          'Start with the Perfect solo minigames guide, then use the TV calibration guide if mistakes feel late or inconsistent.',
      },
    ],
  },
  walkthrough: {
    route: '/walkthrough',
    label: 'Walkthrough',
    eyebrow: 'Route Hub',
    title: 'Rhythm Paradise Groove Walkthrough',
    seoTitle:
      'Rhythm Paradise Groove Walkthrough - Solo Route, Remixes and Perfect Cleanup',
    seoDescription:
      'Follow a Rhythm Paradise Groove walkthrough structure for solo games, remixes, side modes, retry walls, and Perfect cleanup after clears.',
    summary:
      'A walkthrough hub for steady progress: clear the game first, learn cue families, use remixes as tests, and return for Perfect cleanup later.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/full-walkthrough-route',
      '/minigames',
      '/remixes',
      '/guides/beatspell-guide',
    ],
    sections: [
      {
        heading: 'A walkthrough should protect momentum',
        paragraphs: [
          'Rhythm Paradise Groove is not a long RPG where every checkpoint needs a spreadsheet. The walkthrough job is to keep momentum: learn the cue, clear the game, make a note when one pattern blocks you, and move forward.',
          'Perfect cleanup belongs after your first route unless a minigame is so short and clear that a Perfect attempt feels effortless. For most players, pushing too hard too early makes rhythm attention worse.',
        ],
      },
      {
        heading: 'Use remixes as cue exams',
        paragraphs: [
          'Remix stages are the best test of whether you understand a rhythm idea. If a remix breaks one cue family, go back to the original minigame and practice that moment without the extra remix pressure.',
          'This route-first approach also gives the site a clean expansion plan. Future pages can target exact terms such as a named minigame walkthrough, named remix guide, or Perfect route once the demand is visible.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should the walkthrough include spoilers?',
        answer:
          'Only where they help with a cue or route. The site should focus on timing advice, not retelling every joke.',
      },
      {
        question: 'Are full video walkthroughs useful?',
        answer:
          'Yes as cross-checks, but written pages should explain the player decision directly rather than narrating a video.',
      },
    ],
  },
  demo: {
    route: '/demo',
    label: 'Demo',
    eyebrow: 'Try First',
    title: 'Rhythm Paradise Groove Demo',
    seoTitle:
      'Rhythm Paradise Groove Demo - Save Transfer, Timing Test and Setup',
    seoDescription:
      'Use the Rhythm Paradise Groove demo to test Switch timing, handheld vs TV play, save-data transfer, and early minigame feel before buying.',
    summary:
      'The demo is the best way to test timing and device setup before committing to Perfect attempts or the full game.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/demo/minigames',
      '/demo/demo-vs-full-game',
      '/guides/demo-save-transfer',
      '/setup',
      '/release',
    ],
    sections: [
      {
        heading: 'Nintendo confirms a free demo',
        paragraphs: [
          'The official Nintendo UK page lists a free demo for Rhythm Paradise Groove and notes that demo save data can be transferred to the full version. That makes the demo both a preview and a practical setup test.',
          'Use the demo to compare handheld and TV timing before buying. If a rhythm game feels clean handheld but late on TV, fix the setup instead of assuming the whole game feels bad.',
        ],
      },
      {
        heading: 'What to test during the demo',
        paragraphs: [
          'The best demo session answers four questions: does the audio cue feel clear, does the controller feel immediate, does the TV add delay, and do the available modes make you want a longer route?',
          'Do not judge the game from one laggy display chain. Rhythm games are unusually sensitive to audio and display choices.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the Rhythm Paradise Groove demo free?',
        answer: 'Yes. Nintendo lists a free demo on the official UK game page.',
      },
      {
        question: 'Does demo progress transfer?',
        answer:
          'Nintendo says demo save data can be transferred to the full version. Use the same Switch profile when moving to the full game.',
      },
    ],
  },
  setup: {
    route: '/setup',
    label: 'Setup',
    eyebrow: 'Timing Lab',
    title: 'Rhythm Paradise Groove Timing Setup',
    seoTitle:
      'Rhythm Paradise Groove Timing Setup - TV Calibration and Input Lag',
    seoDescription:
      'Set up Rhythm Paradise Groove for fair timing with TV Game Mode, audio latency checks, handheld baseline testing, controllers, and calibration.',
    summary:
      'Fix timing before you practice. A clean setup makes Perfect runs possible and keeps beginner misses from becoming bad habits.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/setup/handheld-vs-tv',
      '/setup/bluetooth-audio-lag',
      '/guides/tv-calibration-input-lag',
      '/demo',
      '/guides/perfect-solo-minigames',
    ],
    sections: [
      {
        heading: 'Timing setup is part of the game',
        paragraphs: [
          'A rhythm game can be excellent and still feel terrible on a laggy TV. Rhythm Paradise Groove gives players timing tools, but those tools work best after the display and audio chain are already sensible.',
          'The setup hub should be one of the strongest internal links on the site because almost every Perfect, demo, and multiplayer question becomes easier after latency is under control.',
        ],
      },
      {
        heading: 'The simple order',
        paragraphs: [
          'Start handheld, then test TV Game Mode, then simplify audio, then calibrate. If you change the TV after calibration, repeat the test. If you change audio devices, repeat the test again.',
        ],
        bullets: [
          'Handheld baseline first.',
          'Game Mode or PC Mode second.',
          'Low-latency audio third.',
          'Calibration last.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is setup a full page?',
        answer:
          'Because timing problems can make every other guide feel wrong. A short setup fix can save hours of bad practice.',
      },
      {
        question: 'Should I use wireless headphones?',
        answer:
          'Avoid them for serious Perfect attempts unless you know the latency is low. Wired or direct audio is safer.',
      },
    ],
  },
  modes: {
    route: '/modes',
    label: 'Modes',
    eyebrow: 'Side Modes',
    title: 'Rhythm Paradise Groove Modes',
    seoTitle:
      'Rhythm Paradise Groove Modes - Beatspell, Drum Lessons and Multiplayer',
    seoDescription:
      'Understand Rhythm Paradise Groove modes including Beatspell, Drum Lessons, Rhythm Toy Box, Cafe, Museum, and local multiplayer rhythm games.',
    summary:
      'Modes give the game variety, but each mode needs a different guide shape: Beatspell needs rhythm-combat advice, multiplayer needs fair setup, and toy modes need expectation setting.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/beatspell',
      '/beatspell/how-to-unlock',
      '/multiplayer',
      '/guides/beatspell-guide',
      '/guides/multiplayer-party-guide',
      '/walkthrough',
    ],
    sections: [
      {
        heading: 'Beatspell deserves its own guide',
        paragraphs: [
          'Beatspell has clear launch-day guide demand and a distinct player job: understanding an RPG-flavored mode without treating it like normal RPG combat. That is why it is a P0/P1 page at launch.',
          'The mode hub should link Beatspell prominently, then support multiplayer and other side activities as players search for them.',
        ],
      },
      {
        heading: 'Side modes can support Perfect practice',
        paragraphs: [
          'Drum Lessons, Rhythm Toy Box, Cafe, Museum, and other mode content can keep players in the rhythm language without repeating one frustrating minigame. That makes them useful bridges between walkthrough progress and Perfect cleanup.',
        ],
      },
    ],
    faq: [
      {
        question: 'What modes are confirmed by Nintendo?',
        answer:
          'Nintendo lists Beatspell, Drum Lessons, Rhythm Toy Box, Cafe, Museum, TV timing, accessibility features, and more than 30 multiplayer rhythm games.',
      },
      {
        question: 'Which mode should get expanded first?',
        answer:
          'Beatspell first, then multiplayer and individual side-mode pages if search demand appears.',
      },
    ],
  },
  release: {
    route: '/release',
    label: 'Release',
    eyebrow: 'Buy and Platform',
    title: 'Rhythm Paradise Groove Release Date and Switch Info',
    seoTitle:
      'Rhythm Paradise Groove Release Date - Switch, Switch 2 and Demo Info',
    seoDescription:
      'Check Rhythm Paradise Groove release date, Nintendo Switch compatibility, Switch 2 play notes, demo availability, region name, and official store links.',
    summary:
      'A source-checked release and platform hub for players deciding whether to buy, demo, or search under the Rhythm Heaven Groove name.',
    image: commonImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/links',
      '/guides/rhythm-heaven-vs-paradise-name',
      '/demo',
    ],
    sections: [
      {
        heading: 'Official release details',
        paragraphs: [
          `Nintendo UK lists Rhythm Paradise Groove for ${officialGameFacts.platform}, playable on Nintendo Switch and Nintendo Switch 2, with a ${officialGameFacts.releaseDate} release date and a ${officialGameFacts.downloadSize} download size.`,
          `The official page lists ${officialGameFacts.soloGameCount}, ${officialGameFacts.multiplayerGameCount}, local play for ${officialGameFacts.playerCount}, and PEGI 7 rating.`,
        ],
      },
      {
        heading: 'Region name matters',
        paragraphs: [
          'The European name is Rhythm Paradise Groove. The North American name is Rhythm Heaven Groove. The guides on this site target the European name first while still mapping the North American search term where useful.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Rhythm Paradise Groove release?',
        answer: 'Nintendo UK lists the release date as July 2, 2026.',
      },
      {
        question: 'Is it on Switch 2?',
        answer:
          'The official UK page says it is playable on Nintendo Switch and Nintendo Switch 2.',
      },
      {
        question: 'Is there a physical version?',
        answer:
          'Search demand includes physical and preorder terms, but this launch page only treats details verified by official store sources.',
      },
    ],
  },
  links: {
    route: '/links',
    label: 'Links',
    eyebrow: 'Official',
    title: 'Rhythm Paradise Groove Official Links',
    seoTitle:
      'Rhythm Paradise Groove Official Links - Nintendo Store, Trailer and Community',
    seoDescription:
      'Open official Rhythm Paradise Groove links for Nintendo UK, overview trailers, Rhythm Heaven Groove alias checks, and community discussion safely.',
    summary:
      'Use this page to separate official Nintendo pages, trusted trailer references, community discussion, and third-party guide sources.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/release',
      '/guides/rhythm-heaven-vs-paradise-name',
      '/guides/beginner-guide',
    ],
    sections: [
      {
        heading: 'Use official links for facts',
        paragraphs: [
          'Release date, platform, demo, player count, and feature claims should come from Nintendo pages first. Reviews and community posts are useful for player experience, but official pages are the baseline.',
          'For North American searches, use Nintendo of America and the Rhythm Heaven Groove title. For this site, keep the canonical brand as Rhythm Paradise Groove.',
        ],
      },
      {
        heading: 'Use community links for discovery',
        paragraphs: [
          'The Rhythm Heaven community is useful for finding confusing cues, Perfect pain points, and early player questions. Treat community findings as leads, then verify before turning them into permanent guide facts.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide hub and does not represent Nintendo.',
      },
      {
        question: 'Can older Rhythm Heaven guides be used?',
        answer:
          'Use them as series context only. Current claims should match Rhythm Paradise Groove or Rhythm Heaven Groove on Switch.',
      },
    ],
  },
} satisfies Record<string, TopicPage>;

export type TopicKey = keyof typeof topicPages;

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: TopicKey) {
  return topicPages[key];
}
