import { Component, OnInit, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent implements OnInit, AfterViewInit {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private mouseX = 0;
  private mouseY = 0;
  private windowHalfX = 0;
  private windowHalfY = 0;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Initialize window dimensions only if in browser
    if (this.isBrowser) {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Only run Three.js in browser environment
    if (this.isBrowser) {
      this.initThreeJS();
      this.animate();
      
      // Add mouse move listener to make particles interactive
      document.addEventListener('mousemove', (event) => {
        this.mouseX = (event.clientX - this.windowHalfX) * 0.0003;
        this.mouseY = (event.clientY - this.windowHalfY) * 0.0003;
      });
      
      // Handle window resize
      window.addEventListener('resize', () => {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, this.el.nativeElement.offsetHeight);
      });
    }
  }

  private initThreeJS(): void {
    // Get the hero container element
    const container = this.el.nativeElement.querySelector('.hero-container');
    if (!container) return;
    
    const width = window.innerWidth;
    const height = container.getBoundingClientRect().height || window.innerHeight;


    // Create scene
    this.scene = new THREE.Scene();
    
    // Create camera with wider field of view
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    this.camera.position.z = 20;
    this.camera.position.y = 0;
    this.camera.position.x = 0;

    // Fix canvas placement behind content
this.renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
this.renderer.setSize(width, height);
this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Set canvas styling manually
this.renderer.domElement.style.position = 'absolute';
this.renderer.domElement.style.top = '0';
this.renderer.domElement.style.left = '0';
this.renderer.domElement.style.width = '100%';
this.renderer.domElement.style.height = '100%';
this.renderer.domElement.style.zIndex = '1';

// Insert canvas as first child
container.insertBefore(this.renderer.domElement, container.firstChild);


    // Create particles with varying sizes
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 7000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    // Create particles with random positions and colors
    for (let i = 0; i < particlesCount; i++) {
      // Position
      const i3 = i * 3;
      posArray[i3] = (Math.random() - 0.5) * 50;      // x
      posArray[i3 + 1] = (Math.random() - 0.5) * 50;  // y
      posArray[i3 + 2] = (Math.random() - 0.5) * 50;  // z
      
      // Colors - blue gradients
      colorsArray[i3] = 0.1 + Math.random() * 0.3;    // r (less red)
      colorsArray[i3 + 1] = 0.3 + Math.random() * 0.4; // g (some green)
      colorsArray[i3 + 2] = 0.5 + Math.random() * 0.5; // b (more blue)
      
      // Sizes - varying
      sizes[i] = Math.random() * 3;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Use custom shader material for more control
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
  }

  private animate(): void {
    if (!this.isBrowser) return;
    
    requestAnimationFrame(() => this.animate());

    // Rotate particles slowly
    this.particles.rotation.y += 0.0005;
    this.particles.rotation.x += 0.0001;
    
    // Add subtle movement based on mouse position
    if (this.mouseX && this.mouseY) {
      this.particles.rotation.y += this.mouseX * 0.1;
      this.particles.rotation.x += this.mouseY * 0.1;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
