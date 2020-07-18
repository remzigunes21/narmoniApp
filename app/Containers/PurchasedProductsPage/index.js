import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NrmContainer, NrmText} from '../../Components';
import {Colors} from '../../Theme';

export class PurchasedProductsPage extends PureComponent {
  render() {
    return (
      <NrmContainer style={{backgroundColor: Colors.WHITE}}>
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={() => this.props.navigation.navigate('ProfileSettings')}>
          <NrmText.T1G>hello</NrmText.T1G>
        </TouchableOpacity>
      </NrmContainer>
    );
  }
}

export default PurchasedProductsPage;
