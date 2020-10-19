import { Component, OnInit } from '@angular/core';
import { RepiceService } from '../services/repice.service'
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-repices',
  templateUrl: './repices.page.html',
  styleUrls: ['./repices.page.scss'],
})
export class RepicesPage implements OnInit {
  dataRepice

  constructor(public repiceService: RepiceService, private router: Router) { }

  showRepice() {
    this.repiceService.getData()
      .subscribe((response) => {
        this.dataRepice = response;
      }),
      (error) => {
        console.log('Erreur : ' + error)
      }
  }

  openDetailsWithState(id) {
    let dataDetail: NavigationExtras = {
      state: {
        infoDetail: this.dataRepice[id - 1]
      }
    }

    this.router.navigate(['detail'], dataDetail);
  }

  ngOnInit() {
    this.showRepice()
  }

}
