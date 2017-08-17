import { Response } from '@angular/http';
import { data_accountSummary, data_accountSummary_Diep, data_accountSummary_Rodney, IAccountSummary } from './app.common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountServiceService {
    accountSummary: IAccountSummary;
    constructor() { }

    getAccountSummary(customerid: string): Observable<IAccountSummary> {
        console.log('customer id: ', customerid);
        let accountSummary$: Observable<IAccountSummary>;
        if (customerid === 'Diep') {
          accountSummary$ = new Observable(o => {
              o.next(data_accountSummary_Diep);
          });
        } else if (customerid === 'Rodney') {
          accountSummary$ = new Observable(o => {
              o.next(data_accountSummary_Rodney);
          });
        } else {
          accountSummary$ = new Observable(o => {
              o.next(data_accountSummary);
          });
        }

        accountSummary$
            .subscribe((data: IAccountSummary) => this.accountSummary = data);

        console.log('service returning: ', this.accountSummary);
        return accountSummary$;
    }

}
