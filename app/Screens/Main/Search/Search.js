import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Keyboard,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  NrmContainer,
  NrmIcon,
  NrmText,
  NrmCard,
  NrmMdButton,
} from '../../../Components';
import {connect} from 'react-redux';

import {Colors, Fonts} from '../../../Theme';
import SearchResult from '../../../Containers/SearchPages/SearchResult';
import SearchFilterIcon from '../../../Containers/SearchPages/SearchFilterIcon';

import {isTablet, SCREEN_MARGIN} from '../../../config/constant';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      isFocus: false,
      searchInProgress: false,
    };
  }

  updateSearchText = async val => {
    this.setState({val});
  };
  render() {
    return (
      <NrmContainer
        barStyle="dark-content"
        style={{height: '100%', backgroundColor: '#fff'}}>
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
          {this._renderTextInput()}
        </View>
        <NrmMdButton
          navigation={this.props.navigation}
          onPress={() => this.props.navigation.navigate('SearchCategory')}
        />

        <SearchFilterIcon />

        {!this.state.isFocus
          ? this.renderSearchDashboard()
          : this.state.searchText
          ? this.renderSearchResult()
          : null}
      </NrmContainer>
    );
  }

  renderCategory = () => {
    return <NrmText.T1G style={{color: Colors.BLACK}}>category</NrmText.T1G>;
  };

  _renderTextInput = () => (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <NrmIcon
          name="search1"
          size={24}
          color={Colors.ORANGE_LIGHT}
          type="AntDesign"
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onChangeText={this._onChangeText}
        autoCapitalize="none"
        placeholder="Deterjan  (1623 sonuç)"
        value={this.state.searchText}
        placeholderTextColor={Colors.GREY + '99'}
        onFocus={() => this.setState({isFocus: true})}
      />
      {this.state.searchText ? (
        <TouchableOpacity
          style={styles.clearIcon}
          onPress={this._onClearBtnClicked}>
          <NrmIcon
            name="barcode"
            color={Colors.BLACK}
            size={!isTablet ? 15 : 24}
            style={{marginRight: 12}}
            type="MaterialCommunityIcons"
          />

          <NrmIcon
            name="circle-with-cross"
            color={Colors.BLACK}
            size={!isTablet ? 15 : 21}
            style={{marginRight: 12}}
            type="Entypo"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );

  renderSearchDashboard = () => {
    return (
      <>
        <ScrollView
          contentContainerStyle={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {this.renderCategory()}
        </ScrollView>
      </>
    );
  };

  renderSearchResult = () => {
    const {searchInProgress} = this.state;

    return (
      <>
        {searchInProgress ? (
          <ActivityIndicator color={Colors.FACEBOOK} size="large" />
        ) : (
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
        )}
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
      </>
    );
  };

  _onClearBtnClicked = () => {
    this.setState({searchText: ''});
  };

  _onChangeText = searchText => {
    this.setState({searchText});
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    marginHorizontal: 10,

    backgroundColor: Colors.GREY_LIGHTER,
    height: 40,
    alignItems: 'center',
    borderRadius: 16,
    width: 340,
  },
  input: {
    fontSize: 17,
    fontFamily: Fonts.family.semiBold,
    fontWeight: Platform.OS === 'android' ? 'normal' : undefined,
    flex: 1,
    height: '100%',
    color: Colors.GREY,
  },
  searchButtonContainer: {
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
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
  clearIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  title: {
    fontFamily: Fonts.family.semiBold,
    fontSize: 18,
    lineHeight: 22,
    marginVertical: 10,
  },
});
