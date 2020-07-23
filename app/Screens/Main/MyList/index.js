import React, {Component, PureComponent} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import BaseScreen from '../../BaseScreen';

export class MyList extends BaseScreen {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(MyList);
