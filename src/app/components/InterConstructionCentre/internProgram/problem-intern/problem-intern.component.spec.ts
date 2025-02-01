import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemInternComponent } from './problem-intern.component';

describe('ProblemInternComponent', () => {
  let component: ProblemInternComponent;
  let fixture: ComponentFixture<ProblemInternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemInternComponent]
    });
    fixture = TestBed.createComponent(ProblemInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
