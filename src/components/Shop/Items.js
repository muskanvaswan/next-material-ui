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


import Item from './Item';

const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  marginHeavy: {
    marginBottom: theme.spacing(2),
  },
  slider:{
    width: 200,
  },
  marginAlign: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
}));


function valuetext(value) {
  return `${value}°C`;
}


export default function Items(props){

  const classes = useStyles();
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [sortBy, setSortBy] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleCheck = (event) => {
    setChecked(!checked);
  };




  return (
    <React.Fragment>

      <Container className={classes.cardGrid} maxWidth="md">

      <Grid container spacing={4} className={classes.marginHeavy} justify="center">
        <Grid item>
          <TextField
          margin="normal"
          id="Search"
          label="Search"
          variant="filled"
          size="small"
          name="Search"
          autoComplete="Search"
          autoFocus/>
        </Grid>

        <Grid item className={classes.marginAlign}>
          <Typography id="discrete-slider" gutterBottom>
            Price Range
          </Typography>
          <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={100}
          marks
          min={300}
          max={3000}
          className={classes.slider}
          />
        </Grid>

        <Grid item>
          <FormControl variant="filled" margin="dense" className={classes.formControl} size="small">
            <InputLabel id="demo-simple-select-filled-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={sortBy}
              onChange={handleChange}
            >
              <MenuItem value={10}>Price Low to High</MenuItem>
              <MenuItem value={20}>Price High to Low</MenuItem>
              <MenuItem value={30}>Featured</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.marginAlign}>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleCheck} />}
          label="Secondary"
        />
        </Grid>
      </Grid>

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
