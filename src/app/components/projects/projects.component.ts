import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'X-Ray Buddy: AI Medical Assistant',
      description: 'Built a fracture detection system with X-ray image analysis and AI-generated orthopedic suggestions using fine-tuned LLMs.',
      tech: ['YOLOv8', 'Flask', 'LLM', 'React'],
      icon: '🧠'
    },
    {
      title: 'Tree Enumeration & Forest Safety AI',
      description: 'Developed a smart ML system that classifies spatial regions into residential and forest zones using satellite data.',
      tech: ['YOLOv8', 'GIS', 'Flask', 'Segmentation'],
      icon: '🌳'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Designed a scalable, secure full-stack platform with user auth, cart, orders, and admin dashboard.',
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL'],
      icon: '🛒'
    }
  ];
}
