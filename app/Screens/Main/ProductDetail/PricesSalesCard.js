import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NrmCard, NrmText, NrmIcon} from '../../../Components';
import {Colors} from '../../../Theme';

export class PricesSalesCard extends PureComponent {
  render() {
    return (
      <NrmCard style={styles.colorCardContainer}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <NrmText.T2D style={{}}>Fiyatlar</NrmText.T2D>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              width: 55,
              height: 55,
              marginRight: 15,
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
              Persil Power Jel etkileyici förmülüyle karşınızda 1750ml gülün
              büyüsü
            </NrmText.T2D>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{}}>Min tutar: 50</Text>
          <Text style={{marginLeft: 66}}>Kargo: Bedava</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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

          <NrmText.T2D
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: '#000',
            }}>
            156.90
          </NrmText.T2D>
        </View>
      </NrmCard>
    );
  }
}

export default PricesSalesCard;

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
  },
});
