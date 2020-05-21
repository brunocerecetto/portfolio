import React, { Suspense, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useTranslation } from 'react-i18next';

import HomeComponent from './components/home';
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';

import './App.scss';

const scrollType = {
  duration: 800,
  delay: 50,
  smooth: true,
  offset: -10,
};

const App = () => {
  const { t } = useTranslation();
  const [scrollPosY, setScrollPosY] = useState(0);

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPosY(currPos.y);
  });

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <div>
        <Navbar t={t} scrollPosition={scrollPosY} />
        <HomeComponent t={t} scrollTo={() => scroller.scrollTo('about', scrollType)} />
        <Element name="about">
          <AboutMe t={t} />
        </Element>
        <Footer t={t} />
      </div>
    </Suspense>
  );
};

export default App;
