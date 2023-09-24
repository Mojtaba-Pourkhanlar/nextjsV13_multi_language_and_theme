import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/src/locales/en.json').then(module => module.default),
  ed: () => import('@/src/locales/ed.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
