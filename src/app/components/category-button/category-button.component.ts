import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-category-button",
  templateUrl: "./category-button.component.html",
  styleUrls: ["./category-button.component.scss"],
})
export class CategoryButtonComponent implements OnInit {
  constructor() {}

  @Input() button_icon: String = "";

  ngOnInit(): void {}
}
