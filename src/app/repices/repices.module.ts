import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RepicesPageRoutingModule } from "./repices-routing.module";
import { ComponentModule } from "../components/component/component.module";

import { RepicesPage } from "./repices.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RepicesPageRoutingModule, ComponentModule],
  declarations: [RepicesPage],
})
export class RepicesPageModule {}
