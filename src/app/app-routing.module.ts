import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Log1Component } from './log1/log1.component';
import { SigninComponent } from './signin/signin.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  { path: '', component: Log1Component },
  
  //dashboaRD
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'signin', component: SigninComponent },
  { path: 'transaction', component: TransactionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
