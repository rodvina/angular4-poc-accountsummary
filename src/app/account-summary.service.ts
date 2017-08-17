import { Response } from '@angular/http';
import { data_accountSummary, data_accountSummary_Diep, data_accountSummary_Rodney, IAccountSummary } from './app.common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountSummaryService {
    accountSummary: IAccountSummary;
    constructor() { }

    getAccountSummary(customerid: string): Observable<IAccountSummary> {
        console.log('customer id: ', customerid);

        if (customerid === 'Diep') {
            this.accountSummary = data_accountSummary_Diep;
        } else if (customerid === 'Rodney') {
            this.accountSummary = data_accountSummary_Rodney;
        } else {
            this.accountSummary = data_accountSummary;
        }

        console.log('service returning: ', this.accountSummary);
        return this.convertToObservable(this.accountSummary);
    }

    /**
     * Convenience method to convert object to Observable
     * Needed when dealing with mock data, will not be needed when using httpClient
     * @param data
     */
    convertToObservable(data: IAccountSummary): Observable<IAccountSummary> {
        const data$: Observable<IAccountSummary> =
                new Observable(o => {
                    o.next(data);
                });

        return data$;



    }
}
