import { TestBed } from '@angular/core/testing';

import { InternProblemsService } from './intern-problems.service';

describe('InternProblemsService', () => {
  let service: InternProblemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternProblemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
