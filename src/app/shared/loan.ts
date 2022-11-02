import { Customer } from "./customer"
import { FieldOfficer } from "./field-officer"
import { LoanType } from "./loan-type"

export class Loan {
      loanId:number =0
      loanAmount:number =0
      loanTypeId:number =0
      customerId:number =0
      requestCreatedDate:Date
      acceptDate:Date
      verifiedDate:Date
      acceptStatus:boolean = false
      acceptStatusMessage:string=''
      verificationStatus:boolean =false
      customer:Customer
      fieldOfficer:FieldOfficer
      loanType:LoanType
      fielOfficerId:number=0
      active:boolean 
      
}
