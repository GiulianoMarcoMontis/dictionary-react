import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    minHeight: '40vh',
  },

  toggleDarkMode: {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  inputFields: {
    margin: '2rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  title: {
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
      color: 'rebeccapurple',
    },
  },

  inputText_Light: {
    '& input': { fontSize: '2rem' },
    '& label': { fontSize: '1.5rem', color: 'goldenrod' },
    marginBottom: '1rem',
  },
  inputText_Dark: {
    '& input': { fontSize: '2rem' },
    '& label': { fontSize: '1.5rem', color: 'rebeccapurple' },
    marginBottom: '1rem',
  },
  inputLanguage_Light: {
    '& div': { fontSize: '2rem' },
    '& label': { fontSize: '1.5rem', color: 'goldenrod' },
    marginBottom: '1rem',
  },
  inputLanguage_Dark: {
    '& div': { fontSize: '2rem' },
    '& label': { fontSize: '1.5rem', color: 'rebeccapurple' },
    marginBottom: '1rem',
  },
}));
