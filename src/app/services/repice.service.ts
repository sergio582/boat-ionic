import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepiceService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any[]>('../../assets/data/recette/recette.json')
  }
}
