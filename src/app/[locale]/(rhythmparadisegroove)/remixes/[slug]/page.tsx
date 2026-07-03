import {
  AdsterraAdFrame,
  AdsterraSideRails,
} from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { LastUpdated } from '@/components/rhythmparadisegroove/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { relatedRouteLabels } from '@/data/rhythmparadisegroove/guides';
import { getRemixGuide, remixes } from '@/data/rhythmparadisegroove/remixes';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowLeft,
  ArrowRight,
  ListMusic,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    remixes.map((remix) => ({ locale, slug: remix.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const remix = getRemixGuide(slug);

  if (!remix) {
    return {};
  }

  return constructMetadata({
    title: remix.seoTitle,
    description: remix.seoDescription,
    locale,
    pathname: `/remixes/${remix.slug}`,
    image: '/rhythmparadisegroove/og-image.png',
  });
}

function getRelatedLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export default async function RemixDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const remix = getRemixGuide(slug);

  if (!remix) {
    notFound();
  }

  const previous = remixes[remix.number - 2];
  const next = remixes[remix.number];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: remix.title,
        description: remix.summary,
        datePublished: remix.updatedAt,
        dateModified: remix.updatedAt,
        image: `${officialGameFacts.domain}/rhythmparadisegroove/og-image.png`,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
        },
        mainEntityOfPage: `${officialGameFacts.domain}/remixes/${remix.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Rhythm Paradise Groove Wiki',
            item: officialGameFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Remixes',
            item: `${officialGameFacts.domain}/remixes`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: remix.name,
            item: `${officialGameFacts.domain}/remixes/${remix.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#FFF8E8] py-10 text-[#201736]">
      <JsonLd data={jsonLd} />
      <AdsterraSideRails />
      <Container className="px-4">
        <article className="rounded-lg border border-[#201736]/15 bg-white p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#F24C7C] text-white">Remix</Badge>
            <Badge className="bg-[#201736] text-white">
              Solo Remix #{remix.number}
            </Badge>
            <Badge
              variant="outline"
              className="border-[#00A7A7]/30 bg-[#C7FFF3] text-[#0D5F63]"
            >
              {remix.difficulty}
            </Badge>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black md:text-6xl">
            {remix.name} Guide
          </h1>
          <p className="mt-5 max-w-4xl text-[#4B3E68] text-lg leading-8">
            {remix.summary}
          </p>
          <div className="mt-5">
            <LastUpdated date={remix.updatedAt} />
          </div>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 font-semibold text-[#201736]">
                <ListMusic className="size-4 text-[#F24C7C]" />
                Main test
              </div>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                {remix.focus}
              </p>
            </div>
            <div className="rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 font-semibold text-[#201736]">
                <RotateCcw className="size-4 text-[#F24C7C]" />
                Warm-up rule
              </div>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                {remix.routeNote}
              </p>
            </div>
            <div className="rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 font-semibold text-[#201736]">
                <Trophy className="size-4 text-[#F24C7C]" />
                Perfect target
              </div>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                Spend windows only when the linked cues feel stable.
              </p>
            </div>
          </section>

          <AdsterraAdFrame slot="banner-300x250" className="mt-8" label />

          <div className="mt-8 space-y-8">
            {remix.body.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-[#4B3E68] text-base leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-[#4B3E68] text-sm leading-7">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-5">
            <h2 className="font-display text-2xl font-bold">
              Warm up these pages first
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {remix.practiceRoutes.map((route) => (
                <LocaleLink
                  key={route}
                  href={route}
                  className="group flex min-w-0 items-center justify-between gap-3 rounded-md border border-[#201736]/15 bg-white px-4 py-3 text-left transition hover:border-[#F24C7C]"
                >
                  <span className="min-w-0 whitespace-normal break-words font-semibold text-[#201736]">
                    {getRelatedLabel(route)}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
                </LocaleLink>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-3 md:grid-cols-2">
            {previous ? (
              <LocaleLink
                href={`/remixes/${previous.slug}`}
                className="group rounded-lg border border-[#201736]/15 bg-white p-4 transition hover:border-[#F24C7C]"
              >
                <div className="flex items-center gap-2 text-[#5F5378] text-sm">
                  <ArrowLeft className="size-4 text-[#00A7A7]" />
                  Previous Remix
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-[#201736]">
                  {previous.name}
                </h2>
              </LocaleLink>
            ) : null}
            {next ? (
              <LocaleLink
                href={`/remixes/${next.slug}`}
                className="group rounded-lg border border-[#201736]/15 bg-white p-4 transition hover:border-[#F24C7C]"
              >
                <div className="flex items-center justify-between gap-2 text-[#5F5378] text-sm">
                  <span>Next Remix</span>
                  <ArrowRight className="size-4 text-[#00A7A7]" />
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-[#201736]">
                  {next.name}
                </h2>
              </LocaleLink>
            ) : null}
          </section>

          <section className="mt-10 rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-5">
            <h2 className="font-display text-2xl font-bold">
              Related next steps
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {remix.relatedRoutes.map((route) => (
                <LocaleLink
                  key={route}
                  href={route}
                  className="group flex min-w-0 items-center justify-between gap-3 rounded-md border border-[#201736]/15 bg-white px-4 py-3 text-left transition hover:border-[#F24C7C]"
                >
                  <span className="min-w-0 whitespace-normal break-words font-semibold text-[#201736]">
                    {getRelatedLabel(route)}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
                </LocaleLink>
              ))}
            </div>
          </section>

          <div className="mt-10">
            <FaqSection items={remix.faq} />
          </div>
        </article>
      </Container>
    </div>
  );
}
