import React from 'react';
import {Text} from 'react-native';

import {Colors, Fonts} from '../../Theme';
import styles from './styles';

const customTextWithStyle = (defaultStyle, textType) => {
  return ({
    children,
    style,
    bold,
    centered,
    type,
    numberOfLines,
    onPress,
    ...props
  }) => {
    let fontFamily = type ? type : bold;
    // ? Fonts.family.bold
    // : Fonts.family.regular;
    let color;
    switch (textType) {
      case 'dark':
        color = Colors.DARK;
        break;
      case 'gray':
        color = Colors.GREY_DARK;
        break;
      case 'white':
        color = Colors.WHITE;
        break;
      default:
        color = Colors.PRIMARY;
        break;
    }
    let _style = {
      ...defaultStyle,
      color,
      textAlign: centered ? 'center' : undefined,
      fontFamily: fontFamily,
      ...style,
    };

    return (
      <Text
        numberOfLines={numberOfLines}
        style={_style}
        onPress={onPress}
        {...props}>
        {children}
      </Text>
    );
  };
};

export default {
  T1: customTextWithStyle(styles.T1),
  T1W: customTextWithStyle(styles.T1, 'white'),
  T1D: customTextWithStyle(styles.T1, 'dark'),
  T1G: customTextWithStyle(styles.T1, 'gray'),
  T2: customTextWithStyle(styles.T2),
  T2W: customTextWithStyle(styles.T2, 'white'),
  T2D: customTextWithStyle(styles.T2, 'dark'),
  T2G: customTextWithStyle(styles.T2, 'gray'),
  T3: customTextWithStyle(styles.T3),
  T3W: customTextWithStyle(styles.T3, 'white'),
  T3D: customTextWithStyle(styles.T3, 'dark'),
  T3G: customTextWithStyle(styles.T3, 'gray'),
  T4: customTextWithStyle(styles.T4),
  T4W: customTextWithStyle(styles.T4, 'white'),
  T4D: customTextWithStyle(styles.T4, 'dark'),
  T4G: customTextWithStyle(styles.T4, 'gray'),
  T5: customTextWithStyle(styles.T5),
  T5W: customTextWithStyle(styles.T5, 'white'),
  T5D: customTextWithStyle(styles.T5, 'dark'),
  T5G: customTextWithStyle(styles.T5, 'gray'),
};
