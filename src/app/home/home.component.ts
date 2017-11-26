import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private menus: any;
  jobreportLink: string;
  isDarkTheme = false;
  constructor() { }

  ngOnInit() {
    this.jobreportLink = '[\'/home\', {outlets: {\'side\': [\'jobreports\']}}]';
    this.menus = [
      { label: 'Kezdőlap', icon: 'home', link: '/home'},
      { label: 'Hibajegyek', icon: 'class', link: this.jobreportLink},
      { label: 'Naptár', icon: 'today', link: '/calendar'},
    ];
  }

}
