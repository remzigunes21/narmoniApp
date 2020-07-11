import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import NrmText from '../NrmText';
import {Colors} from '../../Theme';
const NrmButton = props => {
  const {
    title,
    backgroundColor,
    disabled,
    icon,
    onPress,
    style,
    textStyle,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, backgroundColor, style]}>
      <NrmText>Button</NrmText>
    </TouchableOpacity>
  );
};

NrmButton.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default NrmButton;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 20,

    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 6,

    borderRadius: 3,

    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'verdana',
    fontSize: 19,
  },
});

NrmButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.element,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  disabled: PropTypes.bool,
};
