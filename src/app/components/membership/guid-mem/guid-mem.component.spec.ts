import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidMemComponent } from './guid-mem.component';

describe('GuidMemComponent', () => {
  let component: GuidMemComponent;
  let fixture: ComponentFixture<GuidMemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidMemComponent]
    });
    fixture = TestBed.createComponent(GuidMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
