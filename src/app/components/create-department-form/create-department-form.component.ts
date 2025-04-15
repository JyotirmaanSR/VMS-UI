import { Component } from '@angular/core';

@Component({
  selector: 'app-create-department-form',
  templateUrl: './create-department-form.component.html',
  styleUrls: ['./create-department-form.component.css']
})
export class CreateDepartmentFormComponent {
  showForm = false;

  departments: string[] = ['Accounting', 'Finance', 'HR', 'IT'];

  openModal() {
    this.showForm = true;
  }

  closeModal() {
    this.showForm = false;
  }
}
