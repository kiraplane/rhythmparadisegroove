import {
  AdsterraAdFrame,
  AdsterraSideRails,
} from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  getGuide,
  guides,
  relatedRouteLabels,
} from '@/data/rhythmparadisegroove/guides';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
    image: '/rhythmparadisegroove/og-image.png',
  });
}

function getRelatedLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: `${officialGameFacts.domain}/rhythmparadisegroove/og-image.png`,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
        },
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
            name: 'Guides',
            item: `${officialGameFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${officialGameFacts.domain}/guides/${guide.slug}`,
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
            <Badge className="bg-[#F24C7C] text-white">{guide.category}</Badge>
            <Badge
              variant="outline"
              className="border-[#201736]/15 text-[#5F5378]"
            >
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#201736]/15 text-[#5F5378]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-[#4B3E68] text-lg leading-8">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-[#201736]/15 bg-[#FFF8E8]">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover"
            />
          </div>

          {guide.video ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-[#201736]/15 bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-[#201736] px-4 py-3 text-white text-sm">
                Source reference:{' '}
                <a
                  href={guide.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FFE14A] underline underline-offset-4"
                >
                  {guide.video.title}
                </a>{' '}
                by {guide.video.channel}
              </div>
            </div>
          ) : null}

          <div className="mt-8 space-y-8">
            <AdsterraAdFrame slot="banner-300x250" className="mt-8" label />

            {guide.body.map((section) => (
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
              Related next steps
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {guide.relatedRoutes.map((route) => (
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
            <FaqSection items={guide.faq} />
          </div>
        </article>
      </Container>
    </div>
  );
}
