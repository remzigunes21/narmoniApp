import React from 'react';

import store from '../redux/configureStore';
import * as $ from '../redux/actionTypes';

class BaseScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  nav() {
    return this.props.navigation;
  }
  $() {
    return $;
  }

  $store() {
    return store;
  }

  getScreenState() {
    return this.nav().state;
  }
  getAllParams() {
    return this.nav().state.params || {};
  }
  getParam(paramName, defaultValue) {
    return this.nav().getParam(paramName, defaultValue);
  }
  setParams(params) {
    this.nav().setParams(params);
  }
  navigate(screen, params) {
    this.nav().navigate(screen, params);
  }
  goBack() {
    this.nav().goBack();
  }
  push() {
    this.nav().push(routeName, params, action);
  }

  popToTop() {
    this.nav().popToTop();
  }

  dismiss() {
    this.nav().navigation.dismiss();
  }

  dispatchAction() {
    if (arguments.length === 2) {
      this._dispatchActionWithType(...arguments);
    } else {
      if (arguments.length === 1) {
        if (arguments[0].type) {
          this._dispatchAction(...arguments);
        } else {
          this._dispatchAction({type: arguments[0]});
        }
      }
    }
  }

  listenStore(callback) {
    store.subscribe(callback);
  }

  _dispatchAction(action) {
    store.dispatch(action);
  }

  _dispatchActionWithType(type, payload) {
    this._dispatchAction({type, payload});
  }
}

export default BaseScreen;
