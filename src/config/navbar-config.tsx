'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Gamepad2,
  Headphones,
  ListMusic,
  Music2,
  Sparkles,
  TimerReset,
  Trophy,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description: 'Perfects, setup, demo, Beatspell, and walkthrough.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'First route for timing, demo, and early clears.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Perfect Guide',
          description: 'Solo minigame Perfect attempts and cue notes.',
          href: Routes.PerfectGuide,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Walkthrough Route',
          description: 'Clear first, remix later, Perfect cleanup after.',
          href: Routes.FullWalkthroughGuide,
          external: false,
          icon: <ListMusic className="size-4" />,
        },
      ],
    },
    {
      title: t('minigames.title'),
      href: Routes.Minigames,
      external: false,
      icon: <ListMusic className="size-4" />,
      items: [
        {
          title: 'Minigames',
          description: '60 Solo pages with cues and Perfect risks.',
          href: Routes.Minigames,
          external: false,
          icon: <ListMusic className="size-4" />,
        },
        {
          title: 'Remixes',
          description: '20 Remix route guides with warm-up links.',
          href: Routes.Remixes,
          external: false,
          icon: <Music2 className="size-4" />,
        },
        {
          title: 'Walkthrough',
          description: 'Route solo games, remixes, and stuck points.',
          href: Routes.Walkthrough,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: t('setup.title'),
      href: Routes.Setup,
      external: false,
      icon: <TimerReset className="size-4" />,
      items: [
        {
          title: 'Timing Setup',
          description: 'TV Game Mode, audio latency, and handheld baseline.',
          href: Routes.Setup,
          external: false,
          icon: <TimerReset className="size-4" />,
        },
        {
          title: 'TV Calibration',
          description: 'Fix input lag before serious Perfect practice.',
          href: Routes.CalibrationGuide,
          external: false,
          icon: <Headphones className="size-4" />,
        },
        {
          title: 'Handheld vs TV',
          description: 'Compare the clean baseline against docked play.',
          href: Routes.SetupHandheldVsTv,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Bluetooth Audio',
          description: 'Check headphone and speaker delay before Perfects.',
          href: Routes.SetupBluetoothAudioLag,
          external: false,
          icon: <Headphones className="size-4" />,
        },
        {
          title: 'Demo',
          description: 'Try timing and save transfer before full-game play.',
          href: Routes.Demo,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Demo Minigames',
          description: 'Use the sample games as a timing audition.',
          href: Routes.DemoMinigames,
          external: false,
          icon: <ListMusic className="size-4" />,
        },
        {
          title: 'Demo vs Full Game',
          description: 'Decide whether to buy, wait, or fix setup first.',
          href: Routes.DemoVsFullGame,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: t('modes.title'),
      href: Routes.Modes,
      external: false,
      icon: <Music2 className="size-4" />,
      items: [
        {
          title: 'Modes',
          description: 'Beatspell, Drum Lessons, Toy Box, and more.',
          href: Routes.Modes,
          external: false,
          icon: <Music2 className="size-4" />,
        },
        {
          title: 'Beatspell',
          description: 'Rhythm-first dungeon mode advice.',
          href: Routes.Beatspell,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Beatspell Unlock',
          description: 'Where the mode fits and what to prepare first.',
          href: Routes.BeatspellUnlock,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Multiplayer',
          description: 'Local 1-4 player party setup and timing fairness.',
          href: Routes.Multiplayer,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'All Multiplayer Minigames',
          description: 'Route the party mode by player job and cue clarity.',
          href: Routes.MultiplayerAllMinigames,
          external: false,
          icon: <ListMusic className="size-4" />,
        },
      ],
    },
    {
      title: t('release.title'),
      href: Routes.Release,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Release Info',
          description: 'Switch, Switch 2, demo, and launch details.',
          href: Routes.Release,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Name Difference',
          description: 'Paradise Groove vs Heaven Groove by region.',
          href: Routes.NameGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Official Links',
          description: 'Nintendo page, trailers, and community references.',
          href: Routes.Links,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
  ];
}
