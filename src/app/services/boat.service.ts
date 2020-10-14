import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any[]>('../../assets/data/bateau/bateau.json')
  }
}
