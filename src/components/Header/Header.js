import { useContext } from 'react';

// context
import dictionaryContext from '../../context/dictionary/context.js';

// material-ui components
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  MenuItem,
  TextField,
  Container,
  Typography,
  Grid,
  Box,
  Switch,
} from '@material-ui/core';

// material-ui icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

// styles

// styles
import useStyles from './styles.js';

import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

// nation categories for select text input field
import languages from './languages.js';

const Header = () => {
  // context for fetched data

  const { language, setLanguage, word, setWord, isLight, setIsLight } =
    useContext(dictionaryContext);

  // classes

  const classes = useStyles();

  // dark mode toggler

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

  // dark mode theme

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: isLight ? '#dadada' : '#696969',
      },
      type: isLight ? 'dark' : 'light',
    },
  });

  return (
    <Container className={classes.headerContainer}>
      <Box className={classes.toggleDarkMode}>
        {isLight ? (
          <VisibilityIcon fontSize="large" />
        ) : (
          <VisibilityOffIcon fontSize="large" />
        )}

        <TogglerDarkMode
          checked={isLight}
          onChange={() => setIsLight(!isLight)}
        />
      </Box>
      <Typography variant="h1" align="center" className={classes.title}>
        dictionary()
      </Typography>

      {/* <div className="inputFields"> */}
      <ThemeProvider theme={darkTheme}>
        <Grid
          container
          justifyContent="space-between"
          className={classes.inputFields}
        >
          <Grid item xs={12} sm={7} md={7}>
            <TextField
              id="standard-basic"
              label="Search"
              fullWidth
              className={classes.inputText}
              value={word}
              onChange={(evt) => setWord(evt.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="standard-select-currency"
              select
              label="Languages"
              fullWidth
              className={classes.inputLanguage}
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
          </Grid>
        </Grid>
      </ThemeProvider>
      {/* </div> */}
    </Container>
  );
};

export default Header;
