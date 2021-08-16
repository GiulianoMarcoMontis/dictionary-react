import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// Provider & context
import DictionaryProvider from './context/dictionary/Provider.js';

import App from './components/App/App.js';

// styling
import './index.scss';

ReactDOM.render(
  <DictionaryProvider>
    <App />
  </DictionaryProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
