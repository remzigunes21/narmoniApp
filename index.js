/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';

import Navigation from './app/Services/Navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <NavigationContainer>
        <Navigation />
        {/* <AlertPop /> */}
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
