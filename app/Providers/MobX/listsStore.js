import {observable, action, computed, reaction} from 'mobx';

import Firebase from '../../Services/Firebase';

import {popup, generatePushID} from '../../Common/Helpers';

class Parser {
  static parseListsObjectFromFirebase(listsObject) {
    let listsArray = [];
    for (const listId in listsObject) {
      let _list = Parser.parseListObjectFromFirebase(
        listId,
        listsObject[listId],
      );
      listsArray.push(_list);
    }

    return listsArray;
  }

  static parseListObjectFromFirebase(listId, listObject) {
    let list = {listId, name: listObject.name, skus: []};
    if (listObject.hasOwnProperty('order')) {
      list.order = listObject.order;
    }

    for (const skuId in listObject.items) {
      const _sku = {skuId, amount: listObject.items[skuId]};
      list.skus.push(_sku);
    }
    return list;
  }
}

const totalSuggestedListItem = 15;
export class ListsStore {
  @observable lists = [];
  @observable suggestedLists = [];
  @observable selectedListIndex = null;
  @observable selectedListId = null;
  @observable selectedListPreview = [];
  @observable loading = false;
  @observable availableMarkets = [];
  @observable myListLoading = false;
  @observable userData = {};
  @observable listsInMemory = {};
  @observable skuDataInMemory = {};
  @observable homeList = [];
  @observable cartCount = 0;
  @observable subSkuData = {};

  constructor(mainStore) {
    this.mainStore = mainStore;

    reaction(
      () => {
        return {
          selectedListId: this.selectedListId,
          lists: this.lists,
        };
      },
      obj => {
        try {
          this.calculateSelectedListPreview();
        } catch (error) {}
      },
    );
    reaction(
      () => {
        return {
          selectedListId: this.selectedListId,
        };
      },
      obj => {
        try {
          this.loading = false;
        } catch (error) {}
      },
    );
  }

  @action
  setAvailableMarkets(avMarkets) {
    this.availableMarkets = avMarkets;
  }

  get availableMarkets() {
    return this.availableMarkets;
  }

  @action
  async onSuggestedListsChange(listsObject) {
    this.suggestedLists = [];
    let listsArray = Parser.parseListsObjectFromFirebase(listsObject);
    listsArray.sort((l1, l2) => l1.order - l2.order);
    for (const list of listsArray) {
      const listData = await this.fetchListFilteredByMarketsDataFromFirebase(
        list,
      );
      const newList = {...list, skus: listData};
      let skusArray = Object.keys(newList.skus).map(k => newList.skus[k]);
      newList.skus = skusArray.filter(item => item);
      this.suggestedLists = [...this.suggestedLists, newList].sort(
        (l1, l2) => l1.order - l2.order,
      );
    }
  }

  async getsubSkuData(skuData, listId) {
    let subSkuIds = [];
    for (const skuId in skuData) {
      if (skuData.hasOwnProperty(skuId)) {
        const sku = skuData[skuId];
        if (sku.hasOwnProperty('subs') && sku.subs.length > 0) {
          // get single substitute only
          subSkuIds = subSkuIds.concat(sku.subs[0]);
        }
      }
    }

    if (this.subSkuData.hasOwnProperty(listId)) {
      let existingIds = Object.keys(this.subSkuData[listId]);
      subSkuIds = subSkuIds.filter(id => !existingIds.includes(id));
      if (subSkuIds === undefined || subSkuIds.length === 0) {
        return this.subSkuData[listId];
      }
    } else {
      this.subSkuData[listId] = {};
    }

    let subSkuDataArray = await Firebase.db.getMultipleSkus(subSkuIds);
    subSkuDataArray.forEach(
      subSku => (this.subSkuData[listId][subSku.objectID] = subSku),
    );

    return this.subSkuData[listId];
  }

  async fetchListDataFromFirebase(list) {
    try {
      let allSkuIds = [];
      list.skus.forEach(sku => allSkuIds.push(sku.skuId));

      if (this.skuDataInMemory.hasOwnProperty(list.listId)) {
        let existingIds = Object.keys(this.skuDataInMemory[list.listId]);
        allSkuIds = allSkuIds.filter(id => !existingIds.includes(id));
        if (allSkuIds === undefined || allSkuIds.length === 0) {
          return this.skuDataInMemory[list.listId];
        }
      } else {
        this.skuDataInMemory[list.listId] = {};
      }

      let listData = {};
      let promises = [];
      let next_batch = [];
      while (allSkuIds.length) {
        next_batch = allSkuIds.splice(0, 10);
        let _promise = new Promise((resolve, reject) => {
          Firebase.app
            .firestore()
            .collection('skus')
            .where('objectID', 'in', next_batch)
            .get()
            .then(snapshot => {
              try {
                snapshot.forEach(function(doc) {
                  let sku = doc.data();
                  if (sku === undefined || sku.length === 0) {
                    return;
                  }
                  if (sku.hasOwnProperty('objectID')) {
                    listData[sku.objectID] = sku;
                  }
                });
                resolve();
              } catch (err) {
                console.log(err);
                reject(err);
              }
            })
            .catch(err => {
              console.log('err', err);
              reject(err);
            });
        });

        promises.push(_promise);
      }

      await Promise.all(promises);
      this.skuDataInMemory[list.listId] = {
        ...this.skuDataInMemory[list.listId],
        ...listData,
      };
      return this.skuDataInMemory[list.listId];
    } catch (error) {
      return error;
    }
  }

  async fetchListFilteredByMarketsDataFromFirebase(list) {
    let allSkuIds = [];
    list.skus.forEach(sku => {
      if (allSkuIds.length < totalSuggestedListItem) {
        allSkuIds.push(sku.skuId);
      }
    });
    try {
      let skuData = {};
      let _promise = new Promise((resolve, reject) => {
        Firebase.app
          .firestore()
          .collection('skus')
          .where('objectID', 'in', allSkuIds)
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(item => {
              let intersection = [];

              let skuSnapData = item.data();
              try {
                if (skuSnapData.markets.length > 0) {
                  intersection = skuSnapData.markets.filter(x =>
                    this.availableMarkets.some(market => market.trim() === x),
                  );
                }
                if (intersection.length > 0) {
                  skuData[skuSnapData.objectID] = skuSnapData;
                } else {
                }
              } catch (err) {
                console.log('err', err);
              }
            });

            resolve();
          })
          .catch(err => {
            console.log('err', err);
            reject(err);
          });
      });
      await _promise;
      this.skuDataInMemory[list.listId] = skuData;
      return skuData;
    } catch (error) {
      return error;
    }
  }

  @action onFirebaseDataChange(data) {
    if (data === this.userData) {
      return;
    }
    this.userData = data;
    if (!data || !data.hasOwnProperty('lists')) {
      this.lists = [];
      return;
    }
    this.lists = Parser.parseListsObjectFromFirebase(data.lists);
  }

  @computed get selectedList() {
    if (this.lists.length === 0 || this.selectedListId === null) {
      return null;
    }
    return this.getListByListId(this.selectedListId);
  }

  getListByListId(listId) {
    for (let i = 0; i < this.lists.length; i++) {
      if (typeof this.lists[i] === 'undefined') {
        continue;
      }
      if (this.lists[i].listId === listId) {
        return this.lists[i];
      }
    }
  }

  @computed get isDefaultListSelected() {
    return (
      this.selectedList &&
      this.selectedList.listId === this.mainStore.authStore.user.uid
    );
  }

  @action
  async selectList(listId) {
    this.myListLoading = true;
    this.selectedListId = listId;
  }

  @action
  async setMyListloading(value) {
    this.myListLoading = value;
  }

  @computed
  get numberOfItemsInSelectedList() {
    if (
      this.selectedListId &&
      this.userData &&
      this.userData.hasOwnProperty('lists') &&
      typeof this.userData.lists[this.selectedListId] !== 'undefined' &&
      this.userData.lists[this.selectedListId].hasOwnProperty('items')
    ) {
      return Object.keys(this.userData.lists[this.selectedListId].items).length;
    }
    return this.selectedList && this.selectedList.skus
      ? this.selectedList.skus.length
      : 0;
  }

  @action
  async calculateSelectedListPreview() {
    try {
      if (!this.selectedList || !this.selectedList.skus) {
        return;
      }

      let _skus = [];
      this.selectedList.skus.forEach(sku => {
        _skus.push({
          totalAmount: sku.amount,
        });
      });

      let skuData;
      if (this.selectedListId in this.skuDataInMemory) {
        skuData = this.skuDataInMemory[this.selectedListId];
      } else {
        skuData = await this.fetchListDataFromFirebase(this.selectedList);
      }

      this.selectedList.skus.forEach((sku, index) => {
        if (!skuData[sku.skuId]) {
          return;
        }
        _skus[index].src = skuData[sku.skuId].src;
      });

      this.selectedListPreview = _skus;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      return error;
    }
  }

  @action
  async createNewList(listName) {
    try {
      const newListId = generatePushID();
      this.userData.lists[newListId] = {name: listName, items: {}};
      this.selectList(newListId);

      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async saveSharedList(list, listName) {
    try {
      const newListId = generatePushID();
      this.userData.lists[newListId] = {
        name: listName,
        items: list.items,
      };
      await Firebase.app
        .firestore()
        .collection('users')
        .doc(this.mainStore.authStore.user.uid)
        .set(this.userData);
      this.selectList(newListId);
    } catch (error) {
      return error;
    }
  }

  async getSharedList(userId, listId) {
    try {
      const snapshot = await Firebase.app
        .firestore()
        .collection('users')
        .doc(userId)
        .get();
      if (!snapshot.data()) {
        return null;
      }
      return snapshot.data().lists[listId];
    } catch (error) {
      return error;
    }
  }

  @action
  async addItem(listId, skuId, amount) {
    try {
      if (!this.userData.lists[listId].items.hasOwnProperty(skuId)) {
        this.userData.lists[listId].items[skuId] = amount;
        this.lists[listId] = Parser.parseListObjectFromFirebase(
          listId,
          this.userData.lists[listId],
        );
        popup.success('listeye eklendi!', undefined, undefined, 200);
      } else {
        this.userData.lists[listId].items[skuId] += amount;
        popup.success(
          this.userData.lists[listId].items[skuId] + ' adet',
          undefined,
          undefined,
          200,
        );
      }
      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async removeItem(listId, skuId) {
    try {
      if (this.userData.lists[listId].items.hasOwnProperty(skuId)) {
        delete this.userData.lists[listId].items[skuId];
      }
      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async setItemAmount(listId, skuId, amount) {
    try {
      if (amount < 1 || amount > 20) {
        return;
      }
      if (this.userData.lists[listId].items.hasOwnProperty(skuId)) {
        this.userData.lists[listId].items[skuId] = amount;
      }
      this.lists[listId] = Parser.parseListObjectFromFirebase(
        listId,
        this.userData.lists[listId],
      );
      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async renameList(listId, newName) {
    try {
      if (this.getListByListId(listId).name === newName) {
        return;
      }
      this.userData.lists[listId].name = newName;
      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async deleteList(listId) {
    try {
      delete this.userData.lists[listId];
      delete this.lists[listId];
      this.selectList(this.mainStore.authStore.user.uid);
      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async cleanList(listId) {
    try {
      this.userData.lists[listId].items = {};
      await this.saveUpdatedUserData();
    } catch (error) {
      return error;
    }
  }

  @action
  async saveUpdatedUserData() {
    await Firebase.app
      .firestore()
      .collection('users')
      .doc(this.mainStore.authStore.user.uid)
      .set(this.userData);
  }
}
