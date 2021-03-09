import Typography from '@material-ui/core/Typography'
import { motion } from "framer-motion";

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));



export default function Banner(){
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <motion.h1
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      >
      <Typography variant="h1" align="center" color="primary">
        This is a project
      </Typography>
      </motion.h1>
    </div>

  )
}
