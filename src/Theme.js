import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

let colorOne = red[900]
let colorTwo = grey[900]
let bg = 'rgba(255, 255, 255, 1)'

const theme = createMuiTheme({
  palette: {
    background: {
      paper: colorOne,
      default: bg,
    },
    type: 'dark',
    text:{
      primary: colorTwo,
    },

    primary: {
      main: colorOne,
      contrastText: 'white',
    },
    secondary: {
      main: colorTwo,
    },
  },
});

export default theme;
