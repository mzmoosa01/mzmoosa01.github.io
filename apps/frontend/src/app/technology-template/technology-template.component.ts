import { Component, OnInit } from '@angular/core';
import { IcircularImage } from '../../types/circular-images';

@Component({
  selector: 'technology-template-component',
  templateUrl: './technology-template.component.html',
  styleUrls: ['./technology-template.component.scss'],
})
export class TechnologyTemplateComponent {
  frontendCircularImages: IcircularImage[] = [
    {
      name: 'Angular + \nAngularJS',
      imageSrc: '../../assets/images/angular.png',
    },
    {
      name: 'Typescript',
      imageSrc: '../../assets/images/Typescript (1).png',
      isRectangular: true,
    },
    {
      name: 'C# ASP.Net',
      imageSrc: '../../assets/images/C-sharp.png',
    },
    { name: 'Nest JS', imageSrc: '../../assets/images/Nest.jpg' },

    { name: 'Figma', imageSrc: '../../assets/images/Figma.png' },
    {
      name: 'Software AG \n Web Methods',
      imageSrc: '../../assets/images/webMethods.png',
      isRectangular: true,
    },
    {
      name: 'Nrwl/Nx',
      imageSrc: '../../assets/images/Nx.png',
      isRectangular: true,
    },
    { name: 'Node JS', imageSrc: '../../assets/images/NodeJS.png' },
  ];

  databaseCircularImages: IcircularImage[] = [
    {
      name: 'Microsoft\n Sql Server',
      imageSrc: '../../assets/images/sqlServer.png',
      isRectangular: true,
    },
    {
      name: 'MongoDB',
      imageSrc: '../../assets/images/mongo.jpg',
      isRectangular: true,
    },
    {
      name: 'PostgresSQL',
      imageSrc: '../../assets/images/postgresSQL.png',
      isRectangular: true,
    },
  ];

  devopsCircularImages: IcircularImage[] = [
    {
      name: 'Microsoft Azure',
      imageSrc: '../../assets/images/Azure.png',
      isRectangular: true,
    },
    {
      name: 'Travis CI',
      imageSrc: '../../assets/images/Travis.png',
    },
    {
      name: 'Docker',
      imageSrc: '../../assets/images/Docker.png',
      isRectangular: true,
    },
  ];
}
