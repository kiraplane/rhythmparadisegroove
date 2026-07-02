import { TopicPage } from '@/components/rhythmparadisegroove/topic-page';
import { getTopicPage } from '@/data/rhythmparadisegroove/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('links');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function LinksPage() {
  return <TopicPage topic={topic} />;
}
