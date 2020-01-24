import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group,
    animateChild
  } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      group([
          query(':enter', [
              style({ transform: 'translateY(100%)' }),
              animate('0.5s ease-in-out',
              style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
              style({ transform: 'translateY(0%)' }),
              animate('0.5s ease-in-out',
              style({ transform: 'translateY(-100%)' }))
          ], { optional: true }),
      ]),
    ])
  ]);
