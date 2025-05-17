import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeVisitorsLogbookComponent } from './components/employee-visitors-logbook/employee-visitors-logbook.component';
import { DepartmentManagementComponent } from './components/department-management/department-management.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEmployManagementComponent } from './components/admin-employ-management/admin-employ-management.component';
import { ReportGeneraterComponent } from './components/report-generater/report-generater.component';
import { EmployeeInvitationsComponent } from './components/employee-invitations/employee-invitations.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ReceptionistsDashboardComponent } from './components/receptionists-dashboard/receptionists-dashboard.component';
import { ReceptionistsProfileComponent } from './components/receptionists-profile/receptionists-profile.component';
import { ReceptionistsSidebarComponent } from './components/receptionists-sidebar/receptionists-sidebar.component';
import { ReceptionistsHeaderComponent } from './components/receptionists-header/receptionists-header.component';
import { AddVisitorFormComponent } from './components/add-visitor-form/add-visitor-form.component';
import { CreateDepartmentFormComponent } from './components/create-department-form/create-department-form.component';
import { CreateEmployeeFormComponent } from './components/create-employee-form/create-employee-form.component';
import { DepartmentActionRendererComponent } from './components/department-action-renderer/department-action-renderer.component';
import { EditDepartmentModalComponent } from './components/edit-department-modal/edit-department-modal.component';
import { DeleteDepartmentModalComponent } from './components/delete-department-modal/delete-department-modal.component';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    LoginFormComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeeVisitorsLogbookComponent,
    DepartmentManagementComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminEmployManagementComponent,
    ReportGeneraterComponent,
    EmployeeInvitationsComponent,
    EmployeeProfileComponent,
    LogoutComponent,
    ReceptionistsDashboardComponent,
    ReceptionistsProfileComponent,
    ReceptionistsSidebarComponent,
    ReceptionistsHeaderComponent,
    AddVisitorFormComponent,
    ReceptionistsHeaderComponent,
    ReceptionistsHeaderComponent,
    CreateDepartmentFormComponent,
    CreateEmployeeFormComponent,
    DepartmentActionRendererComponent,
    EditDepartmentModalComponent,
    DeleteDepartmentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
