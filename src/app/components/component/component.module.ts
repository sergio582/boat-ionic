import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionComponent } from '../description/description.component';
import { ListeComponent } from '../liste/liste.component';
import { TitleComponent } from '../title/title.component';
import { IonicModule } from '@ionic/angular'

@NgModule({
  declarations: [
    DescriptionComponent,
    ListeComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionComponent,
    ListeComponent,
    TitleComponent
  ],
  entryComponents: [
    DescriptionComponent,
    ListeComponent,
    TitleComponent
  ]
})
export class ComponentModule { }
