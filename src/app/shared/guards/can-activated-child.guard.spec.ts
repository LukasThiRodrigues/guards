import { TestBed } from '@angular/core/testing';

import { CanActivatedChildGuard } from './can-activated-child.guard';

describe('CanActivatedChildGuard', () => {
  let guard: CanActivatedChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivatedChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
