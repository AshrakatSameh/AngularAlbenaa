import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceDiplomaComponent } from './space-diploma.component';

describe('SpaceDiplomaComponent', () => {
  let component: SpaceDiplomaComponent;
  let fixture: ComponentFixture<SpaceDiplomaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceDiplomaComponent]
    });
    fixture = TestBed.createComponent(SpaceDiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
