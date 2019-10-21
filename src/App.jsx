import React from 'react';
import HomeComponent from './components/home';
import AboutMeComponent from './components/aboutMe';
import FooterComponent from './components/footer';
import './App.scss';

const App = () => (
  <div className="App">
    <HomeComponent />
    <AboutMeComponent />
    <FooterComponent />
  </div>
);

export default App;
