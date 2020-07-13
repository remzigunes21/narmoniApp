import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Rate from 'react-native-rate';

import {NrmCard, NrmText, NrmIcon, MenuButton} from '../../../Components';
import {Colors, Fonts} from '../../../Theme';
import ProductDetailRate from './ProductDetailRate';

export class ProductSalesCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rated: false,
    };
  }
  render() {
    return (
      <NrmCard style={styles.colorCardContainer}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <NrmText.T2D style={{}}>
            Satıcı Puanı {'& '}Yorumları {'  (27)'}
          </NrmText.T2D>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              width: 55,
              height: 55,
              marginRight: 15,
              marginVertical: 15,
            }}>
            <NrmText.T1D style={{fontSize: 14}}>trendyol</NrmText.T1D>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              marginRight: 15,
              paddingRight: 15,
            }}>
            <NrmText.T2D
              adjustsFontSizeToFit={true}
              style={{
                fontSize: 12,
                textAlignVertical: 'center',

                marginRight: 15,
                paddingRight: 15,
              }}>
              Urun beklediğimden çok daha hızlı geldi Urun beklediğimden çok
              daha hızlı geldi Urun beklediğimden çok daha hızlı geldi Urun
              beklediğimden çok daha hızlı geldi
            </NrmText.T2D>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <NrmIcon
            name="star"
            size={32}
            type="AntDesign"
            color={Colors.ORANGE_LIGHT}
            style={styles.icon}
          />
          <NrmText.T2G style={{fontSize: 12, fontWeight: 'bold'}}>
            /sanal market
          </NrmText.T2G>
        </TouchableOpacity>
      </NrmCard>
    );
  }
}

export default ProductSalesCard;

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
