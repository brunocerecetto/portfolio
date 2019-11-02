/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-children-prop */
import React from 'react';
import TextLoop from 'react-text-loop';
import ParticulesComponent from '../particulesComponent';

const HomeComponent = () => (
  <div className="w-full h-screen bg-background flex flex-col justify-center items-center select-none">
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
  </div>
);

export default HomeComponent;
