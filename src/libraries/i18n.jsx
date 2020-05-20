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
          viewThisSite: 'View this site in',
          english: 'English',
          spanish: 'Spanish',
          madeBy: '© {{year}} - Made with {{mate}} & {{heart}} by Bruno Cerecetto',
          also: '(also with some {{beer}})',
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
          viewThisSite: 'Ver este sitio en',
          english: 'Ingles',
          spanish: 'Español',
          madeBy: '© {{year}} - Hecho con {{mate}} y {{heart}} por Bruno Cerecetto',
          also: '(también con algunas {{beer}})',
        },
      },
    },
  },
});

export default i18n;
