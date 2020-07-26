import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

const commonContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginVertical: 10,
  borderRadius: 10,
};

export default StyleSheet.create({
  container: {
    ...commonContainerStyle,
    backgroundColor: Colors.PRIMARY,
  },
  containerDisabled: {
    ...commonContainerStyle,
    backgroundColor: Colors.GREY,
  },
  containerLink: {
    paddingHorizontal: 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
