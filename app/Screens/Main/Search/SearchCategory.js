import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  NrmContainer,
  NrmButton,
  NrmIcon,
  NrmCard,
  NrmText,
  NrmMdButton,
} from '../../../Components';
import SearchBox from './SearchBox';
import {Colors} from '../../../Theme';
import SearchFilterIcon from '../../../Containers/SearchPages/SearchFilterIcon';
import SearchResult from '../../../Containers/SearchPages/SearchResult';

export class SearchCategory extends PureComponent {
  render() {
    return (
      <NrmContainer style={{height: '100%', backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}>
          <NrmButton>
            <NrmIcon
              name="angle-left"
              size={35}
              type="Fontisto"
              color={Colors.GREY_COLOR_LIGHT}
              style={styles.icon}
            />
          </NrmButton>
          <SearchBox />
        </View>

        <NrmMdButton />

        <SearchFilterIcon />
        <ScrollView style={{flex: 1}}>
          <NrmCard style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SearchResult />
              <View
                style={{
                  height: '100%',
                  width: 2,
                  backgroundColor: '#BCC3C3',
                }}
              />
              <SearchResult />
            </View>
          </NrmCard>
          <View
            style={{
              backgroundColor: '#BCC3C3',
              width: '100%',
              height: 2,
              marginLeft: 10,
            }}
          />
        </ScrollView>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
      </NrmContainer>
    );
  }
}

export default SearchCategory;

const styles = StyleSheet.create({
  buttonMl: {
    backgroundColor: Colors.VIOLAET,
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {},

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 8,
  },
  textCard: {textAlign: 'center', alignSelf: 'center', fontSize: 12},
});
