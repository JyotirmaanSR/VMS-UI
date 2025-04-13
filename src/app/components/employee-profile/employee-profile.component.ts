import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  departments: string[] = ['Accounting', 'Finance', 'HR', 'IT'];

   // Mock profile data
   profile = {
    name: 'Tanya Edwards',
    phone: '(239) 555-0108',
    email: 'tanya.edwards@gmail.com',
    address: '6391 Elgin St Celina, Delaware',
    employerId: '233456678',
    password: '************',
    department: 'Accounting',
    dob: '28/02/1991',
    gender: 'Female',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  };

  // Edit Modal State
  isEditModalOpen = false;

  // Temporary values for editing
  editProfile: any = {};

  // Open modal with current profile data
  openEditModal() {
    this.isEditModalOpen = true;
    this.editProfile = { ...this.profile };
  }

  // Save changes and close modal
  saveChanges() {
    this.profile = { ...this.editProfile };
    this.isEditModalOpen = false;
  }

  // Close modal without saving
  cancelEdit() {
    this.isEditModalOpen = false;
  }

  // Handle profile photo change
  onPhotoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.editProfile.photo = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
