'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/i18n/locales/en/translation.json';
import thTranslation from '@/i18n/locales/th/translation.json';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: enTranslation },
      th: { translation: thTranslation },
    },
    interpolation: { escapeValue: false },
  });
}

export default i18n;
