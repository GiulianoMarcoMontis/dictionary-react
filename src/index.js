import React from 'react';
import ReactDOM from 'react-dom';

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
