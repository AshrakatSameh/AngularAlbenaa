import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInstituteComponent } from './building-institute.component';

describe('BuildingInstituteComponent', () => {
  let component: BuildingInstituteComponent;
  let fixture: ComponentFixture<BuildingInstituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingInstituteComponent]
    });
    fixture = TestBed.createComponent(BuildingInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
