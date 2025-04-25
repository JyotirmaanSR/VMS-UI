import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeVisitorsLogbookComponent } from './components/employee-visitors-logbook/employee-visitors-logbook.component';
import { DepartmentManagementComponent } from './components/department-management/department-management.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEmployManagementComponent } from './components/admin-employ-management/admin-employ-management.component';
import { ReportGeneraterComponent } from './components/report-generater/report-generater.component';
import { EmployeeInvitationsComponent } from './components/employee-invitations/employee-invitations.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReceptionistsDashboardComponent } from './components/receptionists-dashboard/receptionists-dashboard.component';
import { ReceptionistsProfileComponent } from './components/receptionists-profile/receptionists-profile.component';


const routes: Routes = [


  // Login Route
  {
    path: '',
    component: LoginFormComponent
  },



  //Reception Routing
  {
    path: 'receptiondashboard',
    component: ReceptionistsDashboardComponent
  },
  {
    path: 'receptionprofile',
    component: ReceptionistsProfileComponent
  },




  // Employee Routings

  {
    path:'dashboard',
    component:EmployeeDashboardComponent
  },
  {
    path:'visitorlogbook',
    component:EmployeeVisitorsLogbookComponent
  },
  {
    path:'invitations',
    component:EmployeeInvitationsComponent
  },
  {
    path:'employeeprofile',
    component:EmployeeProfileComponent
  },
  {
    path: 'employeelogout',
    component: LogoutComponent
  },
  { 
    path: 'login', 
    component: LoginFormComponent 
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
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
