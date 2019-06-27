import { React, useEffect } from 'react';
import ReactGA from 'react-ga';
import HomeComponent from './components/Home';
import './App.scss';

const App = () => {
  useEffect(() => {
    ReactGA.pageview('/app');
  }, []);

  return (
    <div className="App">
      <HomeComponent />
    </div>
  );
};

export default App;
