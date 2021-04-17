import { Component, Input, OnInit } from '@angular/core';
import { IcircularImage } from '../../types/circular-images';

@Component({
  selector: 'zubairmoosa-website-circular-image',
  templateUrl: './circular-image.component.html',
  styleUrls: ['./circular-image.component.scss'],
})
export class CircularImageComponent implements OnInit {
  @Input() model: IcircularImage[];

  images = [0, 1, 2, 3, 4, 5, 6, 7];

  ngOnInit() {
    console.log(this.model);
  }
}
