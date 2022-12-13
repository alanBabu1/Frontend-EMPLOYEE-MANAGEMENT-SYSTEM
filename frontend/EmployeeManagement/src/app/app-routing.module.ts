import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterEmpComponent } from './admin-department/register-emp/register-emp.component';
import { LeaveManagementComponent } from './admin-department/leave-management/leave-management.component';
// import { ViewEmpComponent } from './admin-department/view-emp/view-emp.component';


const routes: Routes = [
    {path:'', component : LoginComponent},
    {path:'profile',component : ProfileComponent},
    {path:'admin',component : AdminDepartmentComponent},
    {path:'employee',component : EmployeeDepartmentComponent},
    {path:'register',component: RegisterEmpComponent},
    {path:'leave',component:LeaveManagementComponent}
    // {path:'view',component:ViewEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
