import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {NrmIcon} from '../../../Components';
import {popup} from '../../../Common/Helpers';

const SearchBox = ({
  goBack,
  setIsSetsearchBarFocus,
  searchText,
  setSearchText,
}) => {
  const [searchTextInput, setsearchTextInput] = useState('');
  const inputRef = useRef();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={goBack}>
        <NrmIcon
          name="search1"
          size={24}
          color={Colors.ORANGE_LIGHT}
          type="AntDesign"
        />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        // autoFocus

        onFocus={() => {
          inputRef.current.focus();
          setIsSetsearchBarFocus(true);
        }}
        onBlur={() => {
          console.log('blur');
          Keyboard.dismiss();
        }}
        onEndEditing={() => {
          console.log('end');
          Keyboard.dismiss();
        }}
        style={styles.input}
        multiline={false}
        value={searchTextInput}
        onChangeText={val => {
          setsearchTextInput(val);
        }}
        onSubmitEditing={event => {
          setsearchTextInput(event.nativeEvent.text);
          if (event.nativeEvent.text.length <= 2) {
            popup.warning('En az 3 harf girmelisiniz.');
          } else {
            storeRecentSearches(event.nativeEvent.text);
            setSearchText(event.nativeEvent.text);
          }
          // generateLog.search(event.nativeEvent.text)
        }}
        placeholderTextColor={Colors.GREY + '99'}
        placeholder="Deterjan  (1623 sonuç)"
      />
    </View>
  );
};

export default SearchBox;

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
    fontFamily: 'verdana',
    fontWeight: Platform.OS === 'android' ? 'normal' : undefined,
    flex: 1,
    height: '100%',
    color: Colors.GREY,
  },
  buttonContainer: {
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
