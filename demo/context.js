import React from 'react';
 window.navigator.userAgent = 'react-native';
import io from 'socket.io-client';

export default class ContextComponent extends React.Component {
  getChildContext() {
    return {

      socket:io('http://192.168.43.208:3000', {jsonp: false})

    }
  }

  render(){
    return (this.props.children);
  }
}

ContextComponent.childContextTypes = {
  socket: React.PropTypes.object.isRequired
};
