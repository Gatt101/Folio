import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
  title: 'Briefly – AI-Powered arXiv Reader',
  points: [
    'Built a lightweight research paper reader with AI-powered summaries',
    'Implemented infinite scroll feed and advanced search with filters',
    'JWT authentication from scratch (no NextAuth)',
    'Integrated real-time email verification',
    'AI summaries generated via Xenova libraries with multiple tones'
  ],
  image: '/assets/image7.png',
  tech: ['Next.js', 'TypeScript', 'Tailwind', 'Xenova', 'Vercel'],
  icon: '📚',
  viewCode: 'https://github.com/Gatt101/prac101/tree/2e5a23d4fc3208c39a31d9db4887af5c198a4002/my-app',
  link: 'https://prac101-wtdw.vercel.app'
}
,
    {
      title: 'Radiographic X-Ray Bone Fracture Severity Detection',
      points: [
        'Built a fracture detection system with X-ray image analysis',
        'AI-generated orthopedic suggestions',
        'Fine-tuned LLMs'
      ],
      image: '/assets/image.png',
      tech: ['YOLOv8', 'Flask', 'LLM', 'React'],
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/Bone_Fracture_Detection',
      link: 'https://orthopedic-agent.vercel.app'
    },
    {
      title: 'E-Store Platform',
      points: [
        'Scalable, secure full-stack platform',
        'User authentication, cart, orders, admin dashboard'
      ],
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL'],
      icon: '🛒',
      image: 'assets/image2.png',
      viewCode: 'https://github.com/Gatt101/E-Commerce',
      link: 'https://e-commerce-alpha-five-96.vercel.app'
    },
    {
      title: 'Sentimental Analysis',
      points: [
        'Sentiment analysis system for textual data'
      ],
      tech: ['Flask', 'Angular', 'NLP', 'Render'],
      icon: '🖹',
      image: 'assets/image5.png',
      viewCode: 'https://github.com/Gatt101/Sentimental_Analysis',
      link: 'https://sentimental-analysis-gatt101s-projects.vercel.app'
    },
    {
      title: 'Text Summarizer',
      points: [
        'Text summarizer using transformers pipeline'
      ],
      tech: ['Flask', 'Angular', 'NLP', 'Render'],
      image: 'https://via.placeholder.com/150',
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/AI-Text-Summarizer',
      link: ''
    },
    {
      title: 'Tree Enumeration & Forest Safety AI',
      points: [
        'Classifies spatial regions using satellite data',
        'Residential and forest zone detection'
      ],
      image: 'https://via.placeholder.com/150',
      tech: ['YOLOv8', 'GIS', 'Flask', 'Segmentation'],
      icon: '🌳',
      viewCode: '',
      link: ''
    },
    {
      title: 'Simulation of Malware Detection System',
      points: [
        'Demo for malware detection system',
        'Uses AES algorithm for encryption and decryption'
      ],
      tech: ['Cryptography', 'System Security', 'Flask', 'Angular'],
      icon: '🔒',
      image: 'assets/image4.png',
      viewCode: 'https://github.com/Gatt101/CSS',
      link: 'https://css-psi-sand.vercel.app'
    },
    {
      title: 'Blogging Website',
      points: [
        'Simple blogging website',
        'Spring Boot, Angular, MongoDB'
      ],
      image: 'assets/image3.png',
      tech: ['Spring Boot', 'Angular', 'MongoDB'],
      icon: '🤖',
      viewCode: 'https://github.com/Gatt101/BlogApp_Frontend',
      link: 'https://blog-app-frontend-flame.vercel.app'
    },
    {
      title: 'M-toolKit',
      points: [
        'Toolkit for mathematics: calculator, unit converter, formulas'
      ],
      tech: ['Java', 'Swing'],
      image: 'https://via.placeholder.com/150',
      icon: '📝',
      viewCode: 'https://github.com/Gatt101/Swing_pro',
      link: ''
    }
  ];
}