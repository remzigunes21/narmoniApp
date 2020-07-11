import firebase from '@react-native-firebase/app'

import { Platform } from 'react-native'

var app = firebase

const Firebase = {
  initializeApp: async () => {
    const genericConfig = {
      clientId: '1042544046239-7npuqqn67ieumn5g9ek7829kmk5p8ao9.apps.googleusercontent.com',
      databaseURL: 'https://narmoni-e8761.firebaseio.com',
      storageBucket: 'narmoni-e8761.appspot.com',
      messagingSenderId: '1042544046239',
      projectId: 'narmoni-e8761',
      persistence: true,
    }
    const iosConfig = {
      ...genericConfig,
      appId: '1:1042544046239:ios:fa96c8776535ac0c9eb2aa',
      apiKey: 'AIzaSyCW9bc85N1eTX2mPJpGxQUY83r_5bevFxI',
    }

    const androidConfig = {
      ...genericConfig,
      appId: '1:1042544046239:android:60cd603885722d939eb2aa',
      apiKey: 'AIzaSyC-MHxU5ZdaIv5sXRxadVHm6MwuY55STNI',
    }
  },

  get app() {
    return firebase
  },

  auth: {
    get currentUser() {
      return app.auth().currentUser
    },

    signInWithEmailAndPassword: (email, password) => {
      return app.auth().signInWithEmailAndPassword(email, password)
    },

    createUserWithEmailAndPassword: (email, password) => {
      return app.auth().createUserWithEmailAndPassword(email, password)
    },

    signInWithCredential: (credential) => {
      return app.auth().signInWithCredential(credential)
    },

    sendPasswordResetEmail: (email) => {
      return app.auth().sendPasswordResetEmail(email)
    },

    signOut: () => {
      return app.auth().signOut()
    },

    onAuthStateChanged: (callback) => {
      return app.auth().onAuthStateChanged(callback)
    },

    facebookAuthProviderCredential: (accessToken) => {
      return firebase.auth.FacebookAuthProvider.credential(accessToken)
    },
  },

  db: {
    getAvailableMarketsOfLocation: (city) => {
      return new Promise((resolve, reject) => {
        app
          .firestore()
          .collection('location')
          .doc(city.toLocaleLowerCase('tr'))
          .get()
          .then((snapshot) => {
            let data = snapshot.data()
            resolve(data.markets)
          })
          .catch((err) => {
            console.log('err', err)
            reject(err)
          })
      })
    },

    getUserLocationData: (uid) => {
      return new Promise((resolve, reject) => {
        app
          .firestore()
          .collection(`users`)
          .doc(uid)
          .get()
          .then((snapshot) => {
            if (!snapshot.data()) {
              return resolve()
            }
            let city = snapshot.data().city
            resolve(city)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getSkuById: (skuId) => {
      return new Promise((resolve, reject) => {
        app
          .firestore()
          .collection('skus')
          .doc(skuId)
          .get()
          .then((snapshot) => {
            resolve(snapshot.data())
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getMultipleSkus: (skuIds) => {
      return new Promise((resolve, reject) => {
        let promises = []
        skuIds.forEach((id) => {
          promises.push(Firebase.db.getSkuById(id))
        })

        Promise.all(promises)
          .then((skus) => {
            resolve(skus.filter((v) => v))
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    setBarcode: (docId) => {
      return new Promise((resolve, reject) => {
        app
          .firestore()
          .collection('barcode_searches')
          .doc(docId)
          .set({})
          .then(() => {
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}

export default Firebase
