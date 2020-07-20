import { observable } from 'mobx'

import { AuthStore } from './authStore'
import { UiStore } from './uiStore'
import { ProductsStore } from './productsStore'
import { ListsStore } from './listsStore'
import { PurchasesStore } from './purchasesStore'
import { SearchStore } from './searchStore'
import { KeyChainStore } from './KeyChainStore'
import { BuyForMe } from '../../Services/BuyForMe/BuyForMe'

export default new class {
  @observable authStore
  @observable uiStore
  @observable productsStore
  @observable listsStore
  @observable purchasesStore
  @observable searchStore
  @observable keyChainStore
  @observable buyForMeStore

  constructor() {
    this.authStore = new AuthStore()
    this.uiStore = new UiStore()
    this.productsStore = new ProductsStore()
    this.listsStore = new ListsStore(this)
    this.purchasesStore = new PurchasesStore(this)
    this.searchStore = new SearchStore()
    this.keyChainStore = new KeyChainStore()
    this.buyForMeStore = new BuyForMe()
  }
}()
