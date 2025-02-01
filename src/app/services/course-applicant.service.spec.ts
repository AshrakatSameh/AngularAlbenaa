import { TestBed } from '@angular/core/testing';

import { CourseApplicantService } from './course-applicant.service';

describe('CourseApplicantService', () => {
  let service: CourseApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
