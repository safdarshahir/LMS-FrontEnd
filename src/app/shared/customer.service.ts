import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Loan}  from './loan'
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   
  //global variabbles
  formEmpData: Loan = new Loan();

  //list of Loans
  loan:Loan[];
  customer: Customer[];

  constructor( private httpClient: HttpClient ) { }

  //1 get all Loans
  getAllLoans():Observable<any>{
    return this.httpClient.get(environment.api + '/api/loans');
  }

  // 2 retrrieve all emplopyees for binding
  bindGetAllLoansList(){
    this.httpClient.get(environment.api + '/api/loans/')
    .toPromise()
    .then(
      (response) =>{
        console.log(response);
        this.loan = response as Loan[]
        
      },
    );
  }

  //3 retrieve all Customer
  bindGetAllCustomer(){
    this.httpClient.get(environment.api + "/api/customers")
    .toPromise()
    .then(
      (data) =>{
        console.log(data);
        this.customer = data as Customer[]
        
      }
    )
  }

  //4 retreive all

}
