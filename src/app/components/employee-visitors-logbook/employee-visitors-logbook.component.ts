import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-visitors-logbook',
  templateUrl: './employee-visitors-logbook.component.html',
  styleUrls: ['./employee-visitors-logbook.component.css']
})
export class EmployeeVisitorsLogbookComponent {

  columnDefs = [
    { headerName: '', field: 'icon', width: 30, cellRenderer: () => '<i class="fas fa-user"></i>' },
    { headerName: 'Visitor', field: 'visitor' },
    { headerName: 'Host', field: 'host' },
    { headerName: 'ID', field: 'id' },
    { headerName: 'Check in', field: 'checkIn', cellRenderer: () => '<button class="check-btn">Check in</button>' },
    { headerName: 'Check out', field: 'checkOut', cellRenderer: () => '<button class="check-btn">Check out</button>' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Duration', field: 'duration' }
  ];
  
  rowData = [
    { visitor: 'Adewunmi', host: 'Dare', id: 'MD2041', email: 'adewunmi@example.com', duration: '1 Hour' },
    { visitor: 'Adewunmi', host: 'Dare', id: 'MD2041', email: 'adewunmi@example.com', duration: '1 Hour' },
    // more data...
  ];
  
  defaultColDef = {
    flex: 1,
    resizable: true,
    sortable: true
  };
  

}
