import React, {Component} from 'react';
import {View, Animated, Image} from 'react-native';
import {Images, Colors, Fonts} from '../../Theme';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.rotateAnim = new Animated.Value(0);
  }
  UNSAFE_componentWillMount() {
    /*  Animated.loop(
      Animated.sequence([
        Animated.timing(this.rotateAnim, {
          useNativeDriver: true,
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(this.rotateAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 0,
        }),
      ]),
      { resetBeforeIteration: false }
    ).start() */
  }
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.rotateAnim, {
          useNativeDriver: true,
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(this.rotateAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 0,
        }),
      ]),
    ).start();
  }

  render() {
    const {color, size, style} = this.props;
    return (
      <View
        style={{
          alignSelf: 'center',
          ...style,
        }}>
        <Image
          source={Images.loadingOut}
          style={{tintColor: color, width: size, height: size}}
        />
        <Animated.Image
          source={Images.loadingIn}
          style={{
            width: size,
            height: size,
            position: 'absolute',
            tintColor: color,
            transform: [
              {
                rotate: this.rotateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

Loading.defaultProps = {
  size: Fonts.getSize(120),
  color: Colors.PRIMARY,
};
