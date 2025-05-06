'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(resourcesToBackend((language: string, namespace: string) =>
    import(`@/i18n/locales/${language}/${namespace}.json`)
  ))
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'], // หรือ ['common'] ถ้าใช้ namespace อื่น
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
