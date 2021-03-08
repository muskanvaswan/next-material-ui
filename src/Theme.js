import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    background: {
      paper: red[900],
      default: grey[800]
    },
    text:{
      primary: grey[50],
    },

    primary: {
      main: red[500],
    },
    secondary: {
      main: grey[900],
    },
  },
});

export default theme;
