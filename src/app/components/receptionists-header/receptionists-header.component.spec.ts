import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistsHeaderComponent } from './receptionists-header.component';

describe('ReceptionistsHeaderComponent', () => {
  let component: ReceptionistsHeaderComponent;
  let fixture: ComponentFixture<ReceptionistsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionistsHeaderComponent]
    });
    fixture = TestBed.createComponent(ReceptionistsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
