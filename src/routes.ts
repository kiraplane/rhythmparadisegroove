import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Rhythm Paradise Groove wiki routes
  Guides = '/guides',
  Minigames = '/minigames',
  Remixes = '/remixes',
  Walkthrough = '/walkthrough',
  Demo = '/demo',
  Setup = '/setup',
  Modes = '/modes',
  Release = '/release',
  Links = '/links',
  BeginnerGuide = '/guides/beginner-guide',
  PerfectGuide = '/guides/perfect-solo-minigames',
  CalibrationGuide = '/guides/tv-calibration-input-lag',
  DemoGuide = '/guides/demo-save-transfer',
  BeatspellGuide = '/guides/beatspell-guide',
  MultiplayerGuide = '/guides/multiplayer-party-guide',
  FullWalkthroughGuide = '/guides/full-walkthrough-route',
  NameGuide = '/guides/rhythm-heaven-vs-paradise-name',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
