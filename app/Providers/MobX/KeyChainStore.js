import * as Keychain from 'react-native-keychain'
import { observable, action } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'

export class KeyChainStore {
  @observable userName = ''
  @observable password = ''
  @observable cookie = null
  @observable marketName = ''

  @observable status = ''

  constructor(mainStore) {
    this.mainStore = mainStore
  }
  // Store the credentials
  @action
  async setCredentials(username, password) {
    try {
      const cookie = await AsyncStorage.getItem('cookie')
      await Keychain.setGenericPassword(username, password, cookie)
    } catch (error) {
      console.log("Keychain couldn't be saved!", error)
    }
  }

  // Retrieve the credentials
  @action
  async getCredentials() {
    try {
      const options = {
        authenticationPrompt: {
          title: 'Authentication needed',
          subtitle: 'Subtitle',
          description: 'Some descriptive text',
          cancel: 'Cancel',
        },
      }
      const credentials = await Keychain.getGenericPassword(options)
      if (credentials) {
        return 'succesfull' + { ...credentials } + ',' + status
      } else {
        return status
      }
    } catch (error) {
      return error
    }
  }
}
