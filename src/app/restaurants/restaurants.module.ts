import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';
import { ComponentModule } from '../components/component/component.module';

import { RestaurantsPage } from './restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsPageRoutingModule,
    ComponentModule,
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsPageModule { }
