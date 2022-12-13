import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { ListEmpComponent } from './admin-department/list-emp/list-emp.component';
import { CreateUpdateEmpComponent } from './admin-department/create-update-emp/create-update-emp.component';
import { PublicService } from './services/public.service';
import { RegisterEmpComponent } from './admin-department/register-emp/register-emp.component';
import { NavbarEmpComponent } from './admin-department/navbar-emp/navbar-emp.component';
import { LeaveManagementComponent } from './admin-department/leave-management/leave-management.component';
import { ListLeaveComponent } from './employee-department/list-leave/list-leave.component';
import { ApplyLeaveComponent } from './employee-department/apply-leave/apply-leave.component';
import { ViewEmpComponent } from './admin-department/view-emp/view-emp.component';
import { NavbarComponent } from './employee-department/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AdminDepartmentComponent,
    EmployeeDepartmentComponent,
    ListEmpComponent,
    CreateUpdateEmpComponent,
    RegisterEmpComponent,
    NavbarEmpComponent,
    LeaveManagementComponent,
    ListLeaveComponent,
    ApplyLeaveComponent,
    ViewEmpComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
