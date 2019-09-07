/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-children-prop */
import React from 'react';
import TextLoop from 'react-text-loop';
import ParticulesComponent from '../ParticulesComponent';
import styles from './home.module.scss';

const HomeComponent = () => {
  const width = window.window.innerWidth;
  const height = window.window.innerHeight;

  return (
    <div className={styles.home}>
      <ParticulesComponent height={height} width={width} />
      <div className={styles.title}>
        <TextLoop children={["Hello , I'm", 'Hola, Soy ', 'Oi, Sou ']} />
        <span className={styles.highlight}> Bruno Cerecetto</span>
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
    </div>
  );
};

export default HomeComponent;
