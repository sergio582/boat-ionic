import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { HomeButtonComponent } from "../home-button/home-button.component";
import { BackButtonComponent } from "../back-button/back-button.component";
import { BackHomeButtonComponent } from "../back-home-button/back-home-button.component";
import { CardDetailsComponent } from "../card-details/card-details.component";
import { ShoppingCartButtonComponent } from "../shopping-cart-button/shopping-cart-button.component";
import { CategoryButtonComponent } from "../category-button/category-button.component";

@NgModule({
  declarations: [HomeButtonComponent, BackButtonComponent, BackHomeButtonComponent, CardDetailsComponent, ShoppingCartButtonComponent, CategoryButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [HomeButtonComponent, BackButtonComponent, BackHomeButtonComponent, CardDetailsComponent, ShoppingCartButtonComponent, CategoryButtonComponent],
  entryComponents: [HomeButtonComponent, BackButtonComponent, BackHomeButtonComponent, CardDetailsComponent, ShoppingCartButtonComponent, CategoryButtonComponent],
})
export class ComponentModule {}
