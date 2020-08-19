import { TestBed } from '@angular/core/testing';

import { TimeSlotsService } from './time-slots.service';

describe('TimeSlotsService', () => {
  let service: TimeSlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
