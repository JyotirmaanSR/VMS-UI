import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  columnDefs = [
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'phone', headerName: 'Phone', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'purpose', headerName: 'Purpose', sortable: true, filter: true }
  ];
  

  rowData = [
    {
      name: 'John Mathew',
      phone: '9876543210',
      email: 'johnmathew@gmail.com',
      purpose: 'Business Meeting'
    },
    {
      name: 'Anita George',
      phone: '9812345678',
      email: 'anita.george@example.com',
      purpose: 'Client Discussion'
    },
    {
      name: 'Samuel Dsouza',
      phone: '9123456789',
      email: 'samuel.dsouza@example.com',
      purpose: 'Interview'
    },
    {
      name: 'Priya Verma',
      phone: '9988776655',
      email: 'priya.verma@example.com',
      purpose: 'Technical Demo'
    },
    {
      name: 'Michael Tan',
      phone: '9900112233',
      email: 'michael.tan@example.com',
      purpose: 'Sales Pitch'
    },
    {
      name: 'Sara Lee',
      phone: '9876512345',
      email: 'sara.lee@example.com',
      purpose: 'Vendor Meeting'
    },
    {
      name: 'Ravi Kumar',
      phone: '9123987654',
      email: 'ravi.kumar@example.com',
      purpose: 'Consultation'
    },
    {
      name: 'Lina Gomez',
      phone: '9090909090',
      email: 'lina.gomez@example.com',
      purpose: 'Review Session'
    }
  ];
  


}
