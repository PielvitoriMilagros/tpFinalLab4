import { TestBed } from '@angular/core/testing';

import { AuthentiGuard } from './authenti.guard';

describe('AuthentiGuard', () => {
  let guard: AuthentiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
