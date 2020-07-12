import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {Colors} from '../../Theme';

const defaultPadding = 8;

const fontSizeMedium = 18;
const fontSizeSmall = fontSizeMedium * 0.6;
const fontSizeLarge = fontSizeMedium * 1.5;

const iconSizeMedium = 24;
const iconSizeSmall = iconSizeMedium * 0.6;
const iconSizeLarge = iconSizeMedium * 1.5;

const defaultMargin = 8;
function getSize(size) {
  if (size >>> 0 > 0) return size;
  switch (size) {
    case 'small':
      return iconSizeSmall;
    case 'large':
      return iconSizeLarge;
    default:
    case 'medium':
      return iconSizeMedium;
  }
}

function getIonicon({name, size, ...props}) {
  name = Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;
  return <Ionicon {...props} name={name} size={size} />;
}

const NrmIcon = ({name, color, style, size, type, ...props}) => {
  const iconProps = {name, color, style, size};
  if (!name) return null;
  const newSize = getSize(props.size);
  const newColor = color || Colors.BLACK;
  switch (type) {
    case 'AntDesign':
      return <AntDesign {...iconProps} />;
    case 'Entypo':
      return <Entypo {...iconProps} />;
    case 'EvilIcons':
      return <EvilIcons {...iconProps} />;
    case 'Feather':
      return <Feather {...iconProps} />;
    case 'FontAwesome':
      return <FontAwesome {...iconProps} />;
    case 'FontAwesome5':
      return <FontAwesome5 {...iconProps} />;
    case 'FontAwesome5Pro':
      return <FontAwesome5Pro {...iconProps} />;
    case 'Fontisto':
      return <Fontisto {...iconProps} />;
    case 'Foundation':
      return <Foundation {...iconProps} />;
    case 'Ionicons':
      return <Ionicons {...iconProps} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...iconProps} />;
    case 'MaterialIcons':
      return <MaterialIcons {...iconProps} />;
    case 'Octicons':
      return <Octicons {...iconProps} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons {...iconProps} />;
    case 'Zocial':
      return <Zocial {...iconProps} />;
    default:
    case 'Ionicons':
      return getIonicon({...props, newColor, newSize});
  }
};

export default NrmIcon;
