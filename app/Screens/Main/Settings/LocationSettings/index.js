import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class ExtraUserInfo extends Component {
  render() {
    return (
      <View>
        <Text> ExtraUserInfo </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ExtraUserInfo);

const styles = StyleSheet.create({});
