/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-children-prop */
import React from 'react';
import TextLoop from 'react-text-loop';
import ParticulesComponent from './particulesComponent';
import styles from './home.module.scss';

const HomeComponent = props => (
  <div className="w-full h-screen bg-background flex flex-col justify-between items-center">
    <div />
    <ParticulesComponent />
    <div className="text-white text-base md:text-xl lg:text-4xl leading-none md:leading-normal lg:leading-relaxed text-center">
      <TextLoop children={["Hello , I'm", 'Hola, Soy ', 'Oi, Sou ']} />
      <span className="text-highlight font-raleway-semibold font-bold"> Bruno Cerecetto</span>
        .
      <br />
      <TextLoop
        children={[
          "I'm a full-stack web developer.",
          'Soy desarrollador web Full Stack.',
          'Eu sou um full-stack web developer.',
        ]}
      />
    </div>
    <div className="mb-4 z-50">
      <button type="button" className={`text-white md:text-lg lg:text-2xl flex flex-col items-center ${styles.animate} ${styles.bounce}`} onClick={() => { props.scrollTo(); }}>
        <span>Find out more!</span>
        <i className="fas fa-chevron-down" />
      </button>
    </div>
  </div>
);

export default HomeComponent;
