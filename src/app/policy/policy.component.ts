
import { IPolicy, data_policy1 } from '../app.common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  @Input() policy: IPolicy;
  // policy: IPolicy = data_policy1;

  constructor() { }

  ngOnInit() {
  }

}
