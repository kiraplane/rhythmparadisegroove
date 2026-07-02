import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { LastUpdated } from '@/components/rhythmparadisegroove/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { relatedRouteLabels } from '@/data/rhythmparadisegroove/guides';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import type { TopicPage as TopicPageData } from '@/data/rhythmparadisegroove/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

function getRelatedRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export function TopicPage({ topic }: { topic: TopicPageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: topic.title,
    description: topic.summary,
    dateModified: topic.updatedAt,
    image: `${officialGameFacts.domain}${topic.image}`,
    mainEntityOfPage: `${officialGameFacts.domain}${topic.route}`,
  };

  return (
    <div className="bg-[#FFF8E8] py-10 text-[#201736]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#F24C7C] text-white">{topic.eyebrow}</Badge>
            <h1 className="font-display text-4xl font-black md:text-6xl">
              {topic.title}
            </h1>
            <p className="text-[#4B3E68] text-lg leading-8">{topic.summary}</p>
            <LastUpdated date={topic.updatedAt} />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-[#201736]/15 bg-white">
            <Image
              src={topic.image}
              alt={`${topic.title} artwork`}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#201736]/15 bg-white py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-3">
          {topic.featuredRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="group rounded-lg border border-[#201736]/15 bg-white p-5 transition hover:border-[#F24C7C]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-xl font-bold text-[#201736]">
                  {getRelatedRouteLabel(route)}
                </h2>
                <ArrowRight className="size-4 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-[#5F5378] text-sm leading-6">
                Continue through this route when it matches the next timing,
                demo, mode, or Perfect decision.
              </p>
            </LocaleLink>
          ))}
        </section>

        <article className="rounded-lg border border-[#201736]/15 bg-white p-6 md:p-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#F24C7C] text-white hover:bg-[#D93969]"
            >
              <LocaleLink href="/guides">All Guides</LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#00A7A7] bg-white text-[#0D5F63] hover:bg-[#C7FFF3]"
            >
              <LocaleLink href="/setup">Timing Setup</LocaleLink>
            </Button>
          </div>
        </article>

        <FaqSection items={topic.faq} />
      </Container>
    </div>
  );
}
