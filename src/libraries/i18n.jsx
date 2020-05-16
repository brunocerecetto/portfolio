import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        navbar: {
          about: 'about',
          works: 'works',
          contact: 'contact',
        },
      },
    },
    es: {
      translation: {
        navbar: {
          about: 'sobre mi',
          works: 'trabajos',
          contact: 'contacto',
        },
      },
    },
  },
});

export default i18n;
