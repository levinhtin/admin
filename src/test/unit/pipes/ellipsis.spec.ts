import {
  fit,
  it,
  fdescribe,
  describe,
  expect,
  inject,
  beforeEach,
  beforeEachProviders,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { Component, provide } from '@angular/core';

import { EllipsisPipe } from '../../../app/pipes/ellipsis.pipe';

describe('Pipe Ellipsis Tests', () => {
  let ellipsis: EllipsisPipe;

  beforeEach(() => {
    ellipsis = new EllipsisPipe();
  });

  it('Should be keep: "Hello world" when limit: 20', () => {
    expect(ellipsis.transform('Hello world', 20)).toEqual('Hello world');
  });

  it('Should be keep: "Hello world" when limit: 0', () => {
    expect(ellipsis.transform('Hello world', 20)).toEqual('Hello world');
  });

  it('Should be keep: "Hello world" when limit: undefined', () => {
    expect(ellipsis.transform('Hello world', undefined)).toEqual('Hello world');
  });

  it('Should be cut: "Hello w..."', () => {
    expect(ellipsis.transform('Hello world', 7)).toEqual('Hello w...');
  });
});
