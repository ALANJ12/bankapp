import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  uname = ""
  acno = ""
  pswd = ""
  registerForm = this.fb.group({
    acno: [''],
    uname: [''],
    pswd:['']
  })

  constructor( private fb:FormBuilder, private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  
  }
  signin(){console.log(this.registerForm);
  
    // alert("signin clicked")
    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;

    const result = this.ds.signin(acno, uname, pswd);
    if (result) {
      alert('sign in sucessfull')
      this.router.navigateByUrl('')
    }
    else {
      alert('user already registered');
      this.router.navigateByUrl('register')
    }

  }

}
