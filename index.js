/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';

import store from './app/redux/configureStore';
import Navigation from './app/Services/Navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
          {/* <AlertPop /> */}
        </NavigationContainer>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
