import { useContext } from 'react';

// context
import dictionaryContext from '../../context/dictionary/context.js';

// material-ui components

import { Card, Typography, CardContent } from '@material-ui/core';

// styles
import useStyles from './styles.js';

const DefinitionCard = ({ meaning }) => {
  // context for fetched data

  const { isLight } = useContext(dictionaryContext);
  console.log(meaning);
  // classes

  const classes = useStyles();

  return (
    <>
      <Card
        className={classes.root}
        variant="outlined"
        style={{
          background: isLight
            ? 'linear-gradient(145deg, #c4c4c4, #e9e9e9)'
            : 'linear-gradient(145deg, #2e2e2e, #373737)',
          color: isLight ? '#333' : '#dadada',
          boxShadow: isLight
            ? '5px 5px 10px #1c1c1c, -5px -5px 10px #4a4a4a'
            : '5px 5px 10px #767676, -5px -5px 10px #ffffff',
        }}
      >
        <CardContent className={classes.singleDefinition__container}>
          <Typography
            variant="h5"
            align="right"
            className={
              isLight
                ? classes.singleDefinition__Headers_Light
                : classes.singleDefinition__Headers_Dark
            }
          >
            return:{' '}
          </Typography>
          <Typography
            variant="h1"
            align="right"
            className={classes.singleDefinition__Word}
            gutterBottom
          >
            {meaning.word}{' '}
            <Typography variant="caption">{meaning.phonetic}</Typography>
          </Typography>
          {meaning.origin && (
            <>
              <Typography
                variant="h5"
                className={
                  isLight
                    ? classes.singleDefinition__Headers_Light
                    : classes.singleDefinition__Headers_Dark
                }
                gutterBottom
              >
                Origin:{' '}
              </Typography>
              <Typography
                variant="body1"
                className={classes.singleDefinition__Origin}
                gutterBottom
              >
                {meaning.origin}
              </Typography>
              <hr className={classes.singleDefinition__break} />
            </>
          )}

          <Typography
            variant="h2"
            className={
              isLight
                ? classes.singleDefinition__Meanings_Light
                : classes.singleDefinition__Meanings_Dark
            }
            gutterBottom
          >
            Meanings:{' '}
          </Typography>

          {meaning.meanings.map((meaning, i) => (
            <>
              <Typography
                variant="h6"
                className={
                  isLight
                    ? classes.singleDefinition__PartOfSpeech_Light
                    : classes.singleDefinition__PartOfSpeech_Dark
                }
                key={i}
              >
                {meaning.partOfSpeech}
              </Typography>

              {meaning.definitions.map((definition, i) => (
                <Typography
                  variant="h5"
                  className={classes.singleDefinition__Definition}
                  gutterBottom
                  key={i}
                >
                  {`- ${definition.definition}`}
                </Typography>
              ))}
            </>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default DefinitionCard;
