import React, {PureComponent} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NrmText, NrmCard, NrmIcon} from '../../Components';
import {Colors, Images} from '../../Theme';

export class SuggestedLists extends PureComponent {
  render() {
    return (
      <>
        <View style={{marginHorizontal: 25}}>
          <NrmText.T1D>Migrosta 70% indirimli ürünler</NrmText.T1D>
        </View>
        <NrmCard style={styles.card}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.ORANGE_LIGHT,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                width: 35,
                height: 20,
              }}>
              <NrmText.T2D
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: Colors.WHITE,
                }}>
                77%
              </NrmText.T2D>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ProductDetail')}>
              <Image
                source={Images.persil}
                style={{width: 100, height: 100}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 60,
              }}>
              <NrmText.T1G
                style={{textAlign: 'center', fontSize: 12}}
                numberOfLines={4}>
                Presil Power Jel 3750ml Çamaşır Deterjanı Gülün Büyüsü
              </NrmText.T1G>
            </View>
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
      </>
    );
  }
}

export default SuggestedLists;

const styles = StyleSheet.create({
  container: {},
  card: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 16,
    borderRadius: 20,
  },
  icon: {},

  textCard: {textAlign: 'center', alignSelf: 'center', fontSize: 12},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
