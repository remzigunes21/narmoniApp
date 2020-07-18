import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
import BaseScreen from '../../BaseScreen';

export class ProductDetail extends BaseScreen {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: true,
      active: null,
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

    return (
      <NrmContainer style={styles.container}>
        <ScrollView style={{flex: 4}}>
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
  container: {},
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
