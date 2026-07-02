import Container from '@/components/layout/container';
import { RhythmParadiseGrooveRouteSidebar } from '@/components/rhythmparadisegroove/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides, siteDescription } from '@/data/rhythmparadisegroove/guides';
import {
  officialGameFacts,
  officialQuickLinks,
} from '@/data/rhythmparadisegroove/sources';
import { topicPageList } from '@/data/rhythmparadisegroove/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  ExternalLink,
  Gamepad2,
  ListMusic,
  Play,
  Sparkles,
  TimerReset,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Perfect Route',
    body: 'Cue notes, retry rules, and timing checks before medal cleanup.',
    href: '/guides/perfect-solo-minigames',
    icon: Trophy,
  },
  {
    title: 'Timing Setup',
    body: 'Fix TV lag, audio delay, and calibration before hard practice.',
    href: '/setup',
    icon: TimerReset,
  },
  {
    title: 'Demo First',
    body: 'Test handheld vs TV play and protect save-transfer progress.',
    href: '/demo',
    icon: Gamepad2,
  },
  {
    title: 'Beatspell',
    body: 'Rhythm-first advice for the RPG-flavored dungeon mode.',
    href: '/guides/beatspell-guide',
    icon: Sparkles,
  },
  {
    title: 'Minigames',
    body: 'Build per-game pages from cue families and real search demand.',
    href: '/minigames',
    icon: ListMusic,
  },
  {
    title: 'Multiplayer',
    body: 'Set up fair local play for 1-4 players and mixed skill levels.',
    href: '/guides/multiplayer-party-guide',
    icon: Users,
  },
];

const keywordLinks = [
  { keyword: 'rhythm paradise groove', href: '/' },
  { keyword: 'rhythm paradise groove Wiki', href: '/' },
  {
    keyword: 'rhythm heaven groove',
    href: '/guides/rhythm-heaven-vs-paradise-name',
  },
  {
    keyword: 'rhythm paradise groove perfect',
    href: '/guides/perfect-solo-minigames',
  },
  { keyword: 'rhythm paradise groove minigames', href: '/minigames' },
  { keyword: 'rhythm paradise groove demo', href: '/demo' },
  {
    keyword: 'rhythm paradise groove beatspell',
    href: '/guides/beatspell-guide',
  },
  { keyword: 'rhythm paradise groove calibration', href: '/setup' },
];

const startSteps = [
  {
    title: 'Test timing',
    href: '/setup',
    body: 'Use handheld as the baseline, then fix TV and audio delay.',
  },
  {
    title: 'Play the demo',
    href: '/guides/demo-save-transfer',
    body: 'Check save transfer and compare handheld against TV mode.',
  },
  {
    title: 'Clear first',
    href: '/guides/full-walkthrough-route',
    body: 'Learn cue families before chasing Perfect medals.',
  },
  {
    title: 'Clean Perfects',
    href: '/guides/perfect-solo-minigames',
    body: 'Name the repeated miss, practice the cue, then retry.',
  },
];

const latestUpdateItems = [
  {
    title: 'Launch day facts checked',
    date: officialGameFacts.releaseDate,
    body: `${officialGameFacts.soloGameCount}, ${officialGameFacts.multiplayerGameCount}, demo, Beatspell, Drum Lessons, and Toy Box are tracked from Nintendo UK.`,
  },
  {
    title: 'Regional naming handled',
    date: '2026-07-02',
    body: 'The site targets Rhythm Paradise Groove first while mapping Rhythm Heaven Groove alias searches.',
  },
  {
    title: 'Perfect guide path live',
    date: '2026-07-02',
    body: 'Perfect, calibration, demo, walkthrough, Beatspell, and multiplayer routes are ready for launch coverage.',
  },
];

export function RhythmParadiseGrooveHomePage() {
  const latestGuides = guides.slice(0, 6);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/rhythmparadisegroove/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        alternateName: officialGameFacts.alternateName,
        gamePlatform: [officialGameFacts.platform, 'Nintendo Switch 2'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialStoreUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.publisher,
        },
        datePublished: officialGameFacts.releaseDate,
      },
      {
        '@type': 'VideoObject',
        name: 'Rhythm Paradise Groove overview trailer',
        thumbnailUrl: 'https://i.ytimg.com/vi/dIqElv-ewbg/hqdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/dIqElv-ewbg',
        uploadDate: '2026-04-02',
      },
    ],
  };

  return (
    <div className="bg-[#FFF8E8] text-[#201736]">
      <JsonLd data={jsonLd} />

      <section className="border-[#201736]/15 border-b bg-[#FFF8E8]">
        <Container className="px-4 py-6 md:py-8">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#FFE14A] text-[#201736]">
                  Nintendo Switch rhythm guide
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#00A7A7] bg-white text-[#0D5F63]"
                >
                  Also searched as Rhythm Heaven Groove
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                Rhythm Paradise Groove Wiki
              </h1>
              <p className="max-w-2xl text-[#4B3E68] text-lg leading-8">
                Perfect routes, minigame cues, TV calibration, demo setup,
                Beatspell, multiplayer, and Switch timing advice for the 2026
                Rhythm game.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#F24C7C] text-white hover:bg-[#D93969]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#201736] bg-white text-[#201736] hover:bg-[#FFE14A]"
                >
                  <LocaleLink href="/guides/perfect-solo-minigames">
                    Perfect
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#00A7A7] bg-white text-[#0D5F63] hover:bg-[#C7FFF3]"
                >
                  <a
                    href={officialGameFacts.officialStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nintendo
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.slice(2).map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#201736]/15 bg-white px-3 py-2 font-medium text-[#4B3E68] text-sm transition hover:border-[#F24C7C] hover:text-[#D93969]"
                  >
                    {item.keyword.replace('rhythm paradise groove ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Rhythm Paradise Groove overview trailer"
              className="overflow-hidden rounded-lg border border-[#201736]/15 bg-white shadow-sm"
            >
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/dIqElv-ewbg"
                title="Rhythm Paradise Groove overview trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <a
                href={officialGameFacts.nintendoUkYoutubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 border-[#201736]/10 border-t bg-[#201736] px-3 py-2 text-white text-xs transition hover:bg-[#342657]"
              >
                <span className="inline-flex min-w-0 items-center gap-2">
                  <Play className="size-3 shrink-0 text-[#FFE14A]" />
                  <span className="truncate">Official overview trailer</span>
                </span>
                <ExternalLink className="size-3 shrink-0" />
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-[#201736]/15 border-b bg-[#C7FFF3]">
        <Container className="grid gap-3 px-4 py-4 md:grid-cols-4">
          {officialQuickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-md border border-[#0D5F63]/20 bg-white px-4 py-3 font-semibold text-[#0D5F63] text-sm transition hover:border-[#0D5F63]"
            >
              {link.label}
              <ExternalLink className="size-4 shrink-0" />
            </a>
          ))}
        </Container>
      </section>

      <Container className="px-4 py-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-10">
            <section>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#201736] text-white">Start here</Badge>
                  <h2 className="mt-3 font-display text-3xl font-black">
                    Fast routes for real player problems
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="hidden font-semibold text-[#D93969] text-sm hover:underline md:inline"
                >
                  All guides
                </LocaleLink>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {primaryLinks.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-[#201736]/15 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#F24C7C] hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <item.icon className="size-5 text-[#F24C7C]" />
                      <ArrowRight className="size-4 text-[#201736] transition group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#5F5378] text-sm leading-6">
                      {item.body}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#201736]/15 bg-white p-5">
              <div className="grid gap-5 md:grid-cols-[220px_minmax(0,1fr)]">
                <div>
                  <Badge className="bg-[#FFE14A] text-[#201736]">
                    First session
                  </Badge>
                  <h2 className="mt-3 font-display text-2xl font-black">
                    Clean timing before clean medals
                  </h2>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="rounded-md border border-[#201736]/10 bg-[#FFF8E8] p-4 transition hover:border-[#00A7A7]"
                    >
                      <p className="font-semibold text-[#F24C7C] text-xs">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[#5F5378] text-sm leading-6">
                        {step.body}
                      </p>
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="mb-4">
                <Badge className="bg-[#00A7A7] text-white">Latest</Badge>
                <h2 className="mt-3 font-display text-3xl font-black">
                  Launch notes and guide status
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {latestUpdateItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-lg border border-[#201736]/15 bg-white p-5"
                  >
                    <p className="font-semibold text-[#0D5F63] text-xs">
                      {item.date}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#5F5378] text-sm leading-6">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-4">
                <Badge className="bg-[#F24C7C] text-white">Guides</Badge>
                <h2 className="mt-3 font-display text-3xl font-black">
                  Current English guide coverage
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group grid gap-4 rounded-lg border border-[#201736]/15 bg-white p-4 transition hover:border-[#F24C7C] sm:grid-cols-[120px_minmax(0,1fr)]"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-md border border-[#201736]/10 bg-[#FFF8E8] sm:aspect-square">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-[#00A7A7] text-xs">
                        {guide.category} / {guide.difficulty}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold leading-7 group-hover:text-[#D93969]">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[#5F5378] text-sm leading-6">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#201736]/15 bg-[#201736] p-5 text-white">
              <div className="grid gap-5 md:grid-cols-[260px_minmax(0,1fr)]">
                <div>
                  <Badge className="bg-[#FFE14A] text-[#201736]">
                    Keyword hub
                  </Badge>
                  <h2 className="mt-3 font-display text-2xl font-black">
                    Search terms this wiki already answers
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {keywordLinks.map((item) => (
                    <LocaleLink
                      key={item.keyword}
                      href={item.href}
                      className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm transition hover:bg-white hover:text-[#201736]"
                    >
                      {item.keyword}
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="mb-4">
                <Badge className="bg-[#FFE14A] text-[#201736]">Hubs</Badge>
                <h2 className="mt-3 font-display text-3xl font-black">
                  Topic hubs
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="rounded-lg border border-[#201736]/15 bg-white p-5 transition hover:border-[#00A7A7]"
                  >
                    <p className="font-semibold text-[#0D5F63] text-xs">
                      {topic.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {topic.label}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[#5F5378] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </div>

          <RhythmParadiseGrooveRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
