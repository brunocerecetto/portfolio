/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import me from '../../assets/images/me.jpg';

const AboutMeComponent = () => (
  <div className="min-h-screen flex flex-col md:flex-row md:justify-between">
    <div className="md:mx-40 md:mt-20">
      <div className="flex flex-col items-center mt">
        <img className="rounded-full w-9/12 mb-5" src={me} alt="" />
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
    </div>

  </div>
);
export default AboutMeComponent;
