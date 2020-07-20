import React from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../Theme';

function BottomTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label}
              style={styles.itemContainer}>
              {label === 'Home' && (
                <Fontisto
                  name="shopping-store"
                  color={isFocused ? Colors.PRIMARY : Colors.DARK}
                  size={24}
                />
              )}
              {label === 'Search' && (
                <Fontisto
                  name="search"
                  color={isFocused ? Colors.PRIMARY : Colors.DARK}
                  size={24}
                />
              )}

              {label === 'MyList' && (
                <Fontisto
                  name="shopping-basket"
                  color={isFocused ? Colors.PRIMARY : Colors.DARK}
                  size={24}
                />
              )}

              {label === 'Profile' && (
                <>
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    color={isFocused ? Colors.PRIMARY : Colors.DARK}
                    size={28}
                  />
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.GREY_LIGHTEST,
  },
  itemContainer: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 18,
  },
  activeItemContainer: {
    backgroundColor: Colors.GREY_LIGHTEST,
  },
  activeTitle: {
    color: 'red',
  },
  badgeContainer: {
    position: 'absolute',
    right: 16,
    top: 2,
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    zIndex: 99,
  },
  badgeContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
