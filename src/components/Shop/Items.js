import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

import FilterBar from './FilterBar'

import Item from './Item';

const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

}));


function valuetext(value) {
  return `${value}°C`;
}


export default function Items(props){

  const classes = useStyles();
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  return (
    <React.Fragment>

      <Container className={classes.cardGrid} maxWidth="md">
        <FilterBar />

        <Grid container spacing={4}>
          {items.map((item) => (
            <Item card={item} img="https://source.unsplash.com/random" heading="Heading">
            This is a media card. You can use this section to describe the content.
            </Item>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}
