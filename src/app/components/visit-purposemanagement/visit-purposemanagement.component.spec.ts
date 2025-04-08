import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitPurposemanagementComponent } from './visit-purposemanagement.component';

describe('VisitPurposemanagementComponent', () => {
  let component: VisitPurposemanagementComponent;
  let fixture: ComponentFixture<VisitPurposemanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitPurposemanagementComponent]
    });
    fixture = TestBed.createComponent(VisitPurposemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
