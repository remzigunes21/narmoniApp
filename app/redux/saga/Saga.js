import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import * as Api from "./Api.js";
import * as actionTypes from "../actionTypes";

const actionData = function(type, payload) {
  return { type, payload };
};


export const getNearPlacesSaga = function*(action) {
  try {
    const {data} = yield call(Api.searchPlaces,action.payload);

    yield put(actionData(actionTypes.GET_NEAR_PLACES, data));

  } catch (error) {
    console.log('TCL: error', error);
  }
};

export const getProductSaga = function*(action) {
  try {
    const { data } = yield call(Api.getProducts);
    yield put(actionData(actionTypes.GET_PRODUCTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};
export const searchProductsSaga = function*(action) {
  try {
    const { data } = yield call(Api.searchProducts, action.payload);

    yield put(actionData(actionTypes.SEARCH_PRODUCTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};


export const postProductSaga = function*(action) {
  try {
    const {data} = yield call(Api.postProducts,action.payload);
    
    yield put(actionData(actionTypes.POST_PRODUCTS, data));

    yield put(
      actionData(actionTypes.GET_NEAR_PLACES, data.response.groups[0].items)
    );
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};




export const getScanSaga = function*(action) {
  try {
    const {data} = yield call(Api.getScans);
    yield put(actionData(actionTypes.GET_SCANS, data));
  } catch (error) {
    console.log('TCL: error', error);
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};
export const searchScansSaga = function*(action) {
  try {
    const {data} = yield call(Api.searchScans,action.payload);
  
    yield put(actionData(actionTypes.SEARCH_SCANS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};


export const postScanSaga = function*(action) {
  try {
    const {data} = yield call(Api.postScans,action.payload);
    
    yield put(actionData(actionTypes.POST_SCANS, data));
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Başarılı!",
        description:  "işleminiz devreye alınmıştır",
        type: "success"
      }))


  } catch (error) {
    console.log('TCL: error', error);
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};



export const cartCalculateSaga = function*(action) {
  try {
    const {data} = yield call(Api.cartCalculate,action.payload);
    
    yield put(actionData(actionTypes.CART_CALCULATE, data));



  } catch (error) {
    console.log('TCL: error', error);
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};


export default function*() {
  yield takeLatest(actionTypes.GET_NEAR_PLACES_REQUEST, getNearPlacesSaga);
  yield takeLatest(actionTypes.GET_PRODUCTS_REQUEST, getProductSaga);
  yield takeLatest(actionTypes.SEARCH_PRODUCTS_REQUEST, searchProductsSaga);
  yield takeLatest(actionTypes.POST_PRODUCTS_REQUEST, postProductSaga);
  yield takeLatest(actionTypes.GET_SCANS_REQUEST, getScanSaga);

  yield takeLatest(actionTypes.SEARCH_SCANS_REQUEST, searchScansSaga);
  yield takeLatest(actionTypes.POST_SCANS_REQUEST, postScanSaga);
  yield takeLatest(actionTypes.CART_CALCULATE_REQUEST, cartCalculateSaga);

}
