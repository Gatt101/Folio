import { Injectable } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  // Fade in from bottom animation
  fadeInUp = trigger('fadeInUp', [
    state('void', style({
      opacity: 0,
      transform: 'translateY(50px)'
    })),
    transition(':enter', [
      animate('0.8s ease-out', keyframes([
        style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(25px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ])
  ]);

  // Fade in from left animation
  fadeInLeft = trigger('fadeInLeft', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(-50px)'
    })),
    transition(':enter', [
      animate('0.8s ease-out', keyframes([
        style({ opacity: 0, transform: 'translateX(-50px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(-25px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ]))
    ])
  ]);

  // Fade in from right animation
  fadeInRight = trigger('fadeInRight', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(50px)'
    })),
    transition(':enter', [
      animate('0.8s ease-out', keyframes([
        style({ opacity: 0, transform: 'translateX(50px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(25px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ]))
    ])
  ]);

  // Scale in animation
  scaleIn = trigger('scaleIn', [
    state('void', style({
      opacity: 0,
      transform: 'scale(0.8)'
    })),
    transition(':enter', [
      animate('0.6s ease-out', keyframes([
        style({ opacity: 0, transform: 'scale(0.8)', offset: 0 }),
        style({ opacity: 0.7, transform: 'scale(0.9)', offset: 0.7 }),
        style({ opacity: 1, transform: 'scale(1)', offset: 1 })
      ]))
    ])
  ]);

  // Slide in from bottom with stagger
  slideInUp = trigger('slideInUp', [
    state('void', style({
      opacity: 0,
      transform: 'translateY(100px)'
    })),
    transition(':enter', [
      animate('0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', keyframes([
        style({ opacity: 0, transform: 'translateY(100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ])
  ]);

  // Bounce in animation
  bounceIn = trigger('bounceIn', [
    state('void', style({
      opacity: 0,
      transform: 'scale(0.3)'
    })),
    transition(':enter', [
      animate('0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
        style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
        style({ opacity: 1, transform: 'scale(1.05)', offset: 0.8 }),
        style({ opacity: 1, transform: 'scale(0.9)', offset: 0.9 }),
        style({ opacity: 1, transform: 'scale(1)', offset: 1 })
      ]))
    ])
  ]);

  // Stagger animation for lists
  staggerAnimation = trigger('staggerAnimation', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        stagger(100, [
          animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]);

  constructor() { }
} 