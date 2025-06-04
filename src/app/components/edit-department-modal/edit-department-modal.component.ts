import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-department-modal',
  templateUrl: './edit-department-modal.component.html'
})
export class EditDepartmentModalComponent {
  departmentId!: string;
  departmentName: string = '';
  isVisible = false;

  @Output() departmentUpdated = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}

  openModal(deptId: string, deptName: string) {
    this.departmentId = deptId;
    this.departmentName = deptName;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  saveChanges() {
  const body = {
    departmentId: this.departmentId,
    departmentName: this.departmentName
  };

  this.apiService.post('DepartmentController/update_department', body).subscribe(
    (res) => {
      if (res.status === 'success') {
        this.departmentUpdated.emit(body); // Notify parent component
      }
      this.closeModal();
    },
    (error) => {
      console.error('Error updating department', error);
      this.closeModal();
    }
  );
}
}
