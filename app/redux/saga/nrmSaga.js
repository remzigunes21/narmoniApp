import {takeLatest, call, fork, put, select, delay} from 'redux-saga/effects';

import nrmApi from './configureApi';
import * as $ from '../actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import {Linking, Platform} from 'react-native';

import {GoogleSignin} from '@react-native-community/google-signin';

import {LoginManager} from 'react-native-fbsdk';

import DeviceInfo from 'react-native-device-info';
import Firebase from '../../Services/Firebase';
import reduxSagaFirebase from '../../Services/Firebase';

const activeDeviceId = DeviceInfo.getUniqueId();

const $A = function(type, payload) {
  return {type, payload};
};

const demoSaga = function*(action) {
  console.log('action', action);
  try {
    const data = yield call(Firebase.db.getMultipleSkus, action.payload);
    console.log('action.payload', action.payload);
    console.log('data', data);
    yield put($A($.GET_SKU_SUCCESS, data));
    console.log('data', data);
  } catch (error) {}
};

///login start/////

const tryEmailCheckSaga = function*(action) {
  try {
    const {data} = yield call(nrmApi.emailCheck, action.payload);

    yield put($A($.EMAIL_CHECK_SUCCESS, data.isEmailExist));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Hata!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );

    yield put($A($.EMAIL_CHECK_FAILURE));
  }
};

const tryRegisterSaga = function*(action) {
  try {
    const {data} = yield call(nrmApi.register, {
      activeDeviceId,
      ...action.payload,
    });

    if (data.token) {
      yield call(AsyncStorage.setItem, 'byk-token', data.token);
      // TODO: move asyncstorage to storage js in ordeer to collect all function
      nrmApi.setToken(data.token);
    }
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'Register'}));

    yield put($A($.REGISTER_SUCCESS, data.user));

    yield put($A($.SEND_DEVICE_INFO_REQUEST));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Hata!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );

    yield put($A($.REGISTER_FAILURE));
  }
};

const tryLoginSaga = function*(action) {
  try {
    const {data} = yield call(nrmApi.login, {
      activeDeviceId,
      ...action.payload,
    });

    if (data.token) {
      yield call(AsyncStorage.setItem, 'byk-token', data.token);
      // TODO: move asyncstorage to storage js in ordeer to collect all function
      nrmApi.setToken(data.token);
    }

    yield put($A($.LOGIN_SUCCESS, data.user));
    yield put($A($.SEND_DEVICE_INFO_REQUEST));
    yield put($A($.GA_SIGN_IN_REQUEST));
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'LoginWithEmail'}));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Hata!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );

    yield put($A($.LOGIN_FAILURE));
  }
};

const trySocialLoginSaga = function*(action) {
  try {
    if (action.payload.appleId) {
      yield call(
        AsyncStorage.setItem,
        'apple-login',
        JSON.stringify(action.payload),
      );
    }
    const {data} = yield call(nrmApi.socialLogin, {
      activeDeviceId,
      ...action.payload,
    });

    if (data.token) {
      yield call(AsyncStorage.setItem, 'byk-token', data.token);
      // TODO: move asyncstorage to storage js in ordeer to collect all function
      nrmApi.setToken(data.token);
    }

    yield put($A($.LOGIN_SUCCESS, data.user));
    yield put($A($.SEND_DEVICE_INFO_REQUEST));
    yield put($A($.GA_SIGN_IN_REQUEST));
    if (action.payload.facebookId) {
      yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'LoginWithFacebook'}));
    } else if (action.payload.googleId) {
      yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'LoginWithGoogle'}));
    }
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Hata!',
        subtitle: 'Bir şeyler yanlış gitti', //TODO: don't show system errors to user
        emoji: 'confused',
      }),
    );

    yield put($A($.LOGIN_FAILURE));
  }
};
const tryAppleWithoutLoginSaga = function*(action) {
  try {
    const {data} = yield call(nrmApi.appleLogin, {
      activeDeviceId,
      ...action.payload,
    });

    if (data.token) {
      yield call(AsyncStorage.setItem, 'byk-token', data.token);
      // TODO: move asyncstorage to storage js in ordeer to collect all function
      nrmApi.setToken(data.token);
    }

    yield put($A($.LOGIN_SUCCESS, data.user));
    yield put($A($.SEND_DEVICE_INFO_REQUEST));
    yield put($A($.GA_SIGN_IN_REQUEST));
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'LoginWithApple'}));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Hata!',
        subtitle: 'Bir şeyler yanlış gitti', //TODO: don't show system errors to user
        emoji: 'confused',
      }),
    );

    yield put($A($.LOGIN_FAILURE));
  }
};

const tryAutoLoginSaga = function*(action) {
  try {
    const token = yield call(AsyncStorage.getItem, 'byk-token');
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'AutoLogin'}));
    // TODO: move asyncstorage to storage js in ordeer to collect all function
    if (token) {
      nrmApi.setToken(token);

      const {data} = yield call(nrmApi.profile);

      yield put($A($.AUTO_LOGIN_SUCCESS, data));
      yield put($A($.GA_SIGN_IN_REQUEST));

      if (data) {
        yield delay(3000);
        yield put($A($.SEND_DEVICE_INFO_REQUEST));
      }
    } else {
      yield put($A($.AUTO_LOGIN_FAILURE));
    }
  } catch (error) {
    yield put($A($.AUTO_LOGIN_FAILURE));
  }
};

const tryLogoutSaga = function*(action) {
  try {
    yield call(AsyncStorage.setItem, 'byk-token', '');
    nrmApi.setToken();

    const user = yield select(state => state.auth.user);
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'Logout'}));

    try {
      const isGoogleSignedIn = yield call(GoogleSignin.isSignedIn);
      if (user && user.googleId && isGoogleSignedIn) {
        yield call(GoogleSignin.revokeAccess);
        yield call(GoogleSignin.signOut);
      } else if (user.facebookId) LoginManager.logOut();
    } catch (error) {}
    yield delay(500);
    yield put($A($.RESET_APP));

    yield put($A($.HIDE_SPINNER_OVERLAY));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Hata!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );
  }
};

//////login end//////

/////search start/////////

const trySearchSaga = function*(action) {
  try {
    const response = yield call(nrmApi.search, action.payload);

    yield put($A($.SEARCH_SUCCESS, response.data));
  } catch (error) {
    yield put($A($.SEARCH_FAILURE));
  }
};

const tryGetSearchHistoryApiSaga = function*(action) {
  try {
    const response = yield call(nrmApi.getSummaryMulti, action.payload);

    yield put($A($.SET_SEARCH_HISTORY_REDUX, response.data));
    yield put(
      $A($.GA_LOG_EVENT_REQUEST, {
        name: 'SearchHistoryExistAndGettingSummaryInfo',
        params: action.payload,
      }),
    );
  } catch (error) {}
};

const tryGetSearchHistorySaga = function*(action) {
  try {
    const searchHistoryJSON = yield call(AsyncStorage.getItem, 'searchHistory');
    // TODO: move asyncstorage to storage js in ordeer to collect all function
    let searchHistory = [];
    if (searchHistoryJSON) {
      const parsed = JSON.parse(searchHistoryJSON);
      searchHistory = Array.isArray(parsed) ? parsed : [];
    }

    yield put($A($.GET_SEARCH_HISTORY_API, searchHistory));
  } catch (error) {}
};

const tryAddSearchHistorySaga = function*(action) {
  try {
    const searchHistoryJSON = yield call(AsyncStorage.getItem, 'searchHistory');
    // TODO: move asyncstorage to storage js in ordeer to collect all function
    let searchHistory = [];
    if (searchHistoryJSON) {
      const parsed = JSON.parse(searchHistoryJSON);
      searchHistory = Array.isArray(parsed) ? parsed : [];
    }

    if (searchHistory.length === LOCAL_SEARCH_HISTORY_THRESHOLD)
      searchHistory.pop();

    const summaryId = action.payload;
    if (searchHistory.includes(summaryId)) {
      const indexOfSummary = searchHistory.indexOf(summaryId);
      searchHistory.splice(indexOfSummary, 1);
    }
    searchHistory.unshift(action.payload);

    yield call(
      AsyncStorage.setItem,
      'searchHistory',
      JSON.stringify(searchHistory),
    );
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'AddSearchHistory'}));
    yield put($A($.GET_SEARCH_HISTORY_API, searchHistory));
  } catch (error) {}
};

const tryClearSearchHistorySaga = function*(action) {
  try {
    yield call(AsyncStorage.setItem, 'searchHistory', JSON.stringify([]));

    yield put($A($.SET_SEARCH_HISTORY_REDUX, []));
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'ClearSearch'}));
  } catch (error) {}
};

//////////search end/////

///////profile start////////

const tryUpdateProfileSaga = function*(action) {
  try {
    yield call(nrmApi.updateProfile, action.payload);
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'UpdateProfile'}));

    yield put($A($.UPDATE_PROFILE_SUCCESS));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Uyarı!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );
    yield put($A($.UPDATE_PROFILE_FAILURE));
  }
};
const resetPasswordSaga = function*(action) {
  try {
    yield call(nrmApi.resetPassword, action.payload);
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Başarılı',
        subtitle: 'E-postanıza yeni şifreniz iletildi',
        emoji: 'thumbsup',
      }),
    );
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'ResetPassword'}));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Uyarı!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );
  }
};
const sendContactMeMessageSaga = function*(action) {
  try {
    yield call(nrmApi.sendContactMe, action.payload);

    yield put($A($.SEND_DEVICE_INFO_REQUEST));
    yield put($A($.SEND_CONTACT_ME_MESSAGE_SUCCESS));
    yield put($A($.GA_LOG_EVENT_REQUEST, {name: 'SendContactMe'}));
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Uyarı!',
        subtitle: typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );
    yield put($A($.SEND_CONTACT_ME_MESSAGE_FAILURE));
  }
};

const tryGetProfileSaga = function*(action) {
  try {
    const token = yield call(AsyncStorage.getItem, 'byk-token');
    // TODO: move asyncstorage to storage js in ordeer to collect all function
    if (token) {
      const {data} = yield call(nrmApi.profile);

      yield put($A($.SET_PROFILE, data));
    }
  } catch (error) {}
};

const resentEmailConfirmedSaga = function*(action) {
  try {
    const {data} = yield call(nrmApi.emailConfirm);
  } catch (error) {
    yield put(
      $A($.SHOW_COMMON_ALERT, {
        title: 'Uyarı!',
        subtitle: 'Bir şeyler yanlış gitti',
        emoji: 'confused',
      }),
    );
  }
};

///////profile end////////

// prettier-ignore
export default (nrmSaga = function* () {

  
  yield takeLatest($.EMAIL_CHECK_REQUEST, tryEmailCheckSaga);
  yield takeLatest($.REGISTER_REQUEST, tryRegisterSaga);
  yield takeLatest($.LOGIN_REQUEST, tryLoginSaga);
  yield takeLatest($.AUTO_LOGIN_REQUEST, tryAutoLoginSaga);
  yield takeLatest($.LOGOUT_REQUEST, tryLogoutSaga);
  yield takeLatest($.SOCIAL_LOGIN_REQUEST, trySocialLoginSaga);
  yield takeLatest($.APPLE_LOGIN_WITHOUT_EMAIL_REQUEST, tryAppleWithoutLoginSaga);
  yield takeLatest($.GET_PROFILE, tryGetProfileSaga);
  
  yield takeLatest($.UPDATE_PROFILE_REQUEST, tryUpdateProfileSaga);
  yield takeLatest($.SEND_CONTACT_ME_MESSAGE_REQUEST, sendContactMeMessageSaga);

  
  yield takeLatest($.SEARCH_REQUEST, trySearchSaga);
  
  yield takeLatest($.GET_SEARCH_HISTORY_STORAGE, tryGetSearchHistorySaga);
  yield takeLatest($.ADD_SEARCH_HISTORY_STORAGE, tryAddSearchHistorySaga);
  yield takeLatest($.GET_SEARCH_HISTORY_API, tryGetSearchHistoryApiSaga);
  yield takeLatest($.CLEAR_SEARCH_HISTORY, tryClearSearchHistorySaga);

 
  yield takeLatest($.RESET_PASSWORD_REQUEST, resetPasswordSaga);


  yield takeLatest($.RESENT_EMAIL_CONFIRM_REQUEST,resentEmailConfirmedSaga);
  yield takeLatest($.GET_SKU_REQUEST,demoSaga);

});
