import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {NrmContainer, NrmIcon, NrmText} from '../../../Components';
import NrmCustomheader from '../../../Components/NrmCustomheader/index';
import {Colors, Images, Fonts} from '../../../Theme';

export class ProductImageModal extends PureComponent {
  render() {
    return (
      <NrmContainer
        barStyle="dark-content"
        style={{backgroundColor: Colors.WHITE}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <NrmIcon
                name="angle-left"
                size={44}
                type="Fontisto"
                color={Colors.GREY_COLOR_LIGHT}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 140,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={Images.alertIcon}
                style={{width: 50, height: 50}}
                resizeMode="contain"
                style={{marginVertical: 12}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <NrmText.T1G
              style={{fontFamily: Fonts.family.semiBold, fontSize: 22}}>
              Fiyat Bildirimi
            </NrmText.T1G>
          </View>

          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.VIOLAET,
                borderRadius: 18,
                paddingHorizontal: 18,
                paddingVertical: 4,
              }}>
              <NrmText.T1G
                style={{fontFamily: Fonts.family.semiBold, fontSize: 22}}>
                Günlük
              </NrmText.T1G>
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                width: 2,
                backgroundColor: '#BCC3C3',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: Colors.VIOLAET,
                borderRadius: 18,
                paddingHorizontal: 18,
                paddingVertical: 4,
              }}>
              <NrmText.T1G
                style={{fontFamily: Fonts.family.semiBold, fontSize: 22}}>
                Hedef Fiyat
              </NrmText.T1G>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <NrmText.T1G
            style={{
              fontFamily: Fonts.family.semiBold,
              fontSize: 14,
              marginVertical: 10,
            }}>
            Ürünle ilgili günlük fiyat bildirimi gönder.
          </NrmText.T1G>
        </View>
      </NrmContainer>
    );
  }
}

export default ProductImageModal;
