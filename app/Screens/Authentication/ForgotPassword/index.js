import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

export class ForgotPassword extends PureComponent {
  render() {
    return (
      <View>
        <Text> ForgotPassword </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ForgotPassword);
