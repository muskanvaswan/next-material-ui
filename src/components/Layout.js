import React from 'react';

import TopBar from './Topbar.js'


import Button from '@material-ui/core/Button'



export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBar/>
        {this.props.children}
      </React.Fragment>
      )
  }
}
