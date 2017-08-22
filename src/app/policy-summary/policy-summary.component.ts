import { IPolicy, IPolicySummary, data_policySummary } from '../data-model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-policy-summary',
  templateUrl: './policy-summary.component.html',
  styleUrls: ['./policy-summary.component.scss']
})
export class PolicySummaryComponent implements OnInit {
  // policies$: Observable<IPolicy[]>;
  policySummary: IPolicySummary = data_policySummary;

  constructor() { }

  ngOnInit() {
  }

}
