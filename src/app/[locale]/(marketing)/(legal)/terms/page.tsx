import Container from '@/components/layout/container';
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
    title: 'Terms of Service | Rhythm Paradise Groove Wiki',
    description:
      'Terms for using the independent Rhythm Paradise Groove Wiki and Switch rhythm game guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FFF8E8] py-12 text-[#201736]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#4B3E68]">
          This site provides independent Rhythm Paradise Groove guides, timing
          notes, and route advice. It is not affiliated with, endorsed by,
          sponsored by, or operated by Nintendo or the official Rhythm Heaven /
          Rhythm Paradise team.
        </p>
        <p className="leading-8 text-[#4B3E68]">
          Game details, mode availability, demo behavior, and timing advice can
          change as Nintendo updates public information or as players discover
          better setup practices. Treat guide pages as practical help, not
          official instructions.
        </p>
        <p className="leading-8 text-[#4B3E68]">
          Do not use this site to distribute cheats, automation scripts, copied
          clients, account services, or other content that violates game or
          platform terms.
        </p>
        <p className="leading-8 text-[#4B3E68]">
          Questions about these terms can be sent to
          hello@rhythmparadisegroove.wiki.
        </p>
      </Container>
    </div>
  );
}
