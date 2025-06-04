import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentActionRendererComponent } from '../department-action-renderer/department-action-renderer.component';
import { EditDepartmentModalComponent } from '../edit-department-modal/edit-department-modal.component';
import { DeleteDepartmentModalComponent } from '../delete-department-modal/delete-department-modal.component';
import { ApiService } from '../../services/api.service';
import { GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.css']
})
export class DepartmentManagementComponent implements OnInit {
  onGridReady(params: any) {
  this.gridApi = params.api;
}

getRowId(params: any) {
  return params.data.dept_id;
}


  @ViewChild(EditDepartmentModalComponent) editModal!: EditDepartmentModalComponent;
  @ViewChild(DeleteDepartmentModalComponent) deleteModal!: DeleteDepartmentModalComponent;

  columnDefs = [
    { field: 'name', headerName: 'Department Name', sortable: true, filter: true },
    { field: 'dept_id', headerName: 'Department ID', sortable: true, filter: true },
    {
      headerName: 'Actions',
      cellRenderer: 'departmentActionRenderer',
      cellRendererParams: {
        onEdit: this.handleEdit.bind(this),
        onDelete: this.handleDelete.bind(this)
      },
      suppressSorting: true,
      suppressMenu: true,
      width: 120
    }
  ];

  frameworkComponents = {
    departmentActionRenderer: DepartmentActionRendererComponent
  };

  rowData: any[] = [];
  gridApi: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.apiService.post('DepartmentController/fetch_departments', {}).subscribe(
      res => {
        if (res.status && res.data) {
          this.rowData = res.data;
        } else {
          console.error('Failed to load departments');
        }
      },
      err => {
        console.error('Error fetching departments:', err);
      }
    );
  }

  handleEdit(row: any) {
    this.editModal.openModal(row.dept_id, row.name);
  }

  handleUpdateDepartment(updated: { departmentId: string; departmentName: string }) {
  const updatedRow = {
    dept_id: updated.departmentId,
    name: updated.departmentName
  };
  this.gridApi.applyTransaction({ update: [updatedRow] });
  }


  handleDelete(row: any) {
    this.deleteModal.openModal(row.dept_id, row.name);
  }

  handleConfirmDelete(departmentId: string) {
  const rowToRemove = this.rowData.find(dept => dept.dept_id === departmentId);
  if (rowToRemove) {
    this.gridApi.applyTransaction({ remove: [rowToRemove] });
  }
}

}
