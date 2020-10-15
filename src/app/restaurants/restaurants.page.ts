import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service'
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  dataRestaurant

  constructor(public restaurantService: RestaurantService, private router: Router) { }

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

  openDetailsWithState(id) {
    let dataDetail: NavigationExtras = {
      state: {
        infoDetail: this.dataRestaurant[id - 1]
      }
    }

    this.router.navigate(['detail'], dataDetail);
  }

  ngOnInit() {
    this.showRestaurant()
  }

}
