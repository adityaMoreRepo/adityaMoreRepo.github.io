import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { EXPERIENCES } from '../../data/portfolio.data';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">

        <!-- Section Header -->
        <div class="section-header reveal" appScrollReveal>
          <span class="section-label">// career</span>
          <h2 class="section-title gradient-text">Work Experience</h2>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <!-- Vertical line -->
          <div class="timeline-line"></div>

          @for (exp of experiences; track exp.company; let i = $index) {
            <!-- Connector dot -->
            <div
              class="timeline-dot"
              [class.current-dot]="exp.current"
              [style.top]="getDotTop(i)"
            ></div>

            <!-- Timeline Entry -->
            <div
              class="timeline-entry reveal"
              [class.entry-left]="i % 2 === 0"
              [class.entry-right]="i % 2 !== 0"
              appScrollReveal
              [delay]="i * 120"
            >
              <div class="timeline-card glass">

                <!-- Card Header -->
                <div class="card-header">
                  <div class="company-row">
                    <h3 class="company-name">
                      {{ exp.company }}
                      @if (exp.client) {
                        <span class="client-separator">|</span>
                        <span class="client-name">{{ exp.client }}</span>
                      }
                    </h3>
                    @if (exp.current) {
                      <span class="current-badge">
                        <span class="pulse-dot"></span>
                        Current
                      </span>
                    }
                  </div>

                  <p class="role-title">{{ exp.role }}</p>

                  <div class="meta-row">
                    <span class="meta-item period">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {{ exp.period }}
                    </span>
                    <span class="meta-item location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {{ exp.location }}
                    </span>
                  </div>
                </div>

                <!-- Tech Tags -->
                <div class="tech-tags">
                  @for (tag of exp.tech; track tag) {
                    <span class="tech-tag">{{ tag }}</span>
                  }
                </div>

                <!-- Bullet Points -->
                <ul class="bullets">
                  @for (bullet of exp.bullets; track bullet) {
                    <li class="bullet-item">{{ bullet }}</li>
                  }
                </ul>

              </div>
              <!-- Connector arrow -->
              <div class="card-arrow"></div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  readonly experiences: Experience[] = EXPERIENCES;

  /** Approximate top offset for each dot — used to align with cards. */
  getDotTop(index: number): string {
    // Each entry is roughly 340px tall with 48px gap
    const approxCardHeight = 340;
    const gap = 48;
    return `${index * (approxCardHeight + gap) + 48}px`;
  }
}
