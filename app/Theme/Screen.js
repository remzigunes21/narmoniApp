import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('screen')

const wWidth = Dimensions.get('window').width
const wHeight = Dimensions.get('window').height

const aspectRatio = width / height

const isIphoneX =
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height >= 812 || width >= 812)

const bottomBarHeight = height - wHeight
export default {
  width,
  height,
  bottomBarHeight,
  isIphoneX,
  aspectRatio
}
