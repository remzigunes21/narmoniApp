import React from 'react';
import {Dimensions, Platform, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

const screen = {
  width,
  height,
};

const IN_APP_PRODUCTS = Platform.select({
  ios: ['BiryudumkitapMonthlyPremium', 'BiryudumkitapYearlyPremium'],
  android: ['biryudumkitap_monthly_premium', 'biryudumkitap_yearly_premium'],
});

const URL_PRIVACY =
  'https://www.kitapyurdu.com/index.php?route=information/information/info&information_id=3';
const URL_COPYRIGHT_COMPLAINT =
  'https://www.biryudumkitap.com/app/copyright.html';
const URL_USE_POLICY = 'https://www.biryudumkitap.com/app/tos.html';
const URL_FAQ = 'https://www.biryudumkitap.com/app/faq.html';
const URL_TWITTER = 'https://twitter.com/biryudumkitapp';
const URL_CONTACT = 'https://www.biryudumkitap.com/iletisim.html';

const SCREEN_MARGIN = 10;
const LOCAL_SEARCH_HISTORY_THRESHOLD = 15;
const HOME_LIST_SPACING = 13;
const HEADER_TITLE_MARGIN_TOP = Platform.OS === 'ios' ? 10 : 24;
const activeFonts = {
  sfui: {
    black: 'SFUIDisplay-Black',
    bold: 'SFUIDisplay-Bold',
    heavy: 'SFUIDisplay-Heavy',
    light: 'SFUIDisplay-Light',
    medium: 'SFUIDisplay-Medium',
    semibold: 'SFUIDisplay-Semibold',
    thin: 'SFUIDisplay-Thin',
    ultralight: 'SFUIDisplay-Ultralight',
  },
};

const fonts = {
  common: activeFonts.sfui,
};

const colors = {
  white: 'white',
  darkerWhite: '#F1F1F1',
  black: 'black',
  statusBarColor: 'white',
  tabColorBlack: '#505050',
  tabColorGray: '#C7C7C7',
  placeholder: '#ECECEC',

  lineGray: '#DEDEDE',
  darkishBlack: '#484342',
  logoGrayColor: '#423E3C',
  lightishBlack: '#767E8A',
  subtitleGray: '#797979',
  borderGray: '#E8E8E8',
  facebookBgColor: '#3B5998',
  googleBgColor: '#bf4f3f',
  royalBlue: '#0175FF',
  headBlue: '#0175FF',
  pureRed: '#FF0000',
  errorRed: '#FB4C7A',
  heartRed: '#D45755',
  dark: '#141419',
  darkRead: '#3b464b',
  darkerDarkRead: '#2C3032',
  darkReadContext: '#393d3e',
  white: '#fff',
  explanationBrown: '#7D7371',
  settingsBg: '#faf9f9',
  dividerLight: '#F0F0F0',
  dividerDark: '#eeeeee',
  green: '#2DDD6D',

  grayInfo: '#8E8785',
  backgroundGray: '#F2F2F2',
  disabledButtonBackground: '#808080',
  disabledButtonText: '#F0F0F0',
  listSubtitleGray: '#B3B3B3',
  filterBackground: '#faf9f9',
  filterResetButtonBorder: '#797979',

  // KY
  ky: {
    red: '#C20A4A',
    transparentRed: 'rgba(193,9,73,0.72)',
    black: '#313131',
    lightGray: '#9A9A9A',
    gray: '#838282',
    lighterGray: '#CAC4C4',
    lightYellow: '#FCE49A',
    yellow: '#FFDA47',
    lightOrange: '#FF9634',
    orange: '#FF782D',
    brown: '#BB6D23',
    green: '#93D028',
    lightGreen: '#2DDD6D',
    white: '#FFFFFF',
    divider: '#eeeeee',
    searchDivider: '#E0DDDD',
    grayText: '#B1BCCB',
    exitRed: '#E91616',
    mainAppBackground: '#F6F5F5',
    loginButtonText: '#F6F5F5',
    registerButtonText: '#5D5A5A',
    bookContainerBackground: '#F3F3F3',
    rankingBorderColor: '#707070',
    registerButtonText: '#5D5A5A',
    categoryImageLinergradient: 'rgba(136,136,136,1)',
    iconorangeRank: '#ff5721',
  },
};

const device = {
  isIOS: Platform.OS === 'ios',
  os: Platform.OS,
};

export {
  IN_APP_PRODUCTS,
  screen,
  fonts,
  colors,
  device,
  SCREEN_MARGIN,
  LOCAL_SEARCH_HISTORY_THRESHOLD,
  HOME_LIST_SPACING,
  HEADER_TITLE_MARGIN_TOP,
  URL_PRIVACY,
  URL_COPYRIGHT_COMPLAINT,
  URL_USE_POLICY,
  URL_FAQ,
  URL_TWITTER,
  URL_CONTACT,
};
