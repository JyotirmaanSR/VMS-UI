import { Component } from '@angular/core';

@Component({
  selector: 'app-visit-purposemanagement',
  templateUrl: './visit-purposemanagement.component.html',
  styleUrls: ['./visit-purposemanagement.component.css']
})
export class VisitPurposemanagementComponent {
  columnDefs =  [
    { field: 'id', headerName: 'ID', sortable: true, filter: true },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'date', headerName: 'DATE', sortable: true, filter: true},
    { field: 'purpose', headerName: 'PURPOSE', sortable: true, filter: true},
   
  ]; 

  rowData = [
    {
      id: '1',
      name: 'John Mathew',
      Date: '7/8/2022',
      Purpose: '',

    },
    {
      id: '2',
      name: 'Anita George',
      Date: '8/8/2022',
      Purpose: '',
    },
    {
      id: '3',
      name: 'Samuel Dsouza',
      Date: '9/8/2022',
      Purpose: '',
    },
    {
      id: '4',
      name: 'Priya Verma',
      Date: '10/8/2022',
      Purpose: '',
    },
    {
      id: '5',
      name: 'Michael Tan',
      Date: '11/8/2022',
      Purpose: '',
    },
    {
      id: '6',
      name: 'Sara Lee',
      Date: '12/8/2022',
      Purpose: '',
    },
    {
      id: '7',
      name: 'Ravi Kumar',
      Date: '13/8/2022',
      Purpose: '',
    },
    {
      id: '8',
      name: 'Lina Gomez',
      Date: '14/8/2022',
      Purpose: '',
    }
  ]; 
}
