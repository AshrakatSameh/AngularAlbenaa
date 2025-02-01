import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdlComponent } from './icdl.component';

describe('IcdlComponent', () => {
  let component: IcdlComponent;
  let fixture: ComponentFixture<IcdlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcdlComponent]
    });
    fixture = TestBed.createComponent(IcdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
