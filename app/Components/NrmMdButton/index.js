import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../Theme';
import {NrmText} from '..';

const NrmMdButton = props => {
  const [active, setActive] = useState(null);

  const selected = {borderWidth: 2, borderColor: 'red'};
  const unSelected = {border: 'none'};

  const onPress = active => {
    setActive(active);

    props.navigation.navigate('SearchCategory');
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => onPress('1')}
        style={[styles.buttonMl, active === '1' ? selected : unSelected]}>
        <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonMl, active === '2' ? selected : unSelected]}
        onPress={() => onPress('2')}>
        <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress('3')}
        style={[styles.buttonMl, active === '3' ? selected : unSelected]}>
        <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress('4')}
        style={[styles.buttonMl, active === '4' ? selected : unSelected]}>
        <NrmText.T2D style={styles.textCard}>1750ml</NrmText.T2D>
      </TouchableOpacity>
    </View>
  );
};

export default NrmMdButton;

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
