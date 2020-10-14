import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any[]>('../../assets/data/restaurant/restaurant.json')
  }
}
