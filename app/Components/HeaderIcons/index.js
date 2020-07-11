import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '@components/widgets';

export const HeaderIcon = ({onPress, ...props}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Icon {...props} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
