import * as $ from '../actionTypes';

const initialState = {
  currentSkus: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  if (type == $.GET_SKU_SUCCESS) {
    return {
      ...state,
      currentSkus: payload,
    };
  }

  return state;
};
