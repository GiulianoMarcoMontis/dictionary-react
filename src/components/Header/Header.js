import { useContext } from 'react';

// context
import dictionaryContext from '../../context/dictionary/context.js';

// material-ui components
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { MenuItem, TextField } from '@material-ui/core';

// nation categories for select text input field
import languages from './languages.js';

const Header = () => {
  // context for fetched data
  const { language, setLanguage, word, setWord, isLight } =
    useContext(dictionaryContext);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: isLight ? '#dadada' : '#696969',
      },
      type: isLight ? 'dark' : 'light',
    },
  });

  return (
    <section className="headerContainer">
      <div className="title">
        <h1>{`dictionary( {`}</h1>
        {word ? (
          <span className="word">
            {`${word}`}
            <br />
          </span>
        ) : (
          <br />
        )}
        <h1>{` } )`}</h1>
      </div>
      <div className="inputFields">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="searchTerm"
            id="standard-basic"
            label="Type a word"
            value={word}
            onChange={(evt) => setWord(evt.target.value)}
          />
          <TextField
            className="selectLanguage"
            id="standard-select-currency"
            select
            label="Languages"
            value={language}
            onChange={(evt) => {
              setLanguage(evt.target.value);
              setWord('');
            }}
          >
            {/* map through the nationCategories */}
            {languages.map(({ value, label }) => (
              <MenuItem key={label} value={label}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default Header;
