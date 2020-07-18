import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../Theme';

const NrmButton = ({
  title,
  onPress,
  style,
  disabled,
  onFocus,
  children,
  ...props
}) => {
  const backgroundColor = disabled
    ? Colors.GREY_COLOR_LIGHT
    : style && style.backgroundColor
    ? style.backgroundColor
    : Colors.FOOTER_TEXT;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      disabled={disabled}
      onFocus={onFocus}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default NrmButton;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
});
