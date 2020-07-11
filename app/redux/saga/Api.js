import * as Service from '../../services/CustomHttpService';

doGet = (endpoint, body) => {
  return Service.axiosGet({
    body,
    endpoint,
  });
};



doPost = (endpoint, body) => {
  return Service.axiosPost({
    body,
    endpoint,
  });
};


export const doFoursquareGet = (filter) => {
  return Service.fourSquareGet({
   filter
  });
};

export const getProducts = () => {
  return doGet('/products');
};


export const postProducts = (body) => {
  return doPost('/products',body);
};

export const searchProducts = (filter) => {
  return doGet('/products'+filter);
};


export const getScans = () => {
  return doGet('/scans');
};


export const postScans = (body) => {
  return doPost('/scans',body);
};

export const searchScans = (filter) => {
  return doGet('/scans'+filter);
};

export const cartCalculate = (body) => {
  return doPost('/scans/cart/calculate',body);
};


export const searchPlaces = (filter) => {
  return doGet('/locations'+filter);
};


export const getCurrentPlace = (filter) => {

  return doGet('/locations'+filter);
};