/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';

import App from './app/Services/Navigation/AppNavigator';

AppRegistry.registerComponent(appName, () => App);
