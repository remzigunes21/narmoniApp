import { StyleSheet } from 'react-native'
import { Screen, Colors } from '@Theme'

export default StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  icon: {
    width: 80,
    height: 80,
  },
  formContainer: {
    flex: 5,
    alignItems: 'center',
  },
  formHeadersContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  otherLoginsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLine: {
    flex: 1,
    marginHorizontal: 20,
    height: 1,
    backgroundColor: Colors.PRIMARY,
  },
})
