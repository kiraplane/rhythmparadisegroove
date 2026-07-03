import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { LastUpdated } from '@/components/rhythmparadisegroove/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  type RemixGuide,
  remixGuideSources,
  remixes,
} from '@/data/rhythmparadisegroove/remixes';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ListMusic, RotateCcw, Trophy } from 'lucide-react';

const remixFaq = [
  {
    question: 'How many Remix levels are in Rhythm Paradise Groove?',
    answer:
      'Current launch-week sources identify 20 Remix levels in the Solo route. This hub gives each numbered Remix its own practice page.',
  },
  {
    question: 'Should Remix pages list every scene exactly?',
    answer:
      'This first version focuses on practical warm-up routes and transition risks. Exact scene-by-scene breakdowns should be expanded after deeper timestamp verification.',
  },
  {
    question: 'What should I practice before a Remix Perfect?',
    answer:
      'Practice the linked minigame pages first. If a cue still feels random on its own page, the Remix will usually make it worse.',
  },
];

function RemixCard({ remix }: { remix: RemixGuide }) {
  return (
    <LocaleLink
      href={`/remixes/${remix.slug}`}
      className="group rounded-lg border border-[#201736]/15 bg-white p-5 transition hover:border-[#F24C7C] hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#201736] text-white">
              Remix #{remix.number}
            </Badge>
            <Badge
              variant="outline"
              className="border-[#00A7A7]/30 bg-[#C7FFF3] text-[#0D5F63]"
            >
              {remix.difficulty}
            </Badge>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-[#201736]">
            {remix.name}
          </h2>
        </div>
        <ArrowRight className="mt-1 size-5 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
      </div>
      <p className="mt-3 text-[#4B3E68] text-sm leading-6">{remix.summary}</p>
      <p className="mt-4 text-[#5F5378] text-xs leading-5">
        <span className="font-semibold text-[#201736]">Route note:</span>{' '}
        {remix.routeNote}
      </p>
    </LocaleLink>
  );
}

export function RemixesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Rhythm Paradise Groove Remix Guides',
        description:
          'Guide index for 20 Rhythm Paradise Groove Remix pages with linked warm-ups and Perfect route notes.',
        itemListElement: remixes.map((remix, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: remix.name,
          url: `${officialGameFacts.domain}/remixes/${remix.slug}`,
        })),
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
        ],
      },
    ],
  };

  return (
    <div className="bg-[#FFF8E8] py-10 text-[#201736]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-10 px-4">
        <header className="rounded-lg border border-[#201736]/15 bg-white p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#F24C7C] text-white">20 Remix pages</Badge>
            <Badge
              variant="outline"
              className="border-[#201736]/15 text-[#5F5378]"
            >
              Solo route mash-ups
            </Badge>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black md:text-6xl">
            Rhythm Paradise Groove Remix Guides
          </h1>
          <p className="mt-5 max-w-4xl text-[#4B3E68] text-lg leading-8">
            Remix pages work differently from individual minigame pages. Each
            one is a route guide: warm up the linked cue families, identify the
            transition that breaks your run, then spend Perfect attempts only
            when the scene changes feel ordinary.
          </p>
          <div className="mt-5">
            <LastUpdated date={remixes[0]?.updatedAt ?? '2026-07-03'} />
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#201736]/15 bg-white py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ListMusic,
              title: 'Use linked warm-ups',
              text: 'Each Remix page links the minigame pages that are most useful before a Perfect attempt.',
            },
            {
              icon: RotateCcw,
              title: 'Practice transitions',
              text: 'Most Remix misses happen when one cue family ends and the next one starts.',
            },
            {
              icon: Trophy,
              title: 'Spend Perfect windows late',
              text: 'A Remix Perfect should come after the individual cues feel stable, not before.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[#201736]/15 bg-white p-5"
            >
              <item.icon className="size-5 text-[#F24C7C]" />
              <h2 className="mt-3 font-display text-xl font-bold">
                {item.title}
              </h2>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {remixes.map((remix) => (
            <RemixCard key={remix.slug} remix={remix} />
          ))}
        </section>

        <section className="rounded-lg border border-[#201736]/15 bg-white p-6 text-[#4B3E68] text-sm leading-7 md:p-8">
          <h2 className="font-display text-2xl font-bold text-[#201736]">
            Source note
          </h2>
          <p className="mt-3">
            These first-version Remix pages use current launch-week references
            to avoid guessed scene-by-scene claims. Sources include{' '}
            {remixGuideSources.map((source, index) => (
              <span key={`${source.label}-${source.url}`}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0D5F63] underline underline-offset-4"
                >
                  {source.label}
                </a>
                {index < remixGuideSources.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </section>

        <FaqSection items={remixFaq} />
      </Container>
    </div>
  );
}
