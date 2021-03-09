import Typography from '@material-ui/core/Typography'


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)'
  },
}));

import Typewriter from 'typewriter-effect';





export default function Banner(){
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Typography variant="h3">
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />
    </Typography>

    </div>

  )
}
