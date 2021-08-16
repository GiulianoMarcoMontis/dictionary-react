import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  definitionsContainer: {
    maxHeight: '55vh',
    //display: 'flex',
    //flexDirection: 'column',

    //justifyContent: 'start',
    overflowY: 'scroll',

    //'-ms-overflow-style': 'none',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  audio: {
    width: '100%',
    marginBottom: '1rem',
  },
}));

/* 
.Definitions {
      overflow-y: scroll;
      -ms-overflow-style: none; 
      scrollbar-width: none; 

    }
    
    .Definitions::-webkit-scrollbar {
      display: none;
    }

    

    
  } */
