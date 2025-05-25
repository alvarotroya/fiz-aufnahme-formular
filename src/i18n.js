import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enPersonalInformation from './locales/en/personal_information.json';
import dePersonalInformation from './locales/de/personal_information.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        personal_information: enPersonalInformation,
      },
      de: {
        personal_information: dePersonalInformation,
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    ns: ['personal_information'],
    defaultNS: 'personal_information',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
