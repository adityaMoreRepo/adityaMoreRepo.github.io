import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  input,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  /** Optional delay in milliseconds before the transition plays. */
  readonly delay = input<number>(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  constructor() {
    // Reactively apply transition-delay whenever the delay input changes.
    effect(() => {
      const ms = this.delay();
      this.el.nativeElement.style.transitionDelay = ms > 0 ? `${ms}ms` : '';
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      // SSR: immediately mark visible so content is not hidden server-side.
      this.markVisible();
      return;
    }

    const host: HTMLElement = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.markVisible();
            // Unobserve after first intersection – reveal is a one-shot effect.
            this.observer?.unobserve(host);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private markVisible(): void {
    this.el.nativeElement.classList.add('visible');
  }
}
