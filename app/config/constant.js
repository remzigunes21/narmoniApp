import React from 'react';
import {Dimensions, Platform, Image} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const screen = {
  width,
  height,
};

const isSmallScreen = width < 375;
const isTablet = DeviceInfo.isTablet();

const SCREEN_MARGIN = 10;
const LOCAL_SEARCH_HISTORY_THRESHOLD = 15;
const HOME_LIST_SPACING = 13;
const HEADER_TITLE_MARGIN_TOP = Platform.OS === 'ios' ? 10 : 24;

const device = {
  version: DeviceInfo.getVersion(),
  isIOS: Platform.OS === 'ios',
  hasNotch: DeviceInfo.hasNotch(),
  os: Platform.OS,
};

export {
  isSmallScreen,
  isTablet,
  screen,
  device,
  SCREEN_MARGIN,
  LOCAL_SEARCH_HISTORY_THRESHOLD,
  HOME_LIST_SPACING,
  HEADER_TITLE_MARGIN_TOP,
};
