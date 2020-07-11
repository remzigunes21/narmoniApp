/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import {Screen, Colors} from '@Theme';
import App from './app/Services/Navigation/AppNavigator';
import Navigation from '@Services/Navigation';
import {Loading} from './app/Components';

AppRegistry.registerComponent(appName, () => App);
