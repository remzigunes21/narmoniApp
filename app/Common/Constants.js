import {Platform} from 'react-native';
import {Screen, Images} from '../Theme';

export default {
  searchResultHeigth: Screen.width * 0.3 + 100,
  topBarHeight: 50,
  splittedScreenPeekHeight:
    (Screen.isIphoneX
      ? 34
      : Platform.OS == 'android'
      ? Screen.bottomBarHeight
      : 0) +
    Screen.height * 0.13,

  appstoreLink: 'itms://itunes.apple.com/tr/app/narmoni/id1478123052?mt=8',
  playstoreLink: 'market://details?id=com.narmoni',
};
