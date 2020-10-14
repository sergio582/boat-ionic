import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  dataRestaurant

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
