import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-department-modal',
  templateUrl: './edit-department-modal.component.html',
  styleUrls: ['./edit-department-modal.component.css']
})
export class EditDepartmentModalComponent {
  isVisible = false;
  departmentName = '';
  departmentId = '';

  @Output() departmentUpdated = new EventEmitter<{ departmentId: string, departmentName: string }>();

  openModal(departmentId: string, departmentName: string) {
    this.departmentId = departmentId;
    this.departmentName = departmentName;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  saveChanges() {
    this.departmentUpdated.emit({
      departmentId: this.departmentId,
      departmentName: this.departmentName
    });
    this.closeModal();
  }
}
