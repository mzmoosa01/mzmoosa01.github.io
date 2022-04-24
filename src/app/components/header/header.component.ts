import { Component, Input, OnInit } from '@angular/core';
import { HeaderData } from 'src/app/models/header-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() data!: HeaderData;
}
