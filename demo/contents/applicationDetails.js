import React from 'react';
import { StyleSheet, Text, ScrollView,View,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { users } from './data';
import ApplicationFullDetail from './ApplicationFullDetail';
class ApplicationDetails extends React.Component {

  state={
    appData:[]
  }
  static navigationOptions = {
    title: '20 Jul 2017',
    headerStyle: { backgroundColor: 'black' ,marginTop: 20},
    headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' },
    headerRight: <Button title='call' />,
  };

  componentDidMount=()=>{
    users.forEach((data)=>{
      if(data.applicationNumber==this.props.applicationNumber){
        this.setState({appData:data});
      }
    })
  }

  render() {
    // alert(this.props.applicationNumber);
    // const { navigate } = this.props.navigation;
    //  const { applicationNumber, location, Schedule } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Application Details</Text>
        <ApplicationFullDetail data={this.state.appData} />
      </View>
    );
  }
}

export default ApplicationDetails;

const styles = StyleSheet.create({
  textStyle: {
    fontSize:30,
    color:'black',
    // fontFamily:'Sans-Serif',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',

  },
  headingStyle: {
    fontSize: 25,
    color:'black',
    // fontFamily:'Sans-Serif',
    marginTop:1
  },
  contentStyle: {
    fontSize:15,
    color:'blue',
    // fontFamily:'Sans-Serif',
    marginTop:7,
    marginBottom: 10
  },

});
