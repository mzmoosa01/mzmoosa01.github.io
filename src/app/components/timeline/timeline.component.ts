import { Component, Input, OnInit } from '@angular/core';
import { TimelineData } from 'src/app/models/timeline-data.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() data!: TimelineData[]
}
