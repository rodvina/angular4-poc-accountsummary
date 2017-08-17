import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppComponent } from './app.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/:customerId', component: AccountSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
