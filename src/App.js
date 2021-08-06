import axios from 'axios';
import { useEffect, useContext } from 'react';

// components
import Header from './components/Header/Header.js';
import Definitions from './components/definitions/Definitions.js';

// context
import dictionaryContext from './context/dictionary/context.js';

// material-ui components
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

const App = () => {
  // context for fetched data
  const { meanings, setMeanings, language, word, isLight, setIsLight } =
    useContext(dictionaryContext);

  const TogglerDarkMode = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, language]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: isLight ? '#1a1a1a' : '#dadada',
        color: isLight ? '#dadada' : '#1a1a1a',
      }}
    >
      <Container maxWidth="md" className="muiContainer">
        <div className="toggleDarkMode">
          <span>
            {isLight ? (
              <i class="bi bi-lightbulb-off-fill"></i>
            ) : (
              <i class="bi bi-lightbulb-fill"></i>
            )}
          </span>
          <TogglerDarkMode
            checked={isLight}
            onChange={() => setIsLight(!isLight)}
          />
          <span></span>
        </div>

        <Header />
        {meanings && <Definitions />}
      </Container>
    </div>
  );
};

export default App;
