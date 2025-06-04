import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-department-modal',
  templateUrl: './delete-department-modal.component.html'
})
export class DeleteDepartmentModalComponent {
  departmentId!: string;
  departmentName!: string;
  isVisible = false;

  @Output() departmentDeleted = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  openModal(deptId: string, deptName: string) {
    this.departmentId = deptId;
    this.departmentName = deptName;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  confirmDelete() {
  const body = { departmentId: this.departmentId };

  this.apiService.post('DepartmentController/delete_department', body).subscribe(
    (res) => {
      if (res.status === 'success') {
        this.departmentDeleted.emit(this.departmentId);
      }
      this.closeModal();
    },
    (error) => {
      console.error('Error deleting department', error);
      this.closeModal();
    }
  );
}
}
