import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import uk from './locales/uk.json';
import de from './locales/de.json';

console.log('i18n loading...');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      de: { translation: de },
    },
    fallbackLng: 'uk',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })
  .then(() => {
    console.log('i18n initialized successfully');
  })
  .catch((err) => {
    console.error('i18n initialization failed:', err);
  });

export default i18n;