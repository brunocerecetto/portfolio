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
        footer: {
          viewThisSite: 'view this site in',
          english: 'english',
          spanish: 'spanish',
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
        footer: {
          viewThisSite: 'ver este sitio en',
          english: 'ingles',
          spanish: 'español',
        },
      },
    },
  },
});

export default i18n;
