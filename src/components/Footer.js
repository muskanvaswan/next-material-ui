import React from 'react';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles';



function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    width: '100%',

    left: 0,
    padding: theme.spacing(2),
    color: theme.palette.secondary.main

  },
  sticky:{
    position:'fixed',
    bottom: 0,

  },
  bright:{
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main

  }
}));

export default function Footer(props){
  const classes = useStyles();

    return (
      <React.Fragment>
      {/* Footer */}
      <footer className={clsx(classes.footer,  (classes.sticky && props.sticky  ? classes.sticky : ""), (classes.bright && props.bright  ? classes.bright : ""))}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
    )
  }
