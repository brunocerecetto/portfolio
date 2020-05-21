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
        about: {
          description:
            'Bruno is a Full Stack Developer currently working at<br/><2>Dominion Capital Strategies</2> in Montevideo, Uruguay 🇺🇾<br/>His role in Dominion is to make sure that everything<br/>works as it should on the Front-End<br/>but does things on the backend too 😂<br/>Javascript is his passion. ❤️',
          technologies: 'Technologies I enjoy:',
          skills: 'Skills',
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
        about: {
          description:
            'Bruno es Desarrollador Full Stack, actualmente trabajando<br/> en <2>Dominion Capital Strategies</2> en Montevideo, Uruguay 🇺🇾<br/>Su rol en Dominion es asegurarse que todo funcione<br/> como debería en el Front-End, pero hace<br/>cosas en el Back-End también 😂<br/>Javascript es su pasión. ❤️',
          technologies: 'Tecnologías que me gustan:',
          skills: 'Habilidades',
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
