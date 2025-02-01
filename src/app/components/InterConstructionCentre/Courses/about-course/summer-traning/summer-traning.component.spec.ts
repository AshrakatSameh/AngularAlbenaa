import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerTraningComponent } from './summer-traning.component';

describe('SummerTraningComponent', () => {
  let component: SummerTraningComponent;
  let fixture: ComponentFixture<SummerTraningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummerTraningComponent]
    });
    fixture = TestBed.createComponent(SummerTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
