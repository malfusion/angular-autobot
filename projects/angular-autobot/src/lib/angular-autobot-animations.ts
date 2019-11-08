import { trigger, transition, style, animate } from '@angular/animations';

export function getSlideFadeAnim() {
  return trigger('slideFadeAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(-10px)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)', opacity: 1 }),
      animate('300ms', style({ transform: 'translateX(-10px)', opacity: 0 }))
    ])
  ]);
}
