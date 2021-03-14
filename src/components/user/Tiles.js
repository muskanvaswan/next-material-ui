import React from 'react';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tileImage: {
    maxHeight: '50%',
  },
  tileContainer: {
    maxHeight: '100%'
  }

}))

export default function Tiles(props){
  const tiles = [1, 2, 3, 4]
   const classes = useStyles();

  return (

    <React.Fragment>
      <GridList cellHeight={160} className="" cols={4} className={classes.tileContainer}>
        {tiles.map((tile) => (
          <GridListTile key={tile} cols={2} className={classes.tileContainer}>
            <img src="https://source.unsplash.com/random" alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    </React.Fragment>
  )
}
