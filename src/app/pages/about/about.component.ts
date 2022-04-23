import { Component } from '@angular/core';
import { HeaderData } from 'src/app/models/header-data.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public headerData: HeaderData = {
    title: 'Zubair Moosa',
    image: 'assets/img/headshot_2022.jpeg',
    description: 'A Full Stack Software Engineer, aspiring digital nomad, and lifelong seeker of knowledge. '
  }
}
