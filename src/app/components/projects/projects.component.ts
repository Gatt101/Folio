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
      title: 'Radiographic X-Ray Bone Fracture Severity Detection and Analysis',
      description: 'Built a fracture detection system with X-ray image analysis and AI-generated orthopedic suggestions using fine-tuned LLMs.',
      tech: ['YOLOv8', 'Flask', 'LLM', 'React'],
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/Bone_Fracture_Detection',
      link:''
    },
    {
      title: 'E-Commerce Platform',
      description: 'Designed a scalable, secure full-stack platform with user auth, cart, orders, and admin dashboard.',
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL'],
      icon: '🛒',
      viewCode: 'https://github.com/Gatt101/E-Commerce',
      link:'https://e-commerce-alpha-five-96.vercel.app'
    },{
      title: 'Sentimental Analysis',
      description: 'Built a sentimental analaysis system for textual data',
      tech: ['Flask', 'Angular','NLP','Render'],
      icon: '🖹',
      viewCode: 'https://github.com/Gatt101/Sentimental_Analysis',
      link:'https://sentimental-analysis-gatt101s-projects.vercel.app'
    },
    {
      title: 'Text Summarizer',
      description: 'Built an text summarizer using pipeline from transformers',
      tech: ['Flask', 'Angular','NLP','Render'],
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/AI-Text-Summarizer',
      link:''
    },
    {
      title: 'Tree Enumeration & Forest Safety AI',
      description: 'Developed a smart ML system that classifies spatial regions into residential and forest zones using satellite data.',
      tech: ['YOLOv8', 'GIS', 'Flask', 'Segmentation'],
      icon: '🌳',
      viewCode: '',
      link:''
    },
    {
      title: 'Simulation of Malware Detection System',
      description: 'Prepared a demo for a malware detection System, made use of Cryptography and System Security concepts.Used AES Algorithm for encryption and decryption.',
      tech: ['YOLOv8', 'GIS', 'Flask', 'Segmentation'],
      icon: '🔒',
      viewCode: '',
      link:''
    }

  ];
}
