import { TestBed } from '@angular/core/testing';

import { EnquiryCourseService } from './enquiry-course.service';

describe('EnquiryCourseService', () => {
  let service: EnquiryCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
