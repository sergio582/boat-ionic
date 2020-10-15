import { Component, OnInit } from '@angular/core';
import { BoatService } from '../services/boat.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
})
export class BoatsPage implements OnInit {
  dataBoat

  constructor(public boatService: BoatService, private router: Router,) { }

  showBoat() {
    this.boatService.getData()
      .subscribe((response) => {
        this.dataBoat = response;
      }),
      (error) => {
        console.log('Erreur : ' + error)
      }
  }

  openDetailsWithState(id) {
    let dataDetail: NavigationExtras = {
      state: {
        infoDetail: this.dataBoat[id - 1]
      }
    }

    this.router.navigate(['detail'], dataDetail);
  }

  ngOnInit() {
    this.showBoat()
  }
}
