import * as $ from "../actionTypes";

const initialState = {
  searchResult: [],
  searchBlocks: [],
  searchInProgress: false,
  searchFailed: false,
  searchCompleted: false,

  searchHistory: []
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  if (type === $.GET_SEARCH_BLOCKS_SUCCESS) {
    return {
      ...state,
      searchBlocks: payload || []
    };
  }
  if (type === $.SEARCH_REQUEST)
    return {
      ...state,
      searchInProgress: true,
      searchFailed: false,
      searchCompleted: false
    };
  if (type === $.SEARCH_SUCCESS)
    return {
      ...state,
      searchResult: payload,
      searchInProgress: false,
      searchFailed: false,
      searchCompleted: true
    };
  if (type === $.SEARCH_FAILURE)
    return {
      ...state,
      searchInProgress: false,
      searchFailed: true,
      searchCompleted: true
    };
  if (type === $.SEARCH_RESET)
    return {
      ...state,
      searchInProgress: false,
      searchFailed: false,
      searchCompleted: false
    };

  if (type === $.CLEAR_SEARCH)
    return {
      ...state,
      searchResult: []
    };

  if (type === $.SET_SEARCH_HISTORY_REDUX)
    return {
      ...state,
      searchHistory: payload
    };

  return state;
};
