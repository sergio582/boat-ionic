import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  dataShoppingCart

  constructor(public shoppingCartService: ShoppingCartService) { }

  showDataShoppingCart() {
    let data = []
    this.shoppingCartService.getShoppingCart()
      .then((val) => {
        this.dataShoppingCart = val
        console.log(val)
      })

  }

  giveCategoryOfProdut(idCategory) {
    if (idCategory == 0) {
      return "Poissons";
    } else if (idCategory == 1) {
      return "Coquillages";
    } else if (idCategory == 2) {
      return "Crustacés";
    } else if (idCategory == 3) {
      return "Promotion";
    } else {
      return "Category missing";
    }
  }

  removeItemToShoppingCart(itemKey) {
    this.dataShoppingCart.splice(itemKey, 1)

    // flush data in local storage
    this.shoppingCartService.setShoppingCart(this.dataShoppingCart)
  }

  upItemQuantity(item) {
    if (item.quantity < 10) {
      item.quantity += 1
      let filter = this.dataShoppingCart.filter(val => val.id !== item.id)

      if (filter.length == 0) {
        let tab = []
        tab.push(item)
        this.dataShoppingCart = tab
        this.shoppingCartService.setShoppingCart(this.dataShoppingCart)
      } else {
        filter.unshift(item)
        this.dataShoppingCart = filter
        this.shoppingCartService.setShoppingCart(filter)
      }
    }
  }

  downItemQuantity(item) {
    if (item.quantity !== 1) {
      item.quantity -= 1
      let filter = this.dataShoppingCart.filter(val => val.id !== item.id)

      if (filter.length == 0) {
        let tab = []
        tab.push(item)
        this.dataShoppingCart = tab
        this.shoppingCartService.setShoppingCart(this.dataShoppingCart)

      } else {
        filter.unshift(item)
        this.dataShoppingCart = filter
        this.shoppingCartService.setShoppingCart(filter)
      }
    }
  }

  ngOnInit() {
    this.showDataShoppingCart()
  }

}
