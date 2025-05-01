import { Component, ViewChild } from '@angular/core';
import { DepartmentActionRendererComponent } from '../department-action-renderer/department-action-renderer.component';
import { EditDepartmentModalComponent } from '../edit-department-modal/edit-department-modal.component';
import { DeleteDepartmentModalComponent } from '../delete-department-modal/delete-department-modal.component';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.css']
})
export class DepartmentManagementComponent {
  @ViewChild(EditDepartmentModalComponent) editModal!: EditDepartmentModalComponent;

    handleEdit(row: any) {
      this.editModal.openModal(row.departmentId, row.departmentName);
    }

    handleUpdateDepartment(updated: { departmentId: string; departmentName: string }) {
    const index = this.rowData.findIndex(d => d.departmentId === updated.departmentId);
    if (index !== -1) {
    this.rowData[index].departmentName = updated.departmentName;
    this.rowData = [...this.rowData]; // Trigger AG Grid refresh
  }
}

  @ViewChild(DeleteDepartmentModalComponent) deleteModal!: DeleteDepartmentModalComponent;

  handleDelete(row: any) {
    this.deleteModal.openModal(row.departmentId, row.departmentName);
  }
  
  handleConfirmDelete(departmentId: string) {
    this.rowData = this.rowData.filter(dept => dept.departmentId !== departmentId);
  }
  


columnDefs = [
  { field: 'departmentName', headerName: 'Department Name', sortable: true, filter: true },
  { field: 'departmentId', headerName: 'Department ID', sortable: true, filter: true },
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
  

  rowData = [
    {
      departmentName: 'John Mathew',
      departmentId: '373438',
    },
    {
      departmentName: 'Anita George',
      departmentId: 'AD20153',
      
    },
    {
      departmentName: 'Samuel Dsouza',
      departmentId: 'AD20154',
     
    },
    {
      departmentName: 'Priya Verma',
      departmentId: 'AD20155',
      
    },
    {
      departmentName: 'Michael Tan',
      departmentId: 'AD20156',
    
    },
    {
      departmentName: 'Sara Lee',
      departmentId: 'AD20157',
     
    },
    {
      departmentName: 'Ravi Kumar',
      departmentId: 'AD20158',
     
    },
    {
      departmentName: 'Lina Gomez',
      departmentId: 'AD20159',
    
    }
  ]; 

}  
