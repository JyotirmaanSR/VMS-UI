import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-visitor-form',
  templateUrl: './add-visitor-form.component.html',
  styleUrls: ['./add-visitor-form.component.css']
})
export class AddVisitorFormComponent {
  employeeList: string[] = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Michael Lee',
    'David Brown'
  ];
  
  isFormVisible = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    purpose: '',
    employee: ''
  };

  
  showForm() {
    this.isFormVisible = true;
  }

  // Close modal
  closeForm() {
    this.isFormVisible = false;
  }

  // Handle form submission
  submitForm() {
    console.log('Form Data:', this.formData);
    this.closeForm();
  }
}
