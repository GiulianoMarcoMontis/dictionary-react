import axios from 'axios';
import { useEffect, useContext } from 'react';

// components

import Header from '../Header/Header.js';
import Definitions from '../Definitions/Definitions.js';

// context

import dictionaryContext from '../../context/dictionary/context.js';

// material-ui components

import { Container, CssBaseline, Fade } from '@material-ui/core';

// styles

import useStyles from './styles.js';

const App = () => {
  // context for fetched data

  const { meanings, setMeanings, language, word, isLight } =
    useContext(dictionaryContext);

  // classes

  const classes = useStyles();

  // fetching api

  const dictionaryApi = async () => {
    try {
      //https://cors-anywhere.herokuapp.com/
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (word !== '') dictionaryApi();
  }, [word, language]);

  return (
    <>
      <CssBaseline />
      <Container
        className={`${classes.root} ${classes.App}`}
        style={{
          backgroundColor: isLight ? '#333' : '#dadada',
          color: isLight ? '#dadada' : '#333',
        }}
      >
        <Fade in>
          <Container maxWidth="md" className={classes.mainContainer}>
            <Header />
            {meanings && <Definitions />}
          </Container>
        </Fade>
      </Container>
    </>
  );
};

export default App;
