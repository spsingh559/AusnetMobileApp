import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
import EachApplicationData from './EachApplicationData';

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
import { StackNavigator } from 'react-navigation';
import moment from 'moment';
export default class ApplicationView extends React.Component{


  render(){
    let dates= moment().format('DD-MMM-YYYY');
     dates=dates.replace(/-/g,' ');
    let ComponentData=this.props.data.map((data)=>{
      return(
        <EachApplicationData
          key={data.id}
          datas={data}
          >
        </EachApplicationData>
      )
    })
    return(

        <View  style={{borderBottomColor: 'grey',borderBottomWidth: 0.2,}}>
             <Text style={styles.textStyle}>{dates}</Text>
             <Text></Text>
      {ComponentData}
      </View>
    )
  }
}
