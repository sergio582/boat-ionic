import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.scss"],
})
export class CardDetailsComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
    console.log("data", this.data);
  }
}
