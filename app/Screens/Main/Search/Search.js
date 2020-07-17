import React, {PureComponent, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {NrmContainer, NrmIcon, NrmText, NrmCard} from '../../../Components';
import SearchBox from './SearchBox';
import {Colors} from '../../../Theme';
import SearchResult from '../../../Containers/SearchPages/SearchResult';
import {Divider} from 'react-native-elements';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      isSearchBarFocus: false,
    };
    this.ref = createRef();
    StatusBar.setBarStyle('dark-content', true);
  }

  updateSearchText = async val => {
    this.setState({val});
  };
  render() {
    const {searchText, isSearchBarFocus} = this.state;
    return (
      <NrmContainer style={{height: '100%', backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}>
          <TouchableOpacity>
            <NrmIcon
              name="angle-left"
              size={35}
              type="Fontisto"
              color={Colors.GREY_COLOR_LIGHT}
              style={styles.icon}
            />
          </TouchableOpacity>
          <SearchBox
            searchText={searchText}
            setSearchText={this.updateSearchText}
            onFocus={() => this.setState({isSearchBarFocus: true})}
            autoFocus={true}
          />
        </View>

        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonMl}>
              <NrmText.T2D style={styles.textCard}>Tümü</NrmText.T2D>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMl}>
              <NrmText.T2D style={styles.textCard}>El Deterjanı</NrmText.T2D>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMl}>
              <NrmText.T2D style={styles.textCard}>Toz</NrmText.T2D>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMl}>
              <NrmText.T2D style={styles.textCard}>Ariel</NrmText.T2D>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
            backgroundColor: Colors.WHITE_LIGHT,
            paddingVertical: 6,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NrmIcon
              name="filter"
              size={32}
              type="MaterialCommunityIcons"
              color={Colors.ORANGE_LIGHT}
              style={styles.icon}
            />
            <NrmText.T1D>Filtre</NrmText.T1D>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NrmIcon
              name="sort-amount-down-alt"
              size={32}
              type="FontAwesome5"
              color={Colors.ORANGE_LIGHT}
              style={styles.icon}
            />
            <NrmText.T1D style={{marginLeft: 12}}>Sırala</NrmText.T1D>
          </TouchableOpacity>
        </View>
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

export default Search;

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
