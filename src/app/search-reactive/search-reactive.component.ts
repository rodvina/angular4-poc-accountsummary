import { Address, Hero, data_states } from '../data-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Search } from '../search/search';

@Component({
  selector: 'app-search-reactive',
  templateUrl: './search-reactive.component.html',
  styleUrls: ['./search-reactive.component.scss']
})
export class SearchReactiveComponent implements OnInit {

  policyTypes = ['Auto', 'Home', 'Package'];
  model: Search = new Search('', 'Bob', 'Smith', 'Package');
  submitted = false;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      policyNumber: ['', [Validators.required, Validators.minLength(10)] ],
      policyType: 'Auto',
      firstName: 'Bob',
      lastName: 'Smith'
    });
  }

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
