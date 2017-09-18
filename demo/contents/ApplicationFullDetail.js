import React from 'react';
import { StyleSheet, Text, ScrollView,View,Button,TouchableOpacity,TouchableHighlight,TextInput,Linking} from 'react-native';
import {Actions} from "react-native-router-flux";
import moment from 'moment';
import { Icon, } from 'react-native-elements';
export default class ApplicationFullDetail extends React.Component{
	constructor(props) {
    super(props);
     this.state = {opName: ''};
    this.state = {rcName: ''};
    this.state = {version: ''};
  }
  render(){
		let dates=  moment().format('DD-MMM-YYYY')
			 dates=dates.replace(/-/g,' ');
    return(
    	<ScrollView>
	      <View>
	      	<Text style={styles.headerContentText}>Application Number</Text>
	        <Text style={styles.ContentText}>{this.props.data.applicationNumber}</Text>
	        <Text style={styles.headerContentText}>Schedule</Text>
	        <Text style={styles.ContentText}>Start:{this.props.data.start}</Text>
	        <Text style={styles.ContentText}>End:{this.props.data.End}</Text>
	        <Text style={styles.headerContentText}>Location</Text>
	        <Text style={styles.ContentTextLocation} onPress={() => Linking.openURL('http://googlemaps.com')}>{this.props.data.location}</Text>
	        <Text style={styles.separator}></Text>
	        <Text style={styles.headerContentText}>Operator Name</Text>
	        <TextInput style={styles.textInput}
          		onChangeText={(opName) => this.setState({opName})} />
	        <Text style={styles.headerContentText}>Recipient Name</Text>
	        <TextInput style={styles.textInput}
          		onChangeText={(rcName) => this.setState({rcName})}/>
	        <Text style={styles.headerContentText}>Operating Authority Number</Text>
	        <View style={{justifyContent:'flex-start',flexDirection:'row'}}>
	        	<Text style={styles.Content}>{this.props.data.OpNumber} -</Text>
		        <TextInput style={styles.textInputVersion}
	          		onChangeText={(version) => this.setState({version})}/>
	    		<Icon
	        		name="check-circle"
	        		size={30}
	      			color={'#0499F9'}
	      			style={styles.tick}
	    		/>
        	</View>
        	<TouchableHighlight style={styles.submitButton}
        		onPress={() =>
        			Actions.ResponsePage({applicationNumber:this.props.data.applicationNumber,
        								OperatorName:this.state.opName,Version:this.state.version,
        								title:dates})}>
        		<Text style={styles.submitText}>Submit</Text>
    		</TouchableHighlight>
	      </View>
       </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	headerContentText: {
	    fontSize: 18,
	    fontWeight: '500',
	    paddingTop:15,
	    paddingLeft:15,
	},
	Content: {
	    fontSize: 18,
	    paddingLeft:15,
	    paddingTop:10,
	    marginTop:10,
	    flexDirection:'column',
		justifyContent:'space-around',
	},
	ContentText: {
	    fontSize: 18,
	    paddingLeft:15,
	},
	ContentTextLocation: {
	    fontSize: 18,
	    paddingLeft:15,
	    textDecorationLine:'underline',
	},
	separator: {
		paddingTop:15,
	    borderBottomColor: 'grey',
	    borderBottomWidth: 1,
  	},
  	textInput: {
  		borderColor: 'gray',
  		borderWidth: 1,
  		height:40,
  		width:270,
  		marginLeft:15,
  		marginTop:10,
  	},
  	textInputVersion: {
  		borderColor: 'gray',
  		borderWidth: 1,
  		height:40,
  		width:60,
  		marginLeft:15,
  		marginTop:15,
  	},
  // 	version: {
		// paddingTop:15,
	 //    height:40,
  // 		width:40,
  // 		flexDirection:'column',
		// justifyContent:'space-around',
  // 	},
  	tick: {
		flexDirection:'column',
		justifyContent:'space-around',
		marginLeft:20,
		marginTop:10,
	},
  	submitButton: {
	    backgroundColor: "#08A4D6",
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'center',
	    padding: 20,
	    marginTop: 20,
	 },
	submitText: {
	    color: 'white',
	    fontSize: 20,
	    fontWeight:'500',
	},
});
