import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '@Theme';

function NrmHeader({onBack, rightIcons}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Entypo name="chevron-down" size={35} color={Colors.GREY_LIGHT} />
      </TouchableOpacity>

      <View style={styles.rightIconContainer}>{rightIcons}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 26,
    paddingHorizontal: 25,
  },
  rightIconContainer: {
    flexDirection: 'row',
  },
});

NrmHeader.defaultProps = {
  onBack: () => null,
  rightIcons: [],
};

NrmHeader.propTypes = {
  onBack: PropTypes.func,
  rightIcons: PropTypes.arrayOf(PropTypes.element),
};

export default NrmHeader;
