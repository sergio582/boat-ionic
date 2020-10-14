import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepicesPageRoutingModule } from './repices-routing.module';

import { RepicesPage } from './repices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepicesPageRoutingModule
  ],
  declarations: [RepicesPage]
})
export class RepicesPageModule {}
