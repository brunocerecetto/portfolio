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
        home: {
          findOutMore: 'Find out more!',
        },
        about: {
          description:
            'Bruno is a Full Stack Developer currently working at<br/><2>Dominion Capital Strategies</2> in Montevideo, Uruguay 🇺🇾<br/>His role in Dominion is to make sure that everything<br/>works as it should on the Front-End<br/>but does things on the backend too 😂<br/>Javascript is his passion. ❤️',
          technologies: 'Technologies I enjoy:',
          skills: 'Skills',
        },
        contact: {
          amazingthings: "Let's do amazing things together 🦄✨!",
          name: 'Name',
          email: 'Email',
          message: 'Message',
          findMe: 'You can also find me at:',
          snack: {
            success: 'Your message was sent successfully',
            error: 'An error occurred, please try again later',
          },
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
        home: {
          findOutMore: 'Descubre más!',
        },
        about: {
          description:
            'Bruno es Desarrollador Full Stack, actualmente trabajando<br/> en <2>Dominion Capital Strategies</2> en Montevideo, Uruguay 🇺🇾<br/>Su rol en Dominion es asegurarse que todo funcione<br/> como debería en el Front-End, pero hace<br/>cosas en el Back-End también 😂<br/>Javascript es su pasión. ❤️',
          technologies: 'Tecnologías que me gustan:',
          skills: 'Habilidades',
        },
        contact: {
          amazingthings: 'Hagamos cosas increibles juntos 🦄✨!',
          name: 'Nombre',
          email: 'Email',
          message: 'Mensaje',
          findMe: 'También me podes encontrar en:',
          snack: {
            success: 'Su mensaje fue enviado exitosamente',
            error: 'Ocurrio un error, por favor intenter mas tarde',
          },
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
