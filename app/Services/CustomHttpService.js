import axios from 'axios';
import store from '../redux/configureStore';
import * as $ from '../redux/actionTypes';
export default class CustomHttpService {
  config;
  token;

  setConfig = config => {
    this.config = config;
  };

  setToken = token => {
    this.token = token;
  };

  fetch = options => {
    let fullApiPath = `${this.config.API_PATH}${options.endpoint}`;
    let body = options.body || {};
    let method = options.method || 'get';
    let headers = options.headers || {};
    if ([undefined, null].includes(headers.token)) {
      delete headers.token;
    }

    let fetchOptions = {
      method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (method == 'post') {
      fetchOptions.body = JSON.stringify(body);
    }

    return this._doFetch(fullApiPath, fetchOptions);
  };

  _doFetch = (fullApiPath, fetchOptions) => {
    return new Promise((resolve, reject) => {
      fetch(fullApiPath, fetchOptions)
        .then(res => {
          res
            .json()
            .then(data => {
              if (res.status === 401) {
                store.dispatch({
                  type: $.SHOW_COMMON_ALERT,
                  payload: {
                    title: 'Çıkış Yapılıyor...',
                    subtitle: 'Başka cihazdan giriş yapılmıştır.',
                    emoji: 'iphone',
                  },
                });
                setTimeout(() => {
                  store.dispatch({
                    type: $.LOGOUT_REQUEST,
                  });
                  reject({
                    ...res,
                    _bodyText: data,
                  });
                }, 2000);
              } else if (parseInt(res.status / 100, 10) !== 2) {
                const {errors, error} = data;
                if (errors && Array.isArray(errors)) reject(errors[0].msg);
                else if (error) reject(error);
              } else resolve(data);
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  };

  axiosPost = options => {
    let fullApiPath = `${this.config.API_PATH}${options.endpoint}`;
    let body = options.body || {};

    return axios.post(fullApiPath, body);
  };
}
