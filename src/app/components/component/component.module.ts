import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListeComponent } from '../liste/liste.component';
import { HomeButtonComponent } from '../home-button/home-button.component';


@NgModule({
  declarations: [
    ListeComponent,
    HomeButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListeComponent,
    HomeButtonComponent,
  ],
  entryComponents: [
    ListeComponent,
    HomeButtonComponent,
  ]
})
export class ComponentModule { }
