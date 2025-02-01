import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Max3Component } from './max3.component';

describe('Max3Component', () => {
  let component: Max3Component;
  let fixture: ComponentFixture<Max3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Max3Component]
    });
    fixture = TestBed.createComponent(Max3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
