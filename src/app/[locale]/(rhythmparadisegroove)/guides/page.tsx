import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/rhythmparadisegroove/guides';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title:
      'Rhythm Paradise Groove Guides - Perfects, Demo, Beatspell and Setup',
    description:
      'Read Rhythm Paradise Groove guides for Perfect attempts, TV calibration, demo save transfer, Beatspell, walkthrough routes, minigames, and multiplayer.',
    locale,
    pathname: '/guides',
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rhythm Paradise Groove Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#FFF8E8] py-10 text-[#201736]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F24C7C] text-white">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Rhythm Paradise Groove Guides
          </h1>
          <p className="text-[#4B3E68] text-lg leading-8">
            Decision-first guides for Perfect routes, minigame cues, TV
            calibration, demo save transfer, Beatspell, multiplayer, and the
            Rhythm Heaven Groove regional name.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#201736]/15 bg-white py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#201736]/15 bg-white p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#5F5378] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#201736]/15 bg-white"
            >
              <div className="relative aspect-video border-[#201736]/10 border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201736]/55 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#FFE14A] text-[#201736]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#201736]/15 text-[#5F5378]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#201736]/15 text-[#5F5378]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#5F5378] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#F24C7C] text-white hover:bg-[#D93969]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question:
                'Which Rhythm Paradise Groove guide should I read first?',
              answer:
                'Start with the beginner guide, then read TV calibration if timing feels off, and move to the Perfect solo minigames guide once clears feel stable.',
            },
            {
              question: 'Why are there no codes or tier-list pages?',
              answer:
                'Rhythm Paradise Groove is a Nintendo rhythm minigame collection, not a redeem-code or character-ranking game. The launch site focuses on Perfects, setup, modes, demo, and walkthrough demand.',
            },
            {
              question: 'Will the site add per-minigame pages?',
              answer:
                'Yes, after search demand or source confidence supports specific minigame Perfect and walkthrough pages.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
