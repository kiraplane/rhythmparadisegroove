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
    title: 'Rhythm Paradise Groove Minigames - 60 Solo Guides and Perfect Tips',
    description:
      'Browse 60 Rhythm Paradise Groove Solo minigame guides with base and evolved 2 cue notes, Perfect risks, Frontside and Flipside routing.',
    locale,
    pathname: '/minigames',
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function MinigamesPage() {
  return <MinigamesHubPage />;
}
