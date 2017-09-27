import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput,TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, } from 'react-native-elements';
// import Actions from
import {Actions} from "react-native-router-flux";
import restURL from '../restURL';
import Axios from 'axios';
export default class PermitScreen extends Component {
  state={
    permitNo:'',
    jobProgressData:[]
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

componentDidMount=()=>{
  Axios.get(restURL+':8080/api/v1/Job/')
      .then(function (data,i) {
        // onsole.log(data.data.message);
        data.data.message.forEach((data)=>{
          if(data.applicationID==this.props.applicationID){
            console.log(data);
            console.log('response to permit screen');
            this.setState({jobProgressData:data});
          }
        })
      }.bind(this))
      .catch(function (error) {
        console.log(error+"error in jobDetail for status");
      });
}
  submitPermit=()=>{
    alert('data submitted');
    var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes();

    let stepObj=[];
     this.state.jobProgressData.JobProgress.forEach((data)=>{
       if(data.stepID!=5){
         stepObj.push(data);
       }
     });

//      console.log('remaining jobProgressData is');
//      // console.log(arr);
     let curretStepObj={
       stepID:5,
       name:'Permit Issue',
       status:true,
       time:time
     };
//      // let jobObj=[  stepObj,
//      //     curretStepObj
//      //   ];
//      // stepObj.forEach((data,i)=>{
//      //   if(i>curretStepObj.stepID){
//      //     let newConData=[curretStepObj].concat(stepObj);
//      //   }
//      // })
     let newConData=stepObj.splice(curretStepObj.stepID-1,0,curretStepObj);
     newConData=null;
//      // newConData[obj.stepID-1]=newConData[9];
//      console.log(newConData);
     let newObj={
       requestType:'PermitIssued',
       applicationID:this.props.applicationID,
       permitNumber:this.state.permitNo,
       JobProgress:stepObj
     }
     console.log('new object in permit screen');
     console.log(newObj);
//
//
     Axios({
   method: 'patch',
   url: restURL+':8080/api/v1/Job/',
   data: newObj
   })
   .then(function (data) {
    //  currentData.JobProgress=newObj.JobProgress;
    //  this.setState({jobProgressData:currentData});
   console.log('response from server for jobProgressData');
   // console.log(data);
   // console.log(data.data.message);
   Actions.pop();
   }.bind(this))
   .catch(function (error) {
   console.log(error+"error in jobDetail for status");
   });
//     // let permitNo=this.state.permitNo;
// // let obj={
// //   requestType:'Issue Permit',
// //   permitNumber:permitNo,
// //   JobProgress:[
// //     {  stepID:1, name:'Job Initiated',   time:time,      status:true  	 },
// //     {   stepID:2,   name:'CEOT Approval',      time:'N/A',      status:false    	 },
// //     {   stepID:3, name:'Interuption Time Started',      time:'N/A',      status:false    	 },
// //     { stepID:4,     name:'Isolation and Earthing Done',     time:'N/A',      status:false 	 },
// //     {   stepID:5,   name:'Issue Permit',      time:'N/A',      status:false   	 },
// //     {     stepID:6, name:'Work Started',     time:'N/A',      status:false  	 },
// //     {  stepID:7,  name:'Work Completed',    time:'N/A',      status:false    	 },
// //     { stepID:8,     name:'Cancel Permit',     time:'N/A',      status:false  	 },
// //     { stepID:9,     name:'Isolation and Earthing Removed',     time:'N/A',      status:false  	 },
// //     { stepID:10,  name:'Interruption Time Ended',     time:'N/A',      status:false }]
// // }
//     // Actions.pop(this.state.permitNo);
  }
  render() {
    return (
      <KeyboardAvoidingView
      style={styles.containerStyle}
      behavior="padding"
      >
      <ScrollView>
        <View style={styles.imageStyle}>
          <Image
            source={{ uri: 'http://www.teach-ict.com/gcse_new/software/word_processor/miniweb/images/invoice1.jpg' }}
            style={{ height: 350, width: 340, marginLeft: 10, paddingTop:0, marginRight: 10 }}>
            <View style={{paddingTop: 0, marginLeft:5}}>
             <TouchableHighlight style={{backgroundColor:'grey',height:50,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
               <View style={{marginTop:10}}><Icon
                  name="Arrow-left"
                  size={30}
                  color={'white'}
                />
                <Text style={{color:'white',fontWeight:'500',fontSize:18,}}>Go Back</Text>
                </View>
             </TouchableHighlight>
            </View>
          </Image>
        </View>



        <View style={styles.textBoxStyle}>
          <Text style={styles.textInputStyle}> Permit No: </Text>
          <TextInput underlineColorAndroid="transparent"
          placeholder="  Enter the Permit No" style={styles.textInput}
          onChangeText={(permitNo) => this.setState({permitNo})}
        />
        </View>

        <View  style={styles.buttonStyle}>
          <TouchableHighlight style={{backgroundColor:'#05AADA',height:70,alignItems:'center',justifyContent:'center'}}
            onPress={this.submitPermit}>
            <Text style={{color:'white',fontWeight:'500',fontSize:18,}}>Submit Permit</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({

  containerStyle: {
    flex: 1,
  },
  imageStyle: {
    flex: 7,
  },

  textInputStyle: {
    marginTop:20,
    marginLeft: 20,
    marginRight:10,
    fontSize: 20,
    paddingTop: 0,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor:'black',
    marginLeft: 20,
    height: 50,
    width:330,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize:15,
    alignItems: 'center',
  },
  textBoxStyle:{
    flex:2,
  },
  buttonStyle:{
    flex:1,
    marginTop:50,
  },
});
