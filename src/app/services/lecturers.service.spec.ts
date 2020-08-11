import { TestBed } from '@angular/core/testing';

import { LecturersService } from './lecturers.service';

describe('LecturersService', () => {
  let service: LecturersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});