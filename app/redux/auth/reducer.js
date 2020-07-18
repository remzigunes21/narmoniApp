import * as actionTypes from "../actionTypes";

const initialState = {
  user: null,
  loggedIn: false,

  loginInProgress: false,
  loginFailed: false,
  loginCompleted: false,

  autoLoginInProgress: false,
  autoLoginFailed: false,
  autoLoginCompleted: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === actionTypes.LOGIN_REQUEST) {
    return {
      ...state,
      loginInProgress: true,
      loginFailed: false,
      loginCompleted: false,
    };
  }
  if (type === actionTypes.LOGIN_SUCCESS) {
    return {
      ...state,
      user: payload,
      loggedIn: true,

      loginInProgress: false,
      loginFailed: false,
      loginCompleted: true,
    };
  }
  if (type === actionTypes.LOGIN_FAILURE) {
    return {
      ...state,
      loginInProgress: false,
      loginFailed: true,
      loginCompleted: true,
    };
  }
  if (type === actionTypes.LOGIN_RESET) {
    return {
      ...state,
      loginInProgress: false,
      loginFailed: false,
      loginCompleted: false,
    };
  }

  if (type === actionTypes.AUTO_LOGIN_REQUEST) {
    return {
      ...state,
      autoLoginInProgress: true,
      autoLoginFailed: false,
      autoLoginCompleted: false,
    };
  }
  if (type === actionTypes.AUTO_LOGIN_SUCCESS) {
    return {
      ...state,
      user: payload,
      loggedIn: true,

      autoLoginInProgress: false,
      autoLoginFailed: false,
      autoLoginCompleted: true,
    };
  }
  if (type === actionTypes.AUTO_LOGIN_FAILURE) {
    return {
      ...state,
      autoLoginInProgress: false,
      autoLoginFailed: true,
      autoLoginCompleted: true,
    };
  }
  if (type === actionTypes.AUTO_LOGIN_RESET) {
    return {
      ...state,
      autoLoginInProgress: false,
      autoLoginFailed: false,
      autoLoginCompleted: false,
    };
  }

  if (type === actionTypes.SET_PROFILE) {
    return {
      ...state,
      user: payload,
    };
  }
  return state;
};
