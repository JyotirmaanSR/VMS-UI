import { Component } from '@angular/core';

// Define interface for each visitor record
interface VisitorRecord {
  visitor: string;
  host: string;
  id: string;
  email: string;
  department: string;
  checkIn: string | null;
  checkOut: string | null;
  duration: string | null;
}

@Component({
  selector: 'app-employee-visitors-logbook',
  templateUrl: './employee-visitors-logbook.component.html',
  styleUrls: ['./employee-visitors-logbook.component.css']
})
export class EmployeeVisitorsLogbookComponent {

  // Sample visitor data
  rowData: VisitorRecord[] = [
    { visitor: 'John Doe', host: 'Alice', id: '001', email: 'john@example.com', department: 'Accounting', checkIn: null, checkOut: null, duration: null },
    { visitor: 'Jane Smith', host: 'Bob', id: '002', email: 'jane@example.com', department: 'Finance', checkIn: null, checkOut: null, duration: null },
  ];

  // Stores filtered data based on filters
  filteredData: VisitorRecord[] = [];

  // Dropdown options
  departments: string[] = ['Accounting', 'Finance', 'HR', 'IT'];

  // Selected filters
  selectedDepartment: string = 'Accounting';
  selectedDate: string = new Date().toISOString().substring(0, 10);
  searchText: string = '';

  // Default AG Grid column settings
  defaultColDef = { sortable: true, filter: true, resizable: true };

  // AG Grid column definitions with buttons
  columnDefs = [
    { headerName: 'Visitor', field: 'visitor', flex: 1 },
    { headerName: 'Host', field: 'host', flex: 1 },
    { headerName: 'Visitor ID', field: 'id', flex: 1 },
    { headerName: 'Email', field: 'email', flex: 1 },
    { headerName: 'Department', field: 'department', flex: 1 },

    {
      headerName: 'Check In',
      field: 'checkIn', flex: 1,
      cellRenderer: (params: any) => {
        if (params.value) {
          const time = new Date(params.value).toLocaleTimeString();
          return time;
        }
        return `<button class="check-btn" onclick="checkIn('${params.data.id}')">Check In</button>`;
      }
    },

    {
        headerName: 'Check Out',
        field: 'checkOut', flex: 1,
        cellRenderer: (params: any) => {
          const data = params.data;
          if (data.checkOut) {
            return new Date(data.checkOut).toLocaleTimeString();
          } else if (!data.checkIn) {
            // Show disabled button if not yet checked in
            return `<button class="check-btn" disabled style="background: #ccc; cursor: not-allowed;">Check Out</button>`;
          } else {
            // Show active button if checked in but not yet checked out
            return `<button class="check-btn" onclick="checkOut('${data.id}')">Check Out</button>`;
          }
        }
      },

    
    {
      headerName: 'Duration',
      field: 'duration',flex: 1,
      valueGetter: (params: any) => params.data.duration || '-' 
    }
  ];

  // Lifecycle hook: Initialize filteredData and bind functions
  ngOnInit(): void {
    this.filteredData = this.rowData;
    (window as any).checkIn = this.handleCheckIn.bind(this);
    (window as any).checkOut = this.handleCheckOut.bind(this);
  }

  // Filter data by type (All, Expected, CheckedIn, CheckedOut)
  applyFilter(type: string) {
    if (type === 'all') {
      this.filteredData = this.rowData;
    } else if (type === 'expected') {
      this.filteredData = this.rowData.filter(row => !row.checkIn);
    } else if (type === 'checkedIn') {
      this.filteredData = this.rowData.filter(row => row.checkIn && !row.checkOut);
    } else if (type === 'checkedOut') {
      this.filteredData = this.rowData.filter(row => row.checkOut);
    }
  }

  // Search for matching records
  applySearch() {
    this.filteredData = this.rowData.filter(row =>
      Object.values(row).some(val =>
        val?.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  // Mark visitor as checked in
  handleCheckIn(id: string) {
    const person = this.rowData.find(row => row.id === id);
    if (person && !person.checkIn) {
      person.checkIn = new Date().toISOString();
      this.filteredData = [...this.rowData];
    }
  }
  
  // Mark visitor as checked out
  handleCheckOut(id: string) {
    const now = new Date();
    const person = this.rowData.find(row => row.id === id);
    if (person && !person.checkOut && person.checkIn) {
      person.checkOut = now.toISOString();
  
      const checkInTime = new Date(person.checkIn);
      const durationMs = now.getTime() - checkInTime.getTime();
  
      // Format the duration to hh:mm
      const totalMinutes = Math.floor(durationMs / 60000);
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
  
      person.duration = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  
      this.filteredData = [...this.rowData];
    }
  }
  

}
