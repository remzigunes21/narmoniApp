import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NrmCard, NrmText, NrmIcon} from '../../Components';
import {Colors} from '../../Theme';

export class ProductDetailRate extends PureComponent {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <NrmText.T1D
            style={{
              fontSize: 44,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            4.1
          </NrmText.T1D>
        </View>
        <View style={{marginVertical: 8, marginHorizontal: 32}}>
          <NrmText.T1D
            style={{fontSize: 12, fontWeight: '400', textAlign: 'center'}}>
            Puanlamak için dokunun!
          </NrmText.T1D>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <NrmIcon
                name="star"
                size={32}
                type="AntDesign"
                color={Colors.ORANGE_LIGHT}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NrmIcon
                name="star"
                size={32}
                type="AntDesign"
                color={Colors.ORANGE_LIGHT}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NrmIcon
                name="star"
                size={32}
                type="AntDesign"
                color={Colors.ORANGE_LIGHT}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NrmIcon
                name="star"
                size={32}
                type="AntDesign"
                color={Colors.ORANGE_LIGHT}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NrmIcon
                name="star"
                size={32}
                type="AntDesign"
                color={Colors.GREY_LIGHT}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProductDetailRate;

const styles = StyleSheet.create({
  icon: {},
});
