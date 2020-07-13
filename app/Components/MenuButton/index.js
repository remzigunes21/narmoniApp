import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Colors, Fonts} from '../../Theme';
import NrmIcon from '../NrmIcon';
import {NrmText} from '..';

class MenuButton extends React.Component {
  render() {
    const {title, icon, iconColor, onPress} = this.props;
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: Colors.WHITE,
          height: Fonts.getSize(50),
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: Fonts.getSize(5),
        }}
        onPress={onPress}>
        <View
          style={{
            width: Fonts.getSize(35),
            height: Fonts.getSize(35),
            marginHorizontal: Fonts.getSize(10),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: iconColor,
            borderRadius: Fonts.getSize(5),
          }}>
          <NrmIcon
            name={icon}
            type={'FontAwesome5'}
            color={Colors.WHITE}
            size={Fonts.getSize(23)}
          />
        </View>
        <NrmText.T2D style={{flex: 1}}>{title}</NrmText.T2D>

        <View style={{width: Fonts.getSize(50), alignItems: 'center'}}>
          <NrmIcon
            type={'FontAwesome5'}
            name={'chevron-right'}
            color={Colors.GREY_LIGHTER}
            size={Fonts.getSize(20)}
            style={{marginHorizontal: Fonts.getSize(10)}}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default MenuButton;
