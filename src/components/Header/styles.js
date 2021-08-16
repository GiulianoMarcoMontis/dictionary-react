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

  inputText: {
    '& input': { fontSize: '2rem' },
    '& label': { fontSize: '1.5rem' },
    marginBottom: '1rem',
  },

  inputLanguage: {
    '& div': { fontSize: '2rem' },
    '& label': { fontSize: '1.5rem' },
    marginBottom: '1rem',
  },
}));
