import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DepartmentActionRendererComponent } from '../department-action-renderer/department-action-renderer.component';

@Component({
  selector: 'app-admin-employ-management',
  templateUrl: './admin-employ-management.component.html',
  styleUrls: ['./admin-employ-management.component.css']
})
export class AdminEmployManagementComponent implements OnInit {

  columnDefs: any;
  frameworkComponents: any;
  rowData: any[] = [];

  // Modal controls
  showEditModal: boolean = false;
  editData: any = null;
  showDeleteModal: boolean = false;
  deleteData: any = null;
  showForm: boolean = false;


  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  constructor(private apiService: ApiService) {
    this.frameworkComponents = {
      departmentActionRenderer: DepartmentActionRendererComponent
    };

    this.columnDefs = [
      { field: 'name', headerName: 'Employee Name', sortable: true, filter: true },
      { field: 'id', headerName: 'Employee ID', sortable: true, filter: true },
      { field: 'email', headerName: 'Email', sortable: true, filter: true },
      { field: 'phone', headerName: 'Phone', sortable: true, filter: true },
      { field: 'department', headerName: 'Department', sortable: true, filter: true },
      {
        headerName: 'Actions',
        cellRenderer: 'departmentActionRenderer',
        cellRendererParams: {
          onEdit: this.onEdit.bind(this),
          onDelete: this.onDelete.bind(this)
        },
        suppressSorting: true,
        suppressMenu: true,
        width: 120
      }
    ];
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.apiService.post('EmployeeController/fetch_employees', {}).subscribe(
      res => {
        if (res.status && res.data) {
          this.rowData = res.data;
        } else {
          console.error('Failed to load employees');
        }
      },
      err => {
        console.error('Error fetching employees:', err);
      }
    );
  }

  // ---------- EDIT EMPLOYEE ----------
  onEdit(row: any) {
    this.editData = { ...row };
    this.showEditModal = true;
  }

  saveEditedEmployee() {
    const body = {
      emp_id: this.editData.id,
      name: this.editData.name,
      email: this.editData.email,
      phone: this.editData.phone,
      department: this.editData.department
    };

    this.apiService.post('EmployeeController/update_employee', body).subscribe(
      res => {
        if (res.status === 'success') {
          const index = this.rowData.findIndex(emp => emp.id === this.editData.id);
          if (index !== -1) {
            this.rowData[index] = { ...this.editData };
            this.rowData = [...this.rowData]; // Refresh grid
          }
        } else {
          console.error('Failed to update employee');
        }
        this.closeEditModal();
      },
      error => {
        console.error('Error updating employee', error);
        this.closeEditModal();
      }
    );
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editData = null;
  }

  // ---------- DELETE EMPLOYEE ----------
  onDelete(row: any) {
    this.deleteData = row;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    const body = { emp_id: this.deleteData.id };

    this.apiService.post('EmployeeController/delete_employee', body).subscribe(
      res => {
        if (res.status === 'success') {
          this.rowData = this.rowData.filter(emp => emp.id !== this.deleteData.id);
        } else {
          console.error('Failed to delete employee');
        }
        this.closeDeleteModal();
      },
      error => {
        console.error('Error deleting employee', error);
        this.closeDeleteModal();
      }
    );
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deleteData = null;
  }
}
