import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionFoundComponent } from './construction-found.component';

describe('ConstructionFoundComponent', () => {
  let component: ConstructionFoundComponent;
  let fixture: ComponentFixture<ConstructionFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionFoundComponent]
    });
    fixture = TestBed.createComponent(ConstructionFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
