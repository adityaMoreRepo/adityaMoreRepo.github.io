import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PERSONAL } from '../../../data/portfolio.data';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  readonly resumeUrl = PERSONAL.resumeUrl;

  // ── Signals ────────────────────────────────────────────────
  isScrolled       = signal(false);
  isMobileMenuOpen = signal(false);
  activeSection    = signal('hero');

  readonly navLinks: NavLink[] = [
    { label: 'Home',       fragment: 'hero'       },
    { label: 'About',      fragment: 'about'      },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Skills',     fragment: 'skills'     },
    { label: 'Projects',   fragment: 'projects'   },
    { label: 'Blog',       fragment: 'blog'       },
    { label: 'Contact',    fragment: 'contact'    },
  ];

  private observer: IntersectionObserver | null = null;

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  // ── Scroll Listener ────────────────────────────────────────
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  // ── IntersectionObserver ───────────────────────────────────
  private initIntersectionObserver(): void {
    const sectionIds = this.navLinks.map(l => l.fragment);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  // ── Navigation ─────────────────────────────────────────────
  scrollTo(fragment: string): void {
    this.closeMobileMenu();
    if (!isPlatformBrowser(this.platformId)) return;

    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isActive(fragment: string): boolean {
    return this.activeSection() === fragment;
  }

  // ── Mobile Menu ────────────────────────────────────────────
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
