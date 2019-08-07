/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-children-prop */
import React from 'react';
import TextLoop from 'react-text-loop';
import ParticulesComponent from '../ParticulesComponent';
import './index.scss';

const HomeComponent = () => {
  const width = window.window.innerWidth;
  const height = window.window.innerHeight;

  return (
    <div className="background">
      <ParticulesComponent height={height} width={width} />
      <div className="title text unselectable">
        <TextLoop className="unselectable" children={["Hello , I'm", 'Hola, Soy ', 'Oi, Sou ']} />
        <span className="highlight unselectable"> Bruno Cerecetto</span>
        .
        <br />
        <TextLoop
          className="unselectable"
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
