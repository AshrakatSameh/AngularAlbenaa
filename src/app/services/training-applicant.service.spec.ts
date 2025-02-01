import { TestBed } from '@angular/core/testing';

import { TrainingApplicantService } from './training-applicant.service';

describe('TrainingApplicantService', () => {
  let service: TrainingApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
