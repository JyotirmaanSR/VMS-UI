import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementtComponent } from './employee-managementt.component';

describe('EmployeeManagementtComponent', () => {
  let component: EmployeeManagementtComponent;
  let fixture: ComponentFixture<EmployeeManagementtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeManagementtComponent]
    });
    fixture = TestBed.createComponent(EmployeeManagementtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
