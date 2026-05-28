import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/portfolio.data';
import { Project } from '../../core/models/portfolio.models';

type FilterTab = 'All' | 'Featured';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly githubUrl = 'https://github.com/adityaMoreRepo';

  readonly tabs: FilterTab[] = ['All', 'Featured'];
  readonly activeTab = signal<FilterTab>('All');

  readonly projects = PROJECTS;

  readonly filteredProjects = computed<Project[]>(() => {
    const tab = this.activeTab();
    if (tab === 'Featured') {
      return this.projects.filter((p) => p.featured);
    }
    return this.projects;
  });

  setTab(tab: FilterTab): void {
    this.activeTab.set(tab);
  }

  trackByTitle(_: number, project: Project): string {
    return project.title;
  }
}
