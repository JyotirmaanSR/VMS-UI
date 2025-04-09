import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInvitationsComponent } from './employee-invitations.component';

describe('EmployeeInvitationsComponent', () => {
  let component: EmployeeInvitationsComponent;
  let fixture: ComponentFixture<EmployeeInvitationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInvitationsComponent]
    });
    fixture = TestBed.createComponent(EmployeeInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
