import { observable, action, computed } from 'mobx'
import axios from 'axios'

export const SEARCH_VIEW_TYPES = {
  RECENT_SEARCH: 'RECENT_SEARCH',
  CATEGORY: 'CATEGORY',
}
const CancelToken = axios.CancelToken
let source

let searchApiQuery = null
let barcodeApiQuery = null
export class SearchStore {
  @observable searchApiUrl = ''
  @observable searchResults = []
  @observable allMarkets = []
  @observable filterMarkets = []
  @observable filterPrice = ''
  @observable page = 0
  @observable result_count = 0
  @observable categories = []
  @observable searchViewType = null
  @observable searchFirstOpen = true

  @action setSearchFirstOpen(val) {
    this.searchFirstOpen = val
  }
  @action setSearchViewType(type) {
    this.searchViewType = type
  }
  @action setQuery(q) {
    searchApiQuery = q
  }
  @action setBarcodeApiQuery(q) {
    barcodeApiQuery = q
  }
  @action setCategories(allCategories) {
    this.categories = allCategories
  }
  @action setFilterPrice(filter) {
    this.filterPrice = filter
    this.page = 0
  }
  @computed get filteredMarketCount() {
    return this.filterMarkets.length
  }
  @action setAllMarkets(markets) {
    this.allMarkets = markets
  }
  @action setPage(pageNum) {
    this.page = pageNum
  }
  @action setFilterMarkets(markets) {
    this.filterMarkets = markets
    this.page = 0
  }
  @action clearSearchResults() {
    this.searchResults = null
    this.result_count = null
  }
  @action searchApiUrlFromFirabase(url) {
    this.searchApiUrl = url
  }
  @action
  searchBarcode = (barcodeCode) => {
    if (!this.searchApiUrl || !barcodeApiQuery) {
      return null
    }

    barcodeApiQuery.query.bool.filter[0].terms.barcodes = [barcodeCode]

    return new Promise((resolve, reject) => {
      axios
        .post(this.searchApiUrl, barcodeApiQuery)
        .then((response) => {
          console.log('response api', response)
          if (response) {
            resolve(parseResponse(response.data.hits.hits)[0])
          } else {
            reject(response)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  @action search(searchText) {
    if (!this.searchApiUrl) {
      return null
    }
    if (source) {
      source.cancel('iptal istek : ' + source.token)
    }
    source = CancelToken.source()
    let body = searchApiQuery
    body.query.bool.must.multi_match.query = searchText
    if (this.filterMarkets.length) {
      body.query.bool.filter = { terms: { markets: this.filterMarkets } }
    } else {
      body.query.bool.filter = null
    }
    if (this.filterPrice.length) {
      body.sort = []
      body.sort.push({ best_price: { order: this.filterPrice } })
    } else {
      body.sort = ['_score']
    }
    body.from = body.size * this.page

    axios
      .post(this.searchApiUrl, body, { cancelToken: source.token })
      .then((response) => {
        this.result_count = response.data.hits.total.value
        if (this.page) {
          this.searchResults = [...this.searchResults, ...response.data.hits.hits]
        } else {
          this.searchResults = parseResponse(response.data.hits.hits)
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message)
        } else {
          // handle error
        }
      })
  }
}

const parseResponse = (hitsFromAPI) => {
  let parsedArray = []

  hitsFromAPI.forEach((item) => {
    let newItem = item._source
    newItem.objectID = item._id
    parsedArray.push(newItem)
  })

  parsedArray = parsedArray.sort((a, b) => b.market_count - a.market_count)

  return parsedArray
}
