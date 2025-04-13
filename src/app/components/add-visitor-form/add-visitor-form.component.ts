import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-visitor-form',
  templateUrl: './add-visitor-form.component.html',
  styleUrls: ['./add-visitor-form.component.css']
})
export class AddVisitorFormComponent {
  isFormVisible = false; // Modal visibility flag

  formData = {
    name: '',
    phone: '',
    email: '',
    purpose: '',
    employee: ''
  };

  // Show modal form
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
