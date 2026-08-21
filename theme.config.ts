import type { ThemeConfig } from './types/theme-config.d.ts';
import { expressiveCodeThemes } from './expressive-code-themes.mjs';

// language files from ./src/i18n
// The `with { type: 'json' }` import attribute is required so this file can also be
// imported from a plain ESM context (e.g. `ec.config.mjs`, which Node loads directly).
import enStrings from './src/i18n/en.json' with { type: 'json' };

export const themeConfig: ThemeConfig = {
  // `import.meta.env?.` is guarded because this file is also imported from `ec.config.mjs`,
  // which Node loads as plain ESM where `import.meta.env` is not defined (only Vite injects it).
  site: import.meta.env?.SITE_OVERRIDE || process.env.SITE_OVERRIDE || 'https://baydenwillms.github.io/bioGOSHIP_POC',
  primaryColor: '#282687', // mind to also update the Tailwind config if you change this!
  themeColor: '#282687',
  generateWebmanifest: true,
  name: 'Bio GO-SHIP',
  shortName: 'Bio GO-SHIP',
  darkMode: true,
  robots: import.meta.env?.ROBOTS || 'index, follow',
  xHandle: 'UCI_OCEANS',

  // Structured data
  author: {
    type: 'Organization',
    name: 'Bio-GO-SHIP',
    url: 'https://biogoship.org',
    image: '',
  },
  publisher: {
    type: 'Organization',
    name: 'Bio-GO-SHIP',
    url: 'https://biogoship.org',
    image: '',
  },

  // I18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    languages: {
      en: 'English',
    },
    languageModules: {
      en: enStrings,
    },
  },

  // md(x) code block rendering - edit them in ./expressive-code-themes.mjs
  expressiveCodeThemes,

  // content/articles settings
  articles: {
    imageFallback: true,
    gridView: true,
    textOverImage: false,
    categories: true, // if set false, make sure to also remove category directories under /pages
    tags: true, // if set false, make sure to also remove tag directories under /pages
    entriesPerPage: 4,
    tocMaxDepth: 3,
    defaults: {
      author: {
        name: 'Jane Doe',
        url: 'https://en.wikipedia.org/wiki/Jane_Doe_(disambiguation)',
      },
    },
    social: {
      // default values - can be overridden at the Single component level
      xHandle: 'example', // to be added as "via @handle" in the tweet
      buttons: {
        email: true,
        facebook: true,
        hackernews: true,
        linkedin: true,
        pinterest: false,
        reddit: true,
        telegram: false,
        x: true,
        whatsapp: false,
      },
      buttonsSmallScreen: {
        email: true,
        facebook: true,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: true,
        telegram: true,
        x: true,
        whatsapp: true,
      },
    },
  },

  // promotion settings
  promotions: {
    newsletterSignup: false,
    footerBanner: false,
    navAd: false,
    topBanner: false,
    heroChip: false,
  },

  onDemandRenderedCollections: [],

  // content/events settings
  events: {
    // you can also dynamically integrate events from your Add to Calendar PRO account (https://add-to-calendar-pro.com/), having your API key set as environment variable ADD_TO_CALENDAR_PRO_API_KEY.
    dynamicEvents: {
      pullFromAddToCalendarPro: false,
      filterBy: {
        from: '',
        to: '',
        group: '',
      },
    },
  },

  // LLM and coding assistant settings
  llms: {
    autoGeneration: true,
    intro: 'Bio-GO-SHIP is a community program that quantifies plankton diversity, abundance, and biogeochemical roles across the global ocean, in coordination with GO-SHIP physical and chemical measurements.',
    excludePagesPattern: [],
    includePages: [],
    addArticles: 'selected',
    addEvents: 'none',
    addFAQ: 'all',
  },

  askAiTrigger: 'Explain the Bio-GO-SHIP program: its vision, mission, sampling methods, and how it connects to GO-SHIP. What community benefits does it provide?',

  droppedFeatures: ['cloudflare', 'events-pages', 'pricing-page', 'docs-pages', 'integration-pages', 'examples', 'signup'],
};
