import React from 'react';
import TextLoop from 'react-text-loop';
import PropTypes from 'prop-types';
import ParticulesComponent from './particulesComponent';
import styles from './home.module.scss';

const HomeComponent = ({ scrollTo }) => (
  <div className="w-full h-screen bg-background flex flex-col justify-between items-center">
    <div />
    <ParticulesComponent />
    <div className="text-white text-base md:text-xl lg:text-4xl leading-none md:leading-normal lg:leading-relaxed text-center">
      <TextLoop children={["Hello , I'm", 'Hola, Soy ']} />
      <span className="text-highlight font-raleway-semibold font-bold"> Bruno Cerecetto</span>
      .
      <br />
      <TextLoop
        children={["I'm a full-stack web developer.", 'Soy desarrollador web Full Stack.']}
      />
    </div>
    <div className="mb-4 z-50">
      <button
        type="button"
        className={`text-white md:text-lg lg:text-2xl flex flex-col items-center ${styles.animate} ${styles.bounce}`}
        onClick={() => {
          scrollTo();
        }}
      >
        <span>Find out more!</span>
        <i className="fas fa-chevron-down" />
      </button>
    </div>
  </div>
);

HomeComponent.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default HomeComponent;
