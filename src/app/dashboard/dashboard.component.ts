import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  USER=""

  constructor(private ds: DataService) {this.USER=this.ds.currentUser }

  ngOnInit(): void {
  }
  acno = "";
  pswd = "";
  amount = ""

  deposit() {

    var acno = this.acno;
    var pswd = this.pswd;
    var amount = this.amount
    
    const result = this.ds.deposit(acno, pswd, amount)
    if (result) {
      alert(`${amount} is credited...available balance is${result}`)
    }
    // alert("clicked")
  }
  acno1 = "";
  pswd1 = "";
  amount1 = ""
  // withdraw() {
  //   alert("clicked")
  // }
  withdraw() {

    var acno1 = this.acno1;
    var pswd1 = this.pswd1;
    var amount1 = this.amount1
    
    const result1 = this.ds.withdraw(acno1, pswd1, amount1)
    if (result1) {
      alert(`${amount1} is debited...available balance is${result1}`)
    }
    // alert("clicked")
  }

  

}
