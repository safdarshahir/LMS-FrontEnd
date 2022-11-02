import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service';
import { Loan } from 'src/app/shared/loan';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

 
  constructor(public customerService:CustomerService , private router:Router) { }
 
  ngOnInit(): void {
    console.log("Welcome life cycle");

    //this.getAllCustomers();
    // this.customerService.bindGetAllCustomersList();
    this.customerService.bindGetAllLoansList();
    // console.log(this.customerService.customer);
    
  }
  //subscribe
  getAllCustomerList(){

    // //call service method
    // console.log(this.customerService.bindGetAllLoansList().subscribe(
    //   response => {
    //     console.log("retrieving from list");
    //     console.log(response);        
    //   },
    //   (error) =>{
    //     console.log(error);
        
    //   }
    // )
    // );
  }

   //logout
   logOut(){
    
    this.router.navigateByUrl('/login');
  }

  rejectLoan(loan:Loan){
      console.log("deleted");
      loan.active = false;
      
  }


}
