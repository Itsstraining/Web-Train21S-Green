import { TestBed } from '@angular/core/testing';

import { DataseviceService } from './datasevice.service';

describe('DataseviceService', () => {
  let service: DataseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
