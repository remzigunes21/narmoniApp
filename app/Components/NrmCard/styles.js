import { StyleSheet } from 'react-native'
import { Colors } from '@Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.GREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})
