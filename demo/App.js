import React from 'react';
import { StyleSheet, Text, ScrollView,View,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './contents/homescreen';
import ApplicationDetails from './contents/applicationDetails';

import {Router,Stack,Scene} from "react-native-router-flux";
import ContextComponent from './context';
// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   ApplicationDetails: { screen: ApplicationDetails },
// });
//
// export default SimpleApp;
const App = () => (
  <ContextComponent>
  <Router>
    <Stack key="root">

      <Scene key="home" component={HomeScreen}/>
        <Scene key="ApplicationDetails" component={ApplicationDetails} title="Register"/>
    </Stack>
  </Router>
  </ContextComponent>
);
export default App;
