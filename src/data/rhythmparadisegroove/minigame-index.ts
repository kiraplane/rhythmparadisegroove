export type MinigameSide = 'Frontside' | 'Flipside';

export type MinigameDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface MinigameIndexEntry {
  slug: string;
  name: string;
  side: MinigameSide;
  order: number;
  difficulty: MinigameDifficulty;
  cueFamily: string;
  inputStyle: string;
  perfectRisk: string;
  oneLine: string;
}

export const minigameIndex = [
  {
    slug: 'hoop-trundling',
    name: 'Hoop Trundling',
    side: 'Frontside',
    order: 1,
    difficulty: 'Beginner',
    cueFamily: 'spoken syllable chain',
    inputStyle: 'single jump on the final cue',
    perfectRisk: 'watching the background walkers instead of the call',
    oneLine:
      'A clean first timing test where the spoken pattern matters more than the busy parade around you.',
  },
  {
    slug: 'brolly-good-show',
    name: 'Brolly Good Show',
    side: 'Frontside',
    order: 2,
    difficulty: 'Beginner',
    cueFamily: 'umbrella open and close calls',
    inputStyle: 'tap to match the umbrella state',
    perfectRisk: 'getting pulled by the song rather than the head-bob beat',
    oneLine:
      'A charming umbrella routine that teaches you to separate cute animation from the actual response beat.',
  },
  {
    slug: 'disc-dog',
    name: 'Disc Dog',
    side: 'Frontside',
    order: 3,
    difficulty: 'Intermediate',
    cueFamily: 'throw, count, catch',
    inputStyle: 'jump after a delayed count',
    perfectRisk: 'rushing the catch before the count has settled',
    oneLine:
      'A delayed-response minigame for players who need to hold a count without tapping early.',
  },
  {
    slug: 'feeding-the-beast',
    name: 'Feeding the Beast',
    side: 'Frontside',
    order: 4,
    difficulty: 'Intermediate',
    cueFamily: 'projectile shape and arrival rhythm',
    inputStyle: 'reactive feed timing',
    perfectRisk: 'panicking when several throws arrive in a row',
    oneLine:
      'A reaction-heavy feeding game where calm recognition beats frantic button presses.',
  },
  {
    slug: 'ribbit-rocket',
    name: 'Ribbit Rocket',
    side: 'Frontside',
    order: 5,
    difficulty: 'Beginner',
    cueFamily: 'frog landing bounce',
    inputStyle: 'launch when the frog lands',
    perfectRisk:
      'waiting for the full animation instead of trusting the bounce',
    oneLine:
      'A bounce-and-launch pattern that rewards listening to the landing rather than staring at the frog.',
  },
  {
    slug: 'stop-n-go-n-stop',
    name: 'Stop N Go N Stop',
    side: 'Frontside',
    order: 6,
    difficulty: 'Intermediate',
    cueFamily: 'stop beeps and countdown starts',
    inputStyle: 'start, stop, and restart on cues',
    perfectRisk: 'stopping on the beep instead of after the instructed beat',
    oneLine:
      'A traffic-light timing drill where the silence between commands is the real test.',
  },
  {
    slug: 'hop-n-slide',
    name: 'Hop N Slide',
    side: 'Frontside',
    order: 7,
    difficulty: 'Advanced',
    cueFamily: 'hop, slide, and speed-shift calls',
    inputStyle: 'switch responses while keeping the pulse',
    perfectRisk: 'letting the glitchy visual changes reset your count',
    oneLine:
      'A slippery cue-switching game that punishes visual panic and rewards a steady internal beat.',
  },
  {
    slug: 'pop-dont-drop',
    name: "Pop, Don't Drop",
    side: 'Frontside',
    order: 8,
    difficulty: 'Intermediate',
    cueFamily: 'inflation and pop spacing',
    inputStyle: 'pop at the end of each pressure phrase',
    perfectRisk: 'flattening the long pause before the final pop',
    oneLine:
      'A pressure-spacing minigame where the longest wait is usually the moment that steals the Perfect.',
  },
  {
    slug: 'slice-n-dice-kitchen',
    name: 'Slice N Dice Kitchen',
    side: 'Frontside',
    order: 9,
    difficulty: 'Intermediate',
    cueFamily: 'chef bob and vegetable entries',
    inputStyle: 'slice to the kitchen pulse',
    perfectRisk: 'treating broccoli clusters like single vegetables',
    oneLine:
      'A kitchen rhythm game where ingredient shape tells you what kind of slicing phrase is coming.',
  },
  {
    slug: 'sneezy-moon',
    name: 'Sneezy Moon',
    side: 'Frontside',
    order: 10,
    difficulty: 'Advanced',
    cueFamily: 'short sneeze tells and sudden responses',
    inputStyle: 'quick reaction taps',
    perfectRisk: 'relaxing during quiet moments and missing the next sneeze',
    oneLine:
      'A jumpy lunar reaction game where the hardest part is staying ready without becoming tense.',
  },
  {
    slug: 'crab-snacks',
    name: 'Crab Snacks',
    side: 'Frontside',
    order: 11,
    difficulty: 'Intermediate',
    cueFamily: 'bounce return rhythm',
    inputStyle: 'claw hits on the rebound',
    perfectRisk: 'missing the second hit in quick double phrases',
    oneLine:
      'A rebound-reading minigame that feels simple until the returning snack changes the spacing.',
  },
  {
    slug: 'hop-stop-n-roll',
    name: 'Hop, Stop N Roll',
    side: 'Frontside',
    order: 12,
    difficulty: 'Intermediate',
    cueFamily: 'hop, stop, and roll commands',
    inputStyle: 'swap movement type on cue',
    perfectRisk: 'continuing the default hop after a stop or roll command',
    oneLine:
      'A movement-switch game built around resisting the comfortable default action.',
  },
  {
    slug: 'fruit-flex',
    name: 'Fruit Flex',
    side: 'Frontside',
    order: 13,
    difficulty: 'Beginner',
    cueFamily: 'fruit bounce and flex timing',
    inputStyle: 'flex or rebound with the beat',
    perfectRisk: 'overreacting to the fruit arc instead of the shoulder rhythm',
    oneLine:
      'A bouncy fruit routine where the body language gives you a cleaner metronome than the flying fruit.',
  },
  {
    slug: 'alien-alphabet',
    name: 'Alien Alphabet',
    side: 'Frontside',
    order: 14,
    difficulty: 'Advanced',
    cueFamily: 'alien call-and-response phrases',
    inputStyle: 'answer each alien phrase correctly',
    perfectRisk: 'memorizing one sound but failing when the phrase changes',
    oneLine:
      'A language-like call-and-response game where listening for phrase shape matters more than counting alone.',
  },
  {
    slug: 'can-do',
    name: 'Can Do',
    side: 'Frontside',
    order: 15,
    difficulty: 'Intermediate',
    cueFamily: 'red-can beats and blue-can delay',
    inputStyle: 'tap on beat or delayed beat by can type',
    perfectRisk: 'pressing the blue can as if it were red',
    oneLine:
      'A color-and-delay minigame that teaches you to trust the different timing rule for blue cans.',
  },
  {
    slug: 'backup-spotlight',
    name: 'Backup Spotlight',
    side: 'Frontside',
    order: 16,
    difficulty: 'Intermediate',
    cueFamily: 'beat taps with direction changes',
    inputStyle: 'keep tapping while switching stage moves',
    perfectRisk: 'dropping the main beat during a pose change',
    oneLine:
      'A stage routine that looks flashy but is mostly about keeping one reliable pulse underneath the cues.',
  },
  {
    slug: 'flutter-speed',
    name: 'Flutter Speed',
    side: 'Frontside',
    order: 17,
    difficulty: 'Advanced',
    cueFamily: 'butterfly, grasshopper, and later creature counts',
    inputStyle: 'respond after counted creature calls',
    perfectRisk: 'using one count for every creature type',
    oneLine:
      'A count-recognition game where each creature asks for a slightly different waiting habit.',
  },
  {
    slug: 'lightning-bolting',
    name: 'Lightning Bolting',
    side: 'Frontside',
    order: 18,
    difficulty: 'Advanced',
    cueFamily: 'strike timing and half-beat pressure',
    inputStyle: 'press through lightning patterns',
    perfectRisk: 'losing the half-beat when the evolved feel appears',
    oneLine:
      'A sharp timing game that turns tiny subdivisions into the main source of pressure.',
  },
  {
    slug: 'yum-bot-simulator',
    name: 'Yum-Bot Simulator',
    side: 'Frontside',
    order: 19,
    difficulty: 'Advanced',
    cueFamily: 'cake jiggle, beep, catch, and laser tells',
    inputStyle: 'catch or avoid after delayed cues',
    perfectRisk: 'answering the bad-cake laser one beat too soon',
    oneLine:
      'A dessert-robot pattern game where similar sounds lead to different responses if you stop listening.',
  },
  {
    slug: 'wiper-bosses',
    name: 'Wiper Bosses',
    side: 'Frontside',
    order: 20,
    difficulty: 'Intermediate',
    cueFamily: 'indicator sounds and boss strikes',
    inputStyle: 'jump or smash in time',
    perfectRisk: 'reading the changing background as a timing clue',
    oneLine:
      'A boss-flavored timing game where the screen tries to look busier than the cue actually is.',
  },
  {
    slug: 'football-dreams',
    name: 'Football Dreams',
    side: 'Frontside',
    order: 21,
    difficulty: 'Advanced',
    cueFamily: 'ball type and strike audio',
    inputStyle: 'choose the right football response',
    perfectRisk: 'forgetting which strike comes after the cue color or sound',
    oneLine:
      'A sports timing game that asks you to read the strike type before the ball reaches you.',
  },
  {
    slug: 'sweeper-star',
    name: 'Sweeper Star',
    side: 'Frontside',
    order: 22,
    difficulty: 'Intermediate',
    cueFamily: 'steady sweep with stop and pose cues',
    inputStyle: 'sweep on beat, pause, then resume',
    perfectRisk: 'coming back late after the pose',
    oneLine:
      'A steady-cleaning minigame where the resume after a pause is more dangerous than the sweep itself.',
  },
  {
    slug: 'a-for-effort',
    name: 'A for Effort',
    side: 'Frontside',
    order: 23,
    difficulty: 'Beginner',
    cueFamily: 'word-speed syllable timing',
    inputStyle: 'tap the A rhythm at the right speed',
    perfectRisk: 'using the same speed for every word',
    oneLine:
      'A word-rhythm drill where TEA, SODA, and COCOA each ask your hand for a different pace.',
  },
  {
    slug: 'spirit-slasher',
    name: 'Spirit Slasher',
    side: 'Frontside',
    order: 24,
    difficulty: 'Advanced',
    cueFamily: 'spirit color and attack phrase',
    inputStyle: 'slash single or paired spirits correctly',
    perfectRisk: 'misreading the paired spirit cue as a single slash',
    oneLine:
      'A late Frontside reflex test where color, spacing, and confidence all matter at once.',
  },
  {
    slug: 'quick-hands',
    name: 'Quick Hands',
    side: 'Flipside',
    order: 25,
    difficulty: 'Advanced',
    cueFamily: 'stick throw timing',
    inputStyle: 'catch or answer fast throws',
    perfectRisk: 'expecting every throw to land on the obvious beat',
    oneLine:
      'A Flipside speed test where your hands need to stay loose enough to answer off-beat throws.',
  },
  {
    slug: 'soda-hop',
    name: 'Soda Hop',
    side: 'Flipside',
    order: 26,
    difficulty: 'Beginner',
    cueFamily: 'rope jumps and double-hop cues',
    inputStyle: 'single or double press',
    perfectRisk:
      'freezing after one miss instead of returning to the rope rhythm',
    oneLine:
      'A friendly-looking jump rope game that becomes a recovery lesson when the rhythm gets crowded.',
  },
  {
    slug: 'space-sentry',
    name: 'Space Sentry',
    side: 'Flipside',
    order: 27,
    difficulty: 'Advanced',
    cueFamily: 'asteroid chant and reply',
    inputStyle: 'throw on the answering beat',
    perfectRisk: 'throwing on the chant instead of the reply',
    oneLine:
      'A space defense call-and-response game where the reply beat is the whole point.',
  },
  {
    slug: 'high-five-fever',
    name: 'High-Five Fever',
    side: 'Flipside',
    order: 28,
    difficulty: 'Intermediate',
    cueFamily: 'steady high fives with stop and trio cues',
    inputStyle: 'high five, hold back, or answer a group phrase',
    perfectRisk: 'auto-tapping through a stop cue',
    oneLine:
      'A social rhythm routine that teaches restraint: most beats are friendly, but not every beat wants a hand.',
  },
  {
    slug: 'germ-aerobics',
    name: 'Germ Aerobics',
    side: 'Flipside',
    order: 29,
    difficulty: 'Advanced',
    cueFamily: 'exercise calls under visual clutter',
    inputStyle: 'switch moves on rhythm cues',
    perfectRisk: 'letting background chaos drown out the next exercise call',
    oneLine:
      'A busy exercise game where the correct move comes from the cue, not from trying to parse every germ at once.',
  },
  {
    slug: 'synchro-wings',
    name: 'Synchro Wings',
    side: 'Flipside',
    order: 30,
    difficulty: 'Intermediate',
    cueFamily: 'lead-duck flap and break pattern',
    inputStyle: 'copy the lead rhythm on the next phrase',
    perfectRisk: 'continuing to flap through a break',
    oneLine:
      'A closing Flipside pattern-copy game where you win by following the leader without anticipating too much.',
  },
] as const satisfies readonly MinigameIndexEntry[];

export type MinigameSlug = (typeof minigameIndex)[number]['slug'];

export const frontsideMinigameIndex = minigameIndex.filter(
  (minigame) => minigame.side === 'Frontside'
);

export const flipsideMinigameIndex = minigameIndex.filter(
  (minigame) => minigame.side === 'Flipside'
);

export const evolvedMinigameIndex = minigameIndex.map((minigame) => ({
  ...minigame,
  slug: `${minigame.slug}-2`,
  name: `${minigame.name} 2`,
  cueFamily: `evolved ${minigame.cueFamily}`,
  inputStyle: `stricter ${minigame.inputStyle}`,
  perfectRisk: `carrying ${minigame.name} muscle memory into the evolved timing`,
  oneLine: `The evolved version of ${minigame.name} keeps the core idea but asks for tighter cue recognition and cleaner recovery.`,
}));

export const frontsideEvolvedMinigameIndex = evolvedMinigameIndex.filter(
  (minigame) => minigame.side === 'Frontside'
);

export const flipsideEvolvedMinigameIndex = evolvedMinigameIndex.filter(
  (minigame) => minigame.side === 'Flipside'
);
