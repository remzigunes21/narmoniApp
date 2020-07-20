import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {NrmCard, NrmText, NrmIcon} from '../../Components';
import {Colors, Images} from '../../Theme';

export class SearchResult extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: 1,
    };
  }

  render() {
    return (
      <NrmCard style={{width: 180, marginHorizontal: 8}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Image
              source={Images.persil}
              style={{width: 80, height: 80, marginTop: 10}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginBottom: 50,
            }}>
            <NrmIcon
              name="heart-circle-outline"
              size={32}
              type="MaterialCommunityIcons"
              color={Colors.GREY_LIGHTER}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',

            marginVertical: 4,
            flexDirection: 'row',
          }}>
          <NrmText.T1D
            style={{
              fontSize: 24,
              fontWeight: '300',
              textAlign: 'center',
            }}>
            4.1
          </NrmText.T1D>

          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              width: 100,
              height: 60,
              marginHorizontal: 8,
            }}>
            <NrmText.T1G
              style={{textAlign: 'center', fontSize: 12}}
              numberOfLines={4}>
              Presil Power Jel 3750ml Çamaşır Deterjanı Gülün Büyüsü
            </NrmText.T1G>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <NrmText.T1G
            style={{textAlign: 'center', fontSize: 12}}
            numberOfLines={4}>
            trendyol
          </NrmText.T1G>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.ORANGE_LIGHT,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 12,
              width: 35,
              height: 20,
            }}
            disabled={true}>
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
          <NrmText.T2D
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            156.90
          </NrmText.T2D>
        </View>

        <TouchableOpacity
          style={
            this.state.active == 1
              ? styles.selectButton
              : styles.notSelectButton
          }
          onPress={() => this.setState({active: 1})}>
          <NrmText.T1G
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: Colors.ORANGE_LIGHT,
              fontWeight: 'bold',
            }}
            numberOfLines={4}>
            Sepete Ekle
          </NrmText.T1G>
        </TouchableOpacity>
      </NrmCard>
    );
  }
}

export default SearchResult;

const styles = StyleSheet.create({
  card: {
    flex: 1,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    borderRadius: 20,
  },
  icon: {},

  textCard: {textAlign: 'center', alignSelf: 'center', fontSize: 12},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  selectButton: {
    borderWidth: 1,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 4,
    borderRadius: 10,
    borderColor: Colors.ORANGE_LIGHT,
  },
  notSelectButton: {
    borderWidth: 1,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 4,
    borderRadius: 10,
    backgroundColor: Colors.ORANGE_LIGHT,
  },
});
