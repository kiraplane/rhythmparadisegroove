import { RemixesPage as RemixesHubPage } from '@/components/rhythmparadisegroove/remixes-page';
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
    title: 'Rhythm Paradise Groove Remixes - 20 Perfect Route Guides',
    description:
      'Browse 20 Rhythm Paradise Groove Remix guides with linked minigame warm-ups, transition risks, and Perfect route advice.',
    locale,
    pathname: '/remixes',
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function RemixesPage() {
  return <RemixesHubPage />;
}
