import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistsSidebarComponent } from './receptionists-sidebar.component';

describe('ReceptionistsSidebarComponent', () => {
  let component: ReceptionistsSidebarComponent;
  let fixture: ComponentFixture<ReceptionistsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionistsSidebarComponent]
    });
    fixture = TestBed.createComponent(ReceptionistsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
