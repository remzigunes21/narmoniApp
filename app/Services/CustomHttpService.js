import axios from 'axios';
import config from '../config/env-config';

export const axiosGet = async (options) => {
  let fullApiPath = `${config.API_PATH}${options.endpoint}`;
  try {
    let res = await axios.get(fullApiPath, {params: options.body});
    return res;
  } catch (e) {
    return e.response;
  }
};

export const axiosPost = async (options) => {
  let fullApiPath = `${config.API_PATH}${options.endpoint}`;
  try {
    console.log('path ', fullApiPath, 'body', options.body);
    let res = await axios.post(fullApiPath, JSON.stringify(options.body), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

//demo api calll/////////
export const fourSquareGet = async (options) => {
  let fullApiPath =
    'https://api.foursquare.com/v2/venues/explore?client_id=C222VRSXOX1LRBDSB2SO3PD5OPXZCZJ4SBCPLHT2QKGQGIRB&client_secret=HZVZWTVZXEMPFAF5M0BWPJOMPM2UMCLHRXDQ2ARP24EQBMKP&v=20180323&limit=1000&query=market&ll=' +
    options.filter;
  try {
    let res = await axios.get(fullApiPath);
    return res;
  } catch (e) {
    return e.response;
  }
};
