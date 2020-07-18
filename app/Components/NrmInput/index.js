import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import NrmIcon from '../NrmIcon';
import {Colors} from '../../Theme';

const NrmTextInput = ({
  onFocus,
  onBlur,
  style,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <TextInput
      onFocus={onFocus}
      onBlur={onBlur}
      style={[style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default NrmTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK,
    padding: 4,
    paddingLeft: 0,
    marginRight: 2,
    textAlign: 'center',
    color: Colors.BLACK,
  },
});
