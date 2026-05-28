import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  ElementRef,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { STATS } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="section about-section">
      <div class="container">

        <!-- Section header -->
        <div class="section-header reveal" #revealEl>
          <span class="section-label">About Me</span>
          <h2 class="section-title">The Story Behind the Code</h2>
        </div>

        <!-- Main grid -->
        <div class="about-grid">

          <!-- LEFT — Image card -->
          <div class="about-image-col reveal reveal-delay-1" #revealEl>

            <div class="image-card glass">
              <div class="image-ring">
                <img
                  src="assets/images/profile.jpg"
                  alt="Aditya More"
                  class="about-profile-img"
                  loading="lazy"
                />
              </div>

              <!-- Decorative corner accents -->
              <div class="corner-accent corner-accent--tl" aria-hidden="true"></div>
              <div class="corner-accent corner-accent--br" aria-hidden="true"></div>
            </div>

            <!-- Currently at badge -->
            <div class="currently-badge glass">
              <div class="currently-dot" aria-hidden="true"></div>
              <div class="currently-text">
                <span class="currently-label">Currently at</span>
                <span class="currently-value">Infosys | BNY Mellon</span>
              </div>
            </div>

          </div>

          <!-- RIGHT — Bio & stats -->
          <div class="about-content-col">

            <!-- Bio paragraphs -->
            <div class="about-bio reveal reveal-delay-2" #revealEl>
              <p>
                Hey! I'm <strong>Aditya More</strong>, a Backend Engineer based in
                <strong>Pune, India</strong> with 4+ years of hands-on experience
                crafting production-grade, scalable systems. I currently work at
                <strong>Infosys</strong>, contributing to the wealth management and
                custody platforms of <strong>BNY Mellon</strong> — one of the world's
                largest custodian banks.
              </p>

              <p>
                My core expertise lies in building robust backend services with
                <strong>Java</strong> and <strong>Spring Boot</strong>, designing
                event-driven architectures using <strong>Apache Kafka</strong>, and
                deploying cloud-native solutions on <strong>AWS</strong>. I've
                engineered systems that reduced cloud costs by 70%, cut integration
                time by 30%, and improved developer velocity through smart tooling.
              </p>

              <p>
                Beyond the code, I'm passionate about writing clean, maintainable
                solutions that stand the test of scale. When I'm not architecting
                microservices, you'll find me exploring new tech, contributing to
                side projects, or levelling up on system design and distributed systems.
              </p>
            </div>

            <!-- Stat cards grid -->
            <div class="stats-grid reveal reveal-delay-3" #revealEl>
              @for (stat of stats; track stat.label) {
                <div class="stat-card glass glass-hover">
                  <span class="stat-card__value">{{ stat.value }}</span>
                  <span class="stat-card__label">{{ stat.label }}</span>
                </div>
              }
            </div>

          </div>
        </div>

      </div>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {
  readonly stats = STATS;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly elRef = inject(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollReveal();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initScrollReveal(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const revealEls = this.elRef.nativeElement.querySelectorAll('.reveal');
    revealEls.forEach((el: Element) => this.observer!.observe(el));
  }
}
