import { TestBed } from '@angular/core/testing';

import { AppRouterProvider } from './app-router.service';

describe('AppRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRouterProvider = TestBed.get(AppRouterProvider);
    expect(service).toBeTruthy();
  });
});
