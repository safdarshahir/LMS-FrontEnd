import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Customer} from './customer'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged:boolean = false;

  constructor(private httpClient:HttpClient, private router:Router) { }

  //Get username and password
  getUserNameAndPassword(customer: Customer):Observable<any>{
    console.log(customer.userId);
    console.log(customer.user.password);
    
    return this.httpClient.get(environment.api+"/api/" + customer.userId+'&'+ customer.user.password)

  }

  //Logout
  public logOut(){
    this.logged = false;
    localStorage.removeItem("userName");
    localStorage.removeItem("ACCESSROLE");
  }
}







