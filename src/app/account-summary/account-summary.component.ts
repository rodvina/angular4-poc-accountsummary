import { AccountServiceService } from '../account-service.service';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { data_accountSummary, data_accountSummary_Diep, data_accountSummary_Rodney, IAccountSummary } from '../app.common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

// an account summary is used to display more than 1 policy
// this component will consist of a policy summary component
// the policy summary component will consist of 1 to many policy components
@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent implements OnInit {
  accountSummary: IAccountSummary;
  accountSummary$: Observable<IAccountSummary>;
  // customerid$: Observable<string>;
  theCustomerId: string;

  constructor(route: ActivatedRoute, service: AccountServiceService) {
    console.log('constructing account summary...');
    // need to get the account summary for this customer
    // this.accountSummary$ = route.params
    //   .map(p => this.theCustomerId = p['customerId'])
    //   .do(p => service.getAccountSummary(this.theCustomerId))
    //   .share();

    this.accountSummary$ = route.params
      .pluck('customerId')
      .do((id: string) => this.theCustomerId = id)
      // .do((id: string) => {
      //                     console.log('this.customerId: ' + this.theCustomerId)
      //                     service.getAccountSummary(this.theCustomerId).subscribe((data: IAccountSummary) => this.accountSummary = data)
      //                   }
      // )
      .switchMap((id: string) => service.getAccountSummary(id))
      .share();

    
   }

  ngOnInit() {
  }


}
