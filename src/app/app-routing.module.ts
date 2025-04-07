import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeVisitorsLogbookComponent } from './components/employee-visitors-logbook/employee-visitors-logbook.component';

const routes: Routes = [

  {
    path:'',
    component:EmployeeDashboardComponent
  },
  {
    path:'dashboard',
    component:EmployeeDashboardComponent
  },
  {
    path:'visitorlogbook',
    component:EmployeeVisitorsLogbookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
