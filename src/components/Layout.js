import React from 'react';

import TopBar from './Topbar.js'
import Footer from './Footer.js'


import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../Theme'



export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
        <TopBar/>
        {this.props.children}
        {this.props.noFooter ? "" :<Footer sticky={this.props.short} bright={this.props.bright}/>}

      </ThemeProvider>
      </React.Fragment>
      )
  }
}
