import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import Grow from '@material-ui/core/Grow'
const useStyles = makeStyles((theme) => ({

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Item(props){
  const classes = useStyles();

  return (
    <Grid item key={props.card} xs={12} sm={6} md={4}>
      <Grow
          in
          style={{ transformOrigin: '0 0 0' }}
          timeout={{enter: 3000}}
        >
      <Card className={classes.card}>


          <CardMedia
            className={classes.cardMedia}
            image={props.img}
            title="Image title"
          />

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography>
            {props.children}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" color="primary">
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton size="small" color="primary">
            <FavoriteBorderTwoToneIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Grow>
    </Grid>
  )
}
