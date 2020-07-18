import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {NrmButton, NrmText, NrmIcon} from '../../Components';
import {Colors} from '../../Theme';

export class SearchFilterIcon extends PureComponent {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
          backgroundColor: Colors.WHITE_LIGHT,
          paddingVertical: 6,
        }}>
        <NrmButton
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <NrmIcon
            name="filter"
            size={32}
            type="MaterialCommunityIcons"
            color={Colors.ORANGE_LIGHT}
          />
          <NrmText.T1D>Filtre</NrmText.T1D>
        </NrmButton>
        <NrmButton
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <NrmIcon
            name="sort-amount-down-alt"
            size={32}
            type="FontAwesome5"
            color={Colors.ORANGE_LIGHT}
          />
          <NrmText.T1D style={{marginLeft: 12}}>Sırala</NrmText.T1D>
        </NrmButton>
      </View>
    );
  }
}

export default SearchFilterIcon;
