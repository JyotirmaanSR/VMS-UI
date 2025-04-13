import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneraterComponent } from './report-generater.component';

describe('ReportGeneraterComponent', () => {
  let component: ReportGeneraterComponent;
  let fixture: ComponentFixture<ReportGeneraterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportGeneraterComponent]
    });
    fixture = TestBed.createComponent(ReportGeneraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
