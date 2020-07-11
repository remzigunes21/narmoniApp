import {createNavigator} from './AppNavigator';
import {NavigationActions, StackActions} from '@react-navigation/compat';

export default {
  createNavigator,

  reset: (navigation, route) => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({routeName: route})],
    });
    if (navigation) {
      navigation.dispatch(resetAction);
    }
  },
};
