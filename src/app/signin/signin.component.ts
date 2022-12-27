import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
   
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  aim = "Your perfect banking partner"

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  
  }
  signin() {
    console.log(this.registerForm);
    // console.log(this.registerForm.get('uname')?.errors);

    
  
    // alert("signin clicked")
    var username = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var password = this.registerForm.value.pswd;
    if (this.registerForm.valid) {
      console.log(this.registerForm.get('uname')?.errors);
      this.ds.signin(acno, username, password)
        .subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('')
        })
    }
    else {
      alert('invalid form')
    }
  }
}
    

//       const result = this.ds.signin(acno, uname, pswd);
//       if (result) {
//         alert('sign in sucessfull')
//         this.router.navigateByUrl('')
//       }
//       else {
//         alert('user already registered');
//         this.router.navigateByUrl('register')
//       }

//     }
//     else {
//       alert("invalid form")
//     }
//   }

// }
