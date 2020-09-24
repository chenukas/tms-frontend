import { TestBed } from '@angular/core/testing';

import { ConsecutiveSService } from './consecutive-s.service';

describe('ConsecutiveSService', () => {
  let service: ConsecutiveSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsecutiveSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
