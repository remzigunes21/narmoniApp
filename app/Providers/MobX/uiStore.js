import { observable, action } from 'mobx'
import { Animated } from 'react-native'
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter'

export class UiStore {
  @observable isLoading = false
  @observable isSearching = false
  @observable mainScrollEnabled = true
  @observable currentPage = 'home'
  @observable isDetailsPageVisible = false

  homePageScrollRef = null
  detailsPageScrollRef = null

  fetchSkuDetailsAgain = new EventEmitter()

  homeTopBarAnim = new Animated.Value(1)

  @action
  setLoading(isLoading) {
    this.isLoading = isLoading
  }

  @action
  setSearching(isSearching) {
    this.isSearching = isSearching
    this.setMainScrollEnabled(!isSearching)
  }

  @action
  setCurrentPage(page) {
    //home - purchases
    this.currentPage = page
  }

  @action setMainScrollEnabled(isEnabled) {
    if (isEnabled === this.mainScrollEnabled || (this.isSearching && !this.mainScrollEnabled)) {
      return
    }
    this.mainScrollEnabled = isEnabled
    Animated.timing(this.homeTopBarAnim, {
      toValue: isEnabled ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  @action setDetailsPageVisible(isVisible) {
    this.isDetailsPageVisible = isVisible
  }

  @action setHomePageScrollRef(ref) {
    this.homePageScrollRef = ref
  }

  @action setDetailsPageScrollRef(ref) {
    this.detailsPageScrollRef = ref
  }
}
