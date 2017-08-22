import { AccountSummaryService } from './account-summary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PolicySummaryComponent } from './policy-summary/policy-summary.component';
import { PolicyComponent } from './policy/policy.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchReactiveComponent } from './search-reactive/search-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AccountSummaryComponent,
    PolicySummaryComponent,
    PolicyComponent,
    SearchComponent,
    SearchReactiveComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbModule.forRoot()
  ],
  providers: [AccountSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
