import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private storage: Storage) { }



  setShoppingCart(tab) {
    this.storage.set('shoppingCart', tab);
  }

  getShoppingCart() {
    return this.storage.get('shoppingCart')
  }

  setOneItemShoppingCart(item) {
    let tab = []

    this.storage.get('shoppingCart').then((vals) => {

      if (vals == null) {
        item.quantity = 1
        tab.push(item)
        this.storage.set('shoppingCart', tab);
        return "ok"
      }

      let valueFilter = vals.filter(val => val.id == item.id)

      if (valueFilter.length == 0) {
        tab = vals
        item.quantity = 1
        tab.push(item)
        this.storage.set('shoppingCart', tab);

      } else {
        let newTab = tab.filter(val => val.id !== item.id)
        valueFilter[0].quantity++
        let newItem = valueFilter.reduce(x => { x })
        newTab.push(newItem)
        this.storage.set('shoppingCart', newTab);
      }
    });
  }

  isExistItem(vals, id) {
    let valueFilter = vals.filter(val => val.id == id)

    if (valueFilter.length == 0) {
      return valueFilter
    } else {
      valueFilter[0].quantity++
      return valueFilter;
    }
  }

}
