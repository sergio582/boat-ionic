import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListeComponent } from '../liste/liste.component';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { BackButtonComponent } from '../back-button/back-button.component';


@NgModule({
  declarations: [
    ListeComponent,
    HomeButtonComponent,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ListeComponent,
    HomeButtonComponent,
    BackButtonComponent,
  ],
  entryComponents: [
    ListeComponent,
    HomeButtonComponent,
    BackButtonComponent,
  ]
})
export class ComponentModule { }
