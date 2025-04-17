import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  techStack = [
    {
      category: 'Frontend',
      techs: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      icon: '📱'
    },
    {
      category: 'Backend',
      techs: ['Spring Boot', 'Java', 'Python', 'Flask'],
      icon: '💻'
    },
    {
      category: 'Database',
      techs: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
      icon: '🗄️'
    },
    {
      category: 'AI/ML',
      techs: [ 'Object Detection', 'LLMs', 'Fine-tuning'],
      icon: '🤖'
    },
    {
      category: 'DevOps',
      techs: ['Docker'],
      icon: '⚙️'
    },
    {
      category: 'UI/UX',
      techs: ['Tailwind CSS' , 'Bootstrap', 'Figma'],
      icon: '🎨'
    }
  ];
}
