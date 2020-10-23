import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartDeliveryPage } from './shopping-cart-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartDeliveryPageRoutingModule {}
