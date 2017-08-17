import { AccountSummaryService } from './account-summary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PolicySummaryComponent } from './policy-summary/policy-summary.component';
import { PolicyComponent } from './policy/policy.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AccountSummaryComponent,
    PolicySummaryComponent,
    PolicyComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AccountSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
