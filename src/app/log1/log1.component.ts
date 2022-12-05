import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-log1',
  templateUrl: './log1.component.html',
  styleUrls: ['./log1.component.css']
})
export class Log1Component implements OnInit {
  acno = ""
  pswd = ""
  loginForm = this.fb.group({
  
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
   
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  // registerForm = this.fb.group({
 
  //   acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
   
  //   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  // })
  // userdetails: any = {
  //   1000: { acno: 1000, username: "Alan", password: 1001,balance:1000 },
  //   1001: { acno: 1001, username: "rahul", password: 1002 ,balance:1000 },
  
  //   1002: { acno: 1002, username: "babu", password: 1003, balance: 1000 }
  // }
  
  aim = "Your perfect banking partner"
  account = "Enter your account number"
  // registerForm: any;
  // registerForm: any;
  // fb: any;
  // fb: any;

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  // login(a:any,p:any) {
  //   var acno = a.value;
  //   var pswd = p.value;
  //   var userdetails = this.userdetails;

  //   if (acno in userdetails) {
  //     if (pswd == userdetails[acno]['password'])
  //     { alert("login ok") }
  //     else { alert("invalid password") }
  //   } else { alert("invalid userdetails") }

  
   
      
  // }
  // acnoChange(event: any) {
  //   console.log(event);
  //   this.acno = event.target.value;
  //   console.log(this.acno);
    
  // }
  // pswdChange(event: any) {
  //   console.log(event);
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
    

  // }
  // login() {
  //   // alert("login clicked")
  //   var acno = this.acno;
  //   var pswd = this.pswd;
  //   var userdetails = this.ds.userdetails;


  //   if (acno in userdetails) {
  //     if (pswd == userdetails[acno]['password'])
  //     {
  //       alert("login ok")
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else { alert("invalid password") }
  //   } else { alert("invalid userdetails") }

  
   
      
  // }
  acnoChange(event: any) {
    console.log(event);
    this.acno = event.target.value;
    console.log(this.acno);
    
  }
  pswdChange(event: any) {
    console.log(event);
    this.pswd = event.target.value;
    console.log(this.pswd);
    

  }
  login() {
    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    var userdetails = this.ds.userdetails;
    if (this.loginForm.valid) {
      const result = this.ds.login(acno, pswd)
      if (result) {
        alert('login sucessfull');
        this.router.navigateByUrl('dashboard')
      }
      else { alert("login failed") }
    }
    else {
      alert("invalid form")
    }

  }
}
