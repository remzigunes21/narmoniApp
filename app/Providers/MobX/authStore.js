import {Platform} from 'react-native';
import {observable, action} from 'mobx';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-community/async-storage';
import Firebase from '../../Services/Firebase';
import mainStore from './mainStore';
import {GoogleSignin} from '@react-native-community/google-signin';

export class AuthStore {
  user = null;
  @observable initCompleted = false;
  @observable locationInfo = null;
  @observable suggestedList = [];
  vendor = 'remzi';

  logs = [];

  async init() {
    let authFlag = false;

    if (this.onAuthStateChangedListener) {
      this.onAuthStateChangedListener();
    }
    this.onAuthStateChangedListener = Firebase.app
      .auth()
      .onAuthStateChanged(async user => {
        const localUser = JSON.parse(await AsyncStorage.getItem('user'));

        if (user || localUser) {
          if (!user) {
            user = {...localUser};
          } else {
            await AsyncStorage.setItem('user', JSON.stringify(user));
          }

          if (!authFlag) {
            this.onLogin(user);
          }
          authFlag = true;
        } else {
          this.onLogout();
        }
      });
  }

  @action
  async onLogin(user) {
    this.user = user;
    try {
      let locationData = await Firebase.db.getUserLocationData(user.uid);

      if (locationData) {
        this.locationInfo = locationData;
      } else {
        this.locationInfo = 'İstanbul';
      }
      const markets = await Firebase.db.getAvailableMarketsOfLocation(
        this.locationInfo,
      );
      mainStore.listsStore.setAvailableMarkets(markets);
      mainStore.searchStore.setFilterMarkets(markets);

      this.addAllFirebaseListeners();
      const userDoc = await Firebase.app
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get();

      if (!userDoc.data()) {
        await Firebase.app
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            lists: {
              [user.uid]: {name: 'Akıllı Liste', items: {}, timestamps: {}},
            },
            city: 'İstanbul',
          });
      }

      await mainStore.listsStore.selectList(user.uid);
      // get ready before user enters the list page
      await mainStore.listsStore.fetchListDataFromFirebase(
        mainStore.listsStore.selectedList,
      );

      await mainStore.buyForMeStore.checkeMembership(
        this.vendor,
        this.user.email,
      );
      // console.log('AuthStore -> onLogin -> vendor', vendor)
      this.storeDataVendor();
      this.initCompleted = true;
    } catch (error) {
      console.log('error', error);
      this.initCompleted = true;
    }
  }

  storeDataVendor = async () => {
    try {
      await AsyncStorage.setItem('vendor', this.vendor);

      await AsyncStorage.setItem('email', this.user.email);
    } catch (error) {}
  };

  removeStoreVendor = async () => {
    try {
      await AsyncStorage.removeItem('vendor');
    } catch (error) {}
  };

  @action
  onLogout() {
    this.user = null;
    this.removeFirebaseListeners();
    this.removeStoreVendor();
    this.initCompleted = true;
  }

  @action
  addAllFirebaseListeners() {
    this.addFirebaseListenerForUser();
    this.addFirebaseListenerForSuggestedLists();
    this.addFirebaseListenerForSearchConfig();
    this.addFirebaseListenerForAllMarkets();
    this.addFirebaseListenerForCategories();
  }

  @action
  addFirebaseListenerForSuggestedLists() {
    this.suggestedListsListener = Firebase.app
      .firestore()
      .collection('config')
      .doc('suggestedLists')
      .onSnapshot(
        async snapshot => {
          const data = snapshot.data();
          this.suggestedList = data;
          mainStore.listsStore.onSuggestedListsChange(data);
        },
        err => {},
      );
  }
  @action
  addFirebaseListenerForSearchConfig() {
    this.searchConfigListener = Firebase.app
      .firestore()
      .collection('config')
      .doc('search')
      .onSnapshot(
        async snapshot => {
          const data = snapshot.data();
          console.log('data', data);
          mainStore.searchStore.searchApiUrlFromFirabase(data.url);
          mainStore.searchStore.setQuery(data.query);
          mainStore.searchStore.setBarcodeApiQuery(data.barcode_search);
        },
        err => {},
      );
  }
  @action
  addFirebaseListenerForAllMarkets() {
    this.allMarketsListener = Firebase.app
      .firestore()
      .collection('config')
      .doc('markets')
      .onSnapshot(
        async snapshot => {
          const data = snapshot.data();
          mainStore.searchStore.setAllMarkets(data.names);
        },
        err => {},
      );
  }
  @action
  addFirebaseListenerForCategories() {
    this.categoriesListener = Firebase.app
      .firestore()
      .collection('config')
      .doc('categories')
      .onSnapshot(
        async snapshot => {
          const data = snapshot.data();

          mainStore.searchStore.setCategories(data.all);
        },
        err => {},
      );
  }
  @action
  addFirebaseListenerForUser() {
    this.userListener = Firebase.app
      .firestore()
      .collection('users')
      .doc(this.user.uid)
      .onSnapshot(
        snapshot => {
          const data = snapshot.data();

          mainStore.listsStore.onFirebaseDataChange(data);
          mainStore.purchasesStore.onFirebaseDataChange(data);
        },
        err => {},
      );
  }

  @action
  removeFirebaseListeners() {
    if (this.userListener) {
      this.userListener();
      this.userListener = null;
    }
    if (this.suggestedListsListener) {
      this.suggestedListsListener();
      this.suggestedListsListener = null;
    }
    if (this.searchConfigListener) {
      this.searchConfigListener();
      this.searchConfigListener = null;
    }
    if (this.allMarketsListener) {
      this.allMarketsListener();
      this.allMarketsListener = null;
    }
    if (this.categoriesListener) {
      this.categoriesListener();
      this.categoriesListener = null;
    }
  }

  @action
  signInWithEmailAndPassword(email, password) {
    email = email.trim();
    password = password.trim();
    return new Promise((resolve, reject) => {
      Firebase.auth
        .signInWithEmailAndPassword(email, password)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }

  @action
  createUserWithEmailAndPassword(email, password) {
    email = email.trim();
    password = password.trim();
    return new Promise((resolve, reject) => {
      Firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }

  @action
  signOut() {
    return Firebase.auth.signOut();
  }

  @action
  signInWithGoogle() {
    return new Promise(async (resolve, reject) => {
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
          '1042544046239-7npuqqn67ieumn5g9ek7829kmk5p8ao9.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        //   webClientId: '1042544046239-trt5akufdden59u6m374q8ut3vhkhst4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true,
        forceConsentPrompt: true,
      });
      try {
        const {accessToken, idToken} = await GoogleSignin.signIn();
        const credential = Firebase.auth.GoogleAuthProvider.credential(
          idToken,
          accessToken,
        );
        const loginCredential = await firebase
          .auth()
          .signInWithCredential(credential);
        resolve(loginCredential);
      } catch (error) {
        reject(error);
      }
    });
  }

  @action
  signInWithFacebook() {
    return new Promise((resolve, reject) => {
      LoginManager.logOut();

      LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then(res => {
          if (res.isCancelled) {
            reject('user canceled request');
          }
          AccessToken.getCurrentAccessToken()
            .then(data => {
              if (!data) {
                reject('Something went wrong obtaining the users access token');
              }

              const credential = Firebase.auth.facebookAuthProviderCredential(
                data.accessToken,
              );
              Firebase.auth
                .signInWithCredential(credential)
                .then(firebaseUserCredential => resolve(firebaseUserCredential))
                .catch(err => {
                  console.log('fbsdkerr', err);
                  reject(err);
                });
            })
            .catch(err => {
              console.log('err', err);
              reject(err);
            });
        })
        .catch(err => {
          console.log('err', err);
          reject(err);
        });
    });
  }

  @action
  sendPasswordResetEmail(email) {
    return Firebase.auth.sendPasswordResetEmail(email);
  }

  @action
  reauthenticate = currentPassword => {
    const user = Firebase.app.auth().currentUser;
    if (user !== null) this.displayName = user.displayName;
    const cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    return user.reauthenticateWithCredential(cred);
  };

  @action
  changeUserPassword = (currentPassword, newPassword) => {
    return this.reauthenticate(currentPassword).then(() =>
      Firebase.app.auth().currentUser.updatePassword(newPassword),
    );
  };
  @action updateAvailableMarkets = async () => {
    let availableMarkets = await Firebase.db.getAvailableMarketsOfLocation(
      this.locationInfo,
    );
    mainStore.listsStore.setAvailableMarkets(availableMarkets);
    mainStore.searchStore.setFilterMarkets(availableMarkets);
    mainStore.listsStore.onSuggestedListsChange(this.suggestedList);
  };

  @action async saveLocationInfo(city) {
    try {
      await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.user.uid)
        .update({city: city});
      this.locationInfo = city;
      this.updateAvailableMarkets();
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
}
