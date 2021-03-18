import React from 'react';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tileImage: {
    height: '100%',
    width: '100%',
  },
  tileContainer: {
    height: 'max-content'
  }

}))

export default function Tiles(props){
  const classes = useStyles();

  return (

    <React.Fragment>
      <GridList cellHeight={100} className="" cols={2}>
        {props.imgs.map((tile) => (
          <Grid item key={tile} className={classes.tileContainer}>
            <img src="https://source.unsplash.com/random" alt={tile} className={classes.tileImage}/>
          </Grid>
        ))}
      </GridList>
    </React.Fragment>
  )
}
