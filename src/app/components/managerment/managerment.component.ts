import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'managerment',
  templateUrl: './app/components/managerment/managerment.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent]
})

@Routes([
  { path: '', component: HomeComponent },
  { path: '/users', component: UserComponent }
])


export class ManagermentComponent {
  private router: Router;
  constructor(_router: Router) {
    this.router = _router;
  }
}
