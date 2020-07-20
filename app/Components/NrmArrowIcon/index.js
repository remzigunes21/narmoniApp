import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Theme';

export default (NrmArrowIcon = ({left, color, size}) => {
  return (
    <AntDesign
      name={left ? 'left' : 'right'}
      size={size || 35}
      color={color || Colors.GREY_COLOR_LIGHT}
    />
  );
});
