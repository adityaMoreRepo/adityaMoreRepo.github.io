import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed,
  inject,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
  animateChild,
  group,
} from '@angular/animations';
import { PERSONAL, SOCIAL_LINKS, STATS } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeSlideRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('0.9s 0.2s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeSlideLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px)' }),
        animate('0.9s 0.4s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 0.6s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
  template: `
    <section id="hero" class="hero-section">

      <!-- Particles background -->
      <div class="particles-container" aria-hidden="true">
        @for (p of particles; track p.id) {
          <span class="particle" [style]="p.style"></span>
        }
      </div>

      <!-- Glow orbs -->
      <div class="glow-orb glow-orb--purple" aria-hidden="true"></div>
      <div class="glow-orb glow-orb--cyan" aria-hidden="true"></div>

      <div class="hero-container">

        <!-- LEFT SIDE -->
        <div class="hero-left" @fadeSlideRight>

          <!-- Greeting -->
          <p class="hero-greeting">
            <span class="greeting-line"></span>
            Hi, I'm
          </p>

          <!-- Name -->
          <h1 class="hero-name gradient-text">{{ personal.name }}</h1>

          <!-- Typing tagline -->
          <div class="hero-tagline-row">
            <span class="tagline-prefix">&gt;</span>
            <span class="typing-text">{{ displayedText() }}</span>
            <span class="typing-cursor" [ngClass]="{ 'cursor-blink': !isTyping() }">|</span>
          </div>

          <!-- Bio -->
          <p class="hero-bio">{{ personal.bio }}</p>

          <!-- CTA Buttons -->
          <div class="hero-cta-row" @fadeSlideUp>
            <a href="#projects" class="btn btn-primary" (click)="scrollTo($event, 'projects')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M12 17v4"/>
              </svg>
              View My Work
            </a>
            <a [href]="personal.resumeUrl" class="btn btn-secondary" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <!-- Social Links -->
          <div class="hero-socials" @fadeIn>
            <a href="https://github.com/adityaMoreRepo" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aditya-more-83520a150" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:adimore131@gmail.com" class="social-link" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="hero-right" @fadeSlideLeft>
          <div class="profile-card glass">

            <!-- Gradient ring -->
            <div class="profile-ring">
              <img
                [src]="personal.profileImage"
                [alt]="personal.name + ' profile photo'"
                class="profile-image"
                loading="eager"
              />
            </div>

            <!-- Stat badges -->
            <div class="stat-badge stat-badge--top-right glass">
              <span class="stat-badge__value">4+</span>
              <span class="stat-badge__label">Years Exp</span>
            </div>
            <div class="stat-badge stat-badge--bottom-left glass">
              <span class="stat-badge__value">15+</span>
              <span class="stat-badge__label">Technologies</span>
            </div>
            <div class="stat-badge stat-badge--bottom-right glass">
              <span class="stat-badge__value">70%</span>
              <span class="stat-badge__label">AWS Cost↓</span>
            </div>

            <!-- Code snippet badge -->
            <div class="code-badge glass">
              <span class="code-badge__dot code-badge__dot--green"></span>
              <code>Backend Engineer</code>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" @fadeIn>
        <span class="scroll-label">Scroll</span>
        <div class="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
          </svg>
        </div>
      </div>

    </section>
  `,
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly personal = PERSONAL;
  readonly socialLinks = SOCIAL_LINKS;
  readonly stats = STATS;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  // Typing animation state
  displayedText = signal('');
  isTyping = signal(true);

  private taglineIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSubscription?: Subscription;

  // Particle data (generated once)
  readonly particles = this.generateParticles(25);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startTypingAnimation();
    }
  }

  ngOnDestroy(): void {
    this.typingSubscription?.unsubscribe();
  }

  scrollTo(event: Event, targetId: string): void {
    event.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private startTypingAnimation(): void {
    const taglines = PERSONAL.taglines;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseDuration = 2000;

    const tick = () => {
      const currentTagline = taglines[this.taglineIndex];

      if (!this.isDeleting) {
        // Typing forward
        this.charIndex++;
        this.displayedText.set(currentTagline.substring(0, this.charIndex));
        this.isTyping.set(true);

        if (this.charIndex === currentTagline.length) {
          // Done typing — pause before deleting
          this.isTyping.set(false);
          setTimeout(() => {
            this.isDeleting = true;
            this.cdr.markForCheck();
            scheduleNext(deleteSpeed);
          }, pauseDuration);
          return;
        }
      } else {
        // Deleting
        this.charIndex--;
        this.displayedText.set(currentTagline.substring(0, this.charIndex));
        this.isTyping.set(true);

        if (this.charIndex === 0) {
          // Move to next tagline
          this.isDeleting = false;
          this.taglineIndex = (this.taglineIndex + 1) % taglines.length;
          setTimeout(() => {
            this.cdr.markForCheck();
            scheduleNext(typeSpeed);
          }, 300);
          return;
        }
      }

      this.cdr.markForCheck();
      scheduleNext(this.isDeleting ? deleteSpeed : typeSpeed);
    };

    const scheduleNext = (delay: number) => {
      setTimeout(tick, delay);
    };

    scheduleNext(600);
  }

  private generateParticles(count: number): Array<{ id: number; style: string }> {
    return Array.from({ length: count }, (_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = 1 + Math.random() * 3;
      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * 8;
      const opacity = 0.2 + Math.random() * 0.5;
      const hue = Math.random() > 0.5 ? '264, 70%, 60%' : '192, 91%, 44%'; // purple or cyan
      return {
        id: i,
        style: `
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          opacity: ${opacity};
          background: hsl(${hue});
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
        `,
      };
    });
  }
}
