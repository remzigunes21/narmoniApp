import { observable, action } from 'mobx'
import Firebase from '@Services/Firebase'
import axios from 'axios'


export class ProductsStore {
  @observable currentSkus = []
  @observable isLoading = false

  @action setCurrentSkus(newSkus) {
    this.currentSkus = newSkus
  }
  @action async getSkus(skuIds) {
    // generateLog.viewedDetail(skuIds)
    try {
      this.isLoading = true
      const skus = await this.getSkusFromFirebase(skuIds)
      this.isLoading = false
      this.currentSkus = skus.sort((a, b) => b.market_count - a.market_count)
    } catch (error) {
      this.isLoading = false
    }
  }

  async getDocsFromElasticByID(ids) {
    try {

    } catch (error) {
      return []
    }
  }

  async getSkusFromFirebase(skuIds) {
    try {
      let skus = await Firebase.db.getMultipleSkus(skuIds)
      skus = skus.sort((a, b) => (a.prices.length > b.prices.length ? 1 : -1))
      return skus
    } catch (error) {
      return []
    }
  }
}
