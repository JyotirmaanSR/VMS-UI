import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-employ-management',
  templateUrl: './admin-employ-management.component.html',
  styleUrls: ['./admin-employ-management.component.css']
})
export class AdminEmployManagementComponent {
  showForm: boolean = false;
  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  selectedEmployee: any = null;
  selectedEmployeeIndex: number = -1;
  editData: any = null;
  deleteData: any = null;

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  openEditModal(data: any, index: number) {
    this.selectedEmployee = { ...data };
    this.selectedEmployeeIndex = index;
    this.showEditModal = true;
  }

  // Open modal with selected row's data
  onEdit(row: any) {
  this.editData = { ...row }; // Clone the data to avoid live binding
  this.showEditModal = true;
  }

  // Update the rowData array with the edited values
  onEditSubmit() {
    const index = this.rowData.findIndex(emp => emp.id === this.editData.id);
    if (index !== -1) {
      this.rowData[index] = { ...this.editData }; // Update the data
      this.rowData = [...this.rowData]; // Trigger grid update
    }
    this.showEditModal = false;
  }

  saveEditedEmployee() {
    if (this.selectedEmployeeIndex !== -1) {
      this.rowData[this.selectedEmployeeIndex] = { ...this.selectedEmployee };
    }
    this.closeEditModal();
  }

  closeEditModal() {
    this.showEditModal = false;
    this.selectedEmployee = null;
    this.selectedEmployeeIndex = -1;
  }

  openDeleteModal(data: any, index: number) {
    this.selectedEmployee = data;
    this.selectedEmployeeIndex = index;
    this.showDeleteModal = true;
  }

  // Triggered when delete icon is clicked
    onDelete(row: any) {
      this.deleteData = row;
      this.showDeleteModal = true;
    }



    // Confirm deletion
    confirmDelete() {
      this.rowData = this.rowData.filter(emp => emp.id !== this.deleteData.id);
      this.showDeleteModal = false;
    }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedEmployee = null;
    this.selectedEmployeeIndex = -1;
  }

  columnDefs = [
    { field: 'name', headerName: 'Employee Name', sortable: true, filter: true },
    { field: 'id', headerName: 'Employee ID', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'phone', headerName: 'Phone', sortable: true, filter: true },
    { field: 'department', headerName: 'Department', sortable: true, filter: true },
    {
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        return `
          <i class="fas fa-edit action-icon" data-action="edit"></i>
          <i class="fas fa-trash delete-icon" data-action="delete"></i>
        `;
      },
      onCellClicked: (params: any) => {
        const actionType = params.event.target.getAttribute('data-action');
        if (actionType === 'edit') {
          this.onEdit(params.data);
        } else if (actionType === 'delete') {
          this.onDelete(params.data); // make sure you implement this too
        }
      }
    }
    
  ];

  rowData = [
    { name: 'John Mathew', id: 'EMP001', email: 'johnmathew@gmail.com', phone: '9876543210', department: 'HR' },
    { name: 'Anita George', id: 'EMP002', email: 'anita.george@example.com', phone: '9123456780', department: 'Finance' },
    { name: 'Samuel Dsouza', id: 'EMP003', email: 'samuel.dsouza@example.com', phone: '9786452310', department: 'IT' },
    { name: 'Priya Verma', id: 'EMP004', email: 'priya.verma@example.com', phone: '9988776655', department: 'Admin' }
  ];

}
