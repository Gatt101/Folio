import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Method to map technology names to devicon classes
  getTechIcon(tech: string): string {
    const iconMap: {[key: string]: string} = {
      'Angular': 'devicon-angularjs-plain colored',
      'React': 'devicon-react-original colored',
      'Next.js': 'devicon-nextjs-original',
      'TypeScript': 'devicon-typescript-plain colored',
      'JavaScript': 'devicon-javascript-plain colored',
      'Python': 'devicon-python-plain colored',
      'Flask': 'devicon-flask-original colored',
      'Node.js': 'devicon-nodejs-plain colored',
      'Express.js': 'devicon-express-original',
      'MongoDB': 'devicon-mongodb-plain colored',
      'PostgreSQL': 'devicon-postgresql-plain colored',
      'MySQL': 'devicon-mysql-plain colored',
      'Tailwind': 'devicon-tailwindcss-plain colored',
      'Tailwind CSS': 'devicon-tailwindcss-plain colored',
      'C++': 'devicon-cplusplus-plain colored',
      'Java': 'devicon-java-plain colored',
      'Spring Boot': 'devicon-spring-plain colored',
      'Vercel': 'devicon-vercel-original',
      'Docker': 'devicon-docker-plain colored'
    };
    
    return iconMap[tech] || 'fa fa-code'; // Default to a generic code icon if not found
  }
  projects = [
    {
      title: 'Briefly – AI-Powered arXiv Reader',
      description:
        'A lightweight arXiv reader rebuilt in Next.js for speed and DX. It fetches papers, summarizes them with on-device Xenova pipelines, supports multi-tone summaries (Beginner / Story / Buzz), and ships an infinite-scroll explore feed with filters, related papers, reading list, and quick PDF open. Auth is JWT from scratch (no NextAuth) with real-time email verification. ISR/SSR + image optimization for fast first paint.',
      points: [
        'Infinite scroll explore feed + advanced search filters',
        'Multi-tone AI summaries via Xenova pipelines (client-side)',
        'JWT auth from scratch + real-time email verification',
        'Related papers, reading list, quick PDF open',
        'Next.js Route Handlers + ISR/SSR; optimized images for grid'
      ],
      image: '/assets/image7.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      icon: '📚',
      viewCode: 'https://github.com/Gatt101/prac101/tree/2e5a23d4fc3208c39a31d9db4887af5c198a4002/my-app',
      link: 'https://prac101-wtdw.vercel.app'
    },

    {
      title: 'Radiographic X-Ray Bone Fracture Severity Detection',
      description:
        'End-to-end orthopedic assistant: YOLO-based fracture detection on X-rays + LLM-powered treatment guidance. React UI shows annotated images, generates a PDF report, and chats about findings. Backend (Flask) runs inference and orchestrates suggestions via a fine-tuned Qwen-2.5 model. Includes hospital-nearby lookup (planned/opt-in).',
      points: [
        'YOLOv11 object detection for fracture localization',
        'LLM suggestions (Qwen-2.5) fine-tuned on medical-instruction-120k',
        'React frontend with annotated preview + PDF generation',
        'Flask APIs; image upload, processing, and report pipeline',
      ],
      image: '/assets/image.png',
      tech: ['Flask', 'Python', 'React', 'Tailwind', 'Vercel'],
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/Bone_Fracture_Detection',
      link: 'https://orthopedic-agent.vercel.app'
    },

    {
      title: 'E-Store Platform',
      description:
        'Full-stack e-commerce with secure auth, catalog, cart, orders, and admin controls. Clean Angular SPA talks to Spring Boot REST APIs with JWT. MySQL persistence and role-based access.',
      points: [
        'JWT authentication & authorization',
        'Product catalog, cart, checkout, orders',
        'Admin dashboard: inventory & order management',
        'Reusable Angular components and guards'
      ],
      tech: ['Angular', 'Spring Boot', 'MongoDB' , "TypeScript" ,'Docker'],
      icon: '🛒',
      image: 'assets/image2.png',
      viewCode: 'https://github.com/Gatt101/E-Commerce',
      link: 'https://e-commerce-alpha-five-96.vercel.app'
    },

    {
      title: 'Multilingual Sentiment Analysis',
      description:
        'Web app that classifies sentiment for texts across languages. Angular frontend with Flask backend using a multilingual Transformer model; simple REST integration and clean UI.',
      points: [
        'Multilingual Transformer-based sentiment model',
        'Angular UI with live inference via Flask',
        'REST endpoints; easy to extend to new languages'
      ],
      tech: ['Flask', 'Angular', 'Vercel'],
      icon: '🖹',
      image: 'assets/image5.png',
      viewCode: 'https://github.com/Gatt101/Sentimental_Analysis',
      link: 'https://sentimental-analysis-gatt101s-projects.vercel.app'
    },

    {
      title: 'AI Text Summarizer',
      description:
        'Minimal text-to-summary tool built on Transformers pipeline. Clean frontend + Flask API; useful as a building block for reading assistants.',
      points: [
        'Abstractive summarization via Transformers pipeline',
        'Simple Flask API + lightweight UI',
        'Configurable max length and temperature (extensible)'
      ],
      tech: ['Flask', 'Angular','Python','TypeScript'],
      image: 'assets/image9.png',
      icon: '🧠',
      viewCode: 'https://github.com/Gatt101/AI-Text-Summarizer',
      link: ''
    },

   {
  title: 'Tree Enumeration – YOLOv11-based Counting',
  description:
    'Developed an aerial imagery analysis pipeline to detect and count trees using YOLOv11, achieving 92% precision on drone datasets. Deployed a Flask API to process uploads and return bounding box annotations with accurate per-area counts.',
  points: [
    'YOLOv11 model trained for tree detection and enumeration',
    'Achieved 92% precision on real-world drone imagery',
    'Lightweight Flask API for image upload → detect → return results',
    'Implemented tiling + NMS to handle large scenes and reduce over-detection',
    'Exports results as CSV/GeoJSON for GIS integration'
  ],
  image: 'assets/image8.png',
  tech: ['Python', 'Flask','React'],
  icon: '🌳',
  viewCode: 'https://github.com/Gatt101/Tree_Enumeration',
  link: ''
}
,

    {
      title: 'Simulation of Malware Detection System',
      description:
        'Educational demo showing data protection flow and safe storage using symmetric cryptography. Includes AES-based encrypt/decrypt with a simple web UI.',
      points: [
        'AES encryption & decryption demo',
        'Explains threat model and secure storage concepts',
        'Modular services; easy to swap crypto primitives'
      ],
      tech: [ 'Flask', 'Angular'],
      icon: '🔒',
      image: 'assets/image4.png',
      viewCode: 'https://github.com/Gatt101/CSS',
      link: 'https://css-psi-sand.vercel.app'
    },

    {
      title: 'Blogging Website',
      description:
        'A simple blog platform with posts, auth, and CRUD. Built to practice Angular + Spring Boot with MongoDB.',
      points: [
        'Create/read/update/delete posts with auth',
        'Clean Angular components; REST integration',
        'MongoDB for flexible content storage'
      ],
      image: 'assets/image3.png',
      tech: ['Spring Boot', 'Angular', 'MongoDB'],
      icon: '🤖',
      viewCode: 'https://github.com/Gatt101/BlogApp_Frontend',
      link: 'https://blog-app-frontend-flame.vercel.app'
    },

    {
      title: 'M-toolKit',
      description:
        'Desktop toolkit for students: calculators, unit converters, and handy formulas in one Java Swing app.',
      points: [
        'Multi-tool desktop utility (calc + converters + formulas)',
        'Lightweight Java Swing UI',
        'Packaged for quick local use'
      ],
      tech: ['Java'],
      image: 'assets/image6.png',
      icon: '📝',
      viewCode: 'https://github.com/Gatt101/Swing_pro',
      link: ''
    }
  ];
}
