import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerRegistrationComponent } from './customers/customer-registration/customer-registration.component';
import { AdminComponent } from './admin/admin.component';
import { FieldOfficerComponent } from './field-officer/field-officer.component';
import { CustomerLoanDetailsComponent } from './customers/customer-loan-details/customer-loan-details.component';
import { AuthService } from './shared/auth.service';
import { CustomerService } from './shared/customer.service';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerRegistrationComponent,
    AdminComponent,
    FieldOfficerComponent,
    CustomerLoanDetailsComponent,
    CustomerListComponent,
    LoginComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
