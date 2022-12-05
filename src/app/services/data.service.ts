import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser = ""
  currentacno = ""
 

  constructor() {
    this.getdetails();
   }


  savedetails() {
    if (this.userdetails) {
      localStorage.setItem('database', JSON.stringify(this.userdetails))
    }
    if (this.currentUser) { localStorage.setItem('currentUser', JSON.stringify(this.currentUser)) }
    if(this.currentacno){
      localStorage.setItem('currentacno', JSON.stringify(this.currentacno))
    
    }
  }

  getdetails() {
    if (localStorage.getItem('database')) {
      this.userdetails=JSON.parse(localStorage.getItem('database')||"")
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser=JSON.parse(localStorage.getItem('currentUser')||"")
    }
    if (localStorage.getItem('currentacno')) {
      this.currentacno=JSON.parse(localStorage.getItem('currentacno')||"")
    }
  }




  userdetails: any = {
    1000: { acno: 1000, username: "Alan", password: 1001,balance:1000,transaction:[] },
    1001: { acno: 1001, username: "rahul", password: 1002 ,balance:1000,transaction:[]  },
  
    1002: { acno: 1002, username: "babu", password: 1003, balance: 1000,transaction:[]  }
  }

  signin(acno: any, username: any, password: any) {
    let userdetails = this.userdetails
    if (acno in userdetails) {
      return false;

    }
    else {
      userdetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction:[]
      }
      this.savedetails();
      console.log(userdetails);
      return true;
      
    }
  }
  login(acno: any, pswd: any) {
    let userdetails = this.userdetails;
    if (acno in userdetails) {
      if (pswd == userdetails[acno]['password']) {
        this.currentUser = userdetails[acno]['username']
        this.currentacno = acno;
        this.savedetails();
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  deposit(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let userdetails = this.userdetails;
    if (acno in userdetails) {
      if (pswd == userdetails[acno]['password']) {
        userdetails[acno]['balance'] += amount;
        userdetails[acno]['transaction'].push({
          Type: 'Credit',
          Amount:amount
        })
        this.savedetails();
        console.log(userdetails);
        
        return userdetails[acno]['balance']
      }
      else {
        alert("password incorrect");
        return false;

      }
    } else {
      alert("invalid data");
      return false;
    }
  }
  withdraw(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let userdetails = this.userdetails;
    if (acno in userdetails) {
      if (pswd == userdetails[acno]['password']) {
        if (userdetails[acno]['balance'] > amount) {
          userdetails[acno]['balance'] -= amount;
          userdetails[acno]['transaction'].push({
            Type: 'debit',
            Amount:amount
          })
          this.savedetails();
          console.log(userdetails);
          return userdetails[acno]['balance']
        }
        else {
          alert("transaction failed")
          return false;
        }
      }
        else {
          alert("password incorrect");
          return false;

        }
      } else {
        alert("invalid data");
        return false;
      }
  }
  gettransaction(acno: any) {
    return this.userdetails[acno]['transaction']
  }
  }




