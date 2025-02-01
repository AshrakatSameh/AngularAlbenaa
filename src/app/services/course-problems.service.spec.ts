import { TestBed } from '@angular/core/testing';

import { CourseProblemsService } from './course-problems.service';

describe('CourseProblemsService', () => {
  let service: CourseProblemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseProblemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
