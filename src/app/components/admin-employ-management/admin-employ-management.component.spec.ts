import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployManagementComponent } from './admin-employ-management.component';

describe('AdminEmployManagementComponent', () => {
  let component: AdminEmployManagementComponent;
  let fixture: ComponentFixture<AdminEmployManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEmployManagementComponent]
    });
    fixture = TestBed.createComponent(AdminEmployManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
