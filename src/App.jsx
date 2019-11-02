import React from 'react';
import HomeComponent from './components/home';
import NavbarComponent from './components/navbar';
import AboutMeComponent from './components/aboutMe';
import FooterComponent from './components/footer';
import './App.scss';

const App = () => (
  <div>
    <HomeComponent />
    <NavbarComponent />
    <AboutMeComponent />
    <FooterComponent />
  </div>
);

//
export default App;
