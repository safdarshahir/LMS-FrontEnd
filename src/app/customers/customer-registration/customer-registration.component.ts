import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  isSubmitted: boolean = false;
  registrationForm: FormGroup;

  constructor(
        private formBuilder: FormBuilder,
        private router:Router
  ) { }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group(
      {
        customerId: ['',[]],
        customerName:['',[Validators.required]],
        address:['',[Validators.required]],
        phoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        dob:['',[Validators.required]],
        maritalStatus:['',[Validators.required]],
        gender : ['',[Validators.required]],
        salary: ['',[Validators.required]],
        occupation: ['',[Validators.required]],
        userId:['',[]]

        
      }
    )
  }

  onRegister(){
    this.isSubmitted = true;
    console.log(this.registrationForm.value);
    if(this.registrationForm.invalid){
      return;
    }

  }
  get formControls(){
    return this.registrationForm.controls;
  }

}
