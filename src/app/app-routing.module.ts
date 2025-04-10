import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeVisitorsLogbookComponent } from './components/employee-visitors-logbook/employee-visitors-logbook.component';
import { EmployeeManagementtComponent } from './components/employee-management/employee-managementt.component';
import { DepartmentManagementComponent } from './components/department-management/department-management.component';
import { VisitPurposemanagementComponent } from './components/visit-purposemanagement/visit-purposemanagement.component';
import { EmployeeInvitationsComponent } from './components/employee-invitations/employee-invitations.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [

  // Employee Routings

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
  { path: 'login', component: LoginFormComponent },


  
  // admin routing
  {
    path:'admin-employee-management',
    component: EmployeeManagementtComponent
  },

  {
    path:'admin-department-management',
    component: DepartmentManagementComponent
  },

  {
    path:'admin-visit-purpose-management',
    component: VisitPurposemanagementComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
