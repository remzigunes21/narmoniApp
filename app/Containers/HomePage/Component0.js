import React from 'react';
import {View, Text} from 'react-native';

export default () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'flex-start',
          paddingStart: 14,
          paddingTop: 17,
          width: 375,
          height: 158,
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          borderBottomEndRadius: 16,
          borderBottomStartRadius: 16,
          backgroundColor: 'rgba(255, 103, 95, 255)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 18,
              color: 'rgba(255, 255, 255, 255)',
              marginStart: 33,
            }}>
            Hoşgeldin,
          </Text>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontWeight: 'bold',
              fontSize: 26,
              color: 'rgba(255, 255, 255, 255)',
              marginStart: -88,
              marginTop: 21,
            }}>
            Adın Ne ?
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: 43,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 9.78,
                paddingTop: 9.86,
                width: 54,
                height: 54,
                borderRadius: 27,
                backgroundColor: 'rgba(255, 255, 255, 255)',
              }}>
              {/* <Path /> {Path is not supported. It can be exported as Svg} */}
              <View
                style={{
                  width: 34.09,
                  height: 34.1,
                  backgroundColor: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 12,
              color: 'rgba(255, 255, 255, 255)',
              marginStart: 33,
              marginTop: 49,
            }}>
            Bakırköy
          </Text>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 20,
              color: 'rgba(255, 255, 255, 255)',
              marginStart: -218,
              marginTop: 21,
            }}>
            Kocamustafapaşa
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: 43,
              marginTop: 16,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 10.27,
                paddingTop: 18.62,
                width: 54,
                height: 54,
                borderRadius: 27,
                backgroundColor: 'rgba(255, 255, 255, 255)',
              }}>
              {/* <Path /> {Path is not supported. It can be exported as Svg} */}
              <View
                style={{
                  width: 33.97,
                  height: 17.21,
                  backgroundColor: '#000000',
                }}
              />
            </View>
          </View>
          {/* <Path /> {Path is not supported. It can be exported as Svg} */}
          <View
            style={{
              width: 21,
              height: 30,
              backgroundColor: '#000000',
            }}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          marginStart: 16,
          marginTop: 42,
        }}>
        {/* <Path /> {Path is not supported. It can be exported as Svg} */}
        <View
          style={{
            width: 344,
            height: 220,
            backgroundColor: '#000000',
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Open Sans',
          fontSize: 20,
          color: 'rgba(83, 76, 75, 255)',
          marginStart: 20,
          marginTop: -251,
        }}>
        Migros’ ta 70 % İndirimli Ürünler
      </Text>
      <Text
        style={{
          fontFamily: 'Open Sans',
          fontSize: 20,
          color: 'rgba(83, 76, 75, 255)',
          marginStart: 20,
          marginTop: 242,
        }}>
        Carrefour’ da 70 % İndirimli Ürünler
      </Text>
      <Text
        style={{
          fontFamily: 'Open Sans',
          fontSize: 11,
          textAlign: 'center',
          color: 'rgba(83, 76, 75, 255)',
          marginStart: 14,
          marginTop: 124,
        }}>
        Persil Power Gel 1750 ml Çamaşır Deterjanı Gülün Büyüsü
      </Text>
      <View
        style={{
          alignItems: 'flex-start',
          marginStart: 16,
          marginTop: -166,
        }}>
        {/* <Path /> {Path is not supported. It can be exported as Svg} */}
        <View
          style={{
            width: 344,
            height: 220,
            backgroundColor: '#000000',
          }}
        />
      </View>
    </View>
  );
};
