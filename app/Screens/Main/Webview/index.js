import React, {Component, PureComponent} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class WebViews extends PureComponent {
  render() {
    return (
      <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />
    );
  }
}

export default WebViews;
