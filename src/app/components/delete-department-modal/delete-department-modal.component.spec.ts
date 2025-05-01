import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartmentModalComponent } from './delete-department-modal.component';

describe('DeleteDepartmentModalComponent', () => {
  let component: DeleteDepartmentModalComponent;
  let fixture: ComponentFixture<DeleteDepartmentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDepartmentModalComponent]
    });
    fixture = TestBed.createComponent(DeleteDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
