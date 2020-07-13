import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NrmCard, NrmText, NrmIcon} from '../../../Components';
import {Colors} from '../../../Theme';

export class PriceCard extends PureComponent {
  render() {
    return (
      <NrmCard style={styles.colorCardContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <NrmText.T2D
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#000',
              }}>
              156.90
            </NrmText.T2D>

            <NrmText.T2D style={{marginHorizontal: 24, fontSize: 12}}>
              trendyol
            </NrmText.T2D>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NrmText.T2D style={{fontSize: 12, fontWeight: 'bold'}}>
              +9 fiyat
            </NrmText.T2D>
            <TouchableOpacity>
              <NrmIcon
                name="angle-right"
                size={32}
                type="Fontisto"
                color={Colors.GREY_COLOR_LIGHT}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.ORANGE_LIGHT,
                padding: 12,
                borderRadius: 60,
              }}>
              <NrmText.T1G
                style={{
                  color: Colors.WHITE,
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Sepete Ekle
              </NrmText.T1G>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.WHITE_LIGHT,
              padding: 12,
              borderRadius: 60,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <NrmText.T1G
              style={{
                color: Colors.GREY_COLOR_LIGHT,
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Beden seçmek için dokun!
            </NrmText.T1G>
            <NrmIcon
              name="angle-down"
              size={32}
              type="Fontisto"
              color={Colors.GREY_COLOR_LIGHT}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </NrmCard>
    );
  }
}

export default PriceCard;

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
