import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html'
})
export class ImageLoaderComponent implements OnInit {
  @Input() src:any;
  @Input() class:string = '';
  loaded:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
