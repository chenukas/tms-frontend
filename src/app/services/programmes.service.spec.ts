import { TestBed } from '@angular/core/testing';

import { ProgrammesService } from './programmes.service';

describe('ProgrammesService', () => {
  let service: ProgrammesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
