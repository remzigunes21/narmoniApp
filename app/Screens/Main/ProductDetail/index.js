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
import ColorCard from './ColorCard';
import PriceCard from './PriceCard';
import ProductDetailCard from './ProductDetailCard';
export class ProductDetail extends Component {
  render() {
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
              <Image
                source={Images.bear}
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
                <TouchableOpacity style={styles.buttonMl}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMl}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMl}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMl}>
                  <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
                </TouchableOpacity>
              </View>
            </View>
          </NrmCard>

          <ColorCard />

          <PriceCard />

          <ProductDetailCard />

          <NrmCard style={styles.colorCardContainer}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <NrmText.T2D style={{}}>Ürün Puanı Bilgileri</NrmText.T2D>
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
