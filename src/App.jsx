import React, { Suspense } from 'react';
import { Element, scroller } from 'react-scroll';
import HomeComponent from './components/home';
import NavbarComponent from './components/navbar';
import AboutMeComponent from './components/aboutMe';
import FooterComponent from './components/footer';
import './App.scss';

const scrollType = {
  duration: 800,
  delay: 50,
  smooth: true,
  offset: -10,
};

const App = () => {
  const scrollToAbout = () => {
    scroller.scrollTo('about', scrollType);
  };
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <div>
        <HomeComponent scrollTo={scrollToAbout} />
        <NavbarComponent />
        <Element name="about">
          <AboutMeComponent />
        </Element>
        <FooterComponent />
      </div>
    </Suspense>
  );
};

export default App;
