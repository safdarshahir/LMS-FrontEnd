import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  
  isSubmitted: boolean = false;
  registrationForm: FormGroup;

  passWordOne : String;
  constructor(  private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group(


      {
        userId: ['',[]],
        userEmail:['',[Validators.required,Validators.email]],
        passwordOne:['',[Validators.required]],
        passwordTwo:['',[Validators.required]],
      },
      {
        validator: this.ConfirmedValidator('passwordOne','passwordTwo')

        
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

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        console.log("uuuuu");
        return;
      }
      if (control.value !== matchingControl.value) {
        console.log("tttt");
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
