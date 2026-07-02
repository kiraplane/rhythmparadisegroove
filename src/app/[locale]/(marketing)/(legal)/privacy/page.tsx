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
    title: 'Privacy Policy | Rhythm Paradise Groove Wiki',
    description:
      'Privacy policy for the independent Rhythm Paradise Groove Wiki and Switch rhythm game guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF8E8] py-12 text-[#201736]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#4B3E68]">
          Rhythm Paradise Groove Wiki is an independent guide site. We do not
          require accounts for browsing Perfect routes, minigame guides, timing
          setup notes, demo information, mode guides, or official-link pages.
        </p>
        <p className="leading-8 text-[#4B3E68]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#4B3E68]">
          Local image assets are used for faster page loading. We do not sell
          asset files or provide downloads as standalone bundles.
        </p>
        <p className="leading-8 text-[#4B3E68]">
          Privacy questions can be sent to hello@rhythmparadisegroove.wiki.
        </p>
      </Container>
    </div>
  );
}
