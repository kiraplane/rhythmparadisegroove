export type RemixDifficulty = 'Intermediate' | 'Advanced' | 'Final';

export interface RemixIndexEntry {
  slug: string;
  name: string;
  number: number;
  difficulty: RemixDifficulty;
  focus: string;
  routeNote: string;
}

function getRemixDifficulty(number: number): RemixDifficulty {
  if (number === 20) {
    return 'Final';
  }

  if (number >= 9) {
    return 'Advanced';
  }

  return 'Intermediate';
}

function getRemixFocus(number: number) {
  if (number <= 8) {
    return 'base Solo cue switching';
  }

  if (number <= 16) {
    return 'evolved 2 cue switching';
  }

  return 'late-route recovery and full-route pressure';
}

function getRemixRouteNote(number: number) {
  if (number <= 8) {
    return 'Use the matching base minigame pages as warm-ups.';
  }

  if (number <= 16) {
    return 'Use the evolved 2 pages as warm-ups before Perfect attempts.';
  }

  return 'Use this as a late-route stress test after individual cues feel stable.';
}

export const remixIndex = Array.from({ length: 20 }, (_, index) => {
  const number = index + 1;

  return {
    slug: `remix-${number}`,
    name: `Remix ${number}`,
    number,
    difficulty: getRemixDifficulty(number),
    focus: getRemixFocus(number),
    routeNote: getRemixRouteNote(number),
  };
}) satisfies RemixIndexEntry[];
