import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerLoanDetailsComponent } from './customers/customer-loan-details/customer-loan-details.component';
import { CustomerRegistrationComponent } from './customers/customer-registration/customer-registration.component';
import { FieldOfficerComponent } from './field-officer/field-officer.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'}, // full definition of path(we can ignore)
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: CustomerRegistrationComponent},
  { path: 'admin' , component: CustomerListComponent},
  { path: 'fieldofficer' , component: FieldOfficerComponent},
  { path: 'loandetails' , component: CustomerLoanDetailsComponent},

  { path: '***' , component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
