import { TestBed } from '@angular/core/testing';

import { RepiceService } from './repice.service';

describe('RepiceService', () => {
  let service: RepiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
