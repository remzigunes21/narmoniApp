import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import NrmText from '../NrmText';
import {Screen, Fonts, Colors} from '../../Theme';
import styles from './styles';
import Loading from '../Loading';
import NrmIcon from '../NrmIcon';

const Button = ({
  disabled,
  title,
  onPress,
  onPressIn,
  onPressOut,
  long,
  wide,
  backgroundColor,
  loading,
  titleColor,
  linkButton,
  icon,
  iconType,
  style,
}) => {
  let containerStyle = disabled ? styles.containerDisabled : styles.container;
  let height = wide ? 70 : 50;

  if (linkButton) {
    return (
      <TouchableOpacity
        disabled={disabled || loading}
        style={{
          ...styles.containerLink,
          ...style,
        }}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        {icon && (
          <NrmIcon
            type={iconType}
            name={icon}
            color={titleColor}
            size={20}
            style={{marginRight: 10}}
          />
        )}
        <NrmText.T3D
          style={titleColor ? {color: titleColor} : null}
          type={Fonts.family.semiBold}>
          {title}
        </NrmText.T3D>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={{
        ...containerStyle,
        backgroundColor: backgroundColor || Colors.PRIMARY,
        justifyContent: 'center',
        width: long ? Screen.width * 0.9 : undefined,
        height,
        ...style,
      }}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {icon && (
        <NrmIcon
          name={icon}
          type={iconType}
          color={titleColor || Colors.WHITE}
          size={20}
          style={{position: 'absolute', left: 10}}
        />
      )}
      {loading ? (
        <Loading size={40} color={titleColor || Colors.WHITE} />
      ) : disabled ? (
        <NrmText.T2G centered bold>
          {title}
        </NrmText.T2G>
      ) : (
        <NrmText.T2W
          centered
          style={titleColor ? {color: titleColor} : null}
          bold>
          {title}
        </NrmText.T2W>
      )}
    </TouchableOpacity>
  );
};

export default Button;
