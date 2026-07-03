import { type RemixDifficulty, remixIndex } from './remix-index';
import { CHECKED_AT } from './sources';
import type { DataSource, GuideFaq, GuideSection } from './types';

export interface RemixGuide {
  slug: string;
  name: string;
  number: number;
  difficulty: RemixDifficulty;
  focus: string;
  routeNote: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  updatedAt: string;
  sourceNotes: string;
  practiceRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
  relatedRoutes: string[];
}

const baseGroups = [
  ['hoop-trundling', 'brolly-good-show', 'disc-dog', 'feeding-the-beast'],
  ['ribbit-rocket', 'stop-n-go-n-stop', 'hop-n-slide', 'pop-dont-drop'],
  ['slice-n-dice-kitchen', 'sneezy-moon', 'crab-snacks', 'hop-stop-n-roll'],
  ['fruit-flex', 'alien-alphabet', 'can-do', 'backup-spotlight'],
  ['flutter-speed', 'lightning-bolting', 'yum-bot-simulator', 'wiper-bosses'],
  ['football-dreams', 'sweeper-star', 'a-for-effort', 'spirit-slasher'],
  ['quick-hands', 'soda-hop', 'space-sentry', 'high-five-fever'],
  ['germ-aerobics', 'synchro-wings', 'quick-hands', 'space-sentry'],
];

const lateRouteGroups = [
  [
    'sneezy-moon-2',
    'flutter-speed-2',
    'lightning-bolting-2',
    'spirit-slasher-2',
  ],
  ['disc-dog-2', 'pop-dont-drop-2', 'crab-snacks-2', 'yum-bot-simulator-2'],
  ['hop-n-slide-2', 'can-do-2', 'football-dreams-2', 'sweeper-star-2'],
  ['quick-hands-2', 'high-five-fever-2', 'germ-aerobics-2', 'synchro-wings-2'],
];

const remixFocusNotes: Record<number, { risk: string; advice: string }> = {
  1: {
    risk: 'early-game confidence turning into lazy transitions',
    advice:
      'Use this remix to prove that the first four cue families stay readable when the scene changes quickly.',
  },
  2: {
    risk: 'speed shifts and stop cues resetting your count',
    advice:
      'Keep one internal pulse through hops, stops, slides, and pressure-pop waits.',
  },
  3: {
    risk: 'reaction cues arriving before your hand has reset',
    advice:
      'Practice clean recovery after each sneeze, rebound, or stop command instead of staring at the last miss.',
  },
  4: {
    risk: 'phrase recognition collapsing when visual styles change',
    advice:
      'Name the cue family before the response: fruit bounce, alien phrase, can color, or spotlight direction.',
  },
  5: {
    risk: 'advanced timing windows feeling sharper inside a mash-up',
    advice:
      'Treat half-beats, cake delays, and boss indicators as separate phrases rather than one busy run.',
  },
  6: {
    risk: 'celebrating one hard response and arriving late to the next',
    advice:
      'Reset attention immediately after flashy football hits, poses, and slashes.',
  },
  7: {
    risk: 'Flipside off-beats and reply cues catching automatic inputs',
    advice:
      'Keep the hand loose and answer the phrase, not the most obvious visual beat.',
  },
  8: {
    risk: 'late Flipside clutter making simple patterns feel random',
    advice:
      'Filter the screen aggressively and return to the lead cue after every transition.',
  },
  9: {
    risk: 'old base-version muscle memory fighting the first evolved set',
    advice:
      'Warm up the original pages, then play the 2 versions until the tighter spacing feels normal.',
  },
  10: {
    risk: 'evolved stop, slide, and pop timings being answered too early',
    advice:
      'Count through silence and long waits instead of trying to escape them.',
  },
  11: {
    risk: 'quick reaction cues becoming tense after a clean base clear',
    advice:
      'Keep the thumb relaxed. The evolved cue still needs rhythm, not panic.',
  },
  12: {
    risk: 'language-like and color-rule cues being guessed from memory',
    advice:
      'Use recognition first, then input. Guessing is the first thing Remix pressure exposes.',
  },
  13: {
    risk: 'advanced evolved cues turning into one long nervous section',
    advice:
      'Break the remix into known phrases: creature count, lightning, cake delay, boss indicator.',
  },
  14: {
    risk: 'sports, sweeping, word rhythm, and slashing cues competing for attention',
    advice:
      'Let each cue finish before moving to the next. Do not carry the last response forward.',
  },
  15: {
    risk: 'Flipside evolved cues punishing automatic high fives and throws',
    advice:
      'Restraint matters as much as speed. Hold back when the phrase asks for it.',
  },
  16: {
    risk: 'copy-pattern pages losing their breaks under Remix pressure',
    advice:
      'Treat silence and breaks as real notes. Extra flaps or extra taps are still misses.',
  },
  17: {
    risk: 'late-route reaction checks stacking too quickly',
    advice:
      'Use this as a reaction cleanup route only after the individual evolved pages are boring.',
  },
  18: {
    risk: 'delayed responses being flattened into the same timing',
    advice: 'Count every wait on purpose. Delays are cues, not empty time.',
  },
  19: {
    risk: 'Flipside control fading after several clean sections',
    advice:
      'Stay small and exact. The page tests recovery after success as much as recovery after misses.',
  },
  20: {
    risk: 'full-route nerves turning readable cues into a final scramble',
    advice:
      'Do not treat Remix 20 as one giant wall. Build it from the individual pages that already feel stable.',
  },
};

export const remixGuideSources: DataSource[] = [
  {
    type: 'competitor',
    label: 'Gamereactor Solo structure guide',
    url: 'https://www.gamereactor.eu/rhythm-paradise-groove-guide-how-to-perfect-all-30-base-solo-mini-games-1741843/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to verify that Rhythm Paradise Groove has 20 Remix levels as part of the 80 Solo medal/master structure.',
  },
  {
    type: 'youtube',
    label: 'Rhythm Heaven Groove - All Remixes',
    url: 'https://www.youtube.com/watch?v=CdG1wa_P6AQ',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as the current all-remix gameplay cross-check for numbered Remix pages.',
  },
  {
    type: 'community',
    label: 'Rhythm Heaven Wiki Remix reference',
    url: 'https://rhythmheaven.fandom.com/wiki/Remix',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to cross-check that Rhythm Heaven Groove has 20 remixes; article prose is not copied.',
  },
];

function getPracticeRoutes(number: number) {
  if (number <= 8) {
    return baseGroups[number - 1].map((slug) => `/minigames/${slug}`);
  }

  if (number <= 16) {
    return baseGroups[number - 9].map((slug) => `/minigames/${slug}-2`);
  }

  return lateRouteGroups[number - 17].map((slug) => `/minigames/${slug}`);
}

function getRelatedRoutes(number: number) {
  return [
    '/remixes',
    number > 1 ? `/remixes/remix-${number - 1}` : null,
    number < 20 ? `/remixes/remix-${number + 1}` : null,
    '/minigames',
    '/guides/perfect-solo-minigames',
    '/setup',
  ].filter(Boolean) as string[];
}

function getRouteLevel(number: number) {
  if (number <= 8) {
    return 'base minigame';
  }

  if (number <= 16) {
    return 'evolved 2 minigame';
  }

  return 'late-route';
}

function getRemixBody(number: number, focus: string): GuideSection[] {
  const note = remixFocusNotes[number];
  const routeLevel = getRouteLevel(number);

  return [
    {
      heading: `Read Remix ${number} as a ${routeLevel} test`,
      paragraphs: [
        `Remix ${number} is not a place to relearn every input from scratch. It is a pressure test for ${focus}. The useful way to approach it is to identify which cue family breaks first, then leave the remix and warm up that single page. If you only retry the Remix, the transitions can hide the actual problem.`,
        `${note.advice} A strong run feels like several familiar pages stitched together, not like twenty surprises in a row. When the background changes, keep the beat you already earned from the individual minigame pages.`,
      ],
    },
    {
      heading: 'Make transitions boring',
      paragraphs: [
        `The main Perfect risk here is ${note.risk}. That kind of miss usually happens between cues, not during the cue you already know. During practice, pay attention to the beat after each scene change. If you can land the first response after a transition, the rest of that phrase often settles down.`,
        'Do one normal clear where you care only about transitions. Ignore the medal, ignore the final grade, and listen for the moment your hand wants to keep playing the previous minigame. That is the habit the Remix is built to catch.',
      ],
    },
    {
      heading: 'Perfect cleanup route',
      paragraphs: [
        `Before spending a Perfect window on Remix ${number}, clear the four linked practice pages below. You do not need to grind all of them to perfection first, but each cue should feel explainable. If one practice page still feels random, the Remix will make it feel worse.`,
        'Once the linked pages feel stable, return here and play short sets. Two or three focused attempts are more useful than a long retry chain where every miss starts blending together. If the miss moves around, reset with the individual page that shares that cue family.',
      ],
      bullets: [
        'Warm up the linked pages before serious Remix attempts.',
        'Name the transition that breaks the run.',
        'Stop when misses become emotional instead of specific.',
      ],
    },
    {
      heading: 'How to know the route is ready',
      paragraphs: [
        `A useful Remix ${number} practice session has a very plain goal: turn one confusing stretch into a named problem. If the miss happens on the first response after a scene change, your issue is transition timing. If the miss happens inside a familiar cue, the linked minigame page still needs more work. If the miss happens near the end, treat the ending as its own phrase instead of assuming nerves are the whole answer.`,
        'Do not measure readiness by one lucky clear. A Remix is ready for serious cleanup when you can explain the first mistake, recover the beat after a scene change, and leave the run without feeling like every cue was a surprise. That is also when the page becomes useful as a final check: it tells you whether the individual practice has survived pressure, not whether you can memorize one long video route.',
      ],
      bullets: [
        'Use one notebook-style phrase for the repeated miss.',
        'Replay the linked page when the same cue breaks twice.',
        'Return to the Remix when the warm-up cue feels boring again.',
      ],
    },
  ];
}

function getRemixFaq(number: number, focus: string): GuideFaq[] {
  return [
    {
      question: `How do I Perfect Remix ${number}?`,
      answer: `Treat Remix ${number} as a ${focus} test. Warm up the linked minigame pages first, then practice the transition that causes the earliest repeat miss.`,
    },
    {
      question: `Should I grind Remix ${number} or individual minigames first?`,
      answer:
        'Use individual minigames first when the miss is unclear. Use the Remix only after you can name which cue family is breaking.',
    },
    {
      question: `Why does Remix ${number} feel harder than the original pages?`,
      answer:
        'Remixes add scene changes and cue switching. The inputs may be familiar, but the recovery time between them is shorter and more distracting.',
    },
  ];
}

export const remixes: RemixGuide[] = remixIndex.map((remix) => ({
  ...remix,
  title: `${remix.name} Guide`,
  seoTitle: `${remix.name} Guide - Rhythm Paradise Groove Perfect Route`,
  seoDescription: `Clear ${remix.name} with Rhythm Paradise Groove transition tips, linked minigame warm-ups, Perfect risks, and practice route advice.`,
  summary: `${remix.name} is a ${remix.focus} test. Use the linked minigame pages as warm-ups, then practice the transition that breaks your Perfect run first.`,
  updatedAt: CHECKED_AT,
  sourceNotes:
    'First-version Remix guide built from verified Remix count, current all-remix gameplay references, and internal links to the relevant minigame practice pages.',
  practiceRoutes: getPracticeRoutes(remix.number),
  body: getRemixBody(remix.number, remix.focus),
  faq: getRemixFaq(remix.number, remix.focus),
  relatedRoutes: getRelatedRoutes(remix.number),
}));

export function getRemixGuide(slug: string) {
  return remixes.find((remix) => remix.slug === slug);
}
