import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent implements OnInit {

  constructor() { }

  @Input() button_icon: String = "";
  @Input() button_name: String = "";

  ngOnInit(): void {
  }

}
