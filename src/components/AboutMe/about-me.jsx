/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import me from '../../assets/images/me.jpg';
import Badge from './badges';
// import styles from './about-me.module.scss';

const AboutMeComponent = () => (
  <div className="min-h-screen">

    <div className="my-8">
      <div className="flex flex-col items-center">
        <h1 className="font-black text-2xl md:text-4xl">ABOUT</h1>
        <div className="border-highlight border-b-2 w-1/12" />
      </div>
    </div>

    <div className="md:mx-16 flex flex-col lg:flex-row md:justify-between">
      <div className="flex flex-col justify-center items-center">
        <img className="rounded-full max-w-xs mb-8" src={me} alt="" />
        <h2 className="text-2xl font-black mb-5">Who&apos;s this guy?</h2>
        <span className="text-center">
        Bruno is a Full Stack Developer currently working at
          <br />
          <a href="https://dominion-cs.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-highlight">Dominion Capital Strategies</a>
          {' '}
        in Montevideo, Uruguay 🇺🇾
        </span>
        <span className="text-center">
          His role in Dominion is to make sure that everything
          <br />
          works as it should on the Front-End,
          Javascript is his passion. ❤️
        </span>
      </div>
      <div className="flex flex-col items-center mt-5">
        <h2 className="text-2xl font-black mb-5">Technologies I enjoy</h2>
        <div className="flex flex-row justify-between">
          <Badge text="Javascript" icon="fab fa-js-square" />
          <Badge text="Angular" icon="fab fa-angular" />
          <Badge text="React" icon="fab fa-react" />
          <Badge text="Node JS" icon="fab fa-node-js" />
        </div>
      </div>
    </div>
  </div>
);

// <img className="rounded-full sm:w-9/12 mb-5" src={me} alt="" />
export default AboutMeComponent;
