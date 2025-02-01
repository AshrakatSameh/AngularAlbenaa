import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitComponent } from './revit.component';

describe('RevitComponent', () => {
  let component: RevitComponent;
  let fixture: ComponentFixture<RevitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevitComponent]
    });
    fixture = TestBed.createComponent(RevitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
