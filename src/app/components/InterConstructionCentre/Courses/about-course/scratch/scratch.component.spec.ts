import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchComponent } from './scratch.component';

describe('ScratchComponent', () => {
  let component: ScratchComponent;
  let fixture: ComponentFixture<ScratchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScratchComponent]
    });
    fixture = TestBed.createComponent(ScratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
