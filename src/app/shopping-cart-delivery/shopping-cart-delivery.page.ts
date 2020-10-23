import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { RestaurantService } from '../services/restaurant.service'

@Component({
  selector: 'app-shopping-cart-delivery',
  templateUrl: './shopping-cart-delivery.page.html',
  styleUrls: ['./shopping-cart-delivery.page.scss'],
})
export class ShoppingCartDeliveryPage implements OnInit {
  dataRestaurant
  datePicker = moment().format();

  constructor(public restaurantService: RestaurantService) { }

  showRestaurant() {
    this.restaurantService.getData()
      .subscribe((response) => {
        this.dataRestaurant = response;
        console.log(response)
      }),
      (error) => {
        console.log('Erreur : ' + error)
      }
  }

  ngOnInit() {
    this.showRestaurant()
  }

}
