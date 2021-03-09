
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';




let colorOne = '#66FCF1'
let colorTwo = '#fff'
let colorThree = '#1F2833'
let colorFour = '#45A29E'
let bg = '#0B0C10'
let paper = 'rgba(#1c2136, 1)'

let theme = createMuiTheme({
  palette: {
    background: {
      paper: colorThree,
      default: bg,
    },
    type: 'dark',
    text:{
      primary: colorTwo,

    },
    typography: {
      h1: colorOne,
      subtitle1: colorThree,
    },


    primary: {
      main: colorOne,
      contrastText: bg,
    },
    secondary: {
      main: colorFour,
    },

  },
});
theme = responsiveFontSizes(theme);

export default theme;
