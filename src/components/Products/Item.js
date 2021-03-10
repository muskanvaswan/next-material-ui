import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight - 150,
    width: window.innerWidth,
    left: 0,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(6)
  },
  marginHeavy: {
    marginTop: theme.spacing(6),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h1">Heading</Typography>
          <Typography variant="h5">SubHeading</Typography>
          <Typography variant="p" margin="normal">
            This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.
            <br/><br/>
          </Typography>
          <Typography variant="h4" color="secondary">Price: 1324.09</Typography>
          <Grid container spacing={2} className={classes.marginHeavy}>
            <Grid item>
              <Button href="#"  size="small" color="primary" size="large" variant="contained" startIcon={<ShoppingCartIcon />}>
                Add to Cart
              </Button>
            </Grid>

            <Grid item>
              <Button href="#"  size="small" color="primary" size="large" variant="outlined" startIcon={<FavoriteIcon />}>
                Add to Wishlist
              </Button>
            </Grid>
          </Grid>

        </div>
      </Grid>
    </Grid>
  );
}
