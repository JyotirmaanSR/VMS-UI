import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistsDashboardComponent } from './receptionists-dashboard.component';

describe('ReceptionistsDashboardComponent', () => {
  let component: ReceptionistsDashboardComponent;
  let fixture: ComponentFixture<ReceptionistsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionistsDashboardComponent]
    });
    fixture = TestBed.createComponent(ReceptionistsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
