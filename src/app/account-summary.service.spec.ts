/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountSummaryService } from './account-summary.service';

describe('Service: AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountSummaryService]
    });
  });

  it('should ...', inject([AccountSummaryService], (service: AccountSummaryService) => {
    expect(service).toBeTruthy();
  }));
});