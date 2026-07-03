import {
  type MinigameDifficulty,
  type MinigameIndexEntry,
  type MinigameSlug,
  minigameIndex,
} from './minigame-index';
import { CHECKED_AT } from './sources';
import type { DataSource, GuideFaq, GuideSection } from './types';

export interface MinigameGuide extends MinigameIndexEntry {
  variant: 'Base Solo' | 'Evolved 2';
  baseSlug?: string;
  baseName?: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  updatedAt: string;
  coverImageUrl: string;
  sourceStrategy: 'community_crosscheck';
  sourceNotes: string;
  body: GuideSection[];
  faq: GuideFaq[];
  relatedRoutes: string[];
}

interface MinigameArticleContent {
  summary: string;
  seoDescription: string;
  body: GuideSection[];
}

type MinigameFaqInput = MinigameIndexEntry & {
  variant: 'Base Solo' | 'Evolved 2';
  baseName?: string;
};

const siteCover = '/rhythmparadisegroove/hero.png';

export const minigameGuideSources: DataSource[] = [
  {
    type: 'competitor',
    label: 'Gamereactor 30 base solo minigames Perfect guide',
    url: 'https://www.gamereactor.eu/rhythm-paradise-groove-guide-how-to-perfect-all-30-base-solo-mini-games-1741843/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to verify the first 30 base Solo minigame names, Frontside/Flipside split, and high-level Perfect trouble spots. Advice here is rewritten as original player-facing guidance.',
  },
  {
    type: 'competitor',
    label: 'Gamereactor Solo structure note',
    url: 'https://www.gamereactor.eu/rhythm-paradise-groove-guide-how-to-perfect-all-30-base-solo-mini-games-1741843/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to verify that each base Solo minigame has an evolved "2" version and that 20 Remix levels complete the 80 Solo medal/master structure.',
  },
  {
    type: 'youtube',
    label: 'Rhythm Heaven Groove - All Minigames',
    url: 'https://www.youtube.com/watch?v=6RNclJULIgc',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as a gameplay cross-check for current minigame ordering and rhythm context.',
  },
  {
    type: 'youtube',
    label: 'Rhythm Heaven Groove - Full Game Walkthrough',
    url: 'https://www.youtube.com/watch?v=iBjIcF0TN90',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as a broad route cross-check when separating base minigame practice from full-route walkthrough advice.',
  },
];

const difficultyNotes: Record<MinigameDifficulty, string> = {
  Beginner:
    'This is a good early Perfect target once the response cue feels steady for several clears in a row.',
  Intermediate:
    'This is a fair Perfect target after a warm-up clear, but it punishes lazy counting and casual restarts.',
  Advanced:
    'Treat this as a focused Perfect target. Warm up first, name the miss, and stop before retries become tense.',
};

const sourceNotes =
  'First-version minigame page built from the verified 30 base Solo list, Gamereactor Perfect guide notes, and launch-week gameplay walkthrough cross-checks.';

const evolvedSourceNotes =
  'First-version evolved minigame page built from the verified Solo structure: each base minigame has an evolved "2" version. The page uses the base cue family as the practice anchor and avoids claiming frame-perfect changes that still need deeper per-video timestamp verification.';

const articleContent = {
  'hoop-trundling': {
    summary:
      'Hoop Trundling is the first real lesson in ignoring friendly visual noise. Listen for the syllable chain, keep your own bounce steady, and jump when the phrase resolves.',
    seoDescription:
      'Learn Hoop Trundling with cue timing, Perfect risks, common early jumps, and player-friendly practice notes for Rhythm Paradise Groove.',
    body: [
      {
        heading: 'Let the syllables carry the jump',
        paragraphs: [
          'Hoop Trundling looks like a tiny parade, which is exactly why it can trip up new players. The safest read is not the crowd or the hoop arc; it is the spoken chain that leads into the jump. Keep a quiet pulse in your foot, let the first syllables pass without reacting, then commit when the final sound lands. If you press because the hoop looks close, you will usually jump early.',
        ],
      },
      {
        heading: 'Use this as your calibration check',
        paragraphs: [
          `Because the idea is simple, Hoop Trundling is a useful page to revisit when timing feels suspicious. If handheld mode feels clean here but TV mode feels late, solve the setup before grinding Perfect attempts. If both modes feel fine, the work is mostly mental: stop tracking every walker and give your attention to your own character's repeated rhythm.`,
        ],
      },
      {
        heading: 'The Perfect miss is usually impatience',
        paragraphs: [
          'The most common Perfect loss is pressing on the build-up instead of the response. A good drill is to say the cue in your head and deliberately relax through the early syllables. The game is not asking for a reflex jump; it is asking you to arrive at the same point in the phrase every time. Once that point feels boring, Perfect attempts become much less dramatic.',
        ],
        bullets: [
          'Practice with sound slightly louder than usual.',
          'Do one warm-up clear before taking a Perfect window seriously.',
          'If you miss twice by jumping early, stop watching the hoop for one run.',
        ],
      },
    ],
  },
  'brolly-good-show': {
    summary:
      'Brolly Good Show is a gentle umbrella routine with one serious lesson: the cute scene is decoration, while the head-bob beat and open-close cues are the instructions.',
    seoDescription:
      'Use this Brolly Good Show guide for umbrella open-close cues, beat tracking, Perfect attempts, and common visual distractions.',
    body: [
      {
        heading: 'Follow the performers, not the whole stage',
        paragraphs: [
          `The trick in Brolly Good Show is choosing a small anchor. The background, costumes, and music all want attention, but the performers' head movement gives you a cleaner beat than the scenery. Watch it once to understand the gag, then play mostly by ear. You are not solving a visual puzzle; you are answering whether the umbrella should open or close on a beat that has already been established.`,
        ],
      },
      {
        heading: 'Make open and close feel different in your hand',
        paragraphs: [
          `Players often lose this Perfect because both responses blur into "press when something happens." Give the two states separate mental labels. Open should feel like meeting a beat; close should feel like finishing a phrase. That tiny distinction keeps your hand from mashing whenever the umbrella moves. If the inputs start feeling the same, replay for a clear rather than forcing a Perfect attempt.`,
        ],
      },
      {
        heading: 'A calm run sounds almost too simple',
        paragraphs: [
          'A good Brolly Good Show run does not feel busy. It feels like nodding along and letting the input arrive naturally. If you are counting every animation frame, you are probably making it harder. The best practice is to replay until the cues become ordinary, then take the Perfect window while your attention is still light and your timing is not clenched.',
        ],
        bullets: [
          'Anchor on the head-bob beat before the first real response.',
          'Name the umbrella state before pressing.',
          'Restart only after you can say whether the miss was early, late, or the wrong state.',
        ],
      },
    ],
  },
  'disc-dog': {
    summary:
      'Disc Dog is about holding a delayed count after the throw. The catch is not hard because it is fast; it is hard because waiting cleanly feels uncomfortable.',
    seoDescription:
      'Beat Disc Dog with delayed-count advice, catch timing, Perfect cleanup notes, and common early-jump fixes.',
    body: [
      {
        heading: 'Count the air after the throw',
        paragraphs: [
          'Disc Dog gives you a throw, then asks you to live inside the wait. That wait is the whole minigame. Do not watch the disc so intensely that your hand jumps at the first sign of danger. Start the count from the throw, keep the spacing even, and let the catch arrive as the end of the phrase. When players miss, it is usually because they treat the visual distance as a countdown instead of keeping the musical count.',
        ],
      },
      {
        heading: 'Practice the boring middle',
        paragraphs: [
          'The start and catch are memorable, but the boring middle is where the Perfect is won. During practice, pay attention to whether your body speeds up while waiting. If your shoulders tense or your thumb hovers too hard, you are probably about to rush. A relaxed hand matters here because the timing is delayed enough for anticipation to become the enemy.',
        ],
      },
      {
        heading: 'Do not turn one late catch into five early catches',
        paragraphs: [
          'After a late miss, many players overcorrect and start jumping early. Resist that. Disc Dog rewards consistent counting more than emotional adjustment. If you miss late, replay the count in your head once, then try again without changing everything. If the same miss repeats three times, step away from Perfect attempts and get one clean clear first.',
        ],
        bullets: [
          'Say the count quietly during the throw phase.',
          'Keep your eyes soft; tracking the disc too hard encourages early jumps.',
          'Use one warm-up clear to prove the count before a Perfect window.',
        ],
      },
    ],
  },
  'feeding-the-beast': {
    summary:
      'Feeding the Beast asks you to recognize what is arriving and answer before the screen feels crowded. The page is less about speed and more about staying calm.',
    seoDescription:
      'Learn Feeding the Beast cues, projectile recognition, calm reaction timing, and Perfect advice for Rhythm Paradise Groove.',
    body: [
      {
        heading: 'Recognize the meal before it reaches you',
        paragraphs: [
          'Feeding the Beast is easy to overplay. When several items arrive close together, the natural response is to panic and press at the screen. That makes the rhythm worse. Instead, treat each throw as a small phrase: identify the arrival, feel the spacing, then feed on the correct beat. The beast looks demanding, but the game is mostly checking whether you can keep separate arrivals from collapsing into one nervous blur.',
        ],
      },
      {
        heading: 'Keep your recovery rhythm alive',
        paragraphs: [
          'One miss in this minigame can make the next cue feel impossible if you stare at the failure. Practice recovering the beat immediately after each feed. Even when you are only aiming for a clear, act as if the next item matters more than the last one. That habit becomes valuable during Perfect windows, where frustration after one close call can wreck an otherwise stable run.',
        ],
      },
      {
        heading: 'Perfect attempts need a lower heart rate',
        paragraphs: [
          `The best Feeding the Beast attempts feel calmer than the scene suggests. If you notice yourself gripping the controller, switch back to normal clears. For the Perfect, the key is to let each arrival be its own decision. Do not carry the previous item forward in your mind, and do not mash to "cover" uncertainty. Covering uncertainty is exactly how clean timing turns into messy timing.`,
        ],
        bullets: [
          'Name the incoming item or timing shape before responding.',
          'After a miss, practice recovering the next beat instead of instantly restarting.',
          'Avoid taking a Perfect window when the screen already makes you tense.',
        ],
      },
    ],
  },
  'ribbit-rocket': {
    summary:
      'Ribbit Rocket is a bounce-timing minigame. The frog landing gives you the launch cue, so the cleanest runs happen when you trust the bounce instead of waiting for a full visual confirmation.',
    seoDescription:
      'Use this Ribbit Rocket guide for frog landing cues, launch timing, Perfect risks, and simple practice notes.',
    body: [
      {
        heading: 'The landing is the instruction',
        paragraphs: [
          'Ribbit Rocket teaches a useful Rhythm Paradise habit: the animation can be funny, but the sound of contact is the instruction. When the frog lands, the phrase is telling you to prepare the launch. If you wait until the frog looks completely settled, your response will feel late. Listen for the bounce, keep the beat under it, and make the launch feel like part of the same motion.',
        ],
      },
      {
        heading: 'Do not stare the frog into place',
        paragraphs: [
          `A lot of misses come from over-watching the character. The frog's position matters, but it should not become a visual reaction test. During practice, try looking at the general area rather than locking onto the sprite. If your timing improves, that means your eyes were creating delay. Good Ribbit Rocket play feels like hearing a landing and letting your hand answer without a debate.`,
        ],
      },
      {
        heading: 'Perfect runs should feel springy',
        paragraphs: [
          'For a Perfect attempt, you want a light bounce in your own timing. If the run feels stiff, you will either launch late or hit a response too sharply. Replay until the landing and launch feel like two parts of one rhythm. Once the movement feels springy and repeatable, Ribbit Rocket becomes one of the more comfortable base pages to clean up.',
        ],
        bullets: [
          'Listen for contact, then launch as the phrase resolves.',
          'Use the frog as confirmation, not permission.',
          'If you are late twice, stop waiting for the animation to finish.',
        ],
      },
    ],
  },
  'stop-n-go-n-stop': {
    summary:
      'Stop N Go N Stop is a command discipline test. The hard part is not understanding stop and go; it is obeying the exact beat after the cue.',
    seoDescription:
      'Beat Stop N Go N Stop with command cue timing, stop-beat practice, countdown starts, and Perfect cleanup advice.',
    body: [
      {
        heading: 'Treat the command as a warning, not the input',
        paragraphs: [
          'The title makes the minigame sound obvious, but the spacing is where it becomes dangerous. A stop cue is not always the moment your hand should freeze; it is often the warning that tells you when the freeze belongs. Players who react directly to the beep tend to land one beat wrong. Hear the command, keep the internal count alive, and perform the action at the instructed point in the phrase.',
        ],
      },
      {
        heading: 'Restarting cleanly matters as much as stopping',
        paragraphs: [
          'Many runs survive the stop and then fail on the return. When the countdown or restart cue arrives, do not rush just because silence feels uncomfortable. Count into the go the same way you counted into the stop. If you only practice stopping, your Perfect attempt will still leak timing on the restart, especially after a long pause has made your hand impatient.',
        ],
      },
      {
        heading: 'Use silence as part of the rhythm',
        paragraphs: [
          'The best Stop N Go N Stop practice is learning to hear silence as measured time. Do not let the empty space become guesswork. Tap your foot quietly, nod, or count under your breath until the restart feels placed rather than guessed. Once the silent beats feel stable, the minigame becomes far less twitchy and the Perfect risk drops quickly.',
        ],
        bullets: [
          'Do not stop just because a sound happened; place the stop on the beat.',
          'Practice the restart after silence as its own cue.',
          'If every miss is early, your body is afraid of the pause.',
        ],
      },
    ],
  },
  'hop-n-slide': {
    summary:
      'Hop N Slide is a cue-switching page with messy visuals and speed pressure. Keep one internal pulse, then let the call decide whether the next response is hop or slide.',
    seoDescription:
      'Learn Hop N Slide timing, hop-slide cue changes, glitchy visual distractions, and Perfect advice for Rhythm Paradise Groove.',
    body: [
      {
        heading: 'Keep one pulse under the weirdness',
        paragraphs: [
          'Hop N Slide is designed to make your eyes suspicious. The stage can feel like it is changing faster than your hands can think, but the pulse underneath is more reliable than the visuals. Start by finding that pulse, then attach each cue to it. If you let every visual shift reset your timing, you will always be reacting late. If you keep the beat, the changes become labels instead of surprises.',
        ],
      },
      {
        heading: 'Do not pre-decide the next move',
        paragraphs: [
          'The default action will start to feel comfortable, and that is when the game catches you. A good run keeps the hand ready without committing too early. Listen for the cue, then answer. When you assume the next move because the last three were similar, the slide or hop change arrives exactly where your muscle memory is least flexible.',
        ],
      },
      {
        heading: 'Perfect practice should be short and alert',
        paragraphs: [
          'This is not a page to grind while tired. Hop N Slide asks for attention and rhythm at the same time, so long retry chains tend to make it worse. Do two normal clears, identify the cue that breaks you, then take a Perfect attempt. If the miss moves around randomly, stop. Random misses usually mean your pulse has become visual panic.',
        ],
        bullets: [
          'Anchor the beat before caring about the next command.',
          'Keep your thumb loose so a cue change can actually change the response.',
          'Treat visual glitches as noise unless they are paired with a real cue.',
        ],
      },
    ],
  },
  'pop-dont-drop': {
    summary:
      "Pop, Don't Drop is a spacing page. The pops are easy to hear, but the wait before the last response can trick you into pressing too soon.",
    seoDescription:
      "Use this Pop, Don't Drop guide for pop spacing, burner timing, long-pause Perfect risks, and clear practice advice.",
    body: [
      {
        heading: 'Respect the long wait',
        paragraphs: [
          'This minigame is built around pressure: the object inflates, the rhythm suggests a pop, and your hand wants closure. The early pops are there to teach spacing, but the longer wait is where the page tests whether you are listening or guessing. Count the gap instead of filling it with panic. If you can make the silence feel measured, the final pop stops feeling like a trap.',
        ],
      },
      {
        heading: 'Hear the inflation as a phrase',
        paragraphs: [
          'Rather than treating every pop as an isolated button press, group the inflation sounds into a phrase. That gives your brain a shape to follow: short pressure, answer, short pressure, answer, longer pressure, answer. The phrase approach is especially helpful when your eyes start worrying that the object is about to drop. The sound tells you more cleanly than the fear does.',
        ],
      },
      {
        heading: 'Perfect losses usually come from wanting it over',
        paragraphs: [
          `When a Perfect run is going well, Pop, Don't Drop can make you impatient near the end. That impatience creates the early input. Before a Perfect attempt, remind yourself that the final wait is part of the run, not the space before the run ends. Stay with it until the response belongs. A calm last pop is the difference between a clear and a real cleanup.`,
        ],
        bullets: [
          'Practice the long gap by counting it out loud once or twice.',
          'Do not press because the object looks scary.',
          'If the last pop is early, slow your breathing before the next attempt.',
        ],
      },
    ],
  },
  'slice-n-dice-kitchen': {
    summary:
      'Slice N Dice Kitchen is a kitchen-rhythm page where ingredient shape changes the phrase. Watch enough to identify the food, then let the chef bob and beat carry the slice.',
    seoDescription:
      'Beat Slice N Dice Kitchen with chef-bob timing, vegetable cue recognition, broccoli cluster advice, and Perfect notes.',
    body: [
      {
        heading: 'Ingredient shape tells you the phrase',
        paragraphs: [
          `Slice N Dice Kitchen is not just "hit every vegetable." The ingredient tells you what kind of rhythm is arriving. A single item asks for a different hand feel than a cluster, and broccoli-style groups can punish players who answer them like one simple chop. Use the first moment of each entry to identify the phrase, then slice with the beat instead of reacting to the food at the last instant.`,
        ],
      },
      {
        heading: 'The chef is your metronome',
        paragraphs: [
          `When the counter gets busy, the chef's movement is a better anchor than the vegetables themselves. The food is the cue type; the chef is the steady pulse. During practice, look between them rather than only at the incoming ingredient. That split attention keeps you from losing the underlying rhythm when a new shape arrives or when the kitchen animation gets livelier.`,
        ],
      },
      {
        heading: 'Perfect cleanup is about phrase memory',
        paragraphs: [
          'A strong Perfect attempt starts when you can recognize the phrase before your hand moves. If you are still surprised by clusters, keep clearing normally. Once the ingredient shapes feel familiar, the page becomes much easier because your hand prepares the right slice pattern early. The goal is not faster reaction; it is earlier recognition and a calmer response.',
        ],
        bullets: [
          'Say "single" or "cluster" in your head during practice.',
          'Use the chef bob to keep time when the counter gets busy.',
          'If broccoli breaks the run, isolate cluster timing before another Perfect attempt.',
        ],
      },
    ],
  },
  'sneezy-moon': {
    summary:
      'Sneezy Moon is a quick-reaction page with sudden tells. The safest mindset is relaxed readiness: alert enough to answer, loose enough not to jump at nothing.',
    seoDescription:
      'Use this Sneezy Moon guide for sneeze cues, sudden reaction timing, Perfect risks, and practice advice.',
    body: [
      {
        heading: 'Stay ready without tightening up',
        paragraphs: [
          'Sneezy Moon can feel mean because the cues arrive suddenly, but tensing up makes the page worse. A stiff thumb reacts to every hint and then misses the real sneeze. Keep your hand light, listen for the cue shape, and answer decisively when it happens. The difference between readiness and panic is small here, but it matters more than raw reaction speed.',
        ],
      },
      {
        heading: 'Quiet moments are still measured',
        paragraphs: [
          'The danger is relaxing too much during a quiet gap, then snapping late when the next sneeze appears. Treat the quiet as part of the rhythm instead of a break from the game. Count softly through it, keep your eyes settled, and expect the next cue without guessing exactly when it must appear. That makes the surprise feel like a known event rather than an ambush.',
        ],
      },
      {
        heading: 'Perfect attempts need confidence, not fear',
        paragraphs: [
          'If you start a Perfect run hoping the sneeze pattern will be kind, you are probably not ready. Practice until you can miss and still know why: late recognition, false start, or lost attention in the gap. Once you can name the mistake, the page becomes trainable. Sneezy Moon rewards clear focus more than marathon grinding.',
        ],
        bullets: [
          'Keep your thumb close to neutral, not half-pressed.',
          'Count through quiet gaps so attention does not switch off.',
          'Stop if every cue starts to feel like a jump scare.',
        ],
      },
    ],
  },
  'crab-snacks': {
    summary:
      'Crab Snacks is a rebound page. The first hit matters, but the returning rhythm and quick double phrases are where Perfect runs usually get tested.',
    seoDescription:
      'Learn Crab Snacks rebound cues, double-hit timing, claw rhythm, and Perfect cleanup advice.',
    body: [
      {
        heading: 'Listen to the snack coming back',
        paragraphs: [
          'Crab Snacks becomes clearer when you treat each throw as a bounce phrase. The item leaves, returns, and asks for a claw response at the right point in that return. If you only watch the object crossing the screen, the timing can feel slippery. Listen to the rhythm of the rebound and let the claw hit belong to that rhythm instead of guessing from distance.',
        ],
      },
      {
        heading: 'Double phrases need their own hand feel',
        paragraphs: [
          'Quick doubles are the main reason this minigame stops being casual. Do not mash two hits because you saw two things happen. The double has a spacing, and your hand needs to preserve it. Practice those moments as tiny phrases: hit, reset, hit. If the reset disappears, the second input will smear into the first and cost the Perfect.',
        ],
      },
      {
        heading: 'Keep the claws relaxed',
        paragraphs: [
          'The crab theme makes it tempting to snap hard at everything, but a harsh press often ruins the rebound feel. Keep the hand small and light. On a good run, the claws feel like they are answering a bounce, not attacking the screen. If you miss the second hit twice, step back and practice the double spacing before using another Perfect chance.',
        ],
        bullets: [
          'Track the rebound phrase rather than the object distance.',
          'Give quick doubles a tiny reset between hits.',
          'Do not let a strong first hit make the second hit late.',
        ],
      },
    ],
  },
  'hop-stop-n-roll': {
    summary:
      'Hop, Stop N Roll starts with a default hop, then asks whether you can break that habit on command. The Perfect risk is continuing the comfortable move after the cue changes.',
    seoDescription:
      'Beat Hop, Stop N Roll with hop, stop, and roll cue timing, habit-breaking tips, and Perfect practice notes.',
    body: [
      {
        heading: 'Default action is the trap',
        paragraphs: [
          'The hop rhythm settles quickly, which is both helpful and dangerous. Once your hand likes the default action, a stop or roll cue can arrive while your body has already decided to hop. Keep the default pulse, but do not marry it. Think of each cue as permission for the next action. No cue, no assumption. That mindset makes the command changes much easier to respect.',
        ],
      },
      {
        heading: 'Stopping is an active move',
        paragraphs: [
          `Players sometimes treat stop cues as doing nothing, then lose time because the body has no clear action. In practice, make "stop" feel like a deliberate response. Your hand may not press, but your mind should still mark the beat. That keeps the rhythm alive and makes the next hop or roll cleaner. Silence still needs timing.`,
        ],
      },
      {
        heading: 'Perfect cleanup is about switching without drama',
        paragraphs: [
          'A strong run does not look heroic. It looks like small changes placed exactly where they belong. If you feel surprised every time a roll appears, do more normal clears and listen for the command tone. When the changes start feeling ordinary, take the Perfect window. This page rewards modest, controlled attention more than big reactions.',
        ],
        bullets: [
          'Keep the hop pulse but wait for permission to continue it.',
          'Mark stop cues mentally so the beat does not vanish.',
          'If you miss after a stop, practice the resume rather than the stop itself.',
        ],
      },
    ],
  },
  'fruit-flex': {
    summary:
      'Fruit Flex is a bouncy timing page with generous personality. The fruit arc is fun, but the shoulder rhythm and rebound feel are usually the cleaner guides.',
    seoDescription:
      'Use this Fruit Flex guide for fruit bounce timing, flex cues, Perfect risks, and beginner-friendly practice notes.',
    body: [
      {
        heading: 'Let the body language keep time',
        paragraphs: [
          `Fruit Flex is easier when you stop chasing the fruit with your eyes. The arc can look dramatic, but the character's body language gives you a steadier pulse. Use that pulse to prepare the flex or rebound, then let the fruit confirm what you already know. When the visual path becomes the main timer, players often overreact to height and press too soon.`,
        ],
      },
      {
        heading: 'Make the response feel elastic',
        paragraphs: [
          'This page should not feel like stabbing a button. It should feel elastic: fruit moves, beat arrives, response springs back. During practice, try to keep your inputs the same size. Big, anxious presses make it harder to repeat the timing. Small, even presses turn Fruit Flex into a comfortable rhythm check and a good early Perfect candidate.',
        ],
      },
      {
        heading: 'Use it to rebuild confidence',
        paragraphs: [
          'Because the cues are readable once you find the bounce, Fruit Flex is useful after tougher pages have made your timing feel shaky. Clear it once to reset your ear, then try for Perfect if the rhythm feels natural. If it starts feeling visually confusing, soften your gaze and return to the shoulder movement.',
        ],
        bullets: [
          'Use the shoulder rhythm as your metronome.',
          'Do not press based only on fruit height.',
          'Keep the hand relaxed so the response feels like a rebound.',
        ],
      },
    ],
  },
  'alien-alphabet': {
    summary:
      'Alien Alphabet plays more like learning a tiny musical language than counting a simple beat. The answer depends on the phrase shape, not just the number of beats.',
    seoDescription:
      'Learn Alien Alphabet call-and-response cues, phrase recognition, Perfect risks, and practice advice for Rhythm Paradise Groove.',
    body: [
      {
        heading: 'Learn the phrase, not one syllable',
        paragraphs: [
          'Alien Alphabet punishes shallow memorization. If you latch onto one alien sound and ignore the rest of the phrase, the next variation will expose it. Listen to the full contour: how the call starts, how long it lasts, and where the response belongs. Once the phrase has a shape in your head, the answer feels much less like guessing a foreign word.',
        ],
      },
      {
        heading: 'Separate recognition from execution',
        paragraphs: [
          'The input itself is not the whole challenge. The hard part is recognizing which call you heard quickly enough to answer calmly. During practice, name the call type in your head before you respond. That slows the panic without actually making your input late, because the phrase gives you time. If you answer before recognizing, you are gambling.',
        ],
      },
      {
        heading: 'Perfect attempts need phrase confidence',
        paragraphs: [
          `Do not chase a Perfect in Alien Alphabet just because one run went well. Chase it when wrong answers feel explainable. If you can say "I confused this phrase with that one," you have something to practice. If all misses feel random, replay for recognition first. This is one of the better examples of a minigame where listening deeply beats counting harder.`,
        ],
        bullets: [
          'Listen to the whole alien call before deciding.',
          'Give each phrase a simple nickname during practice.',
          'If answers feel random, slow down and practice recognition before Perfect windows.',
        ],
      },
    ],
  },
  'can-do': {
    summary:
      'Can Do is a timing-rule page. Red cans and blue cans do not ask for the same hand timing, and the Perfect depends on trusting that difference.',
    seoDescription:
      'Beat Can Do with red-can and blue-can timing rules, delayed inputs, Perfect risks, and simple practice notes.',
    body: [
      {
        heading: 'Color changes the rule',
        paragraphs: [
          'Can Do becomes dangerous when you treat every can like the same cue. Red cans are straightforward enough to encourage confidence, then blue cans ask you to delay in a way that can feel wrong at first. Trust the rule. If you hit blue cans with red-can timing, the miss is not a mystery; it is your hand refusing to accept that the page changed the spacing.',
        ],
      },
      {
        heading: 'Practice blue cans until they feel normal',
        paragraphs: [
          'The blue-can delay should eventually feel like its own groove, not a correction. During practice, exaggerate the mental wait: hear the cue, hold the beat, then answer. Once that wait becomes comfortable, the red and blue patterns stop fighting each other. The goal is to switch rules without tension.',
        ],
      },
      {
        heading: 'Perfect losses are usually old habit',
        paragraphs: [
          'When a Perfect run is close, old red-can habit can sneak into a blue-can moment because the hand wants the safer, earlier response. Before starting, remind yourself that each can type has permission to feel different. If you miss a blue can early twice, do not keep retrying. Play one normal clear focused only on delayed timing, then come back.',
        ],
        bullets: [
          'Say "red now, blue wait" during early practice.',
          'Do not judge the blue timing by how it feels on the first attempt.',
          'If your miss is early, you probably ignored the can type.',
        ],
      },
    ],
  },
  'backup-spotlight': {
    summary:
      'Backup Spotlight looks like a stage routine, but the dependable beat underneath is the real guide. Keep tapping, then let direction and pose cues decorate the pulse.',
    seoDescription:
      'Use this Backup Spotlight guide for beat taps, direction changes, pose cues, Perfect risks, and stage-routine practice.',
    body: [
      {
        heading: 'The show is flashier than the rhythm',
        paragraphs: [
          'Backup Spotlight can look complex because the performance has personality. Underneath, the job is usually simple: keep the main beat alive and answer the change cues without dropping it. If you stare at the whole stage, the routine feels larger than it is. Narrow your focus to the pulse first, then add the direction or pose information on top.',
        ],
      },
      {
        heading: 'Do not let a pose steal the beat',
        paragraphs: [
          'The common miss happens when a pose change makes the player stop feeling the tap rhythm. Treat poses as accents, not breaks. Your body should still know where the next beat is while the animation changes. Practice by counting through the pose out loud once; if the count survives, the next input usually lands cleanly.',
        ],
      },
      {
        heading: 'Perfect cleanup is performance calm',
        paragraphs: [
          'A good Backup Spotlight Perfect feels like being part of the band, not like solving choreography from scratch. Take the window when the tap beat is automatic and the cues feel like small stage directions. If your attention keeps jumping to every light or movement, step back and run it for clears until the show becomes background again.',
        ],
        bullets: [
          'Keep the tap beat even before caring about style changes.',
          'Count through pose changes so the next beat stays alive.',
          'Use the cue as a stage direction, not a reason to panic.',
        ],
      },
    ],
  },
  'flutter-speed': {
    summary:
      'Flutter Speed is a creature-counting page. Butterflies, grasshoppers, and later cues each ask for their own count, so one universal waiting habit will not carry the Perfect.',
    seoDescription:
      'Learn Flutter Speed creature counts, butterfly and grasshopper timing, evolved cue risks, and Perfect practice notes.',
    body: [
      {
        heading: 'Each creature has a count personality',
        paragraphs: [
          'Flutter Speed is not difficult because the input is strange. It is difficult because the waiting rule changes with the creature. If you use the same count for every arrival, one type will always feel unfair. During practice, give each creature a simple mental tag and attach the correct wait to that tag. Recognition has to happen before your hand starts counting.',
        ],
      },
      {
        heading: 'Do not rush the later variations',
        paragraphs: [
          'Later and evolved-feeling cues can make the page feel faster even when the answer is still count-based. The danger is reacting to novelty instead of keeping the measured wait. When a new creature or break appears, breathe through the first beat, identify it, then respond to its count. The page rewards patient recognition under pressure.',
        ],
      },
      {
        heading: 'Perfect attempts need creature names',
        paragraphs: [
          `A useful test before a Perfect window is whether you can name the cue that broke your last run. If all you can say is "that one fast bug," you need more recognition practice. Once you know which creature causes which wait, the minigame becomes a set of known phrases rather than a swarm of surprises.`,
        ],
        bullets: [
          'Give each creature a nickname and a count.',
          'Let recognition start before the input count.',
          'If a new variation scares you, replay for cue ID rather than Perfect.',
        ],
      },
    ],
  },
  'lightning-bolting': {
    summary:
      'Lightning Bolting is a subdivision page. The strike cues can feel sharp, and half-beat pressure makes loose timing show up very quickly.',
    seoDescription:
      'Beat Lightning Bolting with strike timing, half-beat awareness, Perfect risks, and advanced rhythm practice advice.',
    body: [
      {
        heading: 'Tiny timing errors are the whole fight',
        paragraphs: [
          'Lightning Bolting gives you less emotional room than earlier pages. If your beat is only approximately right, the strikes expose it. Listen for the exact placement of each cue and keep your inputs small. Big, dramatic presses make it harder to land subtle subdivisions. This page is a good reminder that Rhythm Paradise Perfects are often about precision, not speed.',
        ],
      },
      {
        heading: 'Respect the half-beat feel',
        paragraphs: [
          'When the rhythm shifts into tighter spacing, do not try to brute-force it by reacting faster. Feel the subdivision. Clap or tap the smaller pulse once outside the run if you need to. Half-beat misses usually happen because the player is still thinking in full beats while the page has already narrowed the grid.',
        ],
      },
      {
        heading: 'Perfect cleanup needs a clean setup',
        paragraphs: [
          'Because the timing window feels sharp, Lightning Bolting is one of the pages where TV latency can masquerade as bad play. If you are consistently late here but fine handheld, do not grind. Fix setup first. Once the setup is honest, practice short sessions and stop as soon as your hands start forcing the beat.',
        ],
        bullets: [
          'Keep inputs small and even.',
          'Practice the half-beat pulse outside the run.',
          'Check handheld timing if every strike feels late on TV.',
        ],
      },
    ],
  },
  'yum-bot-simulator': {
    summary:
      'Yum-Bot Simulator is a delayed-cue page with similar-looking dessert events. The job is to hear whether the cake wants a catch, a wait, or a different response.',
    seoDescription:
      'Use this Yum-Bot Simulator guide for cake cues, beep timing, laser tells, delayed responses, and Perfect cleanup.',
    body: [
      {
        heading: 'Do not answer every cake the same way',
        paragraphs: [
          'Yum-Bot Simulator likes to make related cues feel similar. A cake jiggle, a beep, and a bad-cake tell can all push your hand toward an immediate response, but they do not mean the same thing. Slow the decision down by labeling the cue before you press. If you cannot say what kind of cake event happened, your input is probably a guess.',
        ],
      },
      {
        heading: 'The delay is part of the flavor',
        paragraphs: [
          'Some responses arrive after a short wait, and that wait is where Perfect runs wobble. Treat the delay as a counted ingredient in the phrase. Hear cue, count the beat, then answer. If you press at the sound itself, the response may feel confident but land wrong. This page rewards players who can let a cue hang for a moment without losing nerve.',
        ],
      },
      {
        heading: 'Perfect losses come from false certainty',
        paragraphs: [
          'The most frustrating Yum-Bot misses are the ones where you were sure you knew the cue. When that happens, do not simply retry harder. Ask which similar event you confused it with. Building that distinction is the real practice. Once the cue categories separate in your ear, the robot stops feeling tricky and starts feeling orderly.',
        ],
        bullets: [
          'Label the cake cue before moving your thumb.',
          'Count delayed responses instead of reacting to the first beep.',
          'If two events sound similar, practice only telling them apart for one clear.',
        ],
      },
    ],
  },
  'wiper-bosses': {
    summary:
      'Wiper Bosses adds boss energy and changing backgrounds, but the useful information is still the indicator sound and response rhythm.',
    seoDescription:
      'Beat Wiper Bosses with indicator cue timing, jump and smash advice, background-distraction tips, and Perfect notes.',
    body: [
      {
        heading: 'Ignore the scenery change first',
        paragraphs: [
          'Wiper Bosses tries to look bigger than its timing problem. The background can shift, the boss can act dramatic, and your eyes may start searching for danger everywhere. Pull the attention back to the indicator sound. That sound tells you whether the next response should be placed as a jump, smash, or similar action. The setting is flavor; the cue is the instruction.',
        ],
      },
      {
        heading: 'Give each response a separate shape',
        paragraphs: [
          'If jump and smash start feeling like the same nervous press, the page becomes messy. During practice, make each response feel distinct. A jump should have a light lift; a smash should feel more grounded. You are still pressing buttons, but giving the actions different mental shapes helps your hand answer the right cue without hesitation.',
        ],
      },
      {
        heading: 'Perfect runs need tunnel vision in a good way',
        paragraphs: [
          'For the Perfect, narrow your focus deliberately. You do not need to appreciate every background joke during the attempt. Listen for the indicator, choose the response, and reset attention for the next cue. Once the backgrounds stop pulling your timing around, Wiper Bosses becomes more stable than it first appears.',
        ],
        bullets: [
          'Treat the indicator sound as the main source of truth.',
          'Make jump and smash feel different in your head.',
          'If a background change caused the miss, replay without chasing the scenery.',
        ],
      },
    ],
  },
  'football-dreams': {
    summary:
      'Football Dreams is a strike-recognition page. The ball and audio tell you what kind of response is coming, so a Perfect depends on choosing early and executing calmly.',
    seoDescription:
      'Learn Football Dreams ball cues, volley and header timing, strike recognition, Perfect risks, and practice advice.',
    body: [
      {
        heading: 'Identify the strike before the ball arrives',
        paragraphs: [
          'Football Dreams becomes hard if you wait for the ball to be on top of you. The strike type is announced before the response, through the cue and the ball presentation. Use that early information. Decide whether you are dealing with a volley, chest, header, or more dramatic hit before the animation demands the input. Late identification makes every strike feel like a reflex test.',
        ],
      },
      {
        heading: 'Keep the sequence in your body',
        paragraphs: [
          'Sports animations can tempt you to think visually, but the sequence has a rhythm. During practice, say the strike types as a chain and let your hand learn the order. Once the order feels musical, the ball stops being a surprise and becomes confirmation. This is especially helpful for advanced hits that feel flashy enough to distract from timing.',
        ],
      },
      {
        heading: 'Perfect cleanup is about not admiring the shot',
        paragraphs: [
          'A good Football Dreams run can make you want to watch the move you just pulled off. Do not. Reset immediately for the next ball. Many Perfect losses happen after a successful difficult strike because the player mentally celebrates and arrives late to the follow-up. Stay boring, stay on beat, and enjoy the highlight after the run is done.',
        ],
        bullets: [
          'Read the strike type before the contact moment.',
          'Practice saying the sequence as a rhythm chain.',
          'After a flashy hit, reset attention immediately.',
        ],
      },
    ],
  },
  'sweeper-star': {
    summary:
      'Sweeper Star is a steady-beat page with stop and pose interruptions. The sweep itself is comfortable; the danger is resuming late after the pause.',
    seoDescription:
      'Use this Sweeper Star guide for sweep timing, stop cues, spin-pose resumes, Perfect risks, and practice notes.',
    body: [
      {
        heading: 'The sweep is your home beat',
        paragraphs: [
          'Sweeper Star gives you a reliable sweep pattern, and that pattern should feel like home. The challenge is leaving it and returning without losing the count. Do not treat stop or pose cues as an end to the rhythm. Treat them as decorated beats inside the same phrase. Your body should know where the next sweep belongs before it happens.',
        ],
      },
      {
        heading: 'Practice the resume, not just the pause',
        paragraphs: [
          'Most players understand that they should stop. The leak comes when the run restarts and the next sweep is a little late. During practice, focus on the beat after the pause. Count into it. If you can resume cleanly, the rest of the page feels much easier because the steady sweep has somewhere to return.',
        ],
      },
      {
        heading: 'Perfect attempts should feel tidy',
        paragraphs: [
          'This is one of those pages where messy attention shows immediately. If the pose makes you grin and forget the next beat, replay until the joke is background. A Perfect run should feel tidy: sweep, pause, pose, resume, with no emotional lurch between them. Once the resume is stable, Sweeper Star becomes a satisfying cleanup target.',
        ],
        bullets: [
          'Use the sweep as the home rhythm.',
          'Count through the pose so the next sweep lands on time.',
          'If you miss after a pause, practice the resume beat specifically.',
        ],
      },
    ],
  },
  'a-for-effort': {
    summary:
      'A for Effort is a word-speed page. TEA, SODA, and COCOA each ask for a different tap pace, so the player who listens to the word wins.',
    seoDescription:
      'Beat A for Effort with TEA, SODA, and COCOA rhythm timing, word-speed practice, Perfect tips, and common mistakes.',
    body: [
      {
        heading: 'Words are rhythm instructions',
        paragraphs: [
          'A for Effort is charming because the cue is right there in the word. The mistake is hearing the word but pressing with one generic rhythm. Let TEA feel slow, SODA feel more active, and COCOA feel quicker. The word is not just flavor text; it is the shape of the input. Once that clicks, the page becomes much more readable.',
        ],
      },
      {
        heading: 'Do not flatten the speeds',
        paragraphs: [
          'Players often get through a clear by approximating the speeds, then lose the Perfect because one word gets flattened. Practice by exaggerating the difference at first. Make slow slow, medium medium, and fast fast. After the contrast is obvious, you can relax back into the real timing. Clear contrast prevents the words from blending together under pressure.',
        ],
      },
      {
        heading: 'A good early confidence page',
        paragraphs: [
          'Once the word speeds feel separate, A for Effort is a useful early Perfect candidate. It teaches a specific lesson without burying it under visual chaos. If you miss, name the word and the speed problem. Was COCOA too slow? Was TEA rushed? That answer gives you a clean next attempt instead of a vague restart.',
        ],
        bullets: [
          'Attach a tap speed to each word.',
          'Exaggerate the speed contrast during practice.',
          'If you miss, name the word that broke the run.',
        ],
      },
    ],
  },
  'spirit-slasher': {
    summary:
      'Spirit Slasher is a late Frontside reflex page with color and pairing pressure. The best runs feel decisive, but not rushed.',
    seoDescription:
      'Learn Spirit Slasher color cues, paired spirit timing, slash decisions, Perfect risks, and advanced practice advice.',
    body: [
      {
        heading: 'Read the spirit before the slash',
        paragraphs: [
          'Spirit Slasher punishes players who swing because something appeared. The spirit type matters, and paired cues need different attention than single cues. Give yourself a fraction of recognition before committing. That does not mean hesitating; it means seeing the cue clearly enough that the slash has a purpose. Blind confidence is fast until it is wrong.',
        ],
      },
      {
        heading: 'Pairs need a calmer hand',
        paragraphs: [
          'The paired spirit moments are where many Perfect attempts fall apart. They look urgent, so the hand tries to solve them with force. Instead, keep the motion small and rhythmic. A pair is still a phrase, not a panic event. If you can make the pair feel like a known pattern, the single spirits around it become much easier to handle.',
        ],
      },
      {
        heading: 'Perfect cleanup should be deliberate',
        paragraphs: [
          'This is a good page to practice in short sets. Do one clear to warm up, then two or three focused attempts. If the miss is always the pair cue, isolate that recognition in your head before another run. If the misses scatter, you are probably slashing before reading. Slow the decision just enough to see what is actually on screen.',
        ],
        bullets: [
          'Identify single vs paired cues before committing.',
          'Keep slashes small and rhythmic.',
          'Stop if every appearance makes you swing from fear.',
        ],
      },
    ],
  },
  'quick-hands': {
    summary:
      'Quick Hands is a Flipside speed page where not every throw lands where a beginner expects it. Stay loose, listen early, and avoid locking into the obvious beat.',
    seoDescription:
      'Beat Quick Hands with stick throw timing, off-beat response advice, Perfect risks, and Flipside practice notes.',
    body: [
      {
        heading: 'Loose hands beat tense hands',
        paragraphs: [
          'Quick Hands sounds like it wants raw speed, but stiffness is the real enemy. A tense hand is late to off-beat throws because it is already braced for the obvious timing. Keep your thumb light and your wrist relaxed. The cue can then pull the response into place instead of fighting against a preloaded button press.',
        ],
      },
      {
        heading: 'Expect the throw to be musical, not fair-looking',
        paragraphs: [
          `Some throws may feel like they should land on the clean beat, but the game is more interested in the musical phrase than visual fairness. Listen to the throw cue and let it define the catch. If you decide from the stick's travel alone, you will chase the animation and miss the groove.`,
        ],
      },
      {
        heading: 'Perfect attempts need quick resets',
        paragraphs: [
          'Because Quick Hands moves fast, frustration can stack quickly. After a miss, replay the exact throw in your mind. Was it early, off-beat, or multiple? Then reset. If you immediately restart without naming the throw, the same panic usually returns. Short, clear attempts are much better than long retry chains here.',
        ],
        bullets: [
          'Keep the hand relaxed enough to answer off-beats.',
          'Use the throw sound more than the travel distance.',
          'Name the throw type after a miss before restarting.',
        ],
      },
    ],
  },
  'soda-hop': {
    summary:
      'Soda Hop is a friendly Flipside page built around rope rhythm and double-hop cues. The important skill is recovering the rhythm after pressure rises.',
    seoDescription:
      'Use this Soda Hop guide for rope timing, single and double press cues, Perfect risks, and beginner Flipside practice.',
    body: [
      {
        heading: 'The rope is your safety line',
        paragraphs: [
          'Soda Hop gives you one of the clearest physical rhythms in the base set. Let the rope become your safety line. When the screen feels busy, return to the swing and let the hop sit inside it. If you watch the character more than the rope rhythm, double-hop moments can make the beat feel more chaotic than it really is.',
        ],
      },
      {
        heading: 'Double hops need a clean first hop',
        paragraphs: [
          'The double press is not two nervous taps. It starts with a clean first hop, then adds the second on purpose. If the first hop is rushed, the second one has nowhere to land. Practice doubles by keeping the first input calm and letting the second follow the cue. The page becomes much easier when doubles feel like a phrase instead of a panic correction.',
        ],
      },
      {
        heading: 'Recover instead of freezing',
        paragraphs: [
          'If you miss once, the natural reaction is to freeze and listen for the rope again. Train the opposite habit: return to the swing immediately. Even during normal clears, recovery practice helps. For Perfect attempts, that same recovery focus keeps your attention from collapsing after a close double-hop cue.',
        ],
        bullets: [
          'Use the rope swing as the main rhythm anchor.',
          'Make double hops a controlled two-part phrase.',
          'After any stumble, return to the rope instead of staring at the miss.',
        ],
      },
    ],
  },
  'space-sentry': {
    summary:
      'Space Sentry is a call-and-response defense page. The chant sets up the reply, and throwing on the chant instead of the answer is the classic Perfect killer.',
    seoDescription:
      'Learn Space Sentry asteroid chant cues, reply timing, throw rhythm, Perfect risks, and Flipside practice advice.',
    body: [
      {
        heading: 'Wait for the reply beat',
        paragraphs: [
          `Space Sentry makes the chant feel important because it is important, but the chant is not always the input. It sets up the answer. Listen to the whole call and throw when the response beat arrives. If you throw on the most memorable sound, you may be early. The page is testing whether you can separate "I heard the cue" from "the response belongs here."`,
        ],
      },
      {
        heading: 'Make the chant a sentence',
        paragraphs: [
          'A useful practice trick is to hear each asteroid phrase like a sentence with punctuation. The call starts, the phrase turns, and the reply lands at the end. That framing keeps you from reacting to the first syllable. Once the sentence shape is familiar, the throw becomes much less guessy and much more like answering someone at the right moment.',
        ],
      },
      {
        heading: 'Perfect cleanup is phrase discipline',
        paragraphs: [
          'Do not chase Space Sentry Perfects while half-listening. The page demands phrase discipline. If you miss, ask whether you threw on the chant, lost the reply, or drifted during the gap. Each problem has a different fix. When the phrase feels stable enough that you can hum it, the Perfect window is worth taking.',
        ],
        bullets: [
          'Hear the chant as setup, not automatic permission to throw.',
          'Use sentence-like phrase memory for the reply.',
          'If you are early, you probably answered the call instead of the response.',
        ],
      },
    ],
  },
  'high-five-fever': {
    summary:
      'High-Five Fever is about friendly rhythm and restraint. Most beats invite the hand, but stop and trio cues punish automatic tapping.',
    seoDescription:
      'Beat High-Five Fever with high-five timing, stop cues, trio phrase advice, Perfect risks, and Flipside practice notes.',
    body: [
      {
        heading: 'Not every beat wants your hand',
        paragraphs: [
          'High-Five Fever is fun because the default action feels socially obvious: someone offers a hand, you meet it. The minigame then tests whether you can stop that automatic response when the cue changes. Keep the main beat, but do not let the habit press for you. The best runs feel friendly and controlled at the same time.',
        ],
      },
      {
        heading: 'Treat stop cues as real cues',
        paragraphs: [
          'A stop cue is not empty space. It is an instruction that needs timing. Mark it mentally on the beat, even if your hand does not move. That prevents the next high five from drifting. Trio-style phrases also need a shape in your head, so listen for the group rhythm before trying to tap along by sight.',
        ],
      },
      {
        heading: 'Perfect cleanup is restraint practice',
        paragraphs: [
          'If you keep losing Perfects by tapping through stops, practice one clear where your only goal is restraint. Do not worry about style, score, or celebration. Just hear the cue and prove you can hold back. Once restraint feels active rather than nervous, the page becomes much cleaner.',
        ],
        bullets: [
          'Keep the beat but wait for permission to high five.',
          'Mark stop cues mentally so the rhythm stays alive.',
          'Practice trio phrases as grouped rhythms, not visual clusters.',
        ],
      },
    ],
  },
  'germ-aerobics': {
    summary:
      'Germ Aerobics is a clutter-resistance page. The screen can look chaotic, but the exercise call and rhythm cue tell you what move matters next.',
    seoDescription:
      'Use this Germ Aerobics guide for exercise cue timing, visual clutter control, Perfect risks, and Flipside practice advice.',
    body: [
      {
        heading: 'Do not audit every germ',
        paragraphs: [
          'Germ Aerobics can overwhelm players who try to read every moving detail. You do not need to audit the entire screen. Find the exercise cue, keep the beat, and move when the call asks. The background chaos is there to test attention. Once you stop treating every small movement as useful information, the page becomes much more playable.',
        ],
      },
      {
        heading: 'Exercise changes need a clean switch',
        paragraphs: [
          'The miss often happens during a move change, not during the repeated action itself. Give each exercise a distinct feel in your hand or body. When the cue changes, switch cleanly instead of dragging the old movement forward. If the previous motion keeps echoing into the next cue, slow down and practice identifying the change earlier.',
        ],
      },
      {
        heading: 'Perfect attempts need attention filters',
        paragraphs: [
          'For a Perfect run, decide what you are allowed to ignore. That sounds odd, but it is powerful here. Ignore background clutter, ignore extra motion, and listen for the exercise instruction. A filtered run feels less spectacular, but it is far more reliable. When everything gets your attention, nothing gets enough attention.',
        ],
        bullets: [
          'Use the exercise call as the main instruction.',
          'Give each move a distinct physical feel.',
          'If the screen feels too busy, soften your gaze and return to the cue.',
        ],
      },
    ],
  },
  'synchro-wings': {
    summary:
      'Synchro Wings closes the verified base set with pattern copying. Watch the lead, understand the flap phrase, then answer without adding extra flaps during breaks.',
    seoDescription:
      'Learn Synchro Wings lead-duck cues, flap pattern copying, break timing, Perfect risks, and Flipside practice notes.',
    body: [
      {
        heading: 'Copy the phrase, not the anxiety',
        paragraphs: [
          'Synchro Wings asks you to follow a lead pattern, but the danger is anticipating so hard that you add extra movement. Watch or hear the lead phrase, understand where it breathes, then copy it. Breaks are part of the phrase. If you flap through them because silence feels unsafe, the Perfect disappears even though your basic timing is good.',
        ],
      },
      {
        heading: 'Let the leader finish speaking',
        paragraphs: [
          'Do not answer before the lead has given you the full pattern. This page rewards patience and memory. During practice, try to hum the phrase once in your head before copying it. That tiny internal replay helps you preserve flap speed, pauses, and the return beat. It also stops you from reacting to only the first part of the lead.',
        ],
      },
      {
        heading: 'Perfect cleanup is controlled trust',
        paragraphs: [
          `A good Synchro Wings Perfect feels like trusting someone else's rhythm without trying to improve it. Copy exactly what was given. Do not add safety flaps, do not rush out of breaks, and do not assume the next phrase will match the last one. When your copy feels calm and faithful, the page becomes a satisfying end point for the first minigame guide batch.`,
        ],
        bullets: [
          'Treat breaks as part of the pattern.',
          'Let the lead phrase finish before mentally copying it.',
          'If you add extra flaps, practice silence instead of speed.',
        ],
      },
    ],
  },
} satisfies Record<MinigameSlug, MinigameArticleContent>;

function getDefaultFaq(minigame: MinigameFaqInput): GuideFaq[] {
  let cleanupAnswer: string;

  if (minigame.variant === 'Evolved 2') {
    cleanupAnswer = `${minigame.name} is better after the original ${minigame.baseName} feels stable. Use the original page as a warm-up, then return here for the stricter cue spacing.`;
  } else if (minigame.difficulty === 'Beginner') {
    cleanupAnswer = `${minigame.name} is one of the friendlier cleanup targets once your setup is stable. Use it to build confidence before moving to stricter cue-switching pages.`;
  } else {
    cleanupAnswer = `${minigame.name} is better after a warm-up clear and a named mistake. If the miss feels random, practice the cue family first instead of spending Perfect windows.`;
  }

  return [
    {
      question: `How do I Perfect ${minigame.name}?`,
      answer: `First make the ${minigame.cueFamily} feel reliable during normal clears. Then focus on the main Perfect risk: ${minigame.perfectRisk}. ${difficultyNotes[minigame.difficulty]}`,
    },
    {
      question: `What should I listen for in ${minigame.name}?`,
      answer: `Listen for the ${minigame.cueFamily}, then let that cue decide the ${minigame.inputStyle}. The animation helps you understand the joke, but the audio and rhythm should drive the input.`,
    },
    {
      question: `Is ${minigame.name} a good early cleanup target?`,
      answer: cleanupAnswer,
    },
  ];
}

function getRelatedRoutes(index: number) {
  const previous = minigameIndex[index - 1];
  const next = minigameIndex[index + 1];

  return [
    '/minigames',
    previous ? `/minigames/${previous.slug}` : null,
    next ? `/minigames/${next.slug}` : null,
    '/guides/perfect-solo-minigames',
    '/setup',
  ].filter(Boolean) as string[];
}

function getEvolvedRelatedRoutes(index: number, base: MinigameIndexEntry) {
  const previous = minigameIndex[index - 1];
  const next = minigameIndex[index + 1];

  return [
    '/minigames',
    `/minigames/${base.slug}`,
    previous ? `/minigames/${previous.slug}-2` : null,
    next ? `/minigames/${next.slug}-2` : null,
    '/remixes',
    '/guides/perfect-solo-minigames',
    '/setup',
  ].filter(Boolean) as string[];
}

function getEvolvedBody(minigame: MinigameIndexEntry): GuideSection[] {
  return [
    {
      heading: `What changes after ${minigame.name}`,
      paragraphs: [
        `${minigame.name} 2 is the evolved version, so the starting point is not a brand-new idea. The core cue is still ${minigame.cueFamily}, and the response still grows out of ${minigame.inputStyle}. What changes is the amount of trust the game expects from you. The evolved version gives less room for fuzzy timing, late recognition, and recovery by luck. If the original felt barely controlled, this page will expose that quickly.`,
        `Treat the first clear as a comparison run. Ask whether the miss came from the same habit as the original ${minigame.name}, or from a new pressure point. That distinction matters. If the old mistake is still present, go back to the base page and stabilize it. If the old cue is clean but the evolved version adds pressure, stay here and practice the new spacing.`,
      ],
    },
    {
      heading: 'Practice the stricter cue before chasing medals',
      paragraphs: [
        `The most useful first drill is simple: play one run where the only goal is hearing the evolved ${minigame.cueFamily}. Do not judge the score. Do not immediately chase a Perfect. Listen for how the cue is framed, how fast you need to commit, and whether your hand keeps trying to answer with the base-game habit. The evolved page is usually teaching you to keep the same idea while removing lazy timing.`,
        `Your input focus should be ${minigame.inputStyle}, but cleaner. Presses should feel smaller, earlier-recognized, and less emotional. When a cue surprises you, avoid mashing to save the run. Mashing hides the useful information. A clean miss that you understand is better than a lucky clear that teaches nothing.`,
      ],
    },
    {
      heading: 'Perfect cleanup route',
      paragraphs: [
        `The Perfect risk is ${minigame.perfectRisk}. In the evolved version, that risk becomes sharper because your old muscle memory can be close enough to feel right and still be wrong. Before spending a Perfect window, do one warm-up on the original ${minigame.name}, then one clear of ${minigame.name} 2. If those two runs feel like the same cue spoken with different pressure, you are ready to attempt cleanup.`,
        'Stop after a short set if the misses start moving around. Evolved pages are good at making tired players overcorrect: first late, then early, then wrong cue. When that happens, return to the base page or switch to a Remix that uses the same cue family. The point is not to prove toughness; the point is to make the evolved rhythm boring enough that the Perfect attempt feels ordinary.',
      ],
      bullets: [
        `Warm up with ${minigame.name} before serious attempts.`,
        `Name whether the miss is old ${minigame.name} habit or new evolved pressure.`,
        'Use Remixes as a stress test only after the evolved cue is stable.',
      ],
    },
  ];
}

export const baseMinigames: MinigameGuide[] = minigameIndex.map(
  (minigame, index) => {
    const content = articleContent[minigame.slug as MinigameSlug];

    return {
      ...minigame,
      variant: 'Base Solo',
      title: `${minigame.name} Guide`,
      seoTitle: `${minigame.name} Guide - Rhythm Paradise Groove Perfect Tips`,
      seoDescription: content.seoDescription,
      summary: content.summary,
      updatedAt: CHECKED_AT,
      coverImageUrl: siteCover,
      sourceStrategy: 'community_crosscheck',
      sourceNotes,
      body: content.body,
      faq: getDefaultFaq({ ...minigame, variant: 'Base Solo' }),
      relatedRoutes: getRelatedRoutes(index),
    };
  }
);

export const evolvedMinigames: MinigameGuide[] = minigameIndex.map(
  (minigame, index) => {
    const evolvedMinigame = {
      ...minigame,
      slug: `${minigame.slug}-2`,
      name: `${minigame.name} 2`,
      cueFamily: `evolved ${minigame.cueFamily}`,
      inputStyle: `stricter ${minigame.inputStyle}`,
      perfectRisk: `carrying ${minigame.name} muscle memory into the evolved timing`,
      oneLine: `The evolved version of ${minigame.name} keeps the core idea but asks for tighter cue recognition and cleaner recovery.`,
      variant: 'Evolved 2' as const,
      baseSlug: minigame.slug,
      baseName: minigame.name,
    };

    return {
      ...evolvedMinigame,
      title: `${minigame.name} 2 Guide`,
      seoTitle: `${minigame.name} 2 Guide - Rhythm Paradise Groove Perfect Tips`,
      seoDescription: `Learn ${minigame.name} 2 with evolved cue timing, original-stage warm-up advice, Perfect risks, and Remix practice routes.`,
      summary: `${minigame.name} 2 is the evolved version of ${minigame.name}. Use the original cue as your anchor, then practice the stricter timing before chasing Perfects.`,
      updatedAt: CHECKED_AT,
      coverImageUrl: siteCover,
      sourceStrategy: 'community_crosscheck',
      sourceNotes: evolvedSourceNotes,
      body: getEvolvedBody(minigame),
      faq: getDefaultFaq(evolvedMinigame),
      relatedRoutes: getEvolvedRelatedRoutes(index, minigame),
    };
  }
);

export const minigames: MinigameGuide[] = [
  ...baseMinigames,
  ...evolvedMinigames,
];

export const frontsideMinigames = baseMinigames.filter(
  (minigame) => minigame.side === 'Frontside'
);

export const flipsideMinigames = baseMinigames.filter(
  (minigame) => minigame.side === 'Flipside'
);

export const frontsideEvolvedMinigames = evolvedMinigames.filter(
  (minigame) => minigame.side === 'Frontside'
);

export const flipsideEvolvedMinigames = evolvedMinigames.filter(
  (minigame) => minigame.side === 'Flipside'
);

export function getMinigameGuide(slug: string) {
  return minigames.find((minigame) => minigame.slug === slug);
}

export function getAdjacentMinigames(slug: string) {
  const current = getMinigameGuide(slug);

  if (!current) {
    return { previous: undefined, next: undefined };
  }

  const sequence =
    current.variant === 'Evolved 2' ? evolvedMinigames : baseMinigames;
  const currentIndex = sequence.findIndex((minigame) => minigame.slug === slug);

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: sequence[currentIndex - 1],
    next: sequence[currentIndex + 1],
  };
}
