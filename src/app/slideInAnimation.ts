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
      // style({ position: 'relative' }),
      // query(':enter, :leave', [
      //   style({
      //     position: 'absolute',
      //     top: 0,
      //     left: 0,
      //     width: '100%'
      //   })
      // ], { optional: true }),
      group([
          query(':enter', [
              style({ transform: 'translateY(-100%)' }),
              // animate(1000)
              animate('0.8s ease-in-out')
          ], { optional: true }),
          query(':leave', [
              // style({ transform: 'translateY(0%)' }),
              // animate(1000)
              animate('0.3s ease-in-out',
              style({ transform: 'translateY(100%)' })),
              style({ opacity: 0 })
          ], { optional: true }),
      ]),
    ])
  ]);
