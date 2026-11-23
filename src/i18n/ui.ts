/**
 * UI strings and localized routes.
 * Italian is complete; English is stubbed so the language toggle can be
 * switched on later without restructuring the site.
 */
export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'it';

/** Set to true once the English pages exist under src/pages/en/. */
export const showLanguageSwitcher = false;

export type RouteKey =
  | 'home'
  | 'services'
  | 'method'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'cookie';

export const routes: Record<Lang, Record<RouteKey, string>> = {
  it: {
    home: '/',
    services: '/servizi',
    method: '/come-lavoriamo',
    about: '/chi-siamo',
    contact: '/contatti',
    privacy: '/privacy',
    cookie: '/cookie',
  },
  en: {
    home: '/en',
    services: '/en/services',
    method: '/en/how-we-work',
    about: '/en/about',
    contact: '/en/contact',
    privacy: '/en/privacy',
    cookie: '/en/cookies',
  },
};

export const ui = {
  it: {
    'nav.services': 'Servizi',
    'nav.method': 'Come lavoriamo',
    'nav.about': 'Chi siamo',
    'nav.contact': 'Contatti',
    'nav.cta': 'Prenota una call',
    'nav.menu': 'Menu',
    'footer.legal': 'Note legali',
    'footer.privacy': 'Privacy policy',
    'footer.cookie': 'Cookie policy',
    'footer.rights': 'Tutti i diritti riservati.',
    'skip': 'Vai al contenuto',
  },
  en: {
    'nav.services': 'Services',
    'nav.method': 'How we work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a call',
    'nav.menu': 'Menu',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy policy',
    'footer.cookie': 'Cookie policy',
    'footer.rights': 'All rights reserved.',
    'skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['it'];

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

export function localizedPath(lang: Lang, key: RouteKey) {
  return routes[lang][key];
}
