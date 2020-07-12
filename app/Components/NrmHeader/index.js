import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../../Theme';
import NrmIcon from '../NrmIcon';

const NrmHeader = ({
  onBack,
  iconName,
  iconSize,
  iconColor,
  iconType,

  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.headerButton} {...props}>
        <NrmIcon
          name={iconName}
          size={iconSize}
          type={iconType}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 2,
  },
});

NrmHeader.defaultProps = {
  onBack: () => null,
};

NrmHeader.propTypes = {
  onBack: PropTypes.func,
};

export default NrmHeader;
