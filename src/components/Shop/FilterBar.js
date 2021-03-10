import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import Toolbar from '@material-ui/core/Toolbar';
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




class Filter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      sortBy: '',
      search: '',
      price: 1000,
    }
  }
  handleChange = (event) => {
    this.setState(state => {
      return {[event.target.name]: event.target.value}
    });
  }
  handleSlide = (event, value) => {
    this.setState({price: value})
  }
  handleCheck = (event) => {
    this.setState(state => {
      return {checked: !state.checked}
    });
  };

  render(){

    return (
        <Grid container spacing={4} className={this.props.classes.marginHeavy} justify="center">
          <Grid item>
            <TextField
            margin="normal"
            id="Search"
            label="Search"
            variant="filled"
            size="small"
            name="search"
            autoComplete="Search"
            value={this.state.search}
            onChange={this.handleChange}
            autoFocus/>
          </Grid>

          <Grid item className={this.props.classes.marginAlign}>
            <Typography id="discrete-slider" gutterBottom>
              Price Range
            </Typography>
            <Slider
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={100}
            name="price"
            value={this.state.price}
            min={300}
            max={3000}
            onChange={this.handleSlide}
            className={this.props.classes.slider}
            />
          </Grid>

          <Grid item>
            <FormControl variant="filled" margin="dense" className={this.props.classes.formControl} size="small">
              <InputLabel id="demo-simple-select-filled-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.sortBy}
                onChange={this.handleChange}
                name="sortBy"
              >
                <MenuItem value={10}>Price Low to High</MenuItem>
                <MenuItem value={20}>Price High to Low</MenuItem>
                <MenuItem value={30}>Featured</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={this.props.classes.marginAlign}>
          <FormControlLabel
            control={<Checkbox checked={this.state.checked} onChange={this.handleCheck} />}
            label="Secondary"
          />
          </Grid>
        </Grid>
    )
  }

}

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

export default function FilterBar(props){
  const classes = useStyles();
  return (
    <Filter classes={classes} />
  )
}
