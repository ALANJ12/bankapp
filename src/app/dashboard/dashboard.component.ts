import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  USER=""

  constructor(private router: Router, private fb: FormBuilder, private ds: DataService) { this.USER = this.ds.currentUser;this.sdate=new Date(); }

  ngOnInit(): void {
    // if (!localStorage.getItem('currentacno')) {
    //   alert("please login first");
    //   this.router.navigateByUrl('');
    // }
    this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
    console.log(this.USER);
    
    
  }
  acno = "";
  pswd = "";
  amount = ""
  depositForm = this.fb.group({
  
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
   
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  // registerForm = this.fb.group({
  
  //   acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
   
  //   pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  //   amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    
  //   acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
   
  //   pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  //   amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  
  // })
  withdrawForm = this.fb.group({
  
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
   
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  

  deposit() {

    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;
    if (this.depositForm.valid) {
      this.ds.deposit(acno, pswd, amount)
        .subscribe((result: any) => {
        alert(result.message)
        },
          result => {
          alert(result.error.message)
        })
    }
   
    
    //   const result = this.ds.deposit(acno, pswd, amount)

    //   if (result) {
    //     alert(`${amount} is credited...available balance is${result}`)
      
    // }
  
    // alert("clicked")
  }
  acno1 = "";
  pswd1 = "";
  amount1 = ""
  sdate: any;
 
  
  // withdraw() {
  //   alert("clicked")
  // }
  withdraw() {

    var acno = this.withdrawForm.value.acno1;
    var pswd = this.withdrawForm.value.pswd1;
    var amount = this.withdrawForm.value.amount1
    
    const result = this.ds.withdraw(acno, pswd, amount)
    if (result) {
      alert(`${amount} is debited...available balance is${result}`)
    }
    // alert("clicked")
  }
  logout() {
    localStorage.removeItem('currentacno');
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl('')
  }
  delete() {
    // alert('clicked')
    this.acno=JSON.parse( localStorage.getItem('currentacno')||'')
  }
  onCancel(){
    this.acno ="";
  }
  


  

}
