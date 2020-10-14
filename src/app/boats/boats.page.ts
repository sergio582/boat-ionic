import { Component, OnInit } from '@angular/core';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
})
export class BoatsPage implements OnInit {
  dataBoat

  constructor(public boatService: BoatService) { }

  showBoat() {
    this.boatService.getData()
      .subscribe((response) => {
        this.dataBoat = response;
      }),
      (error) => {
        console.log('Erreur : ' + error)
      }
  }

  ngOnInit() {
    this.showBoat()
  }
}
