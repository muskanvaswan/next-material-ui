import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Tiles from './Tiles'

const useStyles = makeStyles((theme) => ({
  gridButtons: {
    marginTop: theme.spacing(3),
  },
}));

export default function Summary(){
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={8} lg={9}>

          <Typography variant="h4">Oeder Summary</Typography>
          <Typography variant="p"><br/><b>Delivery Address:</b> <br/> Line 1 XYZ,  City, 000000 <br/> </Typography>
          <Typography variant="p"><br/>This order is expected to be delivered in 3-5 Business days</Typography>

          <Grid container spacing={2} className={classes.gridButtons}>
            <Grid item>
              <Button href="#"  size="small" color="primary" size="large" variant="contained" >
                CheckOut
              </Button>
            </Grid>

            <Grid item>
              <Button href="#"  size="small" color="primary" size="large" variant="outlined" >
                Save For Later
              </Button>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Tiles />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
