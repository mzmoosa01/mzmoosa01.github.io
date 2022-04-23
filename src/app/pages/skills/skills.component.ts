import { Component, OnInit } from '@angular/core';
import { HeaderData } from 'src/app/models/header-data.model';
import { SkillCategory } from 'src/app/models/skill-data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skills: SkillCategory[] = [
    {
      name: 'Frontend',
      items: [
        {
          name: 'Angular',
          value: 90
        },
        {
          name: 'HTML',
          value: 90
        },
        {
          name: 'CSS/SCSS',
          value: 80
        },
        {
          name: 'Typescript',
          value: 90
        }
      ]
    },
    {
      name: 'Backend',
      items: [
        {
          name: 'NodeJS',
          value: 80
        },
        {
          name: 'NestJS',
          value: 75
        },
        {
          name: 'C#',
          value: 60
        },
        {
          name: 'Salesforce',
          value: 65
        }
      ]
    },
    {
      name: 'Database',
      items: [
        {
          name: 'Microsoft SQL server',
          value: 75
        },
        {
          name: 'MySQL',
          value: 60
        },
      ]
    },
    {
      name: 'DevOps',
      items: [
        {
          name: 'Nrwl/NX monorepos',
          value: 90
        },
        {
          name: 'Docker',
          value: 70
        },
        {
          name: 'Kubernetes',
          value: 70
        },
        {
          name: 'Github actions',
          value: 60
        },
        {
          name: 'Gilab pipelines',
          value: 60
        }
      ]
    }
  ];
  public headerData: HeaderData = {
    title: 'Skills',
    icon: 'build',
    description: `“Learning how to learn is life's most important skill.” - Tony Buzan`
  }
}
