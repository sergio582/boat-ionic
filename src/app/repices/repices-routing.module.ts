import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepicesPage } from './repices.page';

const routes: Routes = [
  {
    path: '',
    component: RepicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepicesPageRoutingModule {}
