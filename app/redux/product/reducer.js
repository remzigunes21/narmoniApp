import * as actionTypes from "../actionTypes";

const initialState = {
  products: [],
  scans: [],
  scannedBarcode: null,
  newProduct: { place: null },
  newScan: { place: null },
  nearPlaces: [],
  alert:{  isVisible: false},
  selectedProduct:null,
  shoppingCart: {},
  cartCalculated:{},
};

export default ( state = initialState, action ) =>
{
  const { type, payload } = action;
  //Products
  if ( type === actionTypes.GET_PRODUCTS )
  {
    return {
      ...state,
      products: payload
    };
  }

  if ( type === actionTypes.SEARCH_PRODUCTS )
  {
    return {
      ...state,
      products: payload
    };
  }

  if ( type === actionTypes.SET_SCANNED_BARCODE )
  {
    return {
      ...state,
      scannedBarcode: payload
    };
  }
  if ( type === actionTypes.SET_NEW_PRODUCT )
  {
    return {
      ...state,
      newProduct: payload
    };
  }
  if ( type === actionTypes.SET_SELECTED_PRODUCT )
  {
    return {
      ...state,
      selectedProduct: payload,
    };
  }

  if ( type === actionTypes.ADD_PRODUCT_IN_SHOPPING_CART )
  {

    initialState.shoppingCart[payload.barcode] = payload

    return {
      ...state,
      shoppingCart: initialState.shoppingCart,
    };
  }
  if ( type === actionTypes.REMOVE_PRODUCT_FROM_SHOPPING_CART )
  {

    delete initialState.shoppingCart[payload.barcode]

    return {
      ...state,
      shoppingCart: initialState.shoppingCart,
    };
  }
  //Scans
  if ( type === actionTypes.GET_SCANS )
  {
    return {
      ...state,
      scans: payload,
    };
  }

  if ( type === actionTypes.SEARCH_SCANS )
  {
    return {
      ...state,
      scans: payload,
    };
  }

  if ( type === actionTypes.SET_NEW_SCAN )
  {
    return {
      ...state,
      newScan: payload,
    };
  }

  if ( type === actionTypes.CART_CALCULATE )
  {
    return {
      ...state,
      cartCalculated: payload,
    };
  }


  if ( type === actionTypes.GET_NEAR_PLACES )
  {
    return {
      ...state,
      nearPlaces: payload
    };
  }

  if ( type == actionTypes.SHOW_COMMON_ALERT )
  {
    return {
      ...state,
      alert: {
        isVisible: true,
        alertObj: { message: payload.message, description: payload.description, type: payload.type }
      }
    }
  }

  if ( action.type === actionTypes.HIDE_COMMON_ALERT )
  {
    return {
      ...state,
      alert: {
        isVisible: false
      }
    };
  }
  return state;
};
