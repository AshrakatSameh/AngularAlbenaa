import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangmentComponent } from './mangment.component';

describe('MangmentComponent', () => {
  let component: MangmentComponent;
  let fixture: ComponentFixture<MangmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangmentComponent]
    });
    fixture = TestBed.createComponent(MangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
