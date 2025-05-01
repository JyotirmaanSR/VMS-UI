import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-department-modal',
  templateUrl: './delete-department-modal.component.html',
  styleUrls: ['./delete-department-modal.component.css']
})
export class DeleteDepartmentModalComponent {
  isVisible = false;
  departmentId = '';
  departmentName = '';

  @Output() departmentDeleted = new EventEmitter<string>();

  openModal(departmentId: string, departmentName: string) {
    this.departmentId = departmentId;
    this.departmentName = departmentName;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  confirmDelete() {
    this.departmentDeleted.emit(this.departmentId);
    this.closeModal();
  }
}
