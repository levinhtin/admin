import { Injectable } from '@angular/core';
// import {MockBackend} from '@angular/testing';

import { Post } from '../models/post';
import { POSTS } from '../data/mocks/mock-posts';

@Injectable()
export class PostService {
  constructor() {};

  public getPosts(): any {
    return Promise.resolve(POSTS);
  };
}
