import { TestBed } from '@angular/core/testing';

import { RuouDataService } from './ruou-data.service';

describe('RuouDataService', () => {
  let service: RuouDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuouDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
