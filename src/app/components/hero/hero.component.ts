import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxOrbComponent } from '@omnedia/ngx-orb';
import { NgxWordMorphComponent } from '@omnedia/ngx-word-morph';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule, NgxOrbComponent, NgxWordMorphComponent]
})
export class HeroComponent {
  isBrowser: boolean;
  isMobile: boolean = false;
  title = 'Gaurav Patil';
  subtitle = 'Full-Stack Developer | Java Developer | AI Enthusiast ';
  description = 'I\'m passionate about building full-stack apps, training AI models, and solving real-world problems through code.';
  projectsLink = '/projects';
  contactLink = '/contact';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.checkMobile();
      window.addEventListener('resize', this.checkMobile.bind(this));
    }
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
}