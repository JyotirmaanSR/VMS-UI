import { Component } from '@angular/core';

@Component({
  selector: 'app-receptionists-profile',
  templateUrl: './receptionists-profile.component.html',
  styleUrls: ['./receptionists-profile.component.css']
})
export class ReceptionistsProfileComponent {
  departments: string[] = ['Accounting', 'Finance', 'HR', 'IT'];

  // Mock profile data
  profile = {
   name: 'Seema Singh',
   phone: '9785858443',
   email: 'seema.singh@gmail.com',
   address: 'Pune',
   employerId: '43214422',
   password: '************',
   department: 'Accounting',
   dob: '28/02/1998',
   gender: 'Female',
   photo: 'https://randomuser.me/api/portraits/women/48.jpg'
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
