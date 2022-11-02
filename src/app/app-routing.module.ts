import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRegistrationComponent } from './customers/customer-registration/customer-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path: '', redirectTo: '/userRegisteration', pathMatch: 'full'}, 
  {path: 'userRegisteration', component: UserRegistrationComponent}, 
  {path: 'customerRegistration', component: CustomerRegistrationComponent}, 
  // {path: 'admin', component: AdminComponent,canActivate:[AuthGuard],data:{role:'1'}}, 
  // {path: 'manager', component: ManagerComponent,canActivate:[AuthGuard],data:{role:'3'}}, 
  // {path: 'login', component: LoginComponent}, 
  // {path: 'userlist', component: UserListComponent,canActivate:[AuthGuard],data:{role:'2'}}, 
  // {path: 'user', component: UserComponent,canActivate:[AuthGuard],data:{role:'1'}}, 
  // {path: 'users', component: UsersComponent,canActivate:[AuthGuard],data:{role:'1'}}, 
  // {path: '**', component: PagenotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
