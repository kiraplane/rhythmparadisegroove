import { MinigamesPage as MinigamesHubPage } from '@/components/rhythmparadisegroove/minigames-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title:
      'Rhythm Paradise Groove Minigames - 30 Base Solo Guides and Perfect Tips',
    description:
      'Browse 30 verified Rhythm Paradise Groove base Solo minigame guides with cue notes, Perfect risks, Frontside and Flipside routing.',
    locale,
    pathname: '/minigames',
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function MinigamesPage() {
  return <MinigamesHubPage />;
}
