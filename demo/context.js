import React from 'react';
// import './UserAgent';
 window.navigator.userAgent = 'react-native';
// import restUrl from './restUrl';
// import sockets from 'socket.io-client/  socket.io';
import io from 'socket.io-client';
// var sockets=require('./socket.io-client/dist/socket.io');

export default class ContextComponent extends React.Component {
  getChildContext() {
    return {

      socket:io('http://192.168.0.102:3000', {jsonp: false})

    }
  }

  render(){
    return (this.props.children);
  }
}

ContextComponent.childContextTypes = {
  socket: React.PropTypes.object.isRequired
};
