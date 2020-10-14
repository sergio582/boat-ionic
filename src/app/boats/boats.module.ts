import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BoatsPageRoutingModule } from './boats-routing.module';
import { ComponentModule } from '../components/component/component.module';

import { BoatsPage } from './boats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatsPageRoutingModule,
    ComponentModule,
  ],
  declarations: [BoatsPage]
})
export class BoatsPageModule { }
