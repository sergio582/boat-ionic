import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-back-button",
  templateUrl: "./back-button.component.html",
  styleUrls: ["./back-button.component.scss"],
})
export class BackButtonComponent implements OnInit {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {}
}
