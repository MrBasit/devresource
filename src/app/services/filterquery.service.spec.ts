import { TestBed } from '@angular/core/testing';

import { FilterqueryService } from './filterquery.service';

describe('FilterqueryService', () => {
  let service: FilterqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
