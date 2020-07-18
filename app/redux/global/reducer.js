import * as actionTypes from "../actionTypes";

const initialState = {
  showSpinner: false,
  tabbedAppStarted: false,

  isCommonAlertVisible: false,
  commonAlertTitle: "",
  commonAlertSubtitle: "",
  commonAlertEmoji: "",

  contactMeMessageInProgress: false,
  contactMeMessageFailed: false,
  contactMeMessageCompleted: false,

  isVersionUpdateModalVisible: false,
  newVersionDowloadLink: "",

  dailyNotification: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === actionTypes.GET_DAILY_NOTIFICATION_STATUS_SUCCESS) {
    return {
      ...state,
      dailyNotification: payload.isDailyNotificationActive,
    };
  }

  if (type === actionTypes.SET_DAILY_NOTIFICATION_STATUS_REQUEST) {
    return {
      ...state,
      dailyNotification: !state.dailyNotification,
    };
  }

  if (type === actionTypes.SEND_CONTACT_ME_MESSAGE_REQUEST) {
    return {
      ...state,
      contactMeMessageInProgress: true,
      contactMeMessageFailed: false,
      contactMeMessageCompleted: false,
    };
  }
  if (type === actionTypes.SEND_CONTACT_ME_MESSAGE_SUCCESS) {
    return {
      ...state,
      contactMeMessageInProgress: false,
      contactMeMessageFailed: false,
      contactMeMessageCompleted: true,
    };
  }
  if (type === actionTypes.SEND_CONTACT_ME_MESSAGE_FAILURE) {
    return {
      ...state,
      contactMeMessageInProgress: false,
      contactMeMessageFailed: true,
      contactMeMessageCompleted: true,
    };
  }
  if (type === actionTypes.SEND_CONTACT_ME_MESSAGE_RESET) {
    return {
      ...state,
      contactMeMessageInProgress: false,
      contactMeMessageFailed: false,
      contactMeMessageCompleted: false,
    };
  }

  if (type == actionTypes.SHOW_SPINNER_OVERLAY) {
    return {
      ...state,
      showSpinner: true,
    };
  }

  if (type == actionTypes.HIDE_SPINNER_OVERLAY) {
    return {
      ...state,
      showSpinner: false,
    };
  }

  if (type == actionTypes.SHOW_COMMON_ALERT) {
    return {
      ...state,
      isCommonAlertVisible: true,
      commonAlertTitle: payload.title,
      commonAlertSubtitle: payload.subtitle,
      commonAlertEmoji: payload.emoji,
    };
  }

  if (action.type === actionTypes.HIDE_COMMON_ALERT) {
    return {
      ...state,
      isCommonAlertVisible: false,
    };
  }

  if (type === actionTypes.SET_TABBED_APP_STARTED) {
    return {
      ...state,
      tabbedAppStarted: true,
    };
  }

  if (type === actionTypes.TOGGLE_VERSION_UPDATE_MODAL) {
    return {
      ...state,
      isVersionUpdateModalVisible: !state.isCommonAlertVisible,
    };
  }

  if (type === actionTypes.SET_NEW_VERSION_DOWNLOAD_LINK) {
    return {
      ...state,
      newVersionDowloadLink: action.payload,
    };
  }

  return state;
};
