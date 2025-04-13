import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeVisitorsLogbookComponent } from './components/employee-visitors-logbook/employee-visitors-logbook.component';
import { DepartmentManagementComponent } from './components/department-management/department-management.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEmployManagementComponent } from './components/admin-employ-management/admin-employ-management.component';
import { ReportGeneraterComponent } from './components/report-generater/report-generater.component';



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
  },

  // admin routing
 
 {
  path:'admin-dashboard',
  component:AdminDashboardComponent
 },

 {
  path:'admin-department-management',
  component:DepartmentManagementComponent
 },
 {
  path: 'EmployeeDashboardComponent',
  component: AdminEmployManagementComponent
 },
 {
  path: 'adminreport',
  component: ReportGeneraterComponent
 },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
