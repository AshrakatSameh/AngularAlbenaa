import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismComponent } from './tourism.component';

describe('TourismComponent', () => {
  let component: TourismComponent;
  let fixture: ComponentFixture<TourismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourismComponent]
    });
    fixture = TestBed.createComponent(TourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
