import { data_search_results } from '../data-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: string[] = data_search_results;

  constructor() {

    // use service to make call to return data

  }

  ngOnInit() {
  }

}
