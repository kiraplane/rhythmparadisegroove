import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Rhythm Paradise Groove Wiki Disclaimer',
    description:
      'Rhythm Paradise Groove Wiki disclaimer covering independent guide status, Nintendo source handling, regional names, videos, and timing advice.',
    locale,
    pathname: '/disclaimer',
    image: '/rhythmparadisegroove/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#FFF8E8] py-10 text-[#201736]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F24C7C] text-white">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Rhythm Paradise Groove Wiki Disclaimer
          </h1>
          <p className="text-[#4B3E68] text-lg leading-8">
            {officialGameFacts.siteName} is an independent guide hub. It is not
            created, endorsed, or operated by Nintendo, Nintendo EPD, TNX, or
            any official Rhythm Heaven / Rhythm Paradise team.
          </p>
        </header>

        <section className="rounded-lg border border-[#201736]/15 bg-white p-6 text-[#4B3E68] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#201736]">
            Source handling
          </h2>
          <p className="mt-3">
            Official release, platform, demo, feature, and player-count facts
            are checked against Nintendo pages first. Reviews, community
            discussion, competitor pages, and YouTube videos are used as
            discovery and cross-check sources, not as text to copy.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#201736]">
            Regional names
          </h2>
          <p className="mt-3">
            Rhythm Paradise Groove is the European/PAL title. Rhythm Heaven
            Groove is the North American title. The site uses Rhythm Paradise
            Groove as the canonical name while acknowledging the North American
            alias where it helps players find the right guide.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#201736]">
            Timing advice
          </h2>
          <p className="mt-3">
            Setup and calibration pages provide practical troubleshooting, but
            TVs, controllers, audio paths, and accessibility needs vary. Use the
            official game settings and your own setup tests as the final check.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#F24C7C] text-white hover:bg-[#D93969]"
          >
            <LocaleLink href="/guides/beginner-guide">Start Guide</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/links">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
