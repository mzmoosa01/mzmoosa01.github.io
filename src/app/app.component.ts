import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mzmoosa01.github.io';
  public skin = 'blue-dark';
  public darkMode = true;

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
