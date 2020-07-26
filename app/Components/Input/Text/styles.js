import {StyleSheet} from 'react-native';
import {Colors, Screen, Fonts} from '../../../Theme';

export const getContainerStyle = (hasError, isFocused, value, anim) => ({
  height: anim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 80],
  }),
  marginVertical: 5,
  justifyContent: 'flex-end',
  width: Screen.width * 0.9,
  borderRadius: 10,
  backgroundColor: Colors.WHITE,
  borderWidth: 1,
  borderColor: hasError ? Colors.ERROR : Colors.GREY,
});

export const getLabelStyle = deactive => ({
  opacity: deactive ? 0.5 : 1,
  letterSpacing: 1,
});

export const getInputStyle = (preText, value) => ({
  height: 50,
  fontFamily: Fonts.family.regular,
  color: Colors.DARK,
  fontSize: 18,
  paddingLeft: 20 + (preText && value ? preText.length * 7 + 4 : 0),
});

export const styles = StyleSheet.create({
  preText: {
    position: 'absolute',
    left: 10,
    bottom: 15,
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
