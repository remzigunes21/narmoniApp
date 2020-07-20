import React, {Component, PureComponent} from 'react';

import Spinner from 'react-native-loading-spinner-overlay';

class NrmSpinner extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: false,
    };
  }

  render() {
    return <Spinner visible={this.state.showSpinner} />;
  }
}

export default NrmSpinner;
