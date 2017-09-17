import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { users } from './data';
import ApplicationView from './ApplicationView';
import Axios from 'axios';

export default class HomeScreen extends React.Component{
state={
  jobData:[]
}
static get contextTypes() {
    return {
      socket:React.PropTypes.object.isRequired
    }
  }

componentDidMount=()=>{
  // var myRequest = new Request('http://localhost:8080/api/v1/Job', {method: 'GET'});
  // fetch(myRequest)
  //   .then(function(response) {
  //       if(response.status == 200) return response.json();
  //       else throw new Error('Something went wrong on api server!');
  //   })
  //   .then(function(response) {
  //       console.debug(response);
  //       // ...
  //   })
  //   .catch(function(error) {
  //       console.error(error);
  //   });
  // fetch('http://localhost:8080/api/v1/Job')
  // .then(function(response) {
  //   console.log(response);
  //   alert('dnoe');
  //   // return response.json();
  // })
  Axios.get('http://192.168.0.102:3000/api/v1/Job')
  	  .then(function (data) {
  	    console.log('jobDetail connected to server');
  	    // console.log(data);
  	    // console.log(data.data.message);
  	    this.setState({jobData:data.data.message});
  	  }.bind(this))
  	  .catch(function (error) {
  	    console.log(error+"error in jobDetail");
  	  });

      this.context.socket.on('approvalConfirmation', (msg) => {
        // this.setState({chatmessage:msg.data});
          // console.log('Queued');
          // this.setState({openDialogue: msg.status,dialogueMessage:msg.message});
          alert(msg.message);
        });
}
  render(){
    return(
    <View>
    <ApplicationView data={this.state.jobData} />
    </View>
  )
  }
}
// class HomeScreen extends React.Component {
//
//     state = {
//     activeSection: false,
//     collapsed: true,
//   };
//
//   _toggleExpanded = () => {
//     this.setState({ collapsed: !this.state.collapsed });
//   }
//
//   _setSection(section) {
//     this.setState({ activeSection: section });
//   }
//    _handleInitiateJob = () => {
//     alert('hello');
//     }
//
//   _renderHeader(section, i, isActive) {
//     return (
//       <Animatable.View duration={200} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
//         <Text style={styles.headerText}>Application Number</Text>
//         <Text style={styles.contentText}>{section.applicationNumber}</Text>
//       </Animatable.View>
//     );
//   }
//
//   _renderContent(section, i, isActive) {
//     //  const { navigate } = this.props.navigation;
//     return (
//       <Animatable.View duration={200} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
//         <Text style={styles.headerContentText}>Schedule </Text>
//         <Text style={styles.contentText}>Start:{section.Schedule.start}</Text>
//         <Text style={styles.contentText}>End:{section.Schedule.End}</Text>
//         <Text style={styles.headerContentText}>Location</Text>
//         <Text style={styles.contentText}>{section.location}</Text>
//         {/* <TouchableHighlight underlayColor="white"> */}
//           <View style={styles.initiateButton}>
//             {/* <Text style={styles.initiateText} onPress={this._handleInitiateJob}>Initiate Job</Text> */}
//           </View>
//         {/* </TouchableHighlight> */}
//       </Animatable.View>
//     );
//   }
//
//   static navigationOptions = {
//     title: 'Upcoming Jobs',
//     headerStyle: { backgroundColor: 'black' ,marginTop: 20},
//     headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' },
//     headerRight:
//     <TouchableHighlight style={{backgroundColor:'#5CFC7C',height:50, width:60, }}>
//         <Text style={{textAlign:'center',marginTop:15}}>Call</Text>
//     </TouchableHighlight>,
//     };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <ScrollView>
//         <View  style={{borderBottomColor: 'grey',borderBottomWidth: 0.2,}}>
//             <Text style={styles.textStyle}>20 Jul 2017</Text>
//         </View>
//         <View style={styles.container}>
//           <List><ApplicationDetails data={users} >
//             {users.map((user) => (
//           <ListItem
//             key={user.id}
//             title="Application Number"
//             subtitle={user.applicationNumber}
//             onPress={() => this.toggle()}
//           />
//         ))}
//       </List>        </View>
//       </ScrollView>
//     );
//   }
// }
//
// export default HomeScreen;
// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize:30,
//     color:'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf:'center',
//     padding:15,
//     borderBottomColor: 'grey',
//     borderBottomWidth: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     backgroundColor: '#D3D3D3',
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 10,
//     marginTop: 1,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   headerContentText: {
//     fontSize: 16,
//     fontWeight: '500',
//     paddingTop:10,
//   },
//   contentText:{
//     fontSize: 18,
//   },
//   content: {
//     paddingLeft: 10,
//     backgroundColor: '#fff',
//   },
//   active: {
//     backgroundColor: 'rgba(255,255,255,1)',
//   },
//   inactive: {
//     backgroundColor: '#D3D3D3',
//   },
//   initiateButton: {
//     backgroundColor: "#08A4D6",
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 210,
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     marginLeft:60,
//     marginBottom:30
//   },
//   initiateText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight:'500',
// },
//
// });