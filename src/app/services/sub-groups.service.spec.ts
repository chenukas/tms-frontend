import { TestBed } from '@angular/core/testing';

import { SubGroupsService } from './sub-groups.service';

describe('SubGroupsService', () => {
  let service: SubGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
