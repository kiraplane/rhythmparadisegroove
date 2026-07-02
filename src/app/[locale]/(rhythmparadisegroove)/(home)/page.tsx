import { RhythmParadiseGrooveHomePage } from '@/components/rhythmparadisegroove/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Rhythm Paradise Groove Wiki - Minigames Perfects and Guides',
    description:
      'Rhythm Paradise Groove Wiki covers Perfect routes, minigame cues, TV calibration, demo setup, Beatspell, multiplayer, and Switch timing.',
    locale,
    pathname: '',
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function HomePage() {
  return <RhythmParadiseGrooveHomePage />;
}
