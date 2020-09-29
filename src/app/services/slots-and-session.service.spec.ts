import { TestBed } from '@angular/core/testing';

import { SlotsAndSessionService } from './slots-and-session.service';

describe('SlotsAndSessionService', () => {
  let service: SlotsAndSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotsAndSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
