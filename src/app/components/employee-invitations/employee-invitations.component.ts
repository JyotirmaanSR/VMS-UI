import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

interface VisitorRecord {
  name: string;
  id: string;
  email: string;
  dueDate1: string;
  dueDate2: string;
  dueDate3: string;
  dueDate4: string;
  accepted?: boolean;
  rejected?: boolean;

}

@Component({
  selector: 'app-employee-invitations',
  templateUrl: './employee-invitations.component.html',
  styleUrls: ['./employee-invitations.component.css']
})
export class EmployeeInvitationsComponent implements AfterViewInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;


    // Dropdown options
    departments: string[] = ['Accounting', 'Finance', 'HR', 'IT'];

    // Selected filters
    selectedDepartment: string = 'Accounting';
    selectedDate: string = new Date().toISOString().substring(0, 10);
    searchText: string = '';

    columnDefs = [
      { headerName: 'Name', field: 'name', flex: 1 },
      { headerName: 'ID', field: 'id', flex: 1 },
      { headerName: 'Email', field: 'email', flex: 2 },
      { headerName: 'Due Date', field: 'dueDate1', flex: 1 },
      { headerName: 'Due Date', field: 'dueDate2', flex: 1 },
      { headerName: 'Due Date', field: 'dueDate3', flex: 1 },
      { headerName: 'Due Date', field: 'dueDate4', flex: 1 },
      {
        headerName: 'Action',
        field: 'action',
        flex: 1,
        minWidth: 180,
        cellRenderer: (params: any) => {
          const acceptDisabled = params.data.accepted;
          const rejected = params.data.rejected;
    
          if (rejected) return ''; // Hide buttons if already rejected
    
          const acceptBtn = `<button class="btn-accept" ${acceptDisabled ? 'disabled' : ''}>Accept</button>`;
          const rejectBtn = acceptDisabled ? '' : `<button class="btn-reject">Reject</button>`;
          return `${acceptBtn} ${rejectBtn}`;
        },
        cellRendererParams: {
          onClick: (params: any) => this.handleAction(params)
        },
        
      }
    ];

    handleAction(params: any): void {
      const action = params.event.target.innerText;
      const rowIndex = this.rowData.findIndex(row => row.id === params.data.id);
    
      if (action === 'Accept') {
        this.rowData[rowIndex].accepted = true;
      } else if (action === 'Reject') {
        this.rowData.splice(rowIndex, 1);
      }
    
      this.rowData = [...this.rowData]; // Refresh grid
    }
    
  
    defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      minWidth: 110 
    };
  
    rowData: VisitorRecord[] = [
      {
        name: 'John Doe',
        id: 'A001',
        email: 'john@example.com',
        dueDate1: '2025-04-09',
        dueDate2: '2025-04-10',
        dueDate3: '2025-04-11',
        dueDate4: '2025-04-12',
        accepted: false,
        rejected: false
      },
      {
        name: 'Jane Smith',
        id: 'A002',
        email: 'jane@example.com',
        dueDate1: '2025-04-09',
        dueDate2: '2025-04-10',
        dueDate3: '2025-04-11',
        dueDate4: '2025-04-12',
        accepted: false,
        rejected: false
      }
    ];

    ngAfterViewInit() {
      this.agGrid.api.addEventListener('cellClicked', (event: any) => {
        if (event.colDef.field === 'action') {
          if (event.event.target.innerText === 'Accept') {
            this.acceptInvite(event);
          } else if (event.event.target.innerText === 'Reject') {
            this.rejectInvite(event);
          }
        }
      });
    }

    acceptInvite(event: any) {
      const rowIndex = this.rowData.findIndex(row => row.id === event.data.id);
      if (rowIndex > -1) {
        this.rowData[rowIndex].accepted = true;
        this.refreshTable();
      }
    }
    
    rejectInvite(event: any) {
      this.rowData = this.rowData.filter(row => row.id !== event.data.id);
      this.refreshTable();
    }
    
    refreshTable() {
      this.rowData = [...this.rowData]; // Trigger AG Grid to re-render
    }
    
  

    // Stores filtered data based on filters
    filteredData: VisitorRecord[] = [];

    // Search for matching records
    applySearch() {
    this.filteredData = this.rowData.filter(row =>
      Object.values(row).some(val =>
        val?.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }
}
