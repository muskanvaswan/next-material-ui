
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
}));

import React from 'react'
import Terminal from 'react-animated-term'

const termLines = [
  {
    'text': 'ls',
    'cmd': true
  },
  {
    'text': 'index.js    package.json    node_modules',
    'cmd': false
  },
  {
    'text': 'This is Text ',
    'cmd': true
  }
]

class TermComp extends React.Component {
  render() {
    return (
      <Terminal
        className="primary"
        lines={termLines}
        interval={80}
      />
    )
  }
}



export default function Banner(){
  const classes = useStyles();

  return (
    <div className={classes.center}>

      <TermComp>This is Text</TermComp>

    </div>

  )
}
