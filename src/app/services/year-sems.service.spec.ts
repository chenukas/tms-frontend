import { TestBed } from '@angular/core/testing';

import { YearSemsService } from './year-sems.service';

describe('YearSemsService', () => {
  let service: YearSemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearSemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
