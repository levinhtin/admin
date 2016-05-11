import {Component} from '@angular/core';
// import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AboutComponent } from './components/about/about.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'admin-app',
  templateUrl: 'app/app.html',
  directives: [
    ROUTER_DIRECTIVES, SidebarComponent
  ]
})

@Routes([
  { path: '/', component: HomeComponent },
  { path: '/post/:id', component: PostDetailComponent },
  { path: '/users', component: UserComponent },
  { path: '/about', component: AboutComponent }
])

export class AppComponent {
  private router: Router;
  constructor(_router: Router) {
    this.router = _router;
  }
  public ngOnInit(): void {
    // this.router.navigate(['/users']);
  }
}

