import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import styles from './styles';

const Container = ({
  children,
  imageSource,
  tintColor,
  style,
  centered,
  blurRadius,
  androidPadStatusBar,
}) => {
  let containerStyle = {
    ...styles.container,
    justifyContent:
      centered == 'all' || centered == 'vertical' ? 'center' : undefined,
    alignItems:
      centered == 'all' || centered == 'horizontal' ? 'center' : undefined,
    paddingTop:
      androidPadStatusBar && Platform.OS == 'android'
        ? StatusBar.currentHeight / 2
        : undefined,
    ...style,
  };
  if (imageSource) {
    return (
      <ImageBackground
        resizeMode="cover"
        blurRadius={blurRadius}
        source={imageSource}
        style={containerStyle}>
        <SafeAreaView
          style={{
            ...containerStyle,
            width: '100%',
            backgroundColor: tintColor,
          }}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    );
  }
  return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
};

Container.propTypes = {
  tintColor: PropTypes.number,
  blurRadius: PropTypes.number,
  style: PropTypes.object,
  centered: PropTypes.oneOf(['horizontal', 'vertical', 'all']),
  androidPadStatusBar: PropTypes.bool,
};

Container.defaultProps = {
  blurRadius: 0,
  backgroundColor: 'transparent',
};

export default Container;
