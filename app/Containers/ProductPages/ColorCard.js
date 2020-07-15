import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NrmCard, NrmText, NrmIcon} from '../../Components';
import {Colors} from '../../Theme';

export class ColorCard extends PureComponent {
  render() {
    return (
      <NrmCard style={styles.colorCardContainer}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <NrmText.T2D style={{}}>Renk</NrmText.T2D>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={[styles.buttonMl, {marginHorizontal: 24}]}>
              <NrmText.T2D style={styles.textCard}>Pembenin Gücü</NrmText.T2D>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonMl, {marginHorizontal: 24}]}>
              <NrmText.T2D style={styles.textCard}>
                Sarı sarı kimin yarı
              </NrmText.T2D>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NrmText.T2D style={{fontSize: 16, fontWeight: 'bold'}}>
              +4
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
          </View>
        </View>
      </NrmCard>
    );
  }
}

export default ColorCard;

const styles = StyleSheet.create({
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
