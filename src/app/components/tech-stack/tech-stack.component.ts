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
      techs: ['Angular', 'TypeScript', 'React'],
      icon: '📱'
    },
    {
      category: 'Backend',
      techs: ['Spring Boot', 'Java', 'Python', 'Flask'],
      icon: '💻'
    },
    {
      category: 'Database',
      techs: ['MySQL', 'MongoDB'],
      icon: '🗄️'
    },
    {
      category: 'AI/ML',
      techs: ['Hugging Face', 'YOLOv8', 'LLMs'],
      icon: '🤖'
    },
    {
      category: 'DevOps',
      techs: ['Docker', 'Firebase'],
      icon: '⚙️'
    },
    {
      category: 'UI/UX',
      techs: ['Framer Motion', 'Tailwind CSS'],
      icon: '🎨'
    }
  ];  
}
