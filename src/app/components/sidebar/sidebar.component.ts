import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'admin-sidebar',
  templateUrl: 'app/components/sidebar/sidebar.html',
  directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent {}
