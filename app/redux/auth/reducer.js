import * as $ from '../actionTypes';

const initialState = {
  user: null,
  loggedIn: false,
  location: null,

  isEmailExist: false,
  checkEmailInProgress: false,
  checkEmailFailed: false,
  checkEmailCompleted: false,

  registerInProgress: false,
  registerFailed: false,
  registerCompleted: false,

  loginInProgress: false,
  loginFailed: false,
  loginCompleted: false,

  autoLoginInProgress: false,
  autoLoginFailed: false,
  autoLoginCompleted: false,

  updateProfileInProgress: false,
  updateProfileFailed: false,
  updateProfileCompleted: false,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  if (type === $.EMAIL_CHECK_REQUEST) {
    return {
      ...state,
      checkEmailInProgress: true,
      checkEmailFailed: false,
      checkEmailCompleted: false,
    };
  }
  if (type === $.EMAIL_CHECK_SUCCESS) {
    return {
      ...state,
      isEmailExist: payload,
      checkEmailInProgress: false,
      checkEmailFailed: false,
      checkEmailCompleted: true,
    };
  }
  if (type === $.EMAIL_CHECK_FAILURE) {
    return {
      ...state,

      checkEmailInProgress: false,
      checkEmailFailed: true,
      checkEmailCompleted: false,
    };
  }
  if (type === $.EMAIL_CHECK_RESET) {
    return {
      ...state,
      isEmailExist: false,
      checkEmailInProgress: false,
      checkEmailFailed: false,
      checkEmailCompleted: false,
    };
  }

  if (type === $.REGISTER_REQUEST) {
    return {
      ...state,
      registerInProgress: true,
      registerFailed: false,
      registerCompleted: false,
    };
  }
  if (type === $.REGISTER_SUCCESS) {
    return {
      ...state,
      user: payload,
      loggedIn: true,

      registerInProgress: false,
      registerFailed: false,
      registerCompleted: true,
    };
  }
  if (type === $.REGISTER_FAILURE) {
    return {
      ...state,
      registerInProgress: false,
      registerFailed: true,
      registerCompleted: true,
    };
  }
  if (type === $.REGISTER_RESET) {
    return {
      ...state,
      registerInProgress: false,
      registerFailed: false,
      registerCompleted: false,
    };
  }

  if (
    type === $.LOGIN_REQUEST ||
    type === $.SOCIAL_LOGIN_REQUEST ||
    type === $.APPLE_LOGIN_WITHOUT_EMAIL_REQUEST
  ) {
    return {
      ...state,
      loginInProgress: true,
      loginFailed: false,
      loginCompleted: false,
    };
  }
  if (type === $.LOGIN_SUCCESS) {
    return {
      ...state,
      user: payload,
      loggedIn: true,

      loginInProgress: false,
      loginFailed: false,
      loginCompleted: true,
    };
  }
  if (type === $.LOGIN_FAILURE) {
    return {
      ...state,
      loginInProgress: false,
      loginFailed: true,
      loginCompleted: true,
    };
  }
  if (type === $.LOGIN_RESET) {
    return {
      ...state,
      loginInProgress: false,
      loginFailed: false,
      loginCompleted: false,
    };
  }

  if (type === $.AUTO_LOGIN_REQUEST) {
    return {
      ...state,
      autoLoginInProgress: true,
      autoLoginFailed: false,
      autoLoginCompleted: false,
    };
  }
  if (type === $.AUTO_LOGIN_SUCCESS) {
    return {
      ...state,
      user: payload,
      loggedIn: true,

      autoLoginInProgress: false,
      autoLoginFailed: false,
      autoLoginCompleted: true,
    };
  }
  if (type === $.AUTO_LOGIN_FAILURE) {
    return {
      ...state,
      autoLoginInProgress: false,
      autoLoginFailed: true,
      autoLoginCompleted: true,
    };
  }
  if (type === $.AUTO_LOGIN_RESET) {
    return {
      ...state,
      autoLoginInProgress: false,
      autoLoginFailed: false,
      autoLoginCompleted: false,
    };
  }

  if (type === $.FAVORITE_SUMMARY_REQUEST) {
    let newFavlist = state.favoriteList;
    newFavlist.push(payload);

    return {
      ...state,
      favoriteList: newFavlist,
    };
  }
  if (type === $.UNFAVORITE_SUMMARY_REQUEST) {
    return {
      ...state,
      favoriteList: state.favoriteList.filter(sum => sum._id !== payload._id),
    };
  }
  if (type === $.GET_FAVORITE_LIST_SUCCESS) {
    return {
      ...state,
      favoriteList: payload,
    };
  }
  if (type === $.GET_STARTED_BOOKS_REQUEST) {
    return {
      ...state,
      getStartedBookListInProgress: true,
      getStartedBookListFailed: false,
      getStartedBookListCompleted: false,
    };
  }
  if (type === $.GET_STARTED_BOOKS_SUCCESS) {
    return {
      ...state,
      startedBookList: action.payload,
      getStartedBookListInProgress: false,
      getStartedBookListFailed: false,
      getStartedBookListCompleted: true,
    };
  }
  if (type === $.GET_STARTED_BOOKS_FAILURE) {
    return {
      ...state,
      getStartedBookListInProgress: false,
      getStartedBookListFailed: true,
      getStartedBookListCompleted: true,
    };
  }
  if (type === $.GET_STARTED_BOOKS_RESET) {
    return {
      ...state,
      getStartedBookListInProgress: false,
      getStartedBookListFailed: false,
      getStartedBookListCompleted: false,
    };
  }

  if (type === $.GET_FINISHED_BOOKS_REQUEST) {
    return {
      ...state,
      getFinishedBookListInProgress: true,
      getFinishedBookListFailed: false,
      getFinishedBookListCompleted: false,
    };
  }
  if (type === $.GET_FINISHED_BOOKS_SUCCESS) {
    return {
      ...state,
      finishedBookList: action.payload,
      getFinishedBookListInProgress: false,
      getFinishedBookListFailed: false,
      getFinishedBookListCompleted: true,
    };
  }
  if (type === $.GET_FINISHED_BOOKS_FAILURE) {
    return {
      ...state,
      getFinishedBookListInProgress: false,
      getFinishedBookListFailed: true,
      getFinishedBookListCompleted: true,
    };
  }
  if (type === $.GET_FINISHED_BOOKS_RESET) {
    return {
      ...state,
      getFinishedBookListInProgress: false,
      getFinishedBookListFailed: false,
      getFinishedBookListCompleted: false,
    };
  }

  if (type === $.UPDATE_PROFILE_REQUEST) {
    return {
      ...state,
      updateProfileInProgress: true,
      updateProfileFailed: false,
      updateProfileCompleted: false,
    };
  }
  if (type === $.UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      updateProfileInProgress: false,
      updateProfileFailed: false,
      updateProfileCompleted: true,
    };
  }
  if (type === $.UPDATE_PROFILE_FAILURE) {
    return {
      ...state,
      updateProfileInProgress: false,
      updateProfileFailed: true,
      updateProfileCompleted: true,
    };
  }
  if (type === $.UPDATE_PROFILE_RESET) {
    return {
      ...state,
      updateProfileInProgress: false,
      updateProfileFailed: false,
      updateProfileCompleted: false,
    };
  }

  if (type === $.SET_PROFILE) {
    return {
      ...state,
      user: payload,
    };
  }

  return state;
};
