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

    this.storage.get('shoppingCart').then((val) => {

      if (val == null) {
        tab.push(item)
        this.storage.set('shoppingCart', tab);
      } else {
        tab = val
        tab.push(item)
        this.storage.set('shoppingCart', tab);
      }
    });
  }

  isExistItem(id) {
    this.storage.get('shoppingCart').then((val) => {
      val.map(k => {
        console.log(k)
        if (k.id == id) {
          return true;
        }
      })
    });

    return false;

  }

}
