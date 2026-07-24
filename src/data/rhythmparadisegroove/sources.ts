import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-24';
export const OFFICIAL_CHECKED_AT = '2026-07-24';

export const officialGameFacts = {
  name: 'Rhythm Paradise Groove',
  alternateName: 'Rhythm Heaven Groove',
  siteName: 'Rhythm Paradise Groove Wiki',
  domain: 'https://www.rhythmparadisegroove.wiki',
  canonicalHost: 'www.rhythmparadisegroove.wiki',
  platform: 'Nintendo Switch',
  compatibility: 'Playable on Nintendo Switch and Nintendo Switch 2',
  publisher: 'Nintendo',
  developer: 'Nintendo EPD / TNX',
  genre: 'rhythm minigame collection',
  releaseDate: '2026-07-02',
  pegi: 'PEGI 7',
  downloadSize: '3.2 GB',
  playerCount: '1-4 local players',
  soloGameCount: '80+ solo rhythm games',
  multiplayerGameCount: '30+ multiplayer rhythm games',
  officialStoreUrl:
    'https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Rhythm-Paradise-Groove-2786371.html',
  nintendoUkYoutubeUrl: 'https://www.youtube.com/watch?v=dIqElv-ewbg',
  nintendoUsYoutubeUrl: 'https://www.youtube.com/watch?v=ZdMwqKiSeEE',
  communityRedditUrl: 'https://www.reddit.com/r/rhythmheaven/',
};

export const siteDescription =
  'Rhythm Paradise Groove Wiki helps players perfect solo minigames, fix timing setup, use the demo, and understand Beatspell.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Nintendo UK Rhythm Paradise Groove page',
    url: officialGameFacts.officialStoreUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the PAL title, release date, demo, platform, 80+ solo rhythm games, 30+ multiplayer games, Beatspell, Drum Lessons, Rhythm Toy Box, Cafe, accessibility, and download details.',
  },
  {
    type: 'youtube',
    label: 'Nintendo UK overview trailer',
    url: officialGameFacts.nintendoUkYoutubeUrl,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used as the homepage trust video for the Rhythm Paradise Groove title and visual style.',
  },
  {
    type: 'youtube',
    label: 'Nintendo of America overview trailer',
    url: officialGameFacts.nintendoUsYoutubeUrl,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Useful cross-check for the North American title Rhythm Heaven Groove and the same Switch release.',
  },
  {
    type: 'competitor',
    label: 'Rhythm Heaven Groove guide competitor',
    url: 'https://rhythmheavengroove.com/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Existing North America name site covering release, demo, gameplay, platform, buying, minigames, and modes. Our site should go deeper on Perfect, calibration, walkthrough, and PAL keyword coverage.',
  },
  {
    type: 'competitor',
    label: 'Gamereactor Perfect solo minigames guide',
    url: 'https://www.gamereactor.eu/rhythm-paradise-groove-guide-how-to-perfect-all-30-base-solo-mini-games-1741843/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Confirms live player demand for Perfect routes and 30 base solo minigame advice on launch day.',
  },
  {
    type: 'competitor',
    label: 'Gamereactor Beatspell guide',
    url: 'https://www.gamereactor.eu/rhythm-paradise-groove-guide-what-is-beatspell-and-tips-and-tricks-to-conquer-it-1742433/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Confirms Beatspell is a launch-day long-tail guide topic and should get a dedicated page.',
  },
  {
    type: 'review',
    label: 'The Verge review',
    url: 'https://www.theverge.com/entertainment/959757/rhythm-heaven-groove-review-nintendo-switch',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Useful context for structure, remixes, side modes, and TV input lag concerns.',
  },
  {
    type: 'review',
    label: 'TechRadar review',
    url: 'https://www.techradar.com/gaming/rhythm-heaven-groove-review',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Useful context for Beatspell, Drum Lesson, Rhythm Toy Box, accessibility, and Switch/Switch 2 play notes.',
  },
  {
    type: 'youtube',
    label: 'Full walkthrough search result',
    url: 'https://www.youtube.com/results?search_query=Rhythm+Paradise+Groove+full+game+walkthrough',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for guide topic selection and walkthrough source tracking, not copied article text.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Nintendo UK',
    href: officialGameFacts.officialStoreUrl,
  },
  {
    label: 'Overview Trailer',
    href: officialGameFacts.nintendoUkYoutubeUrl,
  },
  {
    label: 'Rhythm Heaven Alias',
    href: officialGameFacts.nintendoUsYoutubeUrl,
  },
  {
    label: 'Community',
    href: officialGameFacts.communityRedditUrl,
  },
];
