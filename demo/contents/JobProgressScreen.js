import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableHighlight } from 'react-native';
import { List, ListItem, CheckBox,Icon } from 'react-native-elements'; // 0.16.0
// import { Icon } from 'react-native-elements';
// import "@expo/vector-icons"; // 5.2.0
const list = [
 {
    name: 'Job initiated',
    time: '10:10',
 },
 {
    name: 'CEOT approval',
    time: '11:10',
 },
 {
    name: 'Intruption time started',
    time: '12:10',
 },
 {
    name: 'Isolation and earthing done',
    time: '13:10',
 },
 {
    name: 'Issue Permit',
    time: '14:10'
 },
]

export default class JobProgressScreen extends Component {
  constructor( ) {
  super();
  this.state = {
    checked: true
  };
}
static navigationOptions = {
    headerStyle: { backgroundColor: 'black',paddingTop:22,height:75},
    headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' },
    headerLeft: <TouchableHighlight style={{height:50, width:60, }} >
        <View style={{marginTop:10,}}><Icon
            name="menu"
            size={30}
            color={'white'}
          /></View>
      </TouchableHighlight>,
    headerRight: <TouchableHighlight style={{backgroundColor:'#88DA6C',height:50, width:60, }}>
        <View style={{marginTop:10}}><Icon
            name="phone"
            size={30}
            color={'white'}
          /></View>
      </TouchableHighlight>,
    };
  render() {
    console.log('application number reach here');
    console.log(this.props.applicationNumber);
    return (
      <View>
      <ScrollView style={styles.scrollContainer}>
        <View >
          <List>
            {
              list.map((l, i) => (
                <View style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  paddingTop: 20
                }}>
                  <Text style={{width : 50, height: 80,}}  > {l.time} </Text>
                  <ListItem
                    style={{width : 250, height: 80,}}
                    hideChevron={true}
                    key={i}
                    title={l.name}
                  />
                  <CheckBox
                    style={{width : 30, height: 80,}}
                    checked={this.state.checked}
                  />
                </View>
              ))
            }
          </List>
        </View>
      </ScrollView>
      <View  style={styles.buttonStyle}>
        <TouchableHighlight style={{backgroundColor:'red',height:70,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontWeight:'500',fontSize:18,}}>Pause Job</Text>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({

   scrollContainer: {
    flex: 1,
  },
  buttonStyle:{
    flex:1,
    marginTop: 25
  }
});
