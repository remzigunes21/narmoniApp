/**
 * API çağrılarını yazdığımız sınıf adı.
 */

export default class NrmApi {
  httpService;
  token;

  setHttpService = httpService => {
    this.httpService = httpService;
  };

  setToken = token => {
    this.token = token;
    return this.httpService.setToken(token);
  };

  // POST request
  _doPost = (endpoint, body) => {
    return this.httpService.fetch({
      pureHttpMode: false,
      method: 'post',
      body,
      endpoint,
    });
  };

  _doPostWithAuth = (endpoint, body) => {
    // TODO CHECK TOKEN IS NULL DONT SEND RETURN FALSE
    return this.httpService.fetch({
      pureHttpMode: false,
      method: 'post',
      body,
      endpoint,
      headers: {token: this.token},
    });
  };

  _doPostAxios = (endpoint, body) => {
    return this.httpService.axiosPost({
      body,
      endpoint,
    });
  };

  // GET request
  _doGet = endpoint => {
    return this.httpService.fetch({
      pureHttpMode: false,
      method: 'get',
      endpoint,
    });
  };

  _doGetWithAuth = endpoint => {
    return this.httpService.fetch({
      pureHttpMode: false,
      method: 'get',
      endpoint,
      headers: {token: this.token},
    });
  };

  _doPostWithHeader = (endpoint, headers, body) => {
    return this.httpService.fetch({
      pureHttpMode: false,
      method: 'post',
      body,
      headers,
      endpoint,
    });
  };

  fetchRaw(fullPath) {
    return fetch(fullPath, {method: 'get'}).then(res => {
      return res.json();
    });
  }

  emailCheck = email => {
    return this._doPost('/auth/check-email-exist', {email});
  };

  register = registerData => {
    return this._doPost('/auth/register', registerData);
  };

  login = loginData => {
    return this._doPost('/auth/login', loginData);
  };

  socialLogin = loginData => {
    return this._doPost('/auth/social-media', loginData);
  };
  appleLogin = loginData => {
    return this._doPost('/auth/social-media/apple', loginData);
  };

  profile = () => {
    return this._doGetWithAuth('/auth/autologin');
  };

  emailConfirm = () => {
    return this._doGetWithAuth(`/auth/email-confirm`);
  };

  updateProfile = newConfig => {
    return this._doPostWithAuth('/readers/profile', newConfig);
  };
  sendContactMe = newConfig => {
    return this._doPostWithAuth('/contact/app', newConfig);
  };

  getHomeBlocks = () => {
    return this._doGet('/readers/home');
  };
  getSearchBlocks = () => {
    return this._doGet('/readers/search-blocks');
  };

  getSummaryDetail = id => {
    return this._doGetWithAuth(`/summaries/${id}/detail`);
  };

  getSummaryMulti = ids => {
    return this._doPost(`/summaries/multi`, {ids});
  };

  setBookCurrentPart = (id, currentPartIndex) => {
    return this._doPostWithAuth(`/summaries/${id}`, {currentPartIndex});
  };

  search = sum => {
    return this._doGet(`/readers/search?sum=${sum}`);
  };

  getFavoriteList = () => {
    return this._doGetWithAuth(`/readers/favorites`);
  };

  favoriteSummary = _id => {
    return this._doPostWithAuth(`/readers/favorites/create`, {_id});
  };

  unfavoriteSummary = _id => {
    return this._doPostWithAuth(`/readers/favorites/destroy`, {_id});
  };

  finishSummary = _id => {
    return this._doPostWithAuth(`/summaries/${_id}/finished`, {
      isFinished: true,
    });
  };

  sendDeviceInfo = device => {
    return this._doPostWithAuth(`/readers/device`, device);
  };

  getCategories = () => {
    return this._doGet('/categories');
  };

  getCategorySummaries = id => {
    return this._doGet(`/categories/${id}`);
  };

  getMansCompositionLists = () => {
    return this._doGet('/composition-list');
  };

  savePremiumSubscriptionReceipt = purchase => {
    return this._doPostWithAuth('/iap/save-receipt', purchase);
  };

  deactivatePremium = () => {
    return this._doGetWithAuth('/iap/deactivate');
  };
  getDailyNotification = () => {
    return this._doGetWithAuth('/readers/settings/daily-notification');
  };
  setDailyNotification = isDailyNotificationActive => {
    return this._doPostWithAuth(
      '/readers/settings/daily-notification',
      isDailyNotificationActive,
    );
  };

  resetPassword = email => {
    return this._doPost('/auth/reset', email);
  };

  getPreLoadHomeBlocks = () => {
    return this._doGet('/readers/home/pre-load');
  };

  getStartedBooks = () => {
    return this._doGetWithAuth('/readers/starteds');
  };

  getFinishedBooks = () => {
    return this._doGetWithAuth('/readers/finisheds');
  };
}
