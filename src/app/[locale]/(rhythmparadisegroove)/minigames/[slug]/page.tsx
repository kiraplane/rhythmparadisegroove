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
import {
  getAdjacentMinigames,
  getMinigameGuide,
  minigames,
} from '@/data/rhythmparadisegroove/minigames';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  ListMusic,
  Trophy,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

const difficultyPracticeCopy = {
  Beginner:
    'This is a reasonable early Perfect target, but only after the cue feels automatic. If you still have to stare at the animation to survive the stage, keep it as a clear practice page for a little longer.',
  Intermediate:
    'This is a good cleanup target once one mistake is clearly responsible for most failures. If the miss keeps changing, the page is still asking for normal practice rather than Perfect-window pressure.',
  Advanced:
    'This is a focused cleanup target, not a page to brute-force while tired. Treat a Perfect attempt like a short session: warm up, name the risky cue, take a few serious runs, then stop if your timing gets noisy. If you cannot hum the cue away from the screen, the page still needs listening practice.',
};

const sidePracticeCopy = {
  Frontside:
    'Because this sits in the Frontside base route, it also teaches habits that return later: cue trust, visual filtering, and keeping the beat alive when the scene changes.',
  Flipside:
    'Because this sits in the Flipside base route, it is worth treating the page as a sharper rhythm check. The ideas tend to be shorter, stricter, and less forgiving when you play by sight alone.',
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    minigames.map((minigame) => ({ locale, slug: minigame.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const minigame = getMinigameGuide(slug);

  if (!minigame) {
    return {};
  }

  return constructMetadata({
    title: minigame.seoTitle,
    description: minigame.seoDescription,
    locale,
    pathname: `/minigames/${minigame.slug}`,
    image: '/rhythmparadisegroove/og-image.png',
  });
}

function getRelatedLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

function getDifficultyClass(difficulty: string) {
  if (difficulty === 'Beginner') {
    return 'border-[#00A7A7]/30 bg-[#C7FFF3] text-[#0D5F63]';
  }

  if (difficulty === 'Intermediate') {
    return 'border-[#FFE14A]/60 bg-[#FFF8D1] text-[#6E5200]';
  }

  return 'border-[#F24C7C]/30 bg-[#FFEAF1] text-[#B51F52]';
}

export default async function MinigameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const minigame = getMinigameGuide(slug);

  if (!minigame) {
    notFound();
  }

  const adjacent = getAdjacentMinigames(minigame.slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: minigame.title,
        description: minigame.summary,
        datePublished: minigame.updatedAt,
        dateModified: minigame.updatedAt,
        image: `${officialGameFacts.domain}/rhythmparadisegroove/og-image.png`,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
        },
        mainEntityOfPage: `${officialGameFacts.domain}/minigames/${minigame.slug}`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: minigame.name,
            item: `${officialGameFacts.domain}/minigames/${minigame.slug}`,
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
            <Badge className="bg-[#F24C7C] text-white">{minigame.side}</Badge>
            <Badge className="bg-[#201736] text-white">
              Base Solo #{minigame.order}
            </Badge>
            <Badge
              variant="outline"
              className={getDifficultyClass(minigame.difficulty)}
            >
              {minigame.difficulty}
            </Badge>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black md:text-6xl">
            {minigame.name} Guide
          </h1>
          <p className="mt-5 max-w-4xl text-[#4B3E68] text-lg leading-8">
            {minigame.summary}
          </p>
          <div className="mt-5">
            <LastUpdated date={minigame.updatedAt} />
          </div>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 font-semibold text-[#201736]">
                <ListMusic className="size-4 text-[#F24C7C]" />
                Cue to trust
              </div>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                {minigame.cueFamily}
              </p>
            </div>
            <div className="rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 font-semibold text-[#201736]">
                <Headphones className="size-4 text-[#F24C7C]" />
                Input focus
              </div>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                {minigame.inputStyle}
              </p>
            </div>
            <div className="rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 font-semibold text-[#201736]">
                <Trophy className="size-4 text-[#F24C7C]" />
                Perfect risk
              </div>
              <p className="mt-2 text-[#4B3E68] text-sm leading-6">
                {minigame.perfectRisk}
              </p>
            </div>
          </section>

          <AdsterraAdFrame slot="banner-300x250" className="mt-8" label />

          <div className="mt-8 space-y-8">
            {minigame.body.map((section) => (
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
              Practice this page in order
            </h2>
            <div className="mt-3 space-y-4 text-[#4B3E68] text-base leading-8">
              <p>
                Start with one clear where you only listen for the{' '}
                {minigame.cueFamily}. On the second clear, pay attention to the{' '}
                {minigame.inputStyle}. Only after those two parts feel stable
                should you spend a Perfect window here.
              </p>
              <p>
                If the run breaks at {minigame.perfectRisk}, do not restart
                blindly. Say the mistake in one sentence, replay that cue in
                your head, then take the next attempt. This keeps the practice
                useful instead of turning it into button-mashing with better
                branding.
              </p>
              <p>{difficultyPracticeCopy[minigame.difficulty]}</p>
              <p>
                {sidePracticeCopy[minigame.side]} If the previous minigame feels
                easier, use it as a warm-up. If the next minigame suddenly feels
                rough, come back here and check whether the {minigame.cueFamily}{' '}
                is actually stable or merely lucky.
              </p>
            </div>
          </section>

          <section className="mt-10 grid gap-3 md:grid-cols-2">
            {adjacent.previous ? (
              <LocaleLink
                href={`/minigames/${adjacent.previous.slug}`}
                className="group rounded-lg border border-[#201736]/15 bg-white p-4 transition hover:border-[#F24C7C]"
              >
                <div className="flex items-center gap-2 text-[#5F5378] text-sm">
                  <ArrowLeft className="size-4 text-[#00A7A7]" />
                  Previous minigame
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-[#201736]">
                  {adjacent.previous.name}
                </h2>
              </LocaleLink>
            ) : null}
            {adjacent.next ? (
              <LocaleLink
                href={`/minigames/${adjacent.next.slug}`}
                className="group rounded-lg border border-[#201736]/15 bg-white p-4 transition hover:border-[#F24C7C]"
              >
                <div className="flex items-center justify-between gap-2 text-[#5F5378] text-sm">
                  <span>Next minigame</span>
                  <ArrowRight className="size-4 text-[#00A7A7]" />
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-[#201736]">
                  {adjacent.next.name}
                </h2>
              </LocaleLink>
            ) : null}
          </section>

          <section className="mt-10 rounded-lg border border-[#201736]/15 bg-[#FFF8E8] p-5">
            <h2 className="font-display text-2xl font-bold">
              Related next steps
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {minigame.relatedRoutes.map((route) => (
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
            <FaqSection items={minigame.faq} />
          </div>
        </article>
      </Container>
    </div>
  );
}
