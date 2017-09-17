import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
import { List, ListItem } from 'react-native-elements';
// import SocketIOClient from 'socket.io-client/dist/socket.io';
const styles = StyleSheet.create({
  textStyle: {
    fontSize:30,
    color:'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    padding:15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#D3D3D3',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginTop: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerContentText: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop:10,
  },
  contentText:{
    fontSize: 18,
  },
  content: {
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: '#D3D3D3',
  },
  initiateButton: {
    backgroundColor: "#08A4D6",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginLeft:60,
    marginBottom:30
  },
  initiateText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'500',
},

});
import {Actions} from "react-native-router-flux";
// import App from '../App';
export default class EachApplicationData extends React.Component{
  // static navigationOptions = {
  //   title: '20 Jul 2017',
  //   headerStyle: { backgroundColor: 'black' ,marginTop: 20},
  //   headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' }
  // };

  static get contextTypes() {
        return {
          socket:React.PropTypes.object.isRequired
        }
      }
      click=()=>{

        // this.socket = SocketIOClient('http://localhost:3000');
         this.context.socket.emit('notification','HI');
           alert('clicked');
      }
  render(){
    //  const {navigate}  = this.props.navigation;

    return(

      <ScrollView>

             <View style={styles.container}>
               <List>

               <ListItem
                 title="Application Number"
                 subtitle={this.props.ApplicantNumber}
                 onPress={this.click }
               />
           </List>
          </View>

           </ScrollView>
)
  }
}
