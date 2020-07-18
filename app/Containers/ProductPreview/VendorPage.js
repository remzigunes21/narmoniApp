import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NrmText, NrmIcon, NrmMdButton, NrmCard} from '../../Components';
import {Colors, Images} from '../../Theme';
import SearchBox from '../../Screens/Main/Search/SearchBox';
import SearchResult from '../SearchPages/SearchResult';
import SearchFilterIcon from '../SearchPages/SearchFilterIcon';

export class VendorPage extends PureComponent {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);

    this.state = {
      isFocus: true,
      active: null,
    };
  }

  renderContent() {
    // const {store} = this.props;
    // const {uiStore, authStore, searchStore} = store;
    // const {locationInfo} = authStore;

    return (
      <>
        <SafeAreaView style={{backgroundColor: '#FF675F', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#FF675F',
              paddingTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',

                width: '35%',
                justifyContent: 'space-between',
              }}>
              <View style={{alignSelf: 'center'}}>
                <TouchableOpacity>
                  <NrmIcon
                    name="angle-left"
                    size={35}
                    type="Fontisto"
                    color={Colors.WHITE}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Image
                  source={Images.logo}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{}}
                />
              </View>
              <View style={{alignSelf: 'center'}}>
                <NrmText.T1W
                  style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontSize: 18,
                  }}>
                  Furpa
                </NrmText.T1W>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '43%',
              }}>
              <TouchableOpacity onPress={null}>
                <NrmIcon
                  name="timer-outline"
                  size={34}
                  color={Colors.WHITE}
                  style={{marginHorizontal: 10, marginTop: 6}}
                  type="MaterialCommunityIcons"
                />
              </TouchableOpacity>

              <View style={{alignSelf: 'center'}}>
                <View>
                  <NrmText.T1G style={{fontSize: 16, color: Colors.WHITE}}>
                    Teslimat Tarihi
                  </NrmText.T1G>
                </View>
                <View style={{}}>
                  <NrmText.T1G style={{fontSize: 10, color: Colors.WHITE}}>
                    Hesap bağlama işlemi gerekmektedir.
                  </NrmText.T1G>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.ORANGE_LIGHT,
              flexDirection: 'row',
            }}>
            <View
              style={{alignSelf: 'flex-end', marginLeft: 10, marginTop: 10}}>
              <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <Image
                  source={Images.location}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{
                    padding: 10,
                    paddingRight: 20,

                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <View>
                <NrmText.T1D style={{fontSize: 16, color: Colors.WHITE}}>
                  KocaMustafaPaşa
                </NrmText.T1D>
              </View>
              <View>
                <NrmText.T1D style={{fontSize: 10, color: Colors.WHITE}}>
                  Bakırköy
                </NrmText.T1D>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 4,
            marginTop: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <SearchBox />
          </View>

          <NrmMdButton />

          <SearchFilterIcon />

          <ScrollView style={{flex: 1}}>
            <NrmCard style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SearchResult />
                <View
                  style={{
                    height: '100%',
                    width: 2,
                    backgroundColor: '#BCC3C3',
                  }}
                />
                <SearchResult />
              </View>
            </NrmCard>
            <View
              style={{
                backgroundColor: '#BCC3C3',
                width: '100%',
                height: 2,
                marginLeft: 10,
              }}
            />
          </ScrollView>
        </View>
      </>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default VendorPage;

const HEADER_MAX_HEIGHT = 270;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.PRIMARY,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    paddingTop: 50,
    zIndex: 10,
  },
  location: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
