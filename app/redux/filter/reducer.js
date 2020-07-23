import * as $ from "../actionTypes";

const initialState = {
  notStarted: true,
  started: true,
  finished: true,

  selectedCategories: []
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  if (type == $.SET_FILTER_NOT_STARTED) {
    return {
      ...state,
      notStarted: payload
    };
  }
  if (type == $.SET_FILTER_STARTED) {
    return {
      ...state,
      started: payload
    };
  }
  if (type == $.SET_FILTER_FINISHED) {
    return {
      ...state,
      finished: payload
    };
  }
  if (type == $.SET_FILTER_SELECTED_CATEGORIES) {
    return {
      ...state,
      selectedCategories: payload
    };
  }

  return state;
};
