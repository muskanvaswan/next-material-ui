import React from 'react';

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Tiles from './Tiles'

export default function Summary(){
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={8} lg={9}>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Tiles />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
