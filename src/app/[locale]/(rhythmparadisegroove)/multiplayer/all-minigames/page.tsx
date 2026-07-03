import { PriorityPage } from '@/components/rhythmparadisegroove/priority-page';
import { getPriorityPage } from '@/data/rhythmparadisegroove/p0-pages';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

const pageData = getPriorityPage('/multiplayer/all-minigames');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!pageData) {
    return {};
  }

  return constructMetadata({
    title: pageData.seoTitle,
    description: pageData.seoDescription,
    locale,
    pathname: pageData.route,
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function MultiplayerAllMinigamesPage() {
  if (!pageData) {
    notFound();
  }

  return <PriorityPage page={pageData} />;
}
