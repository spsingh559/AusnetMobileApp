import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableHighlight,ActivityIndicator } from 'react-native';
import { List, ListItem, CheckBox,Icon } from 'react-native-elements'; // 0.16.0
import Axios from 'axios';
import restURL from '../restURL';
import JobProgressDataScreen from './JobProgressDataScreen';
// import { Icon } from 'react-native-elements';
// import "@expo/vector-icons"; // 5.2.0
// const list = [
//  {
//     name: 'Job initiated',
//     time: '10:10',
//  },
//  {
//     name: 'CEOT approval',
//     time: '11:10',
//  },
//  {
//     name: 'Intruption time started',
//     time: '12:10',
//  },
//  {
//     name: 'Isolation and earthing done',
//     time: '13:10',
//  },
//  {
//     name: 'Issue Permit',
//     time: '14:10'
//  },
// ]

export default class JobProgressScreen extends Component {
  constructor( ) {
  super();
  this.state = {
    jobProgressData:[],
    animating: true
  };
}
closeActivityIndicator = () =>setTimeout(() =>this.setState({
      animating: false }), 3000);

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

    componentDidMount=()=>{
      Axios.get(restURL+':8080/api/v1/Job/')
          .then(function (data,i) {
            // onsole.log(data.data.message);
            data.data.message.forEach((data)=>{
              if(data.applicationID==this.props.applicationID){
                console.log(data);
                this.setState({jobProgressData:data});
              }
            })
          }.bind(this))
          .catch(function (error) {
            console.log(error+"error in jobDetail for status");
          });
          this.closeActivityIndicator();
    }
    ProgressSubmitData=(obj)=>{
      let currentData=this.state.jobProgressData;
     let stepObj=[];
      currentData.JobProgress.forEach((data)=>{
        if(data.stepID!=obj.stepID){
          stepObj.push(data);
        }
      })
      console.log('remaining jobProgressData is');
      // console.log(arr);
      let curretStepObj={
        stepID:obj.stepID,
        name:obj.name,
        status:obj.status,
        time:obj.time
      };
      // let jobObj=[  stepObj,
      //     curretStepObj
      //   ];
      // stepObj.forEach((data,i)=>{
      //   if(i>curretStepObj.stepID){
      //     let newConData=[curretStepObj].concat(stepObj);
      //   }
      // })
      let newConData=stepObj.splice(curretStepObj.stepID-1,0,curretStepObj);
      newConData=null;
      // newConData[obj.stepID-1]=newConData[9];
      console.log(newConData);
      let newObj={
        requestType:obj.requestType,
        applicationID:obj.applicationID,
        JobProgress:stepObj
      }


      Axios({
    method: 'patch',
    url: restURL+':8080/api/v1/Job/',
    data: newObj
    })
    .then(function (data) {
      currentData.JobProgress=newObj.JobProgress;
      this.setState({jobProgressData:currentData});
    console.log('response from server for jobProgressData');
    // console.log(data);
    // console.log(data.data.message);
    }.bind(this))
    .catch(function (error) {
    console.log(error+"error in jobDetail for status");
    });
      console.log('final obj data ');
      console.log(newObj);

    }
    static get contextTypes() {
  	      return {
  	        socket:React.PropTypes.object.isRequired
  	      }
  	    }

    submitJob=()=>{
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();
      let notificationString = this.props.applicationID +','+ 'Job Completed'+',' + time;
      this.context.socket.emit('InitiateJobNotification', notificationString);
      this.context.socket.emit('JobCompletionMsg',this.props.applicationID);
      // let currentData=this.state.jobProgressData;
      // currentData.status='Completed';
      let obj={
        requestType:'JobCompletion',
        applicationID:this.props.applicationID,
        status:'Completed'
      };

      Axios({
    method: 'patch',
    url: restURL+':8080/api/v1/Job/',
    data: obj
    })
    .then(function (data) {
      alert('Congratulation!! Job Has been completed');
    //   currentData.JobProgress=newObj.JobProgress;
    //   this.setState({jobProgressData:currentData});
    // console.log('response from server for jobProgressData');
    // console.log(data);
    // console.log(data.data.message);
    }.bind(this))
    .catch(function (error) {
    console.log(error+"error in jobDetail for status");
    });
    }
  render() {
    console.log('application number reach here');
    console.log(this.props.applicationID);
    // this.props.data.forEach({data}=>{
    //   if(data.stepID==2){
    //     data={}
    //   }
    // })
    console.log(this.state.jobProgressData);
   if(this.state.animating==true){
     return(
       <View style = {styles.container}>
           <ActivityIndicator
              animating = {this.state.animating}
              color = '#bc2b78'
              size = "large"
              style = {styles.activityIndicator}/>
        </View>
     )
   }else{


    return (
      <View>

      <ScrollView>
        {this.state.jobProgressData==undefined?null:  <JobProgressDataScreen data={this.state.jobProgressData}
        ProgressSubmitData={this.ProgressSubmitData}/>
      }


      <View  style={styles.buttonStyle}>
        <TouchableHighlight style={{backgroundColor:'red',height:70,alignItems:'center',justifyContent:'center'}}
          onPress={this.submitJob}>
          <Text style={{color:'white',fontWeight:'500',fontSize:18,}}>Pause Job</Text>
        </TouchableHighlight>
      </View>
        </ScrollView>
    </View>

  );
}
  }
}
const styles = StyleSheet.create({

   scrollContainer: {
    flex: 1,
  },
  buttonStyle:{
    flex:1,
    marginTop: 25
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
});
