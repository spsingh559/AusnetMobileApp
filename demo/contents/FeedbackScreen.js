import React, { Component } from 'react';
import { Text,TextInput, View, StyleSheet,TouchableHighlight } from 'react-native';
import StarRating from 'react-native-star-rating'; // 1.0.8
import {Actions} from 'react-native-router-flux';
// import "@expo/vector-icons"; // 5.2.0

export default class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View>
       <View>
         <TextInput
          multiline = {true}
          underlineColorAndroid="transparent"
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Kindly Give Your Valuable FeedBack'
        />
       </View>
       <View style={{marginTop:20}}>
        <StarRating
          starSize= {25}
          starColor={'gold'}
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
       </View>

       <View  style={styles.buttonStyle}>
          <TouchableHighlight style={{backgroundColor:'#05AADA',height:60,alignItems:'center',justifyContent:'center'}}
            onPress={() => Actions.home()}>
            <Text style={{color:'white',fontWeight:'500',fontSize:18,}}>Submit FeedBack</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    width: 320,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonStyle:{
    marginTop: 125,
  }
});
