import { TestBed } from '@angular/core/testing';

import { PostfixService } from './postfix.service';

describe('PostfixService', () => {
  let service: PostfixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostfixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
