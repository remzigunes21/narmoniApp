import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const family = {
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  extraBold: 'OpenSans-ExtraBold',
  extraBoldItalic: 'OpenSans-ExtraBoldItalic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
  semiBoldItalic: 'OpenSans-SemiBoldItalic',
}

const getSize = (fontSize) => {
  const standardScreenWidth = 375
  const widthPercent = (fontSize * width) / standardScreenWidth
  return Math.round(widthPercent)
}

export default {
  family,
  getSize,
}
