import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import NrmIcon from '../NrmIcon';
import {Colors} from '../../Theme';

const NrmInput = ({autoFocus, icon, placeholder, ...props}) => {
  //   onChangeText(text) {
  //     const {onChangeText} = this.props;
  //     this.setState({text});
  //     if (onChangeText) onChangeText(text);
  //   }

  //   onPressIcon() {
  //     let {text} = this.state;
  //     text = text.trim();
  //     this.props.onPressIcon(text);
  //   }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoFocus={autoFocus}
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChangeText}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor={Colors.BLACK}
      />
      <TouchableOpacity onPress={props.onPressIcon}>
        <NrmIcon name={icon} size="large" color={Colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default NrmInput;

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
