import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Remove: import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, NgFor], // Remove NgxMarqueeComponent from imports
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  frameworksAndTools = [
    { name: 'Angular', description: 'Modern frontend framework for scalable web apps', icon: 'devicon-angularjs-plain colored' },
    { name: 'Spring Boot', description: 'Java backend framework for robust APIs', icon: 'devicon-spring-plain colored' },
    { name: 'Flask', description: 'Lightweight Python web framework, perfect for ML APIs', icon: 'devicon-flask-original colored' },
    { name: 'Node.js', description: 'JavaScript runtime for backend & scalable services', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', description: 'Minimal Node.js framework for RESTful APIs', icon: 'devicon-express-original' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS for rapid, modern UI design', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Vercel', description: 'Frontend hosting for static & dynamic sites', icon: 'devicon-vercel-line colored' },
    { name: 'Hugging Face', description: 'State-of-the-art NLP models & ML integration', icon: 'devicon-python-plain colored' },
    { name: 'YOLO', description: 'Real-time object detection for computer vision', icon: 'devicon-python-plain colored' }
  ];

  languagesAndDatabases = Array.from(new Set([
    { name: 'Java', description: 'Core language for enterprise backend development', icon: 'devicon-java-plain colored' },
    { name: 'Python', description: 'Scripting, ML, and AI powerhouse', icon: 'devicon-python-plain colored' },
    { name: 'JavaScript', description: 'Universal language for web development', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', description: 'Type-safe JS for better codebases', icon: 'devicon-typescript-plain colored' },
    { name: 'C++', description: 'Performance-oriented programming', icon: 'devicon-cplusplus-plain colored' },
    { name: 'MongoDB Atlas', description: 'Managed NoSQL cloud database', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', description: 'Advanced open-source SQL database', icon: 'devicon-postgresql-plain colored' },
    { name: 'MySQL', description: 'Widely-used relational DBMS', icon: 'devicon-mysql-plain colored' }
  ]));
}