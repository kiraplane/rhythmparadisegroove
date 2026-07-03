'use client';

import { Badge } from '@/components/ui/badge';
import {
  flipsideEvolvedMinigameIndex,
  flipsideMinigameIndex,
  frontsideEvolvedMinigameIndex,
  frontsideMinigameIndex,
} from '@/data/rhythmparadisegroove/minigame-index';
import { remixIndex } from '@/data/rhythmparadisegroove/remix-index';
import { officialGameFacts } from '@/data/rhythmparadisegroove/sources';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Compass,
  Gamepad2,
  Headphones,
  ListChecks,
  ListMusic,
  Music2,
  RadioTower,
  Sparkles,
  TimerReset,
  Trophy,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const frontsideMinigameLinks = frontsideMinigameIndex.map((minigame) => ({
  href: `/minigames/${minigame.slug}`,
  label: minigame.name,
}));

const flipsideMinigameLinks = flipsideMinigameIndex.map((minigame) => ({
  href: `/minigames/${minigame.slug}`,
  label: minigame.name,
}));

const frontsideEvolvedMinigameLinks = frontsideEvolvedMinigameIndex.map(
  (minigame) => ({
    href: `/minigames/${minigame.slug}`,
    label: minigame.name,
  })
);

const flipsideEvolvedMinigameLinks = flipsideEvolvedMinigameIndex.map(
  (minigame) => ({
    href: `/minigames/${minigame.slug}`,
    label: minigame.name,
  })
);

const remixLinks = remixIndex.map((remix) => ({
  href: `/remixes/${remix.slug}`,
  label: remix.name,
}));

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/demo', label: 'Demo' },
      { href: '/demo/minigames', label: 'Demo Minigames' },
      { href: '/demo/demo-vs-full-game', label: 'Demo vs Full Game' },
      { href: '/setup', label: 'Timing Setup' },
    ],
    activePrefixes: ['/demo'],
  },
  {
    title: 'Perfects',
    icon: Trophy,
    links: [
      { href: '/guides/perfect-solo-minigames', label: 'Perfect Solo Games' },
      { href: '/minigames', label: 'Minigames Hub' },
      { href: '/remixes', label: 'Remixes Hub' },
      { href: '/guides/tv-calibration-input-lag', label: 'TV Calibration' },
      { href: '/setup/handheld-vs-tv', label: 'Handheld vs TV' },
      { href: '/setup/bluetooth-audio-lag', label: 'Bluetooth Audio Lag' },
      { href: '/walkthrough', label: 'Walkthrough Hub' },
    ],
    activePrefixes: ['/setup'],
  },
  {
    title: 'Frontside Minigames',
    icon: ListMusic,
    links: frontsideMinigameLinks,
  },
  {
    title: 'Flipside Minigames',
    icon: Gamepad2,
    links: flipsideMinigameLinks,
  },
  {
    title: 'Frontside Evolved 2',
    icon: Sparkles,
    links: frontsideEvolvedMinigameLinks,
  },
  {
    title: 'Flipside Evolved 2',
    icon: TimerReset,
    links: flipsideEvolvedMinigameLinks,
  },
  {
    title: 'Remixes',
    icon: RadioTower,
    links: [{ href: '/remixes', label: 'Remixes Hub' }, ...remixLinks],
    activePrefixes: ['/remixes'],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/full-walkthrough-route', label: 'Full Route' },
      { href: '/guides/demo-save-transfer', label: 'Demo Transfer' },
      { href: '/guides/rhythm-heaven-vs-paradise-name', label: 'Name Guide' },
    ],
    activePrefixes: ['/guides'],
  },
  {
    title: 'Modes',
    icon: Music2,
    links: [
      { href: '/modes', label: 'Modes Hub' },
      { href: '/beatspell', label: 'Beatspell' },
      { href: '/beatspell/how-to-unlock', label: 'Beatspell Unlock' },
      { href: '/multiplayer', label: 'Multiplayer' },
      { href: '/multiplayer/all-minigames', label: 'All Multiplayer Games' },
      { href: '/guides/beatspell-guide', label: 'Beatspell Legacy Guide' },
      { href: '/guides/multiplayer-party-guide', label: 'Party Setup Guide' },
      { href: '/release', label: 'Release Info' },
      { href: '/links', label: 'Official Links' },
    ],
    activePrefixes: ['/beatspell', '/multiplayer'],
  },
] as const;

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) {
    return false;
  }

  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#F24C7C] bg-[#F24C7C] font-semibold text-white'
          : 'border-[#201736]/15 bg-white text-[#4B3E68] hover:border-[#F24C7C] hover:text-[#D93969]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-white' : 'text-[#00A7A7]'
        )}
      />
    </LocaleLink>
  );
}

export function RhythmParadiseGrooveMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#201736]/15 bg-white p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#201736] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#F24C7C]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#00A7A7]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#0D5F63] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function RhythmParadiseGrooveRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#201736]/15 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#F24C7C] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#201736] text-xl font-bold">
                Rhythm routes
              </h2>
            </div>
            <Sparkles className="size-5 shrink-0 text-[#FFE14A]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive || currentPath === '/'}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#F24C7C]/60 bg-[#FFEAF1]'
                      : 'border-[#201736]/15 bg-[#FFF8E8]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#201736] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#00A7A7]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#201736]/15 bg-white px-1.5 py-0.5 text-[#5F5378] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#F24C7C] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
        <div className="rounded-lg border border-[#201736]/15 bg-[#201736] p-4 text-white text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold">
            <Headphones className="size-4 text-[#FFE14A]" />
            Timing reminder
          </div>
          Test handheld mode before judging TV timing. Perfect practice only
          pays off when the audio and display path feel consistent.
        </div>
        <div className="rounded-lg border border-[#201736]/15 bg-white p-4 text-[#5F5378] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#201736]">
            <CircleHelp className="size-4 text-[#00A7A7]" />
            Name note
          </div>
          {officialGameFacts.name} is the PAL title. North American players
          search for {officialGameFacts.alternateName}.
        </div>
      </div>
    </aside>
  );
}

export function RhythmParadiseGroovePageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#FFF8E8]">
      <RhythmParadiseGrooveMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <RhythmParadiseGrooveRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  perfect: Trophy,
  minigames: ListMusic,
  setup: TimerReset,
  demo: Gamepad2,
  modes: Music2,
  multiplayer: Users,
  guide: BookOpen,
  status: RadioTower,
};
