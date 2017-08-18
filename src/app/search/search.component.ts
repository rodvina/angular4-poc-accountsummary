import { Component, OnInit } from '@angular/core';

import { Search } from './search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  policyTypes = ['Auto', 'Home', 'Package'];

  model: Search = new Search('', 'Bob', 'Smith', 'Package');

  submitted = false;
 
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted...');
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
