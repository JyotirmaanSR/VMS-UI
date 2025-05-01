import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentActionRendererComponent } from './department-action-renderer.component';

describe('DepartmentActionRendererComponent', () => {
  let component: DepartmentActionRendererComponent;
  let fixture: ComponentFixture<DepartmentActionRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentActionRendererComponent]
    });
    fixture = TestBed.createComponent(DepartmentActionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
