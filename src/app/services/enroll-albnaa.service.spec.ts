import { TestBed } from '@angular/core/testing';

import { EnrollAlbnaaService } from './enroll-albnaa.service';

describe('EnrollAlbnaaService', () => {
  let service: EnrollAlbnaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollAlbnaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
