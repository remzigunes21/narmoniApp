import React, {Component, PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';

import {connect} from 'react-redux';

import {
  styles,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
} from './styles';
import SuggestedLists from '../SuggestedLists';

import {NrmCard, NrmText, NrmIcon} from '../../Components';
import {Colors, Fonts} from '../../Theme';
import BaseScreen from '../../Screens/BaseScreen';

class HomePage extends BaseScreen {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.dispatchAction(this.$().GET_SKU_REQUEST), 31;
  }

  renderContent() {
    const {currentSkus} = this.props;
    console.log('HomePage -> renderContent -> currentSkus', currentSkus);
    // const {uiStore, authStore, searchStore} = store;
    // const {locationInfo} = authStore;
    const {scrollY} = this.state;

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    return (
      <SafeAreaView style={styles.fill}>
        <Animated.View
          style={[
            styles.header,
            {
              transform: [{translateY: headerTranslate}],
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.location}
              onPress={() => this.props.navigation.navigate('Vendor')}>
              <View style={{marginBottom: 40, marginRight: 50}}>
                <NrmText.T4W>Hoşgeldin</NrmText.T4W>
                <NrmText.T3W
                  style={{
                    fontWeight: 'bold',
                    fontFamily: Fonts.family.boldItalic,
                  }}>
                  {'Fatih'}
                </NrmText.T3W>
              </View>
            </TouchableOpacity>
            <View style={{marginRight: 50}}>
              <TouchableOpacity style={styles.location} onPress={null}>
                <NrmIcon
                  size={40}
                  style={{color: Colors.WHITE, padding: 10, paddingRight: 20}}
                  name="location-pin"
                  type="Entypo"
                />
                <View style={{}}>
                  <NrmText.T4W>Adresim</NrmText.T4W>
                  <NrmText.T3W style={{fontWeight: 'bold'}}>
                    {'Koca Mustafa Paşa'}
                  </NrmText.T3W>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={{
              opacity: imageOpacity,
            }}>
            <View style={{marginVertical: 15, marginHorizontal: 10}}>
              <TouchableOpacity style={styles.circleButton} onPress={null}>
                <NrmIcon
                  name="search"
                  size={44}
                  color={Colors.PRIMARY}
                  style={{marginTop: 8}}
                  type="Feather"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.circleButton, {marginTop: 20}]}
                onPress={null}>
                <NrmIcon
                  name={'barcode'}
                  type="MaterialCommunityIcons"
                  size={44}
                  color={Colors.PRIMARY}
                  style={{marginTop: 8}}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          style={(styles.fill, {paddingTop: HEADER_MAX_HEIGHT - 30})}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: true},
          )}>
          <SuggestedLists navigation={this.props.navigation} />
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }

  render() {
    return this.renderContent();
  }
}

function mapStateToProps(state) {
  return {
    currentSkus: state.product.currentSkus,
  };
}

export default connect(mapStateToProps)(HomePage);
