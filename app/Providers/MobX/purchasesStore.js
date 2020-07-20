import {observable, action} from 'mobx';

import Firebase from '../../Services/Firebase';
import {generatePushID, dateHelper} from '../../Common/Helpers';
import AuthStore from './authStore';
export class PurchasesStore {
  @observable purchaseDays = [];
  @observable purchaseYears = [];
  @observable userData = {};

  constructor(mainStore) {
    this.mainStore = mainStore;
  }
  onFirebaseDataChange(data) {
    this.userData = data;
    if (!data || !data.hasOwnProperty('purchasedProducts')) {
      return (this.purchasedProducts = []);
    }
    let purchaseDaysObject = {};
    let purchaseMonthsObject = {};

    const purchasedProductsFromDb = data.purchasedProducts;
    for (const purchaseId in purchasedProductsFromDb) {
      const {date, price, amount} = purchasedProductsFromDb[purchaseId];
      let _purchase = {
        purchaseId,
        ...purchasedProductsFromDb[purchaseId],
      };
      let dateObject = new Date(date);

      // günlerin hesaplanması
      let dayKey = dateHelper.getDayKey(date);
      if (!purchaseDaysObject[dayKey]) {
        purchaseDaysObject[dayKey] = {
          timestamp: date,
          dateString: dateHelper.formatDate(date),
          purchases: [],
          totalAmount: 0,
        };
      }
      purchaseDaysObject[dayKey].totalAmount +=
        _purchase.amount * _purchase.price;
      purchaseDaysObject[dayKey].purchases.push(_purchase);

      // ayların hesaplanması
      let monthKey = dateHelper.getMonthKey(date);
      if (!purchaseMonthsObject[monthKey]) {
        purchaseMonthsObject[monthKey] = {
          year: dateObject.getFullYear(),
          month: dateObject.getMonth(),
          totalAmount: 0,
        };
      }

      purchaseMonthsObject[monthKey].totalAmount += price * amount;
    }

    let _purchaseDaysArray = [];
    for (const key in purchaseDaysObject) {
      _purchaseDaysArray.push(purchaseDaysObject[key]);
    }
    _purchaseDaysArray.sort((d1, d2) => d2.timestamp - d1.timestamp);

    let _purchaseMonthsArray = [];
    for (const key in purchaseMonthsObject) {
      _purchaseMonthsArray.push(purchaseMonthsObject[key]);
    }

    let purchaseYearsObject = {};
    _purchaseMonthsArray.forEach(purchaseMonth => {
      let year = purchaseMonth.year;
      if (!purchaseYearsObject[year]) {
        purchaseYearsObject[year] = {
          year,
          monthlyAmounts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
      }
      purchaseYearsObject[year].monthlyAmounts[purchaseMonth.month] =
        purchaseMonth.totalAmount;
    });

    let _purchaseYearsArray = [];
    for (const key in purchaseYearsObject) {
      _purchaseYearsArray.push(purchaseYearsObject[key]);
    }

    this.purchaseDays = _purchaseDaysArray;
    this.purchaseYears = _purchaseYearsArray.reverse();
  }

  @action
  async addPurchase(skuId, skuName, size, amount, price, market, image, date) {
    // generateLog.addedPurchase(skuId, market, amount)
    try {
      const newPurchaseId = generatePushID();
      if (!this.userData.purchasedProducts) {
        this.userData.purchasedProducts = {};
      }
      this.userData.purchasedProducts[newPurchaseId] = {
        skuId,
        skuName,
        amount,
        price,
        market,
        image,
        size,
        date: date || new Date().getTime(),
      };
      await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.mainStore.authStore.user.uid)
        .set(this.userData);
    } catch (error) {
      return error;
    }
  }

  @action
  async editPurchase(purchaseId, market, price, amount, date) {
    try {
      const snapshot = await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.mainStore.authStore.user.uid)
        .get();
      const userData = {...snapshot.data()};
      if (!userData.purchasedProducts[purchaseId].hasOwnProperty('skuId')) {
        return;
      }

      if (amount) {
        userData.purchasedProducts[purchaseId].amount = amount;
      }
      if (market) {
        userData.purchasedProducts[purchaseId].market = market;
      }
      if (price) {
        userData.purchasedProducts[purchaseId].price = price;
      }
      if (date) {
        userData.purchasedProducts[purchaseId].date = date;
      }

      await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.mainStore.authStore.user.uid)
        .set(userData);
    } catch (error) {
      return error;
    }
  }

  @action
  async deletePurchase(purchaseId) {
    try {
      const snapshot = await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.mainStore.authStore.user.uid)
        .get();
      const userData = {...snapshot.data()};
      delete userData.purchasedProducts[purchaseId];
      await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.mainStore.authStore.user.uid)
        .set(userData);
    } catch (error) {
      return error;
    }
  }
}
