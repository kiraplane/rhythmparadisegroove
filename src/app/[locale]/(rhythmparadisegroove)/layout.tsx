import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { RhythmParadiseGroovePageShell } from '@/components/rhythmparadisegroove/wiki-navigation';
import type { ReactNode } from 'react';

export default function RhythmParadiseGrooveLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF8E8]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <RhythmParadiseGroovePageShell>
          {children}
        </RhythmParadiseGroovePageShell>
      </main>
      <AdsterraNativeBanner className="border-[#201736]/15 border-t bg-[#FFF8E8]" />
      <Footer />
    </div>
  );
}
