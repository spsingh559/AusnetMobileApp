import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput,TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
// import "@expo/vector-icons"; // 5.2.0
export default class PermitScreen extends Component {
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
                <Text style={{color:'white',fontWeight:'500',fontSize:18,}}>Go Back</Text>
             </TouchableHighlight>
            </View>
          </Image>
        </View>



        <View style={styles.textBoxStyle}>
          <Text style={styles.textInputStyle}> Permit No: </Text>
          <TextInput underlineColorAndroid="transparent"
          placeholder="  Enter the Permit No" style={styles.textInput} />
        </View>

        <View  style={styles.buttonStyle}>
          <TouchableHighlight style={{backgroundColor:'#05AADA',height:70,alignItems:'center',justifyContent:'center'}}>
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
    paddingTop: 70,
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
