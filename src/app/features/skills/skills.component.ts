import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SKILLS } from '../../data/portfolio.data';
import { Skill } from '../../core/models/portfolio.models';

type Category = 'All' | 'Backend' | 'Frontend' | 'Cloud & DevOps' | 'Databases' | 'Tools';

const CATEGORIES: Category[] = ['All', 'Backend', 'Frontend', 'Cloud & DevOps', 'Databases', 'Tools'];

const LEVEL_CONFIG: Record<Skill['level'], { label: string; cssClass: string }> = {
  Expert:       { label: 'Expert',       cssClass: 'level-expert' },
  Proficient:   { label: 'Proficient',   cssClass: 'level-proficient' },
  Intermediate: { label: 'Intermediate', cssClass: 'level-intermediate' },
  Familiar:     { label: 'Familiar',     cssClass: 'level-familiar' },
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('gridStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px) scale(0.96)' }),
          stagger(50, [
            animate('360ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">

        <!-- Section Header -->
        <div class="section-header reveal" appScrollReveal>
          <span class="section-label">// tools</span>
          <h2 class="section-title gradient-text">Skills &amp; Technologies</h2>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs reveal" appScrollReveal [delay]="100">
          @for (cat of categories; track cat) {
            <button
              class="filter-tab"
              [class.active]="activeCategory() === cat"
              (click)="setCategory(cat)"
              type="button"
            >
              {{ cat }}
              @if (getCategoryCount(cat) > 0) {
                <span class="tab-count">{{ getCategoryCount(cat) }}</span>
              }
            </button>
          }
        </div>

        <!-- Skills Grid -->
        <div
          class="skills-grid"
          [@gridStagger]="activeCategory()"
        >
          @for (skill of filteredSkills(); track skill.name) {
            <div class="skill-card glass glass-hover">
              <div class="skill-icon-wrap">
                <i [class]="skill.icon + ' colored'" aria-hidden="true"></i>
              </div>
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span
                  class="skill-level"
                  [ngClass]="getLevelClass(skill.level)"
                >{{ skill.level }}</span>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  readonly categories: Category[] = CATEGORIES;
  readonly activeCategory = signal<Category>('All');

  readonly filteredSkills = computed<Skill[]>(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? SKILLS : SKILLS.filter((s: Skill) => s.category === cat);
  });

  setCategory(cat: Category): void {
    this.activeCategory.set(cat);
  }

  getCategoryCount(cat: Category): number {
    if (cat === 'All') return 0; // don't show count on "All"
    return SKILLS.filter((s: Skill) => s.category === cat).length;
  }

  getLevelClass(level: Skill['level']): string {
    return LEVEL_CONFIG[level]?.cssClass ?? '';
  }
}
