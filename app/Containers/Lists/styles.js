import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { Colors, Screen } from '@Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.GREY_LIGHTEST,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: Screen.height * 0.13 - getStatusBarHeight() - 10,
    width: '100%',
  },
})
