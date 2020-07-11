// import { Platform } from 'react-native'
// import axios from 'axios'
// import { observable, action, computed } from 'mobx'

// import AddAdress from '../../types/AddAdress'
// import SignUp from '../../types/SignUp'
// import ShowTimeSlots from '../../types/TimeSlots'

// const CancelToken = axios.CancelToken
// const source = CancelToken.source()

// export class BuyForMe {
//   baseUrl = 'https://nmbe.herokuapp.com/'

//   // Requests --

//   axiosGet = async (options) => {
//     let fullApiPath = `${this.baseUrl}${options.endpoint}`
//     try {
//       let res = await axios.get(fullApiPath)
//       return res
//     } catch (e) {
//       return e.response
//     }
//   }

//   axiosPost = async (options) => {
//     let fullApiPath = `${this.baseUrl}${options.endpoint}`
//     try {
//       console.log('path ', fullApiPath, 'body', options.body)
//       let res = await axios.post(fullApiPath, JSON.stringify(options.body), {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       return res
//     } catch (e) {
//       return e.response
//     }
//   }

//   doPost = (endpoint, body) => {
//     return this.axiosPost({
//       body,
//       endpoint,
//     })
//   }

//   doGet = (endpoint, body) => {
//     return this.axiosGet({
//       body,
//       endpoint,
//     })
//   }

//   // Auth --

//   @action
//   async checkeMembership(vendor, email) {
//     const path = 'check_memberships'
//     const queryString = `${path}?vendor=${vendor}&email=${email}`
//     const body = { vendor, email }
//     try {
//       let response = await this.doPost(queryString, body)
//       console.log(response)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   @action
//   async login(vendor, email, password) {
//     const body = {
//       vendor,
//       email,
//       password,
//     }
//     const path = 'login'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async sendSms(vendor, phone) {
//     const body = {
//       vendor,
//       phone,
//     }
//     const path = 'send_sms'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async enterOTP(vendor, id, url, otp) {
//     const body = {
//       vendor,
//       id,
//       url,
//       otp,
//     }
//     const path = 'enter_otp'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async signUp(signUp: SignUp) {
//     const body = { signUp }
//     const path = 'signup'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async productDetail(vendor, cookie, email, password, urls) {
//     const body = { vendor, cookie, email, password, urls }
//     const path = 'product_detail'

//     let response = await this.doPost(path, body)
//     console.log('BuyForMe -> productDetail -> response', response)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   // Cart --
//   @action
//   async addToCart(vendor, cookie, link, quantity, choice) {
//     const body = { vendor, cookie, link, quantity, choice }
//     const path = 'add_to_cart'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async removeFromCart(vendor, cookie, link, product_name) {
//     const body = { vendor, cookie, link, product_name }
//     const path = 'remove_from_cart'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async showCart(vendor, cookie, email, password) {
//     const body = { vendor, cookie, email, password }
//     const path = 'show_cart'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async migrosAlternative() {
//     const body = {}
//     const path = 'migros_alternative'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }
//   // -- Cart

//   // Address --

//   @action
//   async getVendors(vendors: AddAdress) {
//     const body = { vendors }
//     const path = 'get_vendors'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async showAdresses(vendor, cookie) {
//     const body = { vendor, cookie }
//     const path = 'show_adresses'

//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   @action
//   async addAdresses(addAddress: AddAdress) {
//     const body = { addAddress }
//     const path = 'add_address'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   async editAddress(addAddress: AddAdress) {
//     const body = { addAddress }
//     const path = 'edit_address'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }
//   async selectAddress(addAddress: AddAdress) {
//     const body = { addAddress }
//     const path = 'select_address'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }
//   // -- Address

//   // History --
//   async list_orders(vendor, cookie) {
//     const body = { vendor, cookie }
//     const path = 'list_orders'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }
//   // -- History

//   // Checkout --

//   async minimumOrder(vendor, cookie, email, password) {
//     const body = { vendor, cookie, email, password }
//     const path = 'minimum_order'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   async showTimeSlots(vendor, cookie, email, password) {
//     const body = { vendor, cookie, email, password }
//     const path = 'show_time_slots'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   async checkout(showTimeSlots: ShowTimeSlots) {
//     const body = { showTimeSlots }
//     const path = 'checkout'
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }
//   async getLocalProductPriceAndStock(locaiton, url) {
//     const body = { locaiton, url }
//     const path = `get_local_product_price_and_stock?location=${location}&url=${url}`
//     let response = await this.doPost(path, body)
//     try {
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }
// }
