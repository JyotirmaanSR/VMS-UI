import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeVisitorsLogbookComponent } from './components/employee-visitors-logbook/employee-visitors-logbook.component';
import { EmployeeManagementtComponent } from './components/employee-management/employee-managementt.component';
import { DepartmentManagementComponent } from './components/department-management/department-management.component';
import { VisitPurposemanagementComponent } from './components/visit-purposemanagement/visit-purposemanagement.component';

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
