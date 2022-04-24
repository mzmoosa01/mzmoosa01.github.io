import { Component, OnInit } from '@angular/core';
import { HeaderData } from 'src/app/models/header-data.model';
import { TimelineData } from 'src/app/models/timeline-data.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  public education: TimelineData[] = [

    {
      title: 'Bachelor of Commerce Honors (Informatics)', 
      subtitle: 'University of Pretoria',
      dateRange: '2019-2020',
      description: 'A follow on from my initial degree with a more research focus. I completed a Systematic Literature Review and had minor courses in Information Systems Development, Enterprise Architecture and E-commerce'
    },
    {
      title: 'Bachelor of Commerce (Informatics)', 
      subtitle: 'University of Pretoria',
      dateRange: '2016-2019',
      description: 'The informatics degree focused on all aspects of the SDLC. I was trained to see the entire picture when designing, building or testing software. I graduated cum laude and top of my class.'
    }
  ]

  public headerData: HeaderData = {
    title: 'Education',
    icon: 'school',
    description: '"Education is the passport of the future, for tomorrow belongs to those who prepare for it today" - Malcom X'
  }
}
