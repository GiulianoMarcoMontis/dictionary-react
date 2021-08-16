import { useContext } from 'react';

// context
import dictionaryContext from '../../context/dictionary/context.js';

// components
import DefinitionCard from '../DefinitionCard/DefinitionCard.js';

// material-ui components
import { Container, Typography } from '@material-ui/core';

// styles
import useStyles from './styles.js';

const Definitions = () => {
  // context for fetched data

  const { meanings, language, word } = useContext(dictionaryContext);

  // classes

  const classes = useStyles();

  return (
    <Container className={classes.definitionsContainer}>
      {/* audio */}
      {meanings[0] && word && language === 'en' && (
        <audio
          className={classes.audio}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support audio elements
        </audio>
      )}

      {word === '' ? (
        <Typography variant="h2" align="center">
          Select a language & type a word to start
        </Typography>
      ) : (
        meanings.map((meaning, i) => (
          <DefinitionCard meaning={meaning} key={i} />
        ))
      )}
    </Container>
  );
};

export default Definitions;

/*{word === '' ? (
        <Typography variant="h2" align="center">
          Select a language & type a word to start
        </Typography>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((definition, i, meaning) => (
              <DefinitionCard definition={definition} key={i} />
            ))
          )
        )
      )} */
