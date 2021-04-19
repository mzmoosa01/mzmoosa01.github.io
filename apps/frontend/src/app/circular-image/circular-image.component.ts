import { Component, Input, OnInit } from '@angular/core';
import { IcircularImage } from '../../types/circular-images';

@Component({
  selector: 'zubairmoosa-website-circular-image',
  templateUrl: './circular-image.component.html',
  styleUrls: ['./circular-image.component.scss'],
})
export class CircularImageComponent {
  @Input() model: IcircularImage[];
}
