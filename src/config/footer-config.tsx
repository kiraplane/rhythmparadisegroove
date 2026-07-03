'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('wiki.title'),
      items: [
        {
          title: t('wiki.items.minigames'),
          href: Routes.Minigames,
          external: false,
        },
        {
          title: t('wiki.items.remixes'),
          href: Routes.Remixes,
          external: false,
        },
        {
          title: t('wiki.items.beatspell'),
          href: Routes.Beatspell,
          external: false,
        },
        {
          title: t('wiki.items.multiplayer'),
          href: Routes.Multiplayer,
          external: false,
        },
        {
          title: t('wiki.items.walkthrough'),
          href: Routes.Walkthrough,
          external: false,
        },
        {
          title: t('wiki.items.setup'),
          href: Routes.Setup,
          external: false,
        },
        {
          title: t('wiki.items.modes'),
          href: Routes.Modes,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.perfect'),
          href: Routes.PerfectGuide,
          external: false,
        },
        {
          title: t('guides.items.beatspell'),
          href: Routes.BeatspellGuide,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
