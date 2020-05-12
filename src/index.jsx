import React from 'react';
import ReactDOM from 'react-dom';

import TagManager from 'react-gtm-module';

import App from './App';

import './index.css';
// import './i18n';

import * as serviceWorker from './serviceWorker';

// Google Tag Manager initializer
if (process.env.REACT_APP_GTM_KEY) {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_KEY,
  };
  TagManager.initialize(tagManagerArgs);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
