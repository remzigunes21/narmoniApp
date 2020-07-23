import React, {Component, PureComponent} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class Login extends PureComponent {
  render() {
    return (
      <View>
        <Text> Login Page </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({});
