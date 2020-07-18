import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {NrmContainer, NrmIcon, NrmCard, NrmText} from '../../Components';
import {Colors, Images} from '../../Theme';

export class ProductPageColor extends PureComponent {
  render() {
    return (
      <NrmContainer barStyle="dark-content">
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <NrmIcon
              name="angle-down"
              size={44}
              type="Fontisto"
              color={Colors.GREY_COLOR_LIGHT}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <NrmCard style={{marginVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',

              maginHorizantal: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Image
                source={Images.persilmd}
                style={{width: 100, height: 100}}
                resizeMode="contain"
                style={{marginVertical: 12}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <NrmText.T2D>Pembenin Gücü</NrmText.T2D>
            </View>
          </View>
        </NrmCard>
      </NrmContainer>
    );
  }
}

export default ProductPageColor;

const styles = StyleSheet.create({
  container: {},
  icon: {},
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
