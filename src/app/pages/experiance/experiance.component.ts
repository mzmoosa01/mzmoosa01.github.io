import { Component } from '@angular/core';
import { HeaderData } from 'src/app/models/header-data.model';
import { TimelineData } from 'src/app/models/timeline-data.model';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss'],
})
export class ExperianceComponent {
  public experiences: TimelineData[] = [
    {
      title: 'Senior Software Engineer',
      subtitle: 'Crossover for work (June 2022 - Present day)',
      dateRange: '2021 - Present',
      description:
        'I am part of the digital channels team that builds customer-facing and internal web applications using Angular and C# .Net. I am responsible for technical specifications, full-stack development, building CI/CD pipelines and supporting business decisions through my technical knowledge',
    },
    {
      title: 'frontend software engineer - angular',
      subtitle: 'Crossover for work (Nov 2021 - May 2022)',
      dateRange: '2021 - 2022',
      description:
        'Part of a globally distributed team of remote angular specialists. I was responsible for maintaining and creating web applications mostly built in angular 10+ but also worked with other technologies such as Salesforce and AWS.',
    },
    {
      title: 'Full stack software engineer',
      subtitle: 'Investec Private Bank (Jan 2020 - Nov 2021)',
      dateRange: '2020 - 2021',
      description:
        'I joined as a graduate developer but quickly rose in the ranks to become my departments angular expert. During my time at Investec, my department was migrating from an AngularJS+Express stack to an Angular+NestJS stack. I had the pleasure of co-creating the architecture and even led my own team in performing parts of the migration.',
    },
    {
      title: 'Assistant lecturer',
      subtitle: 'University of Pretoria',
      dateRange: '2019-2020',
      description:
        'I began my career teaching programming to younger students. I was part of the team that re-developed the course syllabus to a more web programming focus and I was responsible for creating and administering first year practical work.',
    },
  ];

  public headerData: HeaderData = {
    title: 'Experience',
    icon: 'touch_app',
    description: '"Experience is the teacher of all things" - Julius Caesar',
  };
}
