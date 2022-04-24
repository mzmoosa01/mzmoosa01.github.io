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
    // { title: 'home', routerLink: '/home', icon: 'home' },
    { title: 'about', routerLink: '/about', icon: 'person' },
    { title: 'experience', routerLink: '/experience', icon: 'touch_app' },
    { title: 'skills', routerLink: '/skills', icon: 'build' },
    { title: 'education', routerLink: '/education', icon: 'school' },    
    // { title: 'services', routerLink: '/services', icon: 'perm_data_setting' },
    // { title: 'portfolio', routerLink: '/portfolio', icon: 'work' },
    // { title: 'clients', routerLink: '/clients', icon: 'thumbs_up_down' },   
    // { title: 'pricing', routerLink: '/pricing', icon: 'attach_money' },    
    // { title: 'team', routerLink: '/team', icon: 'group' },
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
