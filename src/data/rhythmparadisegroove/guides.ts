import { minigames } from './minigames';
import { priorityPageLabels, priorityPages } from './p0-pages';
import { remixes } from './remixes';
import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  overview: {
    id: 'dIqElv-ewbg',
    title: 'Rhythm Paradise Groove - Overview Trailer',
    channel: 'Nintendo UK',
    url: officialGameFacts.nintendoUkYoutubeUrl,
    thumbnailUrl: youtubeThumbnail('dIqElv-ewbg'),
    publishedAt: '2026-04',
    checkedAt: CHECKED_AT,
  },
  northAmerica: {
    id: 'ZdMwqKiSeEE',
    title: 'Rhythm Heaven Groove - Overview Trailer',
    channel: 'Nintendo of America',
    url: officialGameFacts.nintendoUsYoutubeUrl,
    thumbnailUrl: youtubeThumbnail('ZdMwqKiSeEE'),
    publishedAt: '2026-04',
    checkedAt: CHECKED_AT,
  },
  beatspell: {
    id: 'ZXi4zQJZLRA',
    title: 'Rhythm Paradise Groove Beatspell Guide',
    channel: 'YouTube walkthrough creator',
    url: 'https://www.youtube.com/watch?v=ZXi4zQJZLRA',
    thumbnailUrl: youtubeThumbnail('ZXi4zQJZLRA'),
    publishedAt: '2026-07',
    checkedAt: CHECKED_AT,
  },
  calibration: {
    id: 'szcAIciuG_g',
    title: 'Rhythm Heaven Groove TV Calibration Reference',
    channel: 'YouTube guide creator',
    url: 'https://www.youtube.com/watch?v=szcAIciuG_g',
    thumbnailUrl: youtubeThumbnail('szcAIciuG_g'),
    publishedAt: '2026-07',
    checkedAt: CHECKED_AT,
  },
  walkthrough: {
    id: 's3ziKCamjHw',
    title: 'Rhythm Heaven Groove Full Game Walkthrough',
    channel: 'YouTube walkthrough creator',
    url: 'https://www.youtube.com/watch?v=s3ziKCamjHw',
    thumbnailUrl: youtubeThumbnail('s3ziKCamjHw'),
    publishedAt: '2026-07',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const siteCover = '/rhythmparadisegroove/hero.png';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with the demo, rhythm cues, input setup, and a clean route through early solo games.',
  Perfect:
    'Perfect attempts are about cue memory, TV latency, and knowing when to stop practicing a bad run.',
  Setup: 'Fix audio, display, and controller timing before blaming your hands.',
  Demo: 'Use the free demo to test timing, save transfer, accessibility, and whether handheld or TV mode fits you.',
  Modes:
    'Beatspell, Drum Lessons, Rhythm Toy Box, Cafe, Museum, and multiplayer all need different expectations.',
  Walkthrough:
    'Route solo games, remixes, retries, and practice time without turning every miss into a wall.',
  Multiplayer: 'Make local play readable and fair for mixed-skill groups.',
  Reference:
    'Name, region, Switch, Switch 2, and official-link questions that players search before buying.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Rhythm Paradise Groove Wiki',
  '/guides': 'All Guides',
  '/minigames': 'Minigames Hub',
  '/remixes': 'Remixes Hub',
  ...priorityPageLabels,
  '/perfect': 'Perfect Route',
  '/walkthrough': 'Walkthrough Hub',
  '/demo': 'Demo Guide',
  '/setup': 'Timing Setup',
  '/modes': 'Modes Hub',
  '/release': 'Release and Switch',
  '/links': 'Official Links',
  '/disclaimer': 'Disclaimer',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/perfect-solo-minigames': 'Perfect Solo Minigames',
  '/guides/tv-calibration-input-lag': 'TV Calibration',
  '/guides/demo-save-transfer': 'Demo and Save Transfer',
  '/guides/beatspell-guide': 'Beatspell Guide',
  '/guides/beatspell-demo-guide': 'Beatspell Demo Guide',
  '/guides/multiplayer-party-guide': 'Multiplayer Guide',
  '/guides/full-walkthrough-route': 'Full Walkthrough Route',
  '/guides/rhythm-heaven-vs-paradise-name': 'Name Difference',
  ...Object.fromEntries(
    minigames.map((minigame) => [`/minigames/${minigame.slug}`, minigame.name])
  ),
  ...Object.fromEntries(
    remixes.map((remix) => [`/remixes/${remix.slug}`, remix.name])
  ),
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Rhythm Paradise Groove Beginner Guide',
    seoTitle:
      'Rhythm Paradise Groove Beginner Guide - Timing, Demo and First Perfects',
    seoDescription:
      'Start Rhythm Paradise Groove with timing setup, demo checks, early minigame practice, Perfect attempts, Beatspell, and Switch play tips.',
    summary:
      'A first-session route for Rhythm Paradise Groove players: set up audio timing, learn cues before visuals, use the demo well, and save Perfect attempts for clean runs.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.overview),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Built from the Nintendo UK store page, Nintendo overview trailer, launch-day long-tail checks, and current Rhythm Heaven Groove alias results.',
    video: videos.overview,
    videoSearchQueries: [
      'Rhythm Paradise Groove beginner guide',
      'Rhythm Paradise Groove how to play',
      'Rhythm Heaven Groove beginner guide',
    ],
    tags: ['First Session', 'Timing', 'Switch'],
    relatedRoutes: [
      '/demo',
      '/setup',
      '/minigames',
      '/guides/perfect-solo-minigames',
      '/guides/tv-calibration-input-lag',
    ],
    body: [
      {
        heading: 'Start by proving the timing setup is honest',
        paragraphs: [
          'Rhythm Paradise Groove is built around tiny timing windows, so your first job is not to chase Perfect medals. Your first job is to make the Switch, controller, TV, and audio path feel consistent. If the game feels late on a TV but clean in handheld mode, your setup is the problem, not the minigame.',
          'Begin with a simple solo rhythm game and listen for the cue instead of staring at the animation. When your inputs land by ear, keep that setup. When every input feels a little late, use the TV timing and calibration advice before building bad muscle memory.',
        ],
        bullets: [
          'Use Game Mode on the TV before practicing serious Perfect runs.',
          'Avoid Bluetooth audio when you are learning strict cues.',
          'Test handheld mode as a baseline because it removes several display-lag variables.',
          'Change one setup variable at a time so you know what fixed the problem.',
        ],
      },
      {
        heading: 'Use the demo as a timing audition',
        paragraphs: [
          'The free demo is valuable because it tells you whether the game feels natural on your current screen and controller. Treat it as an audition for your setup. Play a few attempts in handheld mode, then repeat on the TV. If the same cue suddenly feels different, solve that before buying or before committing to a long play session.',
          'Do not burn the demo by rushing every mode. Pick one early rhythm game, replay it until you can feel the call-and-response, and then test one mode or side activity. You will learn more from a clean repeat than from touching ten screens once.',
        ],
      },
      {
        heading: 'Learn the cue, then use the animation as confirmation',
        paragraphs: [
          'Most Rhythm Paradise Groove mistakes come from watching too hard. The animation is expressive, but the rhythm cue is the real instruction. Good play feels like listening, predicting, and pressing before the visual payoff happens.',
          'For each new minigame, identify the counted pattern, the call, and the response. Say the pattern out loud if needed. Once your ear understands the shape, the on-screen character becomes confirmation instead of the main source of timing.',
        ],
      },
      {
        heading: 'Delay Perfect attempts until the run is stable',
        paragraphs: [
          'Perfect attempts are tempting, especially when the game starts offering clean grades, but they become frustrating if you start them too early. A better rule is to aim for comfortable clears first, then repeat the same minigame until the mistake is predictable. If you cannot name the miss, you are not ready for a Perfect grind.',
          'When a miss repeats, write the cue in plain words: late tap after the pause, early hold release, missed offbeat, or distracted by a fake-out. That tiny note makes the next attempt useful instead of emotional.',
        ],
      },
    ],
    faq: [
      {
        question:
          'Should I play Rhythm Paradise Groove in handheld or TV mode?',
        answer:
          'Handheld mode is the cleanest timing baseline. TV mode can be excellent, but only after Game Mode and audio latency are under control.',
      },
      {
        question:
          'Is Rhythm Paradise Groove the same game as Rhythm Heaven Groove?',
        answer:
          'Yes for practical guide purposes. Rhythm Paradise Groove is the European/PAL name, while Rhythm Heaven Groove is the North American name.',
      },
      {
        question: 'What should beginners read next?',
        answer:
          'Read the timing setup guide if inputs feel off, then move to the Perfect solo minigames guide once clears feel consistent.',
      },
    ],
  },
  {
    slug: 'perfect-solo-minigames',
    title: 'Rhythm Paradise Groove Perfect Solo Minigames Guide',
    seoTitle:
      'Rhythm Paradise Groove Perfect Guide - Solo Minigames and Timing Tips',
    seoDescription:
      'Use Rhythm Paradise Groove Perfect attempts wisely with cue notes, retry rules, calibration checks, remix practice, and solo minigame timing advice.',
    summary:
      'A Perfect-focused route for solo minigames: fix latency first, isolate the recurring miss, practice the cue, and stop before bad attempts become habit.',
    category: 'Perfect',
    difficulty: 'Intermediate',
    coverImageUrl: siteCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Built from launch-day Perfect guide demand, official minigame count, and common Rhythm Heaven practice logic. Specific per-minigame pages should expand after GSC and source data grow.',
    videoSearchQueries: [
      'Rhythm Paradise Groove perfect all solo minigames',
      'Rhythm Heaven Groove perfect guide',
      'Rhythm Paradise Groove all perfects',
    ],
    tags: ['Perfect', 'Solo', 'Timing'],
    relatedRoutes: [
      '/minigames',
      '/setup',
      '/walkthrough',
      '/guides/tv-calibration-input-lag',
      '/guides/full-walkthrough-route',
    ],
    body: [
      {
        heading: 'Do not grind Perfects on a suspicious setup',
        paragraphs: [
          'If a rhythm game alternates between clean and mysteriously late, pause the Perfect grind. Perfect attempts only teach useful muscle memory when the input setup is stable. A TV with extra processing, wireless audio, or a controller path that feels inconsistent can turn a fair minigame into a guessing game.',
          'Use one simple minigame as your timing test. If you can clear it reliably in handheld mode but not on the TV, solve the setup. If it feels identical in both modes, your practice notes can focus on the rhythm pattern instead.',
        ],
      },
      {
        heading: 'Name the miss before another attempt',
        paragraphs: [
          'The fastest Perfect progress comes from turning a vague failure into a named cue. Do not just say the game is hard. Say exactly what happened: I pressed after the call, I released the hold early, I followed the fake visual, or I lost the count during the pause.',
          'Once the miss has a name, practice only that moment mentally before restarting. Rhythm Paradise Groove minigames are short, so it is easy to restart too quickly. A ten-second reset with a clear cue is better than five angry retries.',
        ],
        bullets: [
          'Late after silence: count the rest instead of waiting for the animation.',
          'Early on fake-outs: keep listening until the call resolves.',
          'Missed offbeat: clap the subdivision before pressing buttons.',
          'Dropped final cue: treat the ending as its own mini-pattern.',
        ],
      },
      {
        heading: 'Use Remix stages as stress tests',
        paragraphs: [
          'Remix-style stages are useful because they expose whether you learned a cue or only memorized one scene. If a rhythm idea returns in a new visual context and you miss it, go back to the original minigame and listen for the shared audio instruction.',
          'Do not judge your Perfect readiness only by one clean run. A reliable Perfect candidate is a game you can clear while slightly distracted and still recover the count. If one surprise erases the rhythm, keep practicing the cue rather than chasing the medal.',
        ],
      },
      {
        heading: 'Stop when retries become noise',
        paragraphs: [
          'Perfect practice has a point of diminishing returns. When the same miss gets worse, your ear is tired. Switch to another minigame, play a mode like Drum Lessons, or take a short break. Rhythm games reward relaxed attention more than brute-force repetition.',
          'Return later and play one warm-up clear before starting the Perfect attempt. If the warm-up feels calm, continue. If the warm-up already feels tense, the next Perfect window will probably become another noisy session.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many solo minigames are in Rhythm Paradise Groove?',
        answer:
          'Nintendo lists more than 80 solo rhythm games. This launch guide starts with route and timing advice, then can expand into per-minigame Perfect pages.',
      },
      {
        question: 'Should every minigame get its own Perfect page?',
        answer:
          'Only after search demand or guide data supports it. The first launch pages should cover high-intent clusters before creating thin one-off pages.',
      },
      {
        question: 'Why do I keep missing the last cue?',
        answer:
          'Endings often change the pattern or add a pause. Treat the final cue as a separate phrase and practice the count before the last input.',
      },
    ],
  },
  {
    slug: 'tv-calibration-input-lag',
    title: 'Rhythm Paradise Groove TV Calibration and Input Lag Guide',
    seoTitle:
      'Rhythm Paradise Groove TV Calibration - Fix Input Lag and Timing',
    seoDescription:
      'Fix Rhythm Paradise Groove timing problems with TV Game Mode, audio path checks, Switch handheld comparisons, controller testing, and calibration habits.',
    summary:
      'A practical setup checklist for players who feel late on TV: remove processing, test handheld mode, avoid delayed audio, and calibrate before serious attempts.',
    category: 'Setup',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.calibration),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from official TV timing mention, review concerns about TV play, and current YouTube calibration results for the North American title.',
    video: videos.calibration,
    videoSearchQueries: [
      'Rhythm Paradise Groove calibration',
      'Rhythm Heaven Groove input lag',
      'Rhythm Paradise Groove TV timing',
    ],
    tags: ['Calibration', 'TV Mode', 'Input Lag'],
    relatedRoutes: [
      '/setup',
      '/setup/handheld-vs-tv',
      '/setup/bluetooth-audio-lag',
      '/demo',
      '/guides/beginner-guide',
      '/guides/perfect-solo-minigames',
    ],
    body: [
      {
        heading: 'Use handheld mode as the control test',
        paragraphs: [
          'Before changing every setting, test the same rhythm game in handheld mode. Handheld play removes most TV processing and audio-chain delay, so it gives you a baseline for how the cue should feel. If handheld is clean and TV is late, the issue is the display or sound path.',
          'If both handheld and TV feel wrong, slow down and relearn the cue. But if only TV mode fails, do not grind. You will teach your hands to compensate for a problem that can usually be reduced with settings.',
        ],
      },
      {
        heading: 'Turn on Game Mode before calibration',
        paragraphs: [
          'Most TVs add image processing that is fine for movies and awful for rhythm games. Turn on Game Mode, disable motion smoothing, and remove extra picture enhancements before judging the game. Calibration should happen after the TV is in its lowest-latency state.',
          'A common mistake is calibrating first, then changing display settings later. That can make the previous adjustment meaningless. Lock the TV setup, then calibrate.',
        ],
        bullets: [
          'Enable Game Mode or PC Mode on the HDMI input.',
          'Disable motion interpolation, noise reduction, and AI picture processing.',
          'Use wired or low-latency audio when possible.',
          'Avoid Bluetooth headphones for serious Perfect attempts.',
        ],
      },
      {
        heading: 'Check audio before blaming button input',
        paragraphs: [
          'Rhythm Paradise Groove is played by ear, so audio delay can feel like input delay. If the Switch sends sound through a TV, soundbar, receiver, or Bluetooth chain, the cue may reach you late even if the controller input is fine.',
          'Use the simplest audio route for testing: Switch speakers in handheld mode, TV speakers in docked mode, or wired headphones where available. Once you find the clean route, compare any fancy audio setup against it.',
        ],
      },
      {
        heading: 'Calibrate for consistency, not one miracle run',
        paragraphs: [
          'A good calibration setting makes ordinary cues feel predictable across several attempts. Do not adjust after a single miss. Play a short repeatable section three to five times and watch whether the same kind of miss repeats.',
          'If the misses are random, you may be tired or overthinking. If they are always late, reduce the chain delay. If they are always early, you may have overcorrected or started listening to animation instead of sound.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Rhythm Paradise Groove have timing calibration?',
        answer:
          'Nintendo lists TV timing adjustment in the official store page. Use it after setting the TV to a low-latency mode.',
      },
      {
        question: 'Is Bluetooth audio bad for Rhythm Paradise Groove?',
        answer:
          'Bluetooth audio often adds latency. It can be fine casually, but wired or direct audio is safer for Perfect attempts.',
      },
      {
        question: 'Why does the game feel better handheld?',
        answer:
          'Handheld mode removes TV processing and many audio-chain delays, so the input and cue timing can feel more direct.',
      },
    ],
  },
  {
    slug: 'demo-save-transfer',
    title: 'Rhythm Paradise Groove Demo and Save Transfer Guide',
    seoTitle:
      'Rhythm Paradise Groove Demo - Save Transfer, Timing Test and Switch Tips',
    seoDescription:
      'Use the Rhythm Paradise Groove demo to test timing, try early minigames, check save-data transfer notes, and decide between handheld and TV play.',
    summary:
      'A demo-first checklist: test timing in handheld and TV mode, learn the first cue patterns, note what transfers, and avoid judging the game from one laggy setup.',
    category: 'Demo',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.overview),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Nintendo UK confirms a free demo and says save data can be transferred to the full game. Public page details are limited, so the article avoids unsupported transfer claims.',
    video: videos.overview,
    videoSearchQueries: [
      'Rhythm Paradise Groove demo',
      'Rhythm Paradise Groove demo save transfer',
      'Rhythm Heaven Groove demo',
    ],
    tags: ['Demo', 'Save Data', 'Switch'],
    relatedRoutes: [
      '/demo',
      '/demo/minigames',
      '/demo/demo-vs-full-game',
      '/setup',
      '/release',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Treat the demo as a timing test, not only a preview',
        paragraphs: [
          'The Rhythm Paradise Groove demo is the safest way to test whether your setup feels fair. Play one early rhythm game in handheld mode, then repeat on the TV. If the same cue changes dramatically, adjust TV and audio settings before judging the game.',
          'The demo also helps returning Rhythm Heaven players reset expectations. Groove has new games, side modes, and Switch-specific setup questions, so old muscle memory is helpful but not enough by itself.',
        ],
      },
      {
        heading: 'Check save transfer without overclaiming it',
        paragraphs: [
          'Nintendo states that save data from the demo can be transferred to the full version. That makes the demo worth taking seriously: clear calmly, test accessibility settings, and avoid rushing through screens if you plan to continue on the same Switch profile.',
          'Because the official page does not list every transfer detail publicly, this guide stays conservative. Use the same Nintendo Account and user profile when moving from demo to full game, and keep the demo installed until the full game confirms your progress.',
        ],
      },
      {
        heading: 'Try one solo game, one mode, and one setup change',
        paragraphs: [
          'A useful demo session should answer three questions. Does the core rhythm input feel good? Which mode or side activity interests you most? Does handheld or TV mode fit your setup better?',
          'Do not spend the entire demo chasing Perfects unless the timing already feels clean. Early Perfect practice is useful only after the device setup is reliable.',
        ],
        bullets: [
          'Play a repeatable early solo game until the cue makes sense.',
          'Try Beatspell or a side mode if the demo exposes it.',
          'Switch between handheld and TV mode to compare latency.',
          'Write down whether misses feel early, late, or cue-confused.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a Rhythm Paradise Groove demo?',
        answer: 'Yes. Nintendo lists a free demo on the official UK game page.',
      },
      {
        question: 'Does demo save data transfer to the full game?',
        answer:
          'Nintendo says demo save data can be transferred to the full version. Use the same Switch user profile and verify the transfer in-game.',
      },
      {
        question: 'Should I buy after the demo if TV timing feels bad?',
        answer:
          'First test handheld mode and fix TV settings. A laggy display path can make a good rhythm game feel unfair.',
      },
    ],
  },
  {
    slug: 'beatspell-guide',
    title: 'Rhythm Paradise Groove Beatspell Guide',
    seoTitle:
      'Rhythm Paradise Groove Beatspell Guide - Dungeon Mode Tips and Rhythm Combat',
    seoDescription:
      'Learn how Rhythm Paradise Groove Beatspell works, when to practice it, how to read rhythm combat cues, and how to avoid treating it like normal RPG combat.',
    summary:
      'Beatspell is the RPG-flavored mode, but the solution is still rhythm first: read the cue, keep the beat, and treat upgrades as support rather than the whole answer.',
    category: 'Modes',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.beatspell),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from Nintendo mode naming, launch-day Beatspell guide demand, Gamereactor Beatspell coverage, and current YouTube search results.',
    video: videos.beatspell,
    videoSearchQueries: [
      'Rhythm Paradise Groove Beatspell guide',
      'Rhythm Heaven Groove Beatspell tips',
      'Rhythm Paradise Groove dungeon mode',
    ],
    tags: ['Beatspell', 'Modes', 'Dungeon'],
    relatedRoutes: [
      '/beatspell',
      '/beatspell/how-to-unlock',
      '/modes',
      '/guides/beginner-guide',
      '/guides/perfect-solo-minigames',
      '/guides/full-walkthrough-route',
    ],
    body: [
      {
        heading: 'Beatspell is still a rhythm test',
        paragraphs: [
          'Beatspell looks like a side mode with RPG flavor, but the core problem remains timing. Do not approach it like a menu-heavy dungeon crawler where stats solve every mistake. The rhythm pattern tells you when to act, defend, and recover.',
          'If you lose repeatedly, ask whether the miss is strategic or rhythmic. Most early walls are not solved by frantic inputs. They are solved by hearing the loop and waiting for the correct response window.',
        ],
      },
      {
        heading: 'Separate enemy pressure from cue pressure',
        paragraphs: [
          'Beatspell can feel busier than a normal solo minigame because the framing suggests danger. That pressure can make players press early. Focus on the audio cue and let the screen become context.',
          'When a pattern changes, stop trying to predict from visuals alone. Listen for the count, identify whether the response lands on the beat or offbeat, and then resume. The dungeon layer should not erase the rhythm layer.',
        ],
      },
      {
        heading: 'Practice after your setup is calibrated',
        paragraphs: [
          'Do not make Beatspell your first serious latency test. Because the mode adds more information, it is harder to tell whether a miss came from lag, panic, or misunderstanding. Use a simpler minigame first, then return to Beatspell once the setup is trustworthy.',
          'If Beatspell feels late only in TV mode, use the calibration guide. If it feels late everywhere, slow down and practice the response phrase without chasing progress.',
        ],
      },
      {
        heading: 'Use mode variety to avoid Perfect burnout',
        paragraphs: [
          'Beatspell is also a good break from Perfect grinding. It keeps you in the rhythm language without forcing the same short mistake loop. If solo Perfect attempts become tense, switch modes for a while and return once your ear feels fresh.',
          'That mode-switching habit matters because Rhythm Paradise Groove has many side activities. The best players keep timing sharp without turning every session into one narrow medal chase.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Beatspell in Rhythm Paradise Groove?',
        answer:
          'Beatspell is an RPG-flavored mode listed by Nintendo, but its core play still depends on rhythm timing and cue reading.',
      },
      {
        question: 'Should beginners start with Beatspell?',
        answer:
          'Try it, but learn basic solo-game timing first. Beatspell adds pressure that can hide simple timing mistakes.',
      },
      {
        question: 'Does Beatspell need a separate guide page?',
        answer:
          'Yes. It has launch-day search demand and a distinct player job: understanding the RPG-style mode without losing the rhythm-first mindset.',
      },
    ],
  },
  {
    slug: 'multiplayer-party-guide',
    title: 'Rhythm Paradise Groove Multiplayer and Party Guide',
    seoTitle:
      'Rhythm Paradise Groove Multiplayer Guide - Local Party Timing and Setup',
    seoDescription:
      'Set up Rhythm Paradise Groove multiplayer for 1-4 local players with fair audio, TV timing, controller checks, and mixed-skill party rules.',
    summary:
      'Make local multiplayer fair before the first round: use a shared low-lag screen, keep audio clear, and choose modes that do not punish new players too quickly.',
    category: 'Multiplayer',
    difficulty: 'Beginner',
    coverImageUrl: siteCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Nintendo lists 30+ multiplayer rhythm games and 1-4 local players. Article focuses on setup and party flow rather than unverified game-by-game mechanics.',
    videoSearchQueries: [
      'Rhythm Paradise Groove multiplayer',
      'Rhythm Heaven Groove local multiplayer',
      'Rhythm Paradise Groove 4 players',
    ],
    tags: ['Multiplayer', 'Party', 'Local Play'],
    relatedRoutes: [
      '/multiplayer',
      '/multiplayer/all-minigames',
      '/modes',
      '/setup',
      '/guides/tv-calibration-input-lag',
    ],
    body: [
      {
        heading: 'Use one fair timing setup for everyone',
        paragraphs: [
          'Local multiplayer only works when everyone is hearing and seeing roughly the same rhythm. Put the TV in Game Mode, use clear speakers, and keep players close enough to hear cues without relying on visual guessing.',
          'If one player uses a different audio path, such as headphones while others use TV speakers, the timing can feel unfair. Shared audio is usually better for party play, even if it is less precise than a solo wired setup.',
        ],
      },
      {
        heading: 'Start with readable games before competitive pressure',
        paragraphs: [
          'Nintendo lists more than 30 multiplayer rhythm games, but a party session should not begin with the most chaotic option. Start with a mode where players can understand the call and response. Once the group hears the timing language, move to faster or stranger games.',
          'Mixed-skill groups need rotation. Let new players observe one round, then play. Rhythm games are much easier when someone has already seen where the joke or fake-out happens.',
        ],
      },
      {
        heading: 'Controller checks matter more than people admit',
        paragraphs: [
          'Before blaming a player, check controller charge, button feel, and whether everyone knows the required input. Rhythm Paradise Groove is silly, but a sticky button or unclear prompt can ruin a local round.',
          'If a player is consistently late, swap controllers for one round. If the problem follows the controller, fix the hardware. If it stays with the player, simplify the cue and count it out loud.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many players does Rhythm Paradise Groove support?',
        answer:
          'Nintendo lists local play for 1-4 players and more than 30 multiplayer rhythm games.',
      },
      {
        question: 'Is online multiplayer confirmed?',
        answer:
          'This launch guide only treats local multiplayer as confirmed by the official Nintendo UK page.',
      },
      {
        question: 'What is the best party setup?',
        answer:
          'Use one low-lag TV, shared clear audio, charged controllers, and start with readable games before moving to harder modes.',
      },
    ],
  },
  {
    slug: 'full-walkthrough-route',
    title: 'Rhythm Paradise Groove Full Walkthrough Route',
    seoTitle:
      'Rhythm Paradise Groove Walkthrough - Solo Games, Remixes and Practice Route',
    seoDescription:
      'Follow a practical Rhythm Paradise Groove walkthrough route for solo games, remixes, retry walls, Perfect cleanup, Beatspell, and side modes.',
    summary:
      'A walkthrough structure for players who want steady progress: clear first, stabilize the cues, return for Perfects, and use side modes as rhythm practice.',
    category: 'Walkthrough',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.walkthrough),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Selected from current walkthrough YouTube demand. The article keeps route advice original and avoids transcript-style retelling.',
    video: videos.walkthrough,
    videoSearchQueries: [
      'Rhythm Paradise Groove full walkthrough',
      'Rhythm Heaven Groove walkthrough',
      'Rhythm Paradise Groove all minigames walkthrough',
    ],
    tags: ['Walkthrough', 'Solo Games', 'Remix'],
    relatedRoutes: [
      '/walkthrough',
      '/minigames',
      '/remixes',
      '/beatspell',
      '/multiplayer',
      '/guides/perfect-solo-minigames',
      '/guides/beatspell-guide',
    ],
    body: [
      {
        heading: 'Clear first, Perfect later',
        paragraphs: [
          'A full walkthrough should not become a Perfect checklist on the first pass. Rhythm Paradise Groove has more than 80 solo rhythm games, and your first route should build a library of cues. Clear the stage, understand what it taught, then move on unless the same miss blocks basic progress.',
          'Perfect cleanup is more efficient after you have seen how later games remix earlier ideas. A cue that feels strange in isolation often becomes clearer after the game reuses it in another context.',
        ],
      },
      {
        heading: 'Use walls as practice notes',
        paragraphs: [
          'When a minigame blocks you, write down the exact cue that caused the wall. Do not write the level name only. Write the moment: the pause before the final hit, the offbeat response, the fake visual, or the call that changes speed.',
          'Then leave the stage for a short while. Rhythm games improve when the ear rests. Coming back after a different minigame can make the old pattern feel obvious.',
        ],
      },
      {
        heading: 'Route remixes as understanding checks',
        paragraphs: [
          'Remix-style stages are not just harder levels. They are exams on whether you understood multiple cue families. If a remix punishes one pattern, return to the original minigame and practice that cue cleanly.',
          'Do not replay the whole remix forever if one cue causes every failure. Isolate the family, refresh it, then return to the remix as a full-run check.',
        ],
      },
      {
        heading: 'Fold side modes into the route',
        paragraphs: [
          'Beatspell, Drum Lessons, Rhythm Toy Box, Cafe, and Museum content should not be treated as distractions. They give your ear variety and stop the walkthrough from becoming one tense chain of retries.',
          'Use side modes after difficult clears or before Perfect cleanup. They keep rhythm attention warm without forcing the same failure loop.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a full Rhythm Paradise Groove walkthrough?',
        answer:
          'Yes, launch-day YouTube walkthrough demand exists. This guide gives a route strategy and can later support per-minigame walkthrough pages.',
      },
      {
        question: 'Should I Perfect every game before moving on?',
        answer:
          'No. Clear first, learn cue families, then return for Perfects once the timing and remix context feel stable.',
      },
      {
        question: 'What should I do when stuck on one minigame?',
        answer:
          'Name the repeated miss, practice the cue, switch away briefly, and return after your ear resets.',
      },
    ],
  },
  {
    slug: 'rhythm-heaven-vs-paradise-name',
    title: 'Rhythm Heaven Groove vs Rhythm Paradise Groove Name Guide',
    seoTitle:
      'Rhythm Heaven Groove vs Rhythm Paradise Groove - Region Name Difference',
    seoDescription:
      'Understand why Rhythm Paradise Groove and Rhythm Heaven Groove use different names, which keyword this wiki targets, and how to avoid wrong-region confusion.',
    summary:
      'The same new Switch game uses different regional names. This site targets Rhythm Paradise Groove first while mapping North American Rhythm Heaven Groove searches safely.',
    category: 'Reference',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.northAmerica),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Built from Nintendo UK and Nintendo of America naming. Useful because existing competitor pages mostly target the North American title.',
    video: videos.northAmerica,
    videoSearchQueries: [
      'Rhythm Heaven Groove vs Rhythm Paradise Groove',
      'Rhythm Paradise Groove North America name',
      'Rhythm Heaven Groove Europe name',
    ],
    tags: ['Name', 'Region', 'Switch'],
    relatedRoutes: ['/release', '/links', '/guides/beginner-guide'],
    body: [
      {
        heading: 'The name changes by region',
        paragraphs: [
          'For practical guide purposes, Rhythm Paradise Groove and Rhythm Heaven Groove refer to the same new Nintendo Switch rhythm game. Rhythm Paradise Groove is the European/PAL title used by Nintendo UK. Rhythm Heaven Groove is the North American title used by Nintendo of America.',
          'This wiki uses Rhythm Paradise Groove as the primary keyword because the target domain and demand packet are built around the European name. It still includes Rhythm Heaven Groove in metadata and guide copy where players use that search term.',
        ],
      },
      {
        heading: 'Use official pages to avoid wrong results',
        paragraphs: [
          'Search results can mix older Rhythm Heaven series pages, reviews, trailers, and regional store pages. That is useful context, but route pages should stay focused on the 2026 Switch release.',
          'When checking a claim, ask whether the source is about the 2026 Switch game and whether it uses one of the two current names. Older series mechanics can explain design history, but they should not become unsupported facts about Groove.',
        ],
      },
      {
        heading: 'Why this matters for SEO',
        paragraphs: [
          'A player searching Rhythm Paradise Groove Wiki expects a page that recognizes the PAL title immediately. A player searching Rhythm Heaven Groove guide expects not to land on a completely different game. The site should connect both names while keeping the canonical brand consistent.',
          'That means homepage, title tags, and core hubs should lead with Rhythm Paradise Groove, while FAQs, aliases, and selected guides mention Rhythm Heaven Groove naturally.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Rhythm Heaven Groove a different game?',
        answer:
          'No. It is the North American title for the same 2026 Switch game covered here as Rhythm Paradise Groove.',
      },
      {
        question: 'Which name should this wiki target?',
        answer:
          'The site should target Rhythm Paradise Groove first, then support Rhythm Heaven Groove as an alternate regional keyword.',
      },
      {
        question: 'Should old Rhythm Heaven guides be copied?',
        answer:
          'No. Older games can provide context, but current pages must be verified against the 2026 Switch release.',
      },
    ],
  },
  {
    slug: 'beatspell-demo-guide',
    title: 'Beatspell Demo Guide',
    seoTitle:
      'Rhythm Paradise Groove Beatspell Demo Guide - Mode Tips and Timing',
    seoDescription:
      'Use the Rhythm Paradise Groove Beatspell demo guide for timing setup, mode expectations, practice order, Switch play, and common early mistakes.',
    summary:
      'A focused bridge between the free demo and Beatspell mode: test timing first, learn the mode’s cue language, and avoid treating it like a normal solo minigame.',
    category: 'Demo',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.beatspell),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Added after current video and search signals connected Beatspell with demo testing and timing setup.',
    video: videos.beatspell,
    videoSearchQueries: [
      'Rhythm Paradise Groove Beatspell demo',
      'Rhythm Heaven Groove Beatspell guide',
      'Rhythm Paradise Groove demo Beatspell',
    ],
    tags: ['Beatspell', 'Demo', 'Timing'],
    relatedRoutes: [
      '/demo',
      '/modes',
      '/setup',
      '/guides/beatspell-guide',
      '/guides/demo-save-transfer',
    ],
    body: [
      {
        heading: 'Use the demo to test timing before judging Beatspell',
        paragraphs: [
          'Beatspell can feel strange if your display or controller timing is off. Before treating a miss as a rhythm problem, run the demo in the setup you actually plan to use: handheld, docked TV, wired controller, or wireless controller.',
          'If the same cue feels late across several attempts, open the timing setup route first. Rhythm games punish tiny latency differences, and Beatspell is easier to learn when the input window feels honest.',
        ],
        bullets: [
          'Test handheld and TV mode separately if both are available.',
          'Use headphones or a consistent speaker setup while learning cues.',
          'Do not chase Perfect attempts before the timing setup feels stable.',
        ],
      },
      {
        heading: 'Learn the cue language, not only the pattern',
        paragraphs: [
          'Beatspell should be practiced like a mode with its own vocabulary. Listen for what the game is asking you to anticipate, then watch the visual prompt only as backup. If you memorize the screen without hearing the cue, the next variation will feel unfair.',
          'A clean practice loop is three attempts with sound focus, one attempt with eyes closed on the easy parts, then one normal attempt. That makes the mode less dependent on visual panic.',
        ],
      },
      {
        heading: 'Know when to leave the demo route',
        paragraphs: [
          'The demo is best for deciding whether the timing, mode feel, and Switch setup work for you. Once the cue language feels readable, move into the broader Beatspell guide and full mode pages.',
          'Do not over-practice the demo until it hides your weak spots. If you can pass comfortably but fail later variants, the issue is usually adaptation, not the first pattern.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I play Beatspell in handheld or TV mode?',
        answer:
          'Use whichever setup gives more consistent timing. Test both because TV audio delay can change how Beatspell feels.',
      },
      {
        question: 'Is Beatspell part of the demo?',
        answer:
          'Use the demo as a timing and mode-feel check. Exact demo contents can vary by region or event, so use official Nintendo pages for availability.',
      },
      {
        question: 'What should I fix first if Beatspell feels unfair?',
        answer:
          'Check audio/display timing before blaming the pattern. Then practice cue recognition instead of only watching visuals.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/guides',
  '/minigames',
  '/remixes',
  ...priorityPages.map((page) => page.route),
  '/walkthrough',
  '/demo',
  '/setup',
  '/modes',
  '/release',
  '/links',
  '/disclaimer',
  ...guides.map((guide) => `/guides/${guide.slug}`),
  ...minigames.map((minigame) => `/minigames/${minigame.slug}`),
  ...remixes.map((remix) => `/remixes/${remix.slug}`),
];
