import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxOrbComponent } from '@omnedia/ngx-orb';
import { NgxWordMorphComponent } from '@omnedia/ngx-word-morph';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule, NgxOrbComponent , NgxWordMorphComponent]
})
export class HeroComponent {
  isBrowser: boolean;
  title = 'Gaurav Patil';
  subtitle = 'Full-Stack Developer | AI Enthusiast | Builder of Impactful Software';
  description = 'Welcome to my digital playground. I\'m passionate about building full-stack apps, training AI models, and solving real-world problems through code.';
  projectsLink = '/projects';
  contactLink = '/contact';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}