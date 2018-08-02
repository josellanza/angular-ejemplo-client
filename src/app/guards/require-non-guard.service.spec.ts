import { TestBed, inject } from '@angular/core/testing';

import { RequireNonGuardService } from './require-non-guard.service';

describe('RequireNonGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireNonGuardService]
    });
  });

  it('should be created', inject([RequireNonGuardService], (service: RequireNonGuardService) => {
    expect(service).toBeTruthy();
  }));
});
