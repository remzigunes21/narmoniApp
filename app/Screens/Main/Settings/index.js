import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

export class Settings extends PureComponent {
  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Settings);
