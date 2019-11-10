import React from 'react';
import me from '../../assets/images/me.jpg';
import Badge from './badges';
import Header from '../header/header';
import ProgressBar from './progress-bar';


const AboutMeComponent = () => (
  <div className="min-h-screen">

    <Header text="about" />

    <div className="md:mx-16 xl:mx-56 flex flex-col lg:flex-row md:justify-between">
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
      <div className="flex flex-col items-center mt-5 lg:mt-0">
        <h2 className="text-2xl font-black mb-5">Technologies I enjoy:</h2>
        <div className="flex flex-row justify-between">
          <Badge text="Javascript" icon="fab fa-js-square" />
          <Badge text="Angular" icon="fab fa-angular" />
          <Badge text="React" icon="fab fa-react" />
          <Badge text="Node JS" icon="fab fa-node-js" />
        </div>
        <h2 className="text-2xl font-black my-5">Skills:</h2>
        <div className="flex flex-col items-center w-full mb-20">
          <ProgressBar skill="html" width="1/12" />
          <ProgressBar skill="angular" width="1/12" />
          <ProgressBar skill="javascript" width="2/12" />
          <ProgressBar skill=".net" width="1/4" />
          <ProgressBar skill="css" width="1/4" />
          <ProgressBar skill="sql" width="2/5" />
          <ProgressBar skill="react" width="2/5" />
          <ProgressBar skill="node.js" width="2/5" />
          <ProgressBar skill="docker" width="8/12" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutMeComponent;
