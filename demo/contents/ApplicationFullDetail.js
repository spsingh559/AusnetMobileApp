import React from 'react';
import { StyleSheet, Text, ScrollView,View,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
export default class ApplicationFullDetail extends React.Component{
  render(){

    return(
      <View>
        <Text> {this.props.data.applicationNumber}</Text>
        <Text> {this.props.data.location}</Text>
      </View>
    )
  }
}
