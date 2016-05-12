import {Component} from '@angular/core';
// import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from '@angular/router';

import { ManagermentComponent } from './components/managerment/managerment.component';

import { LoginComponent } from './components/authentication/login.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'admin-app',
  templateUrl: 'app/app.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@Routes([
  { path: '/admin', component: ManagermentComponent },
  { path: '/login', component: LoginComponent }
])

export class AppComponent {
  private router: Router;
  constructor(_router: Router) {
    this.router = _router;
  }
  public ngOnInit(): void {
    this.router.navigate(['/admin']);
  }
}

