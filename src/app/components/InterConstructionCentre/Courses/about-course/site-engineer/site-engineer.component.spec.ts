import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEngineerComponent } from './site-engineer.component';

describe('SiteEngineerComponent', () => {
  let component: SiteEngineerComponent;
  let fixture: ComponentFixture<SiteEngineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteEngineerComponent]
    });
    fixture = TestBed.createComponent(SiteEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
