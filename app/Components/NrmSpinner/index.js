import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

class NrmSpinner extends Component {
  render() {
    return <Spinner visible={this.props.global.showSpinner} />;
  }
}

function mapStateToProps(state) {
  return {
    global: state.global,
  };
}

export default connect(mapStateToProps)(NrmSpinner);
