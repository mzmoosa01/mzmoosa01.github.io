import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { SETTINGS } from 'src/app/models/app.settings.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  public isSmallDevice:boolean = false;
  public menuItems = [
    { title: 'about', routerLink: '/about', icon: 'person' },
    { title: 'experience', routerLink: '/experience', icon: 'touch_app' },
    { title: 'skills', routerLink: '/skills', icon: 'build' },
    { title: 'education', routerLink: '/education', icon: 'school' },
    { title: 'contact', routerLink: '/contact', icon: 'mail' }
  ]
  public settings = SETTINGS;

  ngOnInit() {
    (window.innerWidth < 960) ? this.isSmallDevice = true : this.isSmallDevice = false;
  }
  
  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.isSmallDevice = true : this.isSmallDevice = false;
  }

}
