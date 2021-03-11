import React from 'react';

import TopBar from './Topbar.js'
import Footer from './Footer.js'


import Button from '@material-ui/core/Button'





export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div style={this.props.flex ? {display: 'box'}: {}}>
          <TopBar/>

          {this.props.children}

          {this.props.noFooter ? "" :<Footer sticky={this.props.short} bright={this.props.bright}/>}
        </div>


      </React.Fragment>
      )
  }
}
