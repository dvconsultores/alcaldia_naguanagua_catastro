import locale77427e78 from '../../i18n/en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","fallbackRoot":true,"silentFallbackWarn":false,"silentTranslationWarn":false},
  vueI18nLoader: true,
  locales: [{"code":"es","iso":"es","file":"es.js"},{"code":"en","iso":"en","file":"en.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/jorge/Documentos/alcaldia_naguanagua_catastro/i18n",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"es","iso":"es","file":"es.js"},{"code":"en","iso":"en","file":"en.js"}],
  localeCodes: ["es","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.js': () => Promise.resolve(locale77427e78),
  'es.js': () => import('../../i18n/es.js' /* webpackChunkName: "lang-es.js" */),
}
