import { AccountSummaryService } from './account-summary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PolicySummaryComponent } from './policy-summary/policy-summary.component';
import { PolicyComponent } from './policy/policy.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AccountSummaryComponent,
    PolicySummaryComponent,
    PolicyComponent,
    SearchComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AccountSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
