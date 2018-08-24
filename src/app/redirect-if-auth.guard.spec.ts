import { TestBed, async, inject } from '@angular/core/testing';

import { RedirectIfAuthGuard } from './redirect-if-auth.guard';

describe('RedirectIfAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectIfAuthGuard]
    });
  });

  it('should ...', inject([RedirectIfAuthGuard], (guard: RedirectIfAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
