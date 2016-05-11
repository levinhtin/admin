import {
  fit,
  it,
  fdescribe,
  describe,
  expect,
  inject,
  async,
  beforeEach,
  beforeEachProviders,
  fakeAsync,
  tick
} from '@angular/core/testing';

import {
  ComponentFixture,
  TestComponentBuilder
} from '@angular/compiler/testing';
import { By } from '@angular/platform-browser';
import { Component, provide } from '@angular/core';

import {BaseRequestOptions, Http} from '@angular/http';

import {Post} from '../../../app/models/post';
import {PostService} from '../../../app/services/post.service';
import { POSTS } from '../../../app/data/mocks/mock-posts';

describe('Post service', () => {
  beforeEachProviders(() => [PostService]);

  // beforeEachProviders(() => [
  //   // BaseRequestOptions,
  //   // MockBackend,
  //   provide(Http, {
  //     useFactory: (backend: any, defaultOptions: any): any => {
  //       return new Http(backend, defaultOptions);
  //     }
  //     // deps: [MockBackend, BaseRequestOptions]
  //   }),

  //   PostService
  // ]);

  it('Should be greater than 10 items', async(inject([PostService], (service: PostService) => {
    service.getPosts().then((posts: any) => {
      console.log(posts.length);
      expect(posts.length).toBeGreaterThan(10);
    });
  })), 0);

  // it('Should be greater than 10 items', inject([PostService], (postSrv: PostService) => {
  //     return postSrv.getPosts()
  //         .then((res: any) => {
  //           console.log(res.length);
  //           expect(res.length).toBeGreaterThan(10);
  //         });
  // }));
});
