import React, {Component, PureComponent} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  SafeAreaView,
  Modal,
} from 'react-native';
import {NrmContainer, NrmIcon, NrmCard, NrmText} from '../../../Components';
import FastImage from 'react-native-fast-image';
import {Images, Colors} from '../../../Theme';
import ColorCard from '../../../Containers/ProductPages/ColorCard';
import ProductDetailCard from '../../../Containers/ProductPages/ProductDetailCard';
import SameProduct from '../../../Containers/ProductPages/SameProduct';
import PricesSalesCard from '../../../Containers/ProductPages/PricesSalesCard';
import PriceCard from '../../../Containers/ProductPages/PriceCard';
import ProductSalesCard from '../../../Containers/ProductPages/ProductSalesCard';
import {SCREEN_MARGIN} from '../../../config/constant';
import ProductImageModal from '../../../Containers/Modals/ProductImageModal';

export class ProductDetail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: true,
      active: null,
      scrollY: new Animated.Value(0),
      showModal: false,
    };
  }

  onPress = active => {
    this.setState({active});
    console.log('ProductDetail -> active', this.state.active);
  };

  render() {
    const {active} = this.state;
    const selected = {borderWidth: 2, borderColor: 'red'};
    const unSelected = {border: 'none'};

    const diffClamp = Animated.diffClamp(this.state.scrollY, 0, 45);

    const translateY = diffClamp.interpolate({
      inputRange: [0, 60],

      outputRange: [0, -45],

      extrapolate: 'clamp',
    });

    return (
      <NrmContainer barStyle="dark-content" style={styles.container}>
        <Animated.View
          style={{
            transform: [{translateY: translateY}],
            elevation: 4,
            zIndex: 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,

              backgroundColor: Colors.GREY_COLOR_LIGHT,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image
                  source={Images.leftIcon}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                  style={{marginVertical: 12, marginHorizontal: 3}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{marginRight: 4}}
                onPress={() => this.setState({showModal: true})}>
                <Image
                  source={Images.alertIcon}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                  style={{marginVertical: 12}}
                />
              </TouchableOpacity>

              <Modal transparent={true} visible={this.state.showModal}>
                <ProductImageModal show={this.state.showModal} />
              </Modal>

              <TouchableOpacity>
                <Image
                  source={Images.heart}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                  style={{marginVertical: 12, marginHorizontal: 4}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <ScrollView
          style={{flex: 4}}
          scrollEventThrottle={16}
          onScroll={e => {
            this.state.scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}>
          <NrmCard style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{marginLeft: 20}}>
                <Image
                  source={Images.mdPersil}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{marginVertical: 12}}
                />
                <Image
                  source={Images.mdPersil}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{marginVertical: 12}}
                />
                <Image
                  source={Images.mdPersil}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{marginVertical: 12}}
                />
                <Image
                  source={Images.mdPersil}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{marginVertical: 12}}
                />
                <Image
                  source={Images.mdPersil}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  style={{marginVertical: 12}}
                />
              </View>
              <Image
                source={Images.persil}
                style={{width: 300, height: 300}}
                resizeMode="contain"
              />

              <TouchableOpacity>
                <NrmIcon
                  name="angle-right"
                  size={44}
                  type="Fontisto"
                  color={Colors.GREY_COLOR_LIGHT}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View>
              <NrmText.T1G style={{textAlign: 'center'}}>
                Presil Power Jel 3750ml Çamaşır Deterjanı Gülün Büyüsü
              </NrmText.T1G>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => this.onPress('1')}
                  style={[
                    styles.buttonMl,
                    active === '1' ? selected : unSelected,
                  ]}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonMl,
                    active === '2' ? selected : unSelected,
                  ]}
                  onPress={() => this.onPress('2')}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.onPress('3')}
                  style={[
                    styles.buttonMl,
                    active === '3' ? selected : unSelected,
                  ]}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.onPress('4')}
                  style={[
                    styles.buttonMl,
                    active === '4' ? selected : unSelected,
                  ]}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
              </View>
            </View>
          </NrmCard>

          <ColorCard navigation={this.props.navigation} />

          <PriceCard />

          <ProductDetailCard />

          <NrmCard style={styles.colorCardContainer}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <NrmText.T2D style={{}}>Ürün Bilgileri</NrmText.T2D>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <NrmText.T2D
                adjustsFontSizeToFit={true}
                style={{
                  fontSize: 12,
                  textAlignVertical: 'center',
                }}>
                Urun beklediğimden çok daha hızlı geldi Urun beklediğimden çok
                daha hızlı geldi Urun beklediğimden çok daha hızlı geldi Urun
                beklediğimden çok daha hızlı geldi
              </NrmText.T2D>
            </View>
          </NrmCard>

          <ProductSalesCard />

          <PricesSalesCard />
          <SameProduct />
        </ScrollView>
      </NrmContainer>
    );
  }
}

export default ProductDetail;

const styles = StyleSheet.create({
  container: {flex: 1},
  card: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  icon: {},

  textCard: {textAlign: 'center', alignSelf: 'center', fontSize: 12},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonMl: {
    backgroundColor: Colors.VIOLAET,
    borderRadius: 15,
    padding: 4,
  },

  colorCardContainer: {
    flex: 2,
    marginVertical: 12,
  },
});
