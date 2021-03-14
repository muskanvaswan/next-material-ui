import React from 'react';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

export default function Tiles(props){
  const tiles = [1, 2, 3, 4]

  return (

    <React.Fragment>
      <GridList cellHeight={160} className="" cols={4}>
        {tiles.map((tile) => (
          <GridListTile key={tile} cols={2}>
            <img src="https://source.unsplash.com/random" alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    </React.Fragment>
  )
}
