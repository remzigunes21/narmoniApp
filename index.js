/**
 * @format
 */

import {AppRegistry, View, Text, Platform} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';

import {Provider, observer} from 'mobx-react';

import Navigation from './app/Services/Navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import mainStore from './app/Providers/MobX/mainStore';
import {AppState} from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

console.disableYellowBox = true;
if (Platform.OS == 'android') {
  const {UIManager} = require('react-native');
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const store = mainStore;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.appState = AppState.currentState;
  }

  componentDidMount() {
    console.disableYellowBox = true;
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  UNSAFE_componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      store.uiStore.setSearching(false);
    }
    this.appState = nextAppState;
  };
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

export default observer(App);

AppRegistry.registerComponent(appName, () => App);
