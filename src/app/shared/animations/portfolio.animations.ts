import {
  animate,
  AnimationTriggerMetadata,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Fades an element in while sliding it upward from 30 px below its final position.
 *
 * Usage: [@fadeInUp]
 */
export const fadeInUp: AnimationTriggerMetadata = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

/**
 * Staggers the entrance of child list items with a 100 ms offset.
 * Each child starts hidden (opacity 0, translated 20 px down) and
 * animates to its natural position over 500 ms.
 *
 * Usage: [@staggerList]="items.length" on the list container.
 * Children must be `*ngFor`-rendered (`:enter` selector) or managed
 * with Angular's new @for control-flow block.
 */
export const staggerList: AnimationTriggerMetadata = trigger('staggerList', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(100, [
          animate(
            '500ms ease',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

/**
 * Slides an element in from the left (40 px) while fading it in.
 *
 * Usage: [@slideInLeft]
 */
export const slideInLeft: AnimationTriggerMetadata = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('600ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

/**
 * Slides an element in from the right (40 px) while fading it in.
 *
 * Usage: [@slideInRight]
 */
export const slideInRight: AnimationTriggerMetadata = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate('600ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
