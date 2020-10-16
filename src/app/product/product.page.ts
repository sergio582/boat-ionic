import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  dataProduct
  menuList

  poissonId = 0
  coquillageId = 1
  crustaceId = 2
  promotionId = 3

  category = 0;

  constructor(public productService: ProductService) { }

  showProduct() {
    this.productService.getData()
      .subscribe((response) => {
        this.dataProduct = response;
        console.log(response)
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

  ngOnInit() {
    this.showProduct()
  }

}
