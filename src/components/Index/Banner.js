import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  title:{
    fontWeight: 'bold',
  },
  gradButton: {
    background: `
      linear-gradient(
        170deg,
        ${theme.palette.primary.main},
        ${theme.palette.secondary.main}
      )
    `,
    marginTop: '20px',


    // Unrelated styles:
    color: 'white',
    borderRadius: 12,
    transition: `${theme.palette.primary.main} 1000ms linear, ${theme.palette.secondary.main}
      1000ms linear, ${theme.palette.background.paper} 1000ms linear`
  }
}));

import Typewriter from 'typewriter-effect';





export default function Banner(){
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Typography variant="h2" color="primary" align="center" className={classes.title}>
      <Typewriter
        options={{
          strings: ['Hello, We are BrandName', 'Welcome to our Website'],
          autoStart: true,
          loop: true,
        }}
      />
    </Typography>
    <Typography variant="p" align="center" color="secondary" >If you're looking for fresh Fashion, consider your search over.</Typography>
    <br/>
    <Button className={classes.gradButton} component="div" align="center" fullWidth>
      Hello World
    </Button>

    </div>

  )
}
