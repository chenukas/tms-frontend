import { TestBed } from '@angular/core/testing';

import { SessionsService } from './sessions.service';

describe('LecturersService', () => {
  let service: SessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});