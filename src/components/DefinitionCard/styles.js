import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1rem',
    marginBottom: '1rem',
    width: '100%',
  },

  singleDefinition__Headers_Light: {
    color: 'rebeccapurple',
  },
  singleDefinition__Headers_Dark: {
    color: 'goldenrod',
  },
  singleDefinition__PartOfSpeech_Light: {
    color: 'rebeccapurple',
    fontStyle: 'italic',
  },
  singleDefinition__PartOfSpeech_Dark: {
    color: 'goldenrod',
    fontStyle: 'italic',
  },
  singleDefinition__Origin: {
    fontSize: '1.5rem',
  },

  singleDefinition__break: {
    margin: '1rem 0',
  },
}));
