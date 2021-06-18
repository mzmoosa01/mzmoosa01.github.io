import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'zubairmoosa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  scrWidth: number;

  constructor() {
    this.scrWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrWidth = window.innerWidth;
    console.log(this.scrWidth);
  }
}
