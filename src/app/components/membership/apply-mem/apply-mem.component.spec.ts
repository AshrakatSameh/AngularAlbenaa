import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyMemComponent } from './apply-mem.component';

describe('ApplyMemComponent', () => {
  let component: ApplyMemComponent;
  let fixture: ComponentFixture<ApplyMemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyMemComponent]
    });
    fixture = TestBed.createComponent(ApplyMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
