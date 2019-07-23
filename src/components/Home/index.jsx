/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-children-prop */
import React from 'react';
import TextLoop from 'react-text-loop';
import ParticulesComponent from '../ParticulesComponent';
import './index.scss';

const HomeComponent = () => {
  // eslint-disable-next-line no-undef
  const width = window.window.innerWidth;
  // eslint-disable-next-line no-undef
  const height = window.window.innerHeight;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#014972',
      }}
    >
      <ParticulesComponent height={height} width={width} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
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
    </div>
  );
};

export default HomeComponent;
