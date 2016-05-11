import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';

import { Post } from '../../models/post';

@Component({
  selector: 'post-detail',
  templateUrl: 'app/components/post-detail/post-detail.html'
})

export class PostDetailComponent implements OnInit {
  private post: Post;
  private _selectedId: number;
  private router: Router;
  private routeParams: RouteSegment;

  constructor(_router: Router, _routeParams: RouteSegment) {
      this.router = _router;
      this.routeParams = _routeParams;
  }
  public ngOnInit(): void {
    let id: string = this.routeParams.getParam('id');
  }
}
