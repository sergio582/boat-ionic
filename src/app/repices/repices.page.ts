import { Component, OnInit } from '@angular/core';
import { RepiceService } from '../services/repice.service'

@Component({
  selector: 'app-repices',
  templateUrl: './repices.page.html',
  styleUrls: ['./repices.page.scss'],
})
export class RepicesPage implements OnInit {
  dataRepice

  constructor(public repiceService: RepiceService) { }

  showRepice() {
    this.repiceService.getData()
      .subscribe((response) => {
        this.dataRepice = response;
        console.log(response)
      }),
      (error) => {
        console.log('Erreur : ' + error)
      }
  }

  ngOnInit() {
    this.showRepice()
  }

}
