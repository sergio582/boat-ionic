import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
import { ShoppingCartService } from '../services/shopping-cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  dataProduct
  dataShoppingCart
  menuList

  poissonId = 0
  coquillageId = 1
  crustaceId = 2
  promotionId = 3

  category = 0;

  constructor(public productService: ProductService, public shoppingCartService: ShoppingCartService) { }

  showProduct() {
    this.productService.getData()
      .subscribe((response) => {
        this.dataProduct = response;
      }),
      (error) => {
        console.log('Erreur : ' + error)
      }
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

  choseCategory(id) {
    this.category = id
  }

  addTopShoppingCart(product) {
    this.shoppingCartService.setOneItemShoppingCart(product)
  }

  ngOnInit() {
    this.showProduct()
  }

}
