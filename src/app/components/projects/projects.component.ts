import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor,NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Radiographic X-Ray Bone Fracture Severity Detection',
      points: [
        'Built a fracture detection system with X-ray image analysis',
        'AI-generated orthopedic suggestions',
        'Fine-tuned LLMs'
      ],
      tech: ['YOLOv8', 'Flask', 'LLM', 'React'],
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/Bone_Fracture_Detection',
      link:'https://orthopedic-agent.vercel.app'
    },
    {
      title: 'E-Commerce Platform',
      points: [
        'Scalable, secure full-stack platform',
        'User authentication, cart, orders, admin dashboard'
      ],
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL'],
      icon: '🛒',
      viewCode: 'https://github.com/Gatt101/E-Commerce',
      link:'https://e-commerce-alpha-five-96.vercel.app'
    },{
      title: 'Sentimental Analysis',
      points: [
        'Sentiment analysis system for textual data'
      ],
      tech: ['Flask', 'Angular','NLP','Render'],
      icon: '🖹',
      viewCode: 'https://github.com/Gatt101/Sentimental_Analysis',
      link:'https://sentimental-analysis-gatt101s-projects.vercel.app'
    },
    {
      title: 'Text Summarizer',
      points: [
        'Text summarizer using transformers pipeline'
      ],
      tech: ['Flask', 'Angular','NLP','Render'],
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/AI-Text-Summarizer',
      link:''
    },
    {
      title: 'Tree Enumeration & Forest Safety AI',
      points: [
        'Classifies spatial regions using satellite data',
        'Residential and forest zone detection'
      ],
      tech: ['YOLOv8', 'GIS', 'Flask', 'Segmentation'],
      icon: '🌳',
      viewCode: '',
      link:''
    },
    {
      title: 'Simulation of Malware Detection System',
      points: [
        'Demo for malware detection system',
        'Uses AES algorithm for encryption and decryption'
      ],
      tech: ['Cryptography', 'System Security', 'Flask', 'Angular'],
      icon: '🔒',
      viewCode: 'https://github.com/Gatt101/CSS',
      link:'https://css-psi-sand.vercel.app'
    },
    {
      title: 'Blogging Website ',
      points: [
        'Simple blogging website',
        'Spring Boot, Angular, MongoDB'
      ],
      tech: ['Spring Boot', 'Angular', 'MongoDB'],
      icon: '🤖',
      viewCode: 'https://github.com/Gatt101/BlogApp_Frontend',
      link:'https://blog-app-frontend-flame.vercel.app'
    },
    {
      title: 'M-toolKit',
      points: [
        'Toolkit for mathematics: calculator, unit converter, formulas'
      ],
      tech: ['Java', 'Swing'],
      icon: '📝',
      viewCode: 'https://github.com/Gatt101/Swing_pro',
      link:''
    }
  ];
}