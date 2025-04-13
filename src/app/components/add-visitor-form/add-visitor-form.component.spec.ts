import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorFormComponent } from './add-visitor-form.component';

describe('AddVisitorFormComponent', () => {
  let component: AddVisitorFormComponent;
  let fixture: ComponentFixture<AddVisitorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVisitorFormComponent]
    });
    fixture = TestBed.createComponent(AddVisitorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
