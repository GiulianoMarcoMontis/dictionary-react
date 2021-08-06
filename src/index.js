import React from 'react';
import ReactDOM from 'react-dom';

// Provider & context
import DictionaryProvider from './context/dictionary/Provider.js';

import App from './App';

// styling
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
