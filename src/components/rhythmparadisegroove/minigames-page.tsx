import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rhythmparadisegroove/faq-section';
import { LastUpdated } from '@/components/rhythmparadisegroove/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  flipsideMinigames,
  frontsideMinigames,
  minigameGuideSources,
  minigames,
} from '@/data/rhythmparadisegroove/minigames';
import type { MinigameGuide } from '@/data/rhythmparadisegroove/minigames';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Headphones,
  ListMusic,
  Sparkles,
  Trophy,
} from 'lucide-react';

const hubFaq = [
  {
    question: 'Does this hub cover every Rhythm Paradise Groove minigame?',
    answer:
      'This first version covers the 30 verified base Solo minigames from the Frontside and Flipside route. Evolved versions, remixes, and multiplayer games should be added after they have enough verified source material.',
  },
  {
    question: 'Are these pages written only for Perfect attempts?',
    answer:
      'No. Each page starts with clear play advice and then calls out the Perfect risk. That way a player who only wants to clear a stage still gets useful timing help.',
  },
  {
    question: 'Why are the pages split by minigame instead of one giant guide?',
    answer:
      'Players usually search by the exact minigame that blocked them. Separate pages make it easier to find the cue, the common miss, the Perfect risk, and the next related stage.',
  },
];

function DifficultyBadge({
  difficulty,
}: { difficulty: MinigameGuide['difficulty'] }) {
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

function MinigameCard({ minigame }: { minigame: MinigameGuide }) {
  return (
    <LocaleLink
      href={`/minigames/${minigame.slug}`}
      className="group flex min-h-[260px] flex-col rounded-lg border border-[#201736]/15 bg-white p-5 transition hover:border-[#F24C7C] hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-[#201736] text-white">
              {minigame.side} #{minigame.order}
            </Badge>
            <DifficultyBadge difficulty={minigame.difficulty} />
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold text-[#201736]">
            {minigame.name}
          </h3>
        </div>
        <ArrowRight className="mt-1 size-5 shrink-0 text-[#00A7A7] transition group-hover:translate-x-0.5" />
      </div>
      <p className="mt-3 text-[#4B3E68] text-sm leading-6">
        {minigame.oneLine}
      </p>
      <div className="mt-auto space-y-2 pt-5 text-[#5F5378] text-xs leading-5">
        <p>
          <span className="font-semibold text-[#201736]">Cue:</span>{' '}
          {minigame.cueFamily}
        </p>
        <p>
          <span className="font-semibold text-[#201736]">Perfect risk:</span>{' '}
          {minigame.perfectRisk}
        </p>
      </div>
    </LocaleLink>
  );
}

function MinigameGroup({
  title,
  summary,
  items,
}: {
  title: string;
  summary: string;
  items: MinigameGuide[];
}) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <Badge className="bg-[#F24C7C] text-white">
            {items.length} pages
          </Badge>
          <h2 className="mt-3 font-display text-3xl font-black text-[#201736]">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-[#4B3E68] text-base leading-7">
            {summary}
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((minigame) => (
          <MinigameCard key={minigame.slug} minigame={minigame} />
        ))}
      </div>
    </section>
  );
}

export function MinigamesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Rhythm Paradise Groove Base Solo Minigame Guides',
        description:
          'Verified first-version guide index for 30 base Solo minigames in Rhythm Paradise Groove.',
        itemListElement: minigames.map((minigame, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: minigame.name,
          url: `${officialGameFacts.domain}/minigames/${minigame.slug}`,
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
            name: 'Minigames',
            item: `${officialGameFacts.domain}/minigames`,
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
            <Badge className="bg-[#F24C7C] text-white">
              Verified first batch
            </Badge>
            <Badge
              variant="outline"
              className="border-[#201736]/15 text-[#5F5378]"
            >
              30 base Solo pages
            </Badge>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black md:text-6xl">
            Rhythm Paradise Groove Minigame Guides
          </h1>
          <p className="mt-5 max-w-4xl text-[#4B3E68] text-lg leading-8">
            This hub is the first playable guide layer for the 30 verified base
            Solo minigames. Each page explains the cue in plain English, the
            response the player should trust, and the specific mistake that
            tends to break a Perfect run.
          </p>
          <div className="mt-5">
            <LastUpdated date={minigames[0]?.updatedAt ?? '2026-07-03'} />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <LocaleLink
              href="/guides/perfect-solo-minigames"
              className="group flex items-center justify-between gap-3 rounded-md border border-[#201736]/15 bg-[#FFF8E8] px-4 py-3 transition hover:border-[#F24C7C]"
            >
              <span className="flex min-w-0 items-center gap-2 font-semibold">
                <Trophy className="size-4 shrink-0 text-[#F24C7C]" />
                Perfect route
              </span>
              <ArrowRight className="size-4 shrink-0 text-[#00A7A7]" />
            </LocaleLink>
            <LocaleLink
              href="/setup"
              className="group flex items-center justify-between gap-3 rounded-md border border-[#201736]/15 bg-[#FFF8E8] px-4 py-3 transition hover:border-[#F24C7C]"
            >
              <span className="flex min-w-0 items-center gap-2 font-semibold">
                <Headphones className="size-4 shrink-0 text-[#F24C7C]" />
                Timing setup
              </span>
              <ArrowRight className="size-4 shrink-0 text-[#00A7A7]" />
            </LocaleLink>
            <LocaleLink
              href="/walkthrough"
              className="group flex items-center justify-between gap-3 rounded-md border border-[#201736]/15 bg-[#FFF8E8] px-4 py-3 transition hover:border-[#F24C7C]"
            >
              <span className="flex min-w-0 items-center gap-2 font-semibold">
                <ListMusic className="size-4 shrink-0 text-[#F24C7C]" />
                Walkthrough
              </span>
              <ArrowRight className="size-4 shrink-0 text-[#00A7A7]" />
            </LocaleLink>
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
              icon: Sparkles,
              title: 'What is verified',
              text: 'The page set starts with the base Solo minigames that have current launch-week guide and gameplay cross-checks.',
            },
            {
              icon: ListMusic,
              title: 'What each page solves',
              text: 'Each guide focuses on cue recognition, input timing, the common miss, and whether the page is a good Perfect target.',
            },
            {
              icon: Headphones,
              title: 'How to use them',
              text: 'Read the stuck minigame first, then return to setup or Perfect route pages if the mistake feels like latency or fatigue.',
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

        <MinigameGroup
          title="Frontside Base Solo Minigames"
          summary="The Frontside batch is the larger first half of the route. It starts with readable timing tests and grows into stricter cue switching, delayed responses, and reaction-heavy Perfect risks."
          items={frontsideMinigames}
        />

        <MinigameGroup
          title="Flipside Base Solo Minigames"
          summary="The Flipside batch is shorter but sharper. These pages lean harder on response discipline, off-beat recognition, visual clutter control, and copying phrases without adding extra inputs."
          items={flipsideMinigames}
        />

        <section className="rounded-lg border border-[#201736]/15 bg-white p-6 text-[#4B3E68] text-sm leading-7 md:p-8">
          <h2 className="font-display text-2xl font-bold text-[#201736]">
            Source note
          </h2>
          <p className="mt-3">
            This first version uses current launch-week references to avoid
            making thin or guessed pages. The main verification sources are{' '}
            {minigameGuideSources.map((source, index) => (
              <span key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0D5F63] underline underline-offset-4"
                >
                  {source.label}
                </a>
                {index < minigameGuideSources.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </section>

        <FaqSection items={hubFaq} />
      </Container>
    </div>
  );
}
