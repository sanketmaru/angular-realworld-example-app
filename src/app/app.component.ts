import { Component, OnInit } from '@angular/core';

import { UserService } from './core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './slideInAnimation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }

  prepareRoute(outlet: RouterOutlet) {
    const ret = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    console.log('ret', ret);
    return ret;
  }
}
