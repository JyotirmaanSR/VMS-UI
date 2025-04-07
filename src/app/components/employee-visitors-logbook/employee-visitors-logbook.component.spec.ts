import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVisitorsLogbookComponent } from './employee-visitors-logbook.component';

describe('EmployeeVisitorsLogbookComponent', () => {
  let component: EmployeeVisitorsLogbookComponent;
  let fixture: ComponentFixture<EmployeeVisitorsLogbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeVisitorsLogbookComponent]
    });
    fixture = TestBed.createComponent(EmployeeVisitorsLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
