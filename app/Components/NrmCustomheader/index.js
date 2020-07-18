import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NrmCustomheader({
  onIconClicked,
  showIcon,
  title,
  isModal,
  style,
  image,
}) {
  return (
    <View style={[styles.container, {...style}]}>
      {showIcon ? (
        <TouchableOpacity
          style={{paddingLeft: isModal ? 10 : 5}}
          onPress={onIconClicked}>
          {isModal ? (
            <Ionicons
              name="ios-arrow-down"
              color={Colors.GREY_LIGHTER}
              size={30}
            />
          ) : (
            <HypArrowIcon left> </HypArrowIcon>
          )}
        </TouchableOpacity>
      ) : (
        <View style={{marginLeft: 40}} />
      )}
      <View style={{marginHorizontal: 100}}>
        {image}
        {/* <Image source={Images.logo} style={styles.hyplogo}></Image> */}
      </View>
      <HypText numberOfLines={1} style={styles.title}>
        {title}
      </HypText>
    </View>
  );
}

const HEADER_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: HEADER_HEIGHT,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 26,
    flex: 1,
    marginLeft: 8,
    textAlign: 'center',
    // fontFamily: fonts.common.bold
  },
  hyplogo: {
    height: HEADER_HEIGHT,
    width: 150,
  },
});

NrmCustomheader.defaultProps = {
  onIconClicked: () => null,
  showIcon: false,
};

NrmCustomheader.propTypes = {
  onIconClicked: PropTypes.func,
  showIcon: PropTypes.bool,
};

export default NrmCustomheader;
