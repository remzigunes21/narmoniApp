import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import NrmIcon from '../NrmIcon';

export const HeaderIcon = ({onPress, ...props}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <NrmIcon {...props} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
