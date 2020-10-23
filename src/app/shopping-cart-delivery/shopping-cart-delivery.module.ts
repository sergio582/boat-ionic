import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartDeliveryPageRoutingModule } from './shopping-cart-delivery-routing.module';

import { ShoppingCartDeliveryPage } from './shopping-cart-delivery.page';
import { ComponentModule } from '../components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartDeliveryPageRoutingModule,
    ComponentModule
  ],
  declarations: [ShoppingCartDeliveryPage]
})
export class ShoppingCartDeliveryPageModule { }
