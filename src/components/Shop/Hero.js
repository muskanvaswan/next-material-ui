import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Hero(){
  const classes = useStyles();
  return (
    <div className={classes.heroContent} id="hero">
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" >
          Catalogue
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button href="#"  size="small" color="primary" size="large" variant="contained" startIcon={<ShoppingCartIcon />}>
                Proceed To Cart
              </Button>
            </Grid>

            <Grid item>
              <Button href="#"  size="small" color="primary" size="large" variant="outlined" startIcon={<FavoriteIcon />}>
                View Wishlist
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
