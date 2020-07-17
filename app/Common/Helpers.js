import {showMessage} from 'react-native-flash-message';
import _ from 'lodash';
import moment from 'moment';

import {Colors, Images} from '../Theme';

const popup = {
  error: (title, description, onPress, duration) => {
    showMessage({
      floating: true,
      message: title,
      description,
      backgroundColor: Colors.ERROR,
      onPress,
      duration: duration || 2500,
    });
  },
  warning: (title, description, onPress, duration) => {
    showMessage({
      floating: true,
      message: title,
      description,
      type: 'warning',
      onPress,
      duration: duration || 2500,
    });
  },
  success: (title, description, onPress, duration) => {
    showMessage({
      floating: true,
      message: title,
      description,
      type: 'success',
      onPress,
      duration: duration || 2500,
    });
  },
};

const parsePrice = (val, showIcon) => {
  return showIcon
    ? `₺${Number(val).toFixed(2)}`
    : `${Number(val).toFixed(2)} TL`;
};

moment.locale('tr', {
  months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split(
    '_',
  ),
});

const dateHelper = {
  formatDate: date => {
    return moment(date).format('D MMMM YYYY');
  },

  getDayKey: date => {
    return (
      moment(date).year() +
      '-' +
      moment(date).month() +
      '-' +
      moment(date).day()
    );
  },

  getMonthKey: date => {
    return moment(date).year() + '-' + moment(date).month();
  },

  dayKeyToObject: dayKey => {
    const [day, month, year] = dayKey.split('-');
    return {
      date: new Date(year, month, day),
      month,
      year,
      day,
    };
  },

  getMonthName: (month, isShortName) => {
    const monthsShort = [
      'Oca',
      'Şub',
      'Mar',
      'Nis',
      'May',
      'Haz',
      'Tem',
      'Ağu',
      'Eyl',
      'Eki',
      'Kas',
      'Ara',
    ];
    const monthsLong = [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ];
    return isShortName ? monthsShort[month] : monthsLong[month];
  },

  convertDateToDatePickerString: date => {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    let dateString = day + '-' + month + '-' + year;
    return dateString;
  },

  convertDatePickerStringToDate: str => {
    let [day, month, year] = str.split('-');
    day = Number(day);
    month = Number(month) - 1;
    year = Number(year);
    return new Date(year, month, day);
  },
};

const capitalizeString = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

String.prototype.turkishToUpper = function() {
  var string = this;
  var letters = {i: 'İ', ş: 'Ş', ğ: 'Ğ', ü: 'Ü', ö: 'Ö', ç: 'Ç', ı: 'I'};
  string = string.replace(/(([iışğüçö]))+/g, function(letter) {
    return letters[letter];
  });
  return string.toUpperCase();
};

String.prototype.turkishToLower = function() {
  var string = this;
  var letters = {İ: 'i', I: 'ı', Ş: 'ş', Ğ: 'ğ', Ü: 'ü', Ö: 'ö', Ç: 'ç'};
  string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter) {
    return letters[letter];
  });
  return string.toLowerCase();
};

const localCapitalizeString = str => {
  return str.charAt(0).turkishToUpper() + str.slice(1).turkishToLower();
};

const getMarketLogo = market => {
  return (
    'https://narmoni.s3.eu-central-1.amazonaws.com/market_logos/' +
    market.toLowerCase() +
    '.jpg'
  );
};

const generateShareMessage = (userId, listId) =>
  `Narmoni ile oluşturduğum alışveriş listesine göz at! \nApple'da açmak için -\nnarmoni://list/${userId}/${listId}\n\nAndroid'de açmak için -\nwww.narmoni.com.tr/list/${userId}/${listId}`;

const generatePushID = (function() {
  var PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  var lastPushTime = 0;

  var lastRandChars = [];

  return function() {
    var now = new Date().getTime();
    var duplicateTime = now === lastPushTime;
    lastPushTime = now;

    var timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }
    if (now !== 0)
      throw new Error('We should have converted the entire timestamp.');

    var id = timeStampChars.join('');

    if (!duplicateTime) {
      for (i = 0; i < 12; i++) {
        lastRandChars[i] = Math.floor(Math.random() * 64);
      }
    } else {
      for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
        lastRandChars[i] = 0;
      }
      lastRandChars[i]++;
    }
    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }
    if (id.length != 20) throw new Error('Length should be 20.');

    return id;
  };
})();

const generateLog = {
  search: searchValue => {
    mainStore.authStore.addLog({
      type: 'search',
      data: {
        searchValue,
      },
    });
  },
  viewedDetail: skuIds => {
    mainStore.authStore.addLog({
      type: 'detailViewed',
      data: {
        skuIds,
      },
    });
  },
  addedPurchase: (skuId, market, amount) => {
    mainStore.authStore.addLog({
      type: 'purchaseAdded',
      data: {
        skuId,
        market,
        amount,
      },
    });
  },
  addedItemToList: skuId => {
    mainStore.authStore.addLog({
      type: 'itemAddedToList',
      data: {
        skuId,
      },
    });
  },
};

export {
  popup,
  parsePrice,
  generatePushID,
  dateHelper,
  getMarketLogo,
  generateLog,
  capitalizeString,
  localCapitalizeString,
  generateShareMessage,
};
