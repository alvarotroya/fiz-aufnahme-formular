import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        personal_information: require('./locales/en/personal_information.json'),
      },
      de: {
        personal_information: require('./locales/de/personal_information.json'),
      }
    },
    lng: "en", // default language
    fallbackLng: "en",
    ns: ['personal_information'], // List namespaces to load
    defaultNS: 'personal_information', // Default namespace
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
