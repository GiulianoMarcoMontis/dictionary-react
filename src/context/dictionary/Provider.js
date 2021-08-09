import { useState } from 'react';

import dictionaryContext from './context';

const DictionaryProvider = ({ children }) => {
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState('en_GB');
  const [word, setWord] = useState('');
  const [isLight, setIsLight] = useState(false);

  return (
    <dictionaryContext.Provider
      value={{
        meanings,
        setMeanings,
        language,
        setLanguage,
        word,
        setWord,
        isLight,
        setIsLight,
      }}
    >
      {children}
    </dictionaryContext.Provider>
  );
};

export default DictionaryProvider;
