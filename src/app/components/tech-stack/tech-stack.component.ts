import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  frameworksAndTools = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    {name : 'NextJs' , icon: 'devicon-nextjs-plain'},
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'Flask', icon: 'devicon-flask-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    {name: 'React', icon: 'devicon-react-original colored' },
    {name: 'Prisma', icon: 'devicon-prisma-original'},
    {name : 'Vercel' , icon: 'devicon-vercel-original colored'},
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  ];

  languagesAndDatabases = [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    {name : 'C', icon: 'devicon-c-plain colored'},
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'MongoDB Atlas', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    {name: 'HTML', icon:'devicon-html5-plain colored'},
    {name: 'CSS', icon:'devicon-css3-plain colored'},

  ];
}