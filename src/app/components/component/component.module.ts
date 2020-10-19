import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { ListeComponent } from "../liste/liste.component";
import { HomeButtonComponent } from "../home-button/home-button.component";
import { BackButtonComponent } from "../back-button/back-button.component";
import { BackHomeButtonComponent } from "../back-home-button/back-home-button.component";
import { CardDetailsComponent } from "../card-details/card-details.component";
import { ShoppingCartButtonComponent } from '../shopping-cart-button/shopping-cart-button.component'

@NgModule({
  declarations: [ListeComponent, HomeButtonComponent, BackButtonComponent, BackHomeButtonComponent, CardDetailsComponent, ShoppingCartButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [ListeComponent, HomeButtonComponent, BackButtonComponent, BackHomeButtonComponent, CardDetailsComponent, ShoppingCartButtonComponent],
  entryComponents: [ListeComponent, HomeButtonComponent, BackButtonComponent, BackHomeButtonComponent, CardDetailsComponent, ShoppingCartButtonComponent],
})
export class ComponentModule { }
