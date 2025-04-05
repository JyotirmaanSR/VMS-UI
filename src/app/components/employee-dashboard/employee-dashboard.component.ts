import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {

  //Stat Cards
  visitorsExpected = 20;
  completedMeetings = 4;
  defaultedVisitors = 10;
  pendingVisits = 8;

  //Fetch from backend and assign values below

  //Visitation History
  columnDefs = [
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'id', headerName: 'ID', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'dueDate', headerName: 'Due Date', sortable: true, filter: true }
  ];

  defaultColDef = {
    resizable: true,
    flex: 1
  };

  rowData = [
    {
      name: 'John Mathew',
      id: 'AD20152',
      email: 'johnmathew@gmail.com',
      dueDate: '14:00 02/21'
    },
    {
      name: 'Anita George',
      id: 'AD20153',
      email: 'anita.george@example.com',
      dueDate: '09:30 02/22'
    },
    {
      name: 'Samuel Dsouza',
      id: 'AD20154',
      email: 'samuel.dsouza@example.com',
      dueDate: '11:45 02/23'
    },
    {
      name: 'Priya Verma',
      id: 'AD20155',
      email: 'priya.verma@example.com',
      dueDate: '16:10 02/23'
    },
    {
      name: 'Michael Tan',
      id: 'AD20156',
      email: 'michael.tan@example.com',
      dueDate: '13:20 02/24'
    },
    {
      name: 'Sara Lee',
      id: 'AD20157',
      email: 'sara.lee@example.com',
      dueDate: '10:15 02/24'
    },
    {
      name: 'Ravi Kumar',
      id: 'AD20158',
      email: 'ravi.kumar@example.com',
      dueDate: '12:00 02/25'
    },
    {
      name: 'Lina Gomez',
      id: 'AD20159',
      email: 'lina.gomez@example.com',
      dueDate: '15:30 02/25'
    }
  ];


  //Recent Visitation
  visitors = [
    { imageUrl: 'assets/images/Recent Visitor 1.jpg' },
    { imageUrl: 'assets/images/Recent Visitor 2.jpg' },
    { imageUrl: 'assets/images/Recent Visitor 3.jpg' },
    { imageUrl: 'assets/images/Recent Visitor 4.jpg' },
    { imageUrl: 'assets/images/Recent Visitor 5.jpg' },
    { imageUrl: 'assets/images/Recent Visitor 6.jpg' },
    { imageUrl: 'assets/img7.jpg' },
    { imageUrl: 'assets/img8.jpg' }
  ];

  maxVisible = 5;

  get visibleVisitors() {
    return this.visitors.slice(0, this.maxVisible);
  }

  get hiddenCount() {
    return this.visitors.length - this.maxVisible;
  }


  // Notifications
  notifications = [
    { message: 'John Mathew K', time: '30 mins' },
    { message: 'John Mathew K', time: '02 hrs' },
    { message: 'John Mathew K', time: '04 hrs' }
  ];
}

