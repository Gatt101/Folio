import { Directive, ElementRef, Input, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationDelay: number = 0;
  @Input() threshold: number = 0.1;

  private observer: IntersectionObserver | null = null;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Only run on browser side
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    } else {
      // On server side, just add the animate-in class immediately
      setTimeout(() => {
        this.renderer.addClass(this.elementRef.nativeElement, 'animate-in');
      }, this.animationDelay);
    }
  }

  private setupIntersectionObserver() {
    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for older browsers
      setTimeout(() => {
        this.renderer.addClass(this.elementRef.nativeElement, 'animate-in');
      }, this.animationDelay);
      return;
    }

    const options = {
      threshold: this.threshold,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.renderer.addClass(entry.target, 'animate-in');
          }, this.animationDelay);
          
          // Stop observing after animation is triggered
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
} 