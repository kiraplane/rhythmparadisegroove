import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { LastUpdated } from '@/components/rhythmparadisegroove/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { relatedRouteLabels } from '@/data/rhythmparadisegroove/guides';
import type { PriorityPage as PriorityPageData } from '@/data/rhythmparadisegroove/p0-pages';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, BookOpen, ListChecks, Sparkles } from 'lucide-react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

function DifficultyBadge({
  difficulty,
}: {
  difficulty: PriorityPageData['difficulty'];
}) {
  const classes = {
    Beginner: 'border-[#00A7A7]/30 bg-[#C7FFF3] text-[#0D5F63]',
    Intermediate: 'border-[#FFE14A]/60 bg-[#FFF8D1] text-[#6E5200]',
    Advanced: 'border-[#F24C7C]/30 bg-[#FFEAF1] text-[#B51F52]',
  };

  return (
    <Badge variant="outline" className={classes[difficulty]}>
      {difficulty}
    </Badge>
  );
}

export function PriorityPage({ page }: { page: PriorityPageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: page.title,
        description: page.summary,
        datePublished: page.updatedAt,
        dateModified: page.updatedAt,
        image: `${officialGameFacts.domain}/rhythmparadisegroove/og-image.png`,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
        },
        mainEntityOfPage: `${officialGameFacts.domain}${page.route}`,
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
            name: page.label,
            item: `${officialGameFacts.domain}${page.route}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#FFF8E8] py-10 text-[#201736]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <article className="rounded-lg border border-[#201736]/15 bg-white p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#F24C7C] text-white">{page.eyebrow}</Badge>
            <DifficultyBadge difficulty={page.difficulty} />
            {page.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#201736]/15 text-[#5F5378]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-4xl text-[#4B3E68] text-lg leading-8">
            {page.summary}
          </p>
          <div className="mt-5">
            <LastUpdated date={page.updatedAt} />
          </div>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {page.featuredRoutes.map((route) => (
              <LocaleLink
                key={route}
                href={route}
                className="group rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4 transition hover:border-[#F24C7C]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 font-semibold text-[#201736]">
                    <Sparkles className="size-4 shrink-0 text-[#F24C7C]" />
                    <span className="min-w-0 break-words">
                      {getRouteLabel(route)}
                    </span>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
                </div>
              </LocaleLink>
            ))}
          </section>

          <AdsterraAdFrame slot="banner-300x250" className="mt-8" label />

          <div className="mt-8 space-y-8">
            {page.sections.map((section) => (
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
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-[#F24C7C]" />
              <h2 className="font-display text-2xl font-bold">
                Related next steps
              </h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {page.relatedRoutes.map((route) => (
                <LocaleLink
                  key={route}
                  href={route}
                  className="group flex min-w-0 items-center justify-between gap-3 rounded-md border border-[#201736]/15 bg-white px-4 py-3 text-left transition hover:border-[#F24C7C]"
                >
                  <span className="min-w-0 whitespace-normal break-words font-semibold text-[#201736]">
                    {getRouteLabel(route)}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
                </LocaleLink>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-lg border border-[#201736]/15 bg-white p-5 text-[#4B3E68] text-sm leading-7">
            <div className="mb-2 flex items-center gap-2 font-semibold text-[#201736]">
              <ListChecks className="size-4 text-[#00A7A7]" />
              Source basis
            </div>
            <p>{page.sourceNotes}</p>
          </section>

          <div className="mt-10">
            <FaqSection items={page.faq} />
          </div>
        </article>
      </Container>
    </div>
  );
}
