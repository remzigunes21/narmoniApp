import * as $ from "../actionTypes";

const initialState = {
  activeCategory: null,

  categories: [],
  getCategoriesInProgress: false,
  getCategoriesFailed: false,
  getCategoriesCompleted: false,

  categorySummariesWithoutFirstItem: [],
  categorySummariesFirstItem: null,
  getCategorySummariesInProgress: false,
  getCategorySummariesFailed: false,
  getCategorySummariesCompleted: false
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  if (type == $.SET_ACTIVE_CATEGORY) {
    return {
      ...state,
      activeCategory: payload
    };
  }

  if (type == $.MAKE_SORT_CATEGORY_SUMMARIES_FROM_A_TO_Z) {
    const newCategory = state.categorySummariesWithoutFirstItem.sort((a, b) => a.name.localeCompare(b.name));
    return {
      ...state,
      categorySummariesWithoutFirstItem: newCategory
    };
  }
  if (type == $.MAKE_SORT_CATEGORY_SUMMARIES_FROM_Z_TO_A) {
    const newCategory = state.categorySummariesWithoutFirstItem.sort((a, b) => b.name.localeCompare(a.name));
    return {
      ...state,
      categorySummariesWithoutFirstItem: newCategory
    };
  }

  if (type == $.GET_CATEGORIES_REQUEST) {
    return {
      ...state,
      getCategoriesInProgress: true,
      getCategoriesFailed: false,
      getCategoriesCompleted: false
    };
  }

  if (type == $.GET_CATEGORIES_SUCCESS) {
    return {
      ...state,
      categories: payload,
      getCategoriesInProgress: false,
      getCategoriesFailed: false,
      getCategoriesCompleted: true
    };
  }

  if (type == $.GET_CATEGORIES_FAILURE) {
    return {
      ...state,
      getCategoriesInProgress: false,
      getCategoriesFailed: true,
      getCategoriesCompleted: true
    };
  }
  if (type == $.GET_CATEGORIES_RESET) {
    return {
      ...state,
      getCategoriesInProgress: false,
      getCategoriesFailed: false,
      getCategoriesCompleted: false
    };
  }

  if (type == $.GET_CATEGORY_SUMMARIES_REQUEST) {
    return {
      ...state,
      getCategorySummariesInProgress: true,
      getCategorySummariesFailed: false,
      getCategorySummariesCompleted: false
    };
  }

  if (type == $.GET_CATEGORY_SUMMARIES_SUCCESS) {
    return {
      ...state,
      categorySummariesWithoutFirstItem: payload.filter((e, i) => i !== 0),
      categorySummariesFirstItem: payload[0],
      getCategorySummariesInProgress: false,
      getCategorySummariesFailed: false,
      getCategorySummariesCompleted: true
    };
  }

  if (type == $.GET_CATEGORY_SUMMARIES_FAILURE) {
    return {
      ...state,
      getCategorySummariesInProgress: false,
      getCategorySummariesFailed: true,
      getCategorySummariesCompleted: true
    };
  }
  if (type == $.GET_CATEGORY_SUMMARIES_RESET) {
    return {
      ...state,
      getCategorySummariesInProgress: false,
      getCategorySummariesFailed: false,
      getCategorySummariesCompleted: false
    };
  }

  if (type == $.RESET_CATEGORY_SUMMARIES) {
    return {
      ...state,
      categorySummariesWithoutFirstItem: [],
      categorySummariesFirstItem: null
    };
  }

  return state;
};
