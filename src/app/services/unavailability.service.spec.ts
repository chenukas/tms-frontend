import { TestBed } from '@angular/core/testing';

import { UnavailabilityService } from './unavailability.service';

describe('UnavailabilityService', () => {
  let service: UnavailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnavailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
